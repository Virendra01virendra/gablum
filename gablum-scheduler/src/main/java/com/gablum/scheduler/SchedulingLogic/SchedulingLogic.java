package com.gablum.scheduler.SchedulingLogic;

import org.springframework.scheduling.annotation.Scheduled;

import java.util.Date;

public class SchedulingLogic {

    @Scheduled(cron = "")
    public Boolean startProposal(Date proposalStart, Date proposalEnd){

    }
}
