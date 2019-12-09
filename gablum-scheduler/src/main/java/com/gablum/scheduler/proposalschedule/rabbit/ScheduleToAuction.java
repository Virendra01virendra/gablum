package com.gablum.scheduler.proposalschedule.rabbit;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface ScheduleToAuction {
    @Output("startAuction")
    MessageChannel getChannel();
}
