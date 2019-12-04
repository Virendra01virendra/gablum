package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import lombok.extern.slf4j.Slf4j;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
@Slf4j
public class SchedulerJob implements Job {
    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
            log.info("-----------------------------Hello Quartz-----------------------------");
    }
}
