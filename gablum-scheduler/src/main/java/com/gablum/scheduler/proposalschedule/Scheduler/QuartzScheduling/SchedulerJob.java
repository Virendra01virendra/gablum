package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import com.gablum.scheduler.proposalschedule.Service.RabbitService;
import com.gablum.scheduler.proposalschedule.rabbit.SchedulerPublisher;
import lombok.extern.slf4j.Slf4j;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
//@RestController
//@RequestMapping
@EnableBinding(SchedulerPublisher.class)
public class SchedulerJob implements Job {
//    @Output("startAuction")
    private MessageChannel messageChannel;

    @Autowired
    private SchedulerPublisher publisher;

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        messageChannel = publisher.getchannel();
//        messageChannel = getMessageChannel;
        Message<String> msg = MessageBuilder.withPayload("hello auction from Scheduler").build();
        this.messageChannel.send(msg);
            log.info("-----------------------------Hello Quartz-----------------------------");
    }
//
//    @GetMapping("/sc")
//    public String getMessageChannel() {
//        return rabbitService.getMessageChannel().toString();
//    }
}
