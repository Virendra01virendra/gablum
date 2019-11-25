package com.gablum.scheduler.proposalschedule;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "ProposalScheduler")
@Setter @Getter @AllArgsConstructor @ToString
public class ProposalScheduleModel {

    @Id
    private String proposerUserName;
    private Date proposalStartDate;
    private Date proposalEndDate;

}

