package com.gablum.scheduler.proposalschedule.Service;

import com.gablum.scheduler.proposalschedule.Model.TimerModel;
import com.gablum.scheduler.proposalschedule.Repository.SchedulerRepo;
import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Date;
import java.util.List;

@ExtendWith(SpringExtension.class)
class SchedulerServiceTest {

    @Mock
    SchedulerRepo schedulerRepo;

    @InjectMocks
    SchedulerService schedulerService;
    private TimerModel timerModel =new TimerModel();
    private TimerModel timerModel2 = new TimerModel();

    @BeforeEach
    public void setUp(){
        timerModel.setJobId("a");
        timerModel.setEventStartDate(new Date(2019-12-3));
        timerModel.setEventEndDate(new Date(2019-12-4));
        timerModel2.setJobId("b");
        timerModel2.setEventStartDate(new Date(2019-12-3));
        timerModel2.setEventEndDate(new Date(2019-12-4));
        Mockito.when(schedulerRepo.save(new TimerModel("c","a",new Date(2019-12-3), new Date(2019-12-4)))).thenReturn(timerModel);
        Mockito.when(schedulerRepo.findAll()).thenReturn(List.of(timerModel,timerModel2));
        Mockito.when((schedulerRepo.findByJobId("a"))).thenReturn(timerModel);
    }

    @Test
    public void findTimerDetailsByAuctionId() {
        Assertions.assertEquals(schedulerService.findTimerDetailsByAuctionId("a"),timerModel);
    }

    @Test
    public void findAllTimerDetails() {
        Assertions.assertArrayEquals(schedulerService.findAllTimerDetails().toArray(),List.of(timerModel,timerModel2).toArray());
        Assertions.assertEquals(schedulerService.findAllTimerDetails().size(),2);
    }

    @Test
    public void saveSchedulerDetail() throws Exception {
        Assertions.assertEquals(schedulerService.saveSchedulerDetail(new TimerModel("c","a",new Date(2019-12-3), new Date(2019-12-4))),null);
        Assertions.assertEquals(timerModel.getJobId(),"a");
    }
}