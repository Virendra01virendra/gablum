package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.model.NavLink;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping
@RestController
public class UserController {

    @GetMapping
    public String getUsers() {
        return "user: yay";
    }

    @GetMapping("/echo") 
    public String getEcho() {
        return "users";
    }

    @GetMapping("/getMenuItems")
    List<NavLink> getMenuItems(@RequestHeader("Authorization") String token) {
        // FIXME: don't return hardcoded list

        return List.of(
                new NavLink("Dashboard", "/dashboard", "dashboard"),
                new NavLink("About Us", "#about", "device_hub"),
                new NavLink("Contact", "#contact", "contact_support")
        );
    }
}
