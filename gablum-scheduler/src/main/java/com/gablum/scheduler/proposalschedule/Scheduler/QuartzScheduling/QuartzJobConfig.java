package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import lombok.extern.slf4j.Slf4j;

import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;

@Slf4j
@Async
public class QuartzJobConfig {
    @Autowired
    TimerModel timerModel;
    private int i = 0;
    private String cronSchedule = "0 0/1 * 1/1 * ? *";

    JobKey renewableJobKey = JobKey.jobKey("job"+timerModel.getJobId() ,"my-auction"+timerModel.getJobId());
    JobDetail job = JobBuilder.newJob(SchedulerJob.class)
            .withIdentity(renewableJobKey)
            .storeDurably(true)
            .build();
    TriggerKey renewableTriggerKey = TriggerKey.triggerKey("trigger"+timerModel.getJobId(), "my-auction"+timerModel.getJobId());
    Trigger trigger = TriggerBuilder
            .newTrigger()
            .withIdentity(renewableTriggerKey)
            .forJob(job.getKey())
            .withSchedule(
                    CronScheduleBuilder.cronSchedule(cronSchedule))
            .build();

    public void executeTimer() throws Exception{
        Scheduler scheduler = new StdSchedulerFactory().getScheduler();
        scheduler.start();
        log.info("a------------------" + job.getKey());
        if (scheduler.checkExists(job.getKey())){
            scheduler.deleteJob(job.getKey());
        }
        scheduler.scheduleJob(job,trigger);
    }

//    public String convertIncomingDate
}
