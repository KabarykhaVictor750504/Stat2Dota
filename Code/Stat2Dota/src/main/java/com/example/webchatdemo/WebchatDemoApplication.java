package com.example.webchatdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import threads.UpdateThreads;

@SpringBootApplication
public class WebchatDemoApplication {
	public static void main(String[] args) {
		new UpdateThreads();
		SpringApplication.run(WebchatDemoApplication.class, args);
	}
}
