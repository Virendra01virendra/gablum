package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import com.gablum.scheduler.proposalschedule.rabbit.ScheduleToAuction;
import lombok.extern.slf4j.Slf4j;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class SchedulerJob implements Job {
    public MessageChannel messageChannel;

    public SchedulerJob(ScheduleToAuction schedule) {
    messageChannel = schedule.getChannel();
    }

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        Message<String> msg = MessageBuilder.withPayload("hello auction from Scheduler").build();
        messageChannel.send(msg);
            log.info("-----------------------------Hello Quartz-----------------------------");
    }
}
