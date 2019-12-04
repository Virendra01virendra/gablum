package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;


@Async
public class QuartzJobConfig {
    @Autowired
    TimerModel timerModel;

    private String cronSchedule = "0 0/1 * 1/1 * ? *";

    JobDetail job = JobBuilder.newJob(SchedulerJob.class)
            .withIdentity("Scheduled job", "group1").build();

    Trigger trigger = TriggerBuilder
            .newTrigger()
            .withIdentity("dummyTriggerName", "group1")
            .withSchedule(
                    CronScheduleBuilder.cronSchedule(cronSchedule))
            .build();

    public void executeTimer() throws Exception{
        Scheduler scheduler = new StdSchedulerFactory().getScheduler();
        scheduler.start();
        scheduler.scheduleJob(job, trigger);
    }

//    public String convertIncomingDate
}
