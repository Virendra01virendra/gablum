package com.gablum.scheduler.proposalschedule.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document("Schedules")
@Setter @Getter @AllArgsConstructor @NoArgsConstructor
public class TimerModel {

    private String proposalId;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss.SSS")
    private Date eventStartDate;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss.SSS")
    private Date eventEndDate;
}
