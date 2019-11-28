package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.model.NavLink;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.security.JwtTokenProvider;
import com.gablum.usermanagement.user.services.UserManagementService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
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

    private Claims tokenClaims;

    @GetMapping
    public String getUsers() {
        return "user: yay";
    }

    @GetMapping("/echo") 
    public String getEcho() {
        return "users";
    }

    @GetMapping("/menuitems")
    public List<NavLink> getMenuItems(@RequestHeader("Authorization") String token) {
        // FIXME: don't return hardcoded list

        return List.of(
                new NavLink("Dashboard", "/dashboard", "dashboard"),
                new NavLink("About Us", "#about", "device_hub"),
                new NavLink("Contact", "#contact", "contact_support")
        );
    }

    @GetMapping("/profile")
    public User getUserProfile(HttpServletRequest request) {
        String token = tokenProvider.resolveToken(request);
        tokenClaims = Jwts.parser().setSigningKey(tokenProvider.getSecretKey()).parseClaimsJws(token).getBody();
        String email = tokenClaims.get("sub", String.class);
        User foundUser = managementService.getUser(email);
        foundUser.setPassword(null);
        return foundUser;
    }

    @PatchMapping("/profile")
    public User editUserProfile(@RequestBody User user, HttpServletRequest request) {
        String token = tokenProvider.resolveToken(request);
        tokenClaims = Jwts.parser().setSigningKey(tokenProvider.getSecretKey()).parseClaimsJws(token).getBody();
        return user;
    }

}
