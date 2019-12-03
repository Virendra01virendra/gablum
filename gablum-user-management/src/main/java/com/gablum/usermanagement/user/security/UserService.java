package com.gablum.usermanagement.user.security;

import com.gablum.usermanagement.user.model.MongoUserDetails;
import com.gablum.usermanagement.user.model.Role;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(email);
//        if (user == null || user.getRole() == null || user.getRole().isEmpty()) {
//            throw new CustomException("Invalid username or password.", HttpStatus.UNAUTHORIZED);
//        }
        String[] authorities = new String[user.getRole().size()];
        int count = 0;
        for (Role role : user.getRole()) {
//            //NOTE: normally we dont need to add "ROLE_" prefix. Spring does automatically for us.
//            //Since we are using custom token using JWT we should add ROLE_ prefix
            authorities[count] = "ROLE_" + role.getRole();
            count++;
        }
        MongoUserDetails userDetails = new MongoUserDetails(user.getEmail(), user.getPassword(), user.getActive(),
                user.isLocked(), user.isExpired(), user.isEnabled(), authorities);
        return userDetails;
    }

//    public User getUserById(UUID userId) {
//        return userRepository.getUserByUserId(userId);
//    }

    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    //edit profile
    public User editUserDetail(User modifiedUser, String email) {
        User editedUser = getUserByEmail(email);
        editedUser.setAddress(modifiedUser.getAddress());
        editedUser.setCompanyName(modifiedUser.getCompanyName());
        editedUser.setPhone(modifiedUser.getPhone());
        return userRepository.save(editedUser);
    }
}
