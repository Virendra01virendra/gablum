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
import java.util.ArrayList;
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
    public void getUsers() {
        // TODO implement get all users for admin.
    }


    @GetMapping("/menuitems")
    public List<NavLink> getMenuItems(HttpServletRequest request) {
        boolean isBuyer = false;
        boolean isSeller = false;
//        boolean isAdmin = false;
        String token = tokenProvider.resolveToken(request);
        tokenClaims = Jwts.parser().setSigningKey(tokenProvider.getSecretKey()).parseClaimsJws(token).getBody();
        List<String> roles = tokenClaims.get("auth", List.class);
        for(String role: roles) {
            if (role.contains("buyer")) {
                isBuyer = true;
            }
            if (role.contains("seller")) {
                isSeller = true;
            }
//            if (role.contains("admin")) {
//                isAdmin = true;
//            }
        }
        List<NavLink> menuItems = new ArrayList<NavLink>();
        if (isSeller || isBuyer) {
            menuItems.addAll(List.of(
                    new NavLink("Dashboard", "/dashboard", "dashboard"),
                    new NavLink("Calendar", "/calendar", "calendar_today"),
                    new NavLink("Contracts", "/contracts", "book"),
                    new NavLink("Inbox", "/inbox", "email"))
            );
        }

        if(isBuyer) {
            menuItems.add(new NavLink("New Proposal", "/new", "add"));
        }

        if (isSeller) {
            menuItems.add(
                    new NavLink("Browse Proposals", "/browse", "list")
            );
        }

        return menuItems;
    }

    @GetMapping("/profile")
    public User getUserProfileByEmail(HttpServletRequest request) {
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
