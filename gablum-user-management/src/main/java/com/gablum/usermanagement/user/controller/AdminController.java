package com.gablum.usermanagement.user.controller;


import com.gablum.usermanagement.user.model.Counts;
import com.gablum.usermanagement.user.services.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/")
public class AdminController {

    @Autowired
    private UserManagementService managementService;

    @GetMapping("/count")
    public Counts getUserCounts(HttpServletRequest request) {
        Counts userCount = new Counts();
        userCount.setCount(managementService.getUserCount());
        return userCount;
    }
}
