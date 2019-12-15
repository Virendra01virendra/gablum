package com.gablum.gateway2;

import com.gablum.gateway2.config.JwtTokenFilterConfigurer;
import com.gablum.gateway2.config.JwtTokenProvider;
import com.gablum.gateway2.config.JwtTokenWebFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.HttpStatusServerEntryPoint;

@SpringBootApplication
public class Gateway2Application {

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	public static void main(String[] args) {
		SpringApplication.run(Gateway2Application.class, args);
	}

	@Bean
	public SecurityWebFilterChain webFilterChain(ServerHttpSecurity http) {
		http.httpBasic().disable();
		http.formLogin().disable();
		http.cors().and().csrf().disable();
		http.headers().frameOptions().disable();
		http.authorizeExchange()
				.pathMatchers("/api/users/signin").permitAll()
				.pathMatchers("/api/users/signup/").permitAll()
				.pathMatchers("/api/auctions/ws/**").permitAll()
				.pathMatchers("/api/**").authenticated()
				.anyExchange().permitAll();
		http.exceptionHandling().authenticationEntryPoint(
				new HttpStatusServerEntryPoint(HttpStatus.UNAUTHORIZED)
		);
		http.addFilterAfter(new JwtTokenWebFilter(jwtTokenProvider), SecurityWebFiltersOrder.LAST);
		return http.build();
	}

}
