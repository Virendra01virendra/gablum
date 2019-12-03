package com.gablum.scheduler.proposalschedule.Service;

import com.gablum.scheduler.proposalschedule.Scheduler.Task.TimerJob;
import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import com.gablum.scheduler.proposalschedule.Repository.SchedulerRepo;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Timer;

@Service
public class SchedulerService {
 SchedulerRepo schedulerRepo;
 TimerJob timerJob = new TimerJob("Auction Start Event");

 public TimerModel findTimerDetailsByAuctionId(String id){
     return schedulerRepo.findByProposalId(id);
 }

    public List<TimerModel> findAllTimerDetails(){
        return schedulerRepo.findAll();
    }

 public TimerModel saveSchedulerDetail(TimerModel timerModelToBeSaved){
     executeTimer(timerModelToBeSaved.getEventStartDate());
     return schedulerRepo.save(timerModelToBeSaved);
 }

    public void executeTimer(Date eventStartDate) {
        Timer timer = new Timer();
        timer.schedule(timerJob,eventStartDate);
    }
}
