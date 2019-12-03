package com.gablum.proposals;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ProposalApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProposalApiApplication.class, args);
	}

}
