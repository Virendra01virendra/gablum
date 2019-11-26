package com.gablum.scheduler.proposalschedule;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SchedulesController {

    @GetMapping("/echo")
    public String getEcho() {
        return "schedules";
    }
}