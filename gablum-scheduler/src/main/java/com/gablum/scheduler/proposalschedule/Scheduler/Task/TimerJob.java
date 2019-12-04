package com.gablum.scheduler.proposalschedule.Scheduler.Task;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.support.CronSequenceGenerator;

import java.util.Date;
import java.util.TimerTask;

@Slf4j
public class TimerJob extends TimerTask {

    private String taskName;
//    private String cronExpression = "";
//    private String someExpression= new CronSequenceGenerator(cronExpression);
    public TimerJob(String taskName) {
        this.taskName = taskName;
    }

    @Override
//    @Scheduled(cron = "")
    public void run() {
        log.info(Thread.currentThread().getName()+" xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" +taskName+ " event has been triggered at " +new Date());

            try{
                String automaticApiCall = "curl -X GET https://postman-echo.com/get?foo1=bar1&foo2=bar2";
                Process process = Runtime.getRuntime().exec(automaticApiCall);
                process.getInputStream();
                process.destroy();
            } catch (Exception e){
                e.printStackTrace();
            }

    }
}
