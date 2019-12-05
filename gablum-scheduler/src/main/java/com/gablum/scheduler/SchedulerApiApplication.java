package com.gablum.scheduler;


import com.gablum.scheduler.proposalschedule.Scheduler.QuartzScheduling.QuartzJobConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;


@EnableEurekaClient
@SpringBootApplication
@EnableScheduling
@EnableAsync
public class SchedulerApiApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(SchedulerApiApplication.class, args);
		QuartzJobConfig j = new QuartzJobConfig();
		j.executeTimer();
	}

}