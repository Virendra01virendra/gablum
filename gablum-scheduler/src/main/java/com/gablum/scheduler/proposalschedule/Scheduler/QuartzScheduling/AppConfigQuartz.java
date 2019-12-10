package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import org.quartz.SchedulerException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

import java.io.IOException;

public class AppConfigQuartz {
    public SchedulerFactoryBean schedulerFactoryBean() throws IOException, SchedulerException
    {
        SchedulerFactoryBean scheduler = new SchedulerFactoryBean();
//        scheduler.setTriggers(jobOneTrigger(), jobTwoTrigger());
//        scheduler.setQuartzProperties(quartzProperties());
//        scheduler.setJobDetails(jobOneDetail(), jobTwoDetail());
            scheduler.setApplicationContextSchedulerContextKey("applicationContext");
        return scheduler;
    }
}
