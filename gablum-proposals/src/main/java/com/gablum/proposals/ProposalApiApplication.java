package com.gablum.proposals;

import com.gablum.proposals.proposal.usersrabbit.Publisher;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.stream.annotation.EnableBinding;

@EnableEurekaClient
@SpringBootApplication
@EnableBinding(Publisher.class)
public class ProposalApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProposalApiApplication.class, args);
	}

}
