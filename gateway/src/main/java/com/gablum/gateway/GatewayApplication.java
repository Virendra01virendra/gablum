package com.gablum.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
<<<<<<< HEAD
// import org.springframework.web.bind.annotation.CrossOrigin;
=======
>>>>>>> 63f12f8b44b6d1d1405489126a7f1d7105703c7c

@EnableEurekaClient
@SpringBootApplication
@EnableZuulProxy
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

}
