package com.gablum.scheduler.schedules;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SchedulesController {

    @GetMapping("/echo")
    public String getEcho() {
        return "schedules";
    }
}