package com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling;

import com.gablum.scheduler.proposalschedule.Controller.SchedulesController;
import com.gablum.scheduler.proposalschedule.rabbit.SchedulerPublisher;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.SchedulerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.context.ApplicationContext;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
//@RequestMapping
@NoArgsConstructor
//@EnableBinding(SchedulerPublisher.class)
public class SchedulerJob implements Job {
//    @Output("startAuction")
//    private MessageChannel messageChannel;
//
//    @Autowired
//    public SchedulerJob(SchedulerPublisher publisher) {
//        messageChannel = publisher.getchannel();
//    }
//
    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException, NullPointerException {
        try {
            ApplicationContext applicationContext = (ApplicationContext) jobExecutionContext.getScheduler().getContext().get(SchedulerPublisher.class);
//            messageChannel = applicationContext.getBean(SchedulerPublisher.class).getchannel();
            MessageChannel messageChannel = SchedulesController.messageChannel;
            Message<String> msg = MessageBuilder.withPayload("hello auction from Scheduler").build();
            messageChannel.send(msg);
            log.info("-----------------------------Hello Quartz-----------------------------");
        } catch (SchedulerException e) {
            e.printStackTrace();
        }

    }

//    @Override
//    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
//        try {
//            ApplicationContext applicationContext = (ApplicationContext) jobExecutionContext.getScheduler().getContext().get(SchedulerPublisher.class);
//                messageChannel = applicationContext.getBean(SchedulerPublisher.class).getchannel();
//            Message<String> msg = MessageBuilder.withPayload("hello auction from Scheduler").build();
//            this.messageChannel.send(msg);
//            log.info("-----------------------------Hello Quartz-----------------------------");
//        } catch (SchedulerException e) {
//            e.printStackTrace();
//        }
//    }


//
//    @GetMapping("/sc")
//    public String getMessageChannel() {
//        return rabbitService.getMessageChannel().toString();
//    }
}
