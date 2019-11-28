package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.model.NavLink;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.security.JwtTokenProvider;
import com.gablum.usermanagement.user.services.UserManagementService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequestMapping
@RestController
public class UserController {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserManagementService managementService;

    @GetMapping
    public String getUsers() {
        return "user: yay";
    }

    @GetMapping("/echo") 
    public String getEcho() {
        return "users";
    }

    @GetMapping("/menuitems")
    List<NavLink> getMenuItems(@RequestHeader("Authorization") String token) {
        // FIXME: don't return hardcoded list

        return List.of(
                new NavLink("Dashboard", "/dashboard", "dashboard"),
                new NavLink("About Us", "#about", "device_hub"),
                new NavLink("Contact", "#contact", "contact_support")
        );
    }

    @GetMapping("/profile")
    private User getUserProfile(HttpServletRequest request) {
        String token = tokenProvider.resolveToken(request);
        Claims tokenClaims = Jwts.parser().setSigningKey(tokenProvider.getSecretKey()).parseClaimsJws(token).getBody();
        User foundUser = managementService.getUser(tokenClaims.get("sub", String.class));
        foundUser.setPassword(null);
        return foundUser;
    }

    @PatchMapping("/profile")
    private User editUserProfile(@RequestBody User user, HttpServletRequest request) {
        String token = tokenProvider.resolveToken(request);
        Claims tokenClaims = Jwts.parser().setSigningKey(tokenProvider.getSecretKey()).parseClaimsJws(token).getBody();
        return new User();
    }

}
