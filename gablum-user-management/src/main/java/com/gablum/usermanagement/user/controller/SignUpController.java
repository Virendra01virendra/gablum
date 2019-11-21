package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.exception.EmailExistsException;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


public class SignUpController {
    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @CrossOrigin("*")
    @PostMapping("/signup")
    @ResponseBody
    public User newRegistration(User user1) throws EmailExistsException {
        if (emailExist(user1.getEmail())) {
            throw new EmailExistsException(
                    "There is an account with that email address:" + user1.getEmail());
        }
        User user = new User();
        user.setName(user.getName());
        user.setEmail(user.getEmail());
        user.setAddress(user.getAddress());
        user.setCompanyName(user.getCompanyName());
        user.setUserName(user.getUserName());
        user.setBusinessLicense(user.getBusinessLicense());
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    private boolean emailExist(String email) {
        return userRepository.findUserByEmail(email) != null;
    }
}