package com.gablum.gateway2.config;

import io.jsonwebtoken.JwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Slf4j
public class JwtTokenWebFilter implements WebFilter {

    private JwtTokenProvider tokenProvider;

    public JwtTokenWebFilter(JwtTokenProvider provider) {
        this.tokenProvider = provider;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        String token = tokenProvider.resolveToken(request);
        if (token != null) {
            try {
                tokenProvider.validateToken(token);
            } catch (JwtException | IllegalArgumentException e) {
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                throw new CustomException("Invalid JWT token", HttpStatus.UNAUTHORIZED);
            }
        }
        log.warn("jwt auth done");
        log.warn(chain.toString());
        return exchange.getResponse().setComplete();
    }

}