package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.model.SignupResult;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class SignUpController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(value = "/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<SignupResult> newRegistration(@RequestBody User user)  {
        if (emailExist(user.getEmail())) {
//            throw new EmailExistsException(
//                    "There is an account with that email address:" + user.getEmail());
            return new ResponseEntity<SignupResult>(
                    new SignupResult("There is an account with that email address", false), HttpStatus.NOT_ACCEPTABLE);
        }

        user.setName(user.getName());
        // FIXME: delete the admin role if the request came
//        user.setRole(user.getRole().);
        user.setEmail(user.getEmail());
        user.setAddress(user.getAddress());
        user.setCompanyName(user.getCompanyName());
        user.setUserName(user.getUserName()
        );
        user.setBusinessLicense(user.getBusinessLicense());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return new ResponseEntity<SignupResult>(new SignupResult("Registered", true), HttpStatus.CREATED );
    }

    private boolean emailExist(String email) {
        return userRepository.findUserByEmail(email) != null;
    }
}