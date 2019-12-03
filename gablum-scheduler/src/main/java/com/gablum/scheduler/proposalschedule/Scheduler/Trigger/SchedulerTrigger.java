package com.gablum.scheduler.proposalschedule.Scheduler.Trigger;

import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.Trigger;
import org.springframework.scheduling.TriggerContext;

import java.util.Date;
@Slf4j
public class SchedulerTrigger implements Trigger {

    private TimerModel model;
    private Date eventStartDate =model.getEventStartDate();
    private Date eventEndDate = model.getEventEndDate();
    private Date currentSystemDate = new Date();

    @Override
    public Date nextExecutionTime(TriggerContext triggerContext) {
        if (currentSystemDate.getTime()<eventStartDate.getTime()){
            log.info("The event is yet to begin");
            return null;
        }else if (currentSystemDate.getTime() >= eventStartDate.getTime() && currentSystemDate.getTime() < eventEndDate.getTime()){
            log.info("The event has started and appropriate Api call has been made");
            return eventStartDate;
        } else{
            log.info("The event has ended");
            return null;
        }
    }

}
