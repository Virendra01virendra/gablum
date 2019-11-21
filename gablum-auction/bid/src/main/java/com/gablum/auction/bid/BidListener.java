package com.gablum.auction.bid;

import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@EnableBinding(OneBinding.class)
public class BidListener {
    @StreamListener("chn")
    public void hello(String msg) {
        System.out.println(msg);
    }
}

