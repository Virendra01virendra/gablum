package com.gablum.scheduler.auctionschedule;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
//import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

//@Component
@Getter @Setter @AllArgsConstructor @ToString
public class AuctionModel {

    private UUID scheduleId;
    private Date auctionStartDate;
    private Date auctionCloseDate;
//
//    public void setScheduleId(){
//        this.scheduleId = UUID.randomUUID();
//    }

}
