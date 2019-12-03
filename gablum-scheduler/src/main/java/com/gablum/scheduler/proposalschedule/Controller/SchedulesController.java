package com.gablum.scheduler.proposalschedule.Controller;

import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import com.gablum.scheduler.proposalschedule.Service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SchedulesController {
    @Autowired
    SchedulerService schedulerService;

    @GetMapping("/echo")
    public String getEcho() {
        return "schedules";
    }

    @PostMapping("/proposaldetails")
    public TimerModel saveSchedules(@RequestBody TimerModel timerModel){
        return schedulerService.saveSchedulerDetail(timerModel);
    }

    @GetMapping("/proposaldetails")
    public List<TimerModel> getSchedules(){
        return schedulerService.findAllTimerDetails();
    }
}

