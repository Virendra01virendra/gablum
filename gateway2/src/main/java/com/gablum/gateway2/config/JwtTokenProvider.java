package com.gablum.gateway2.config;

//import com.gablum.gateway2.jwt.JwtTokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpCookie;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;


@Slf4j
@Component
public class JwtTokenProvider {
    private static final String AUTH="auth";
    private static final String AUTHORIZATION="Authorization";
    @Value("${spring.security.secret}")
    private String secretKey;
    private long validityInMilliseconds = 3600000; // 1h


    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = null;
        if (req.getRequestURI().contains("/signin")) {
            return null;
        }
        try {
            Cookie[] cookies = req.getCookies();
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(AUTHORIZATION)) {
                    bearerToken = cookie.getValue();
                }
            }
        }
        catch (Exception ex) {
            return null;
        }
        if (bearerToken != null ) {
            return bearerToken;
        }
        return null;
    }

    public String resolveToken(ServerHttpRequest req) {
        String bearerToken = null;

        if (req.getURI().getPath().contains("/signin")) {
            return null;
        }
        try {
            HttpCookie cookie = req.getCookies().getFirst(AUTHORIZATION);
            log.warn(cookie.getValue());
            if (cookie != null) {
                bearerToken = cookie.getValue();
            }
//            for (Cookie cookie : cookies) {
//                if (cookie.getName().equals(AUTHORIZATION)) {
//                    bearerToken = cookie.getValue();
//                }
//            }
        }
        catch (Exception ex) {
            return null;
        }
        if (bearerToken != null ) {
            return bearerToken;
        }
        return null;
    }

    public boolean validateToken(String token) throws JwtException,IllegalArgumentException{
        log.warn(secretKey);
        Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
        return true;
    }
    public boolean isTokenPresentInDB (String token) {
        return true;
    }
}
