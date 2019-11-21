package com.gablum.usermanagement.user.security;

import com.gablum.usermanagement.user.exception.EmailExistsException;
import com.gablum.usermanagement.user.model.MongoUserDetails;
import com.gablum.usermanagement.user.model.Role;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    private boolean emailExists(final String email) {
        return userRepository.findUserByEmail(email) != null;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(email);
//        if (user == null || user.getRole() == null || user.getRole().isEmpty()) {
//            throw new CustomException("Invalid username or password.", HttpStatus.UNAUTHORIZED);
//        }
        String [] authorities = new String[user.getRole().size()];
        int count=0;
        for (Role role : user.getRole()) {
//            //NOTE: normally we dont need to add "ROLE_" prefix. Spring does automatically for us.
//            //Since we are using custom token using JWT we should add ROLE_ prefix
            authorities[count] = "ROLE_"+role.getRole();
            count++;
        }
        MongoUserDetails userDetails = new MongoUserDetails(user.getEmail(),user.getPassword(),user.getActive(),
                user.isLocked(), user.isExpired(),user.isEnabled(),authorities);
        System.out.println("ffff\n\n\n\n\n");
        System.out.println(userDetails);
        return userDetails;
    }
}
