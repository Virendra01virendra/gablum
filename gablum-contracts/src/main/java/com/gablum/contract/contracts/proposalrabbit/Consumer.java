package com.gablum.contract.contracts.proposalrabbit;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@Slf4j
@EnableBinding(ConsumerBinder.class)
public class Consumer {

    @StreamListener("proposalToUser")
    public void hello(String msg) {
        log.info("laksjdlkjaslkdj------->>>>> "+msg);
    }
}
