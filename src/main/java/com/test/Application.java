package com.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication()
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

	public static void main(String[] args) {
		System.out.println("\r\n\r\n-----------------------------------\r\n\r\nStarting test \r\nGenerated by\r\n\r\n   _____ _          __  __      _     _           \r\n  / ____| |        / _|/ _|    | |   | |          \r\n | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __ \r\n  \\___ \\| |/ / _` |  _|  _/ _ \\| |/ _` |/ _ \\ '__|\r\n  ____) |   < (_| | | | || (_) | | (_| |  __/ |   \r\n |_____/|_|\\_\\__,_|_| |_| \\___/|_|\\__,_|\\___|_|   \r\n\r\nFor more documentation please visit https://skaffolder.com/#/documentation\r\n\r\n-----------------------------------\r\n\r\n");

		SpringApplication.run(Application.class, args);
	}
	
	@Bean
	public CorsFilter corsFilter() {
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    CorsConfiguration config = new CorsConfiguration();
	    config.setAllowCredentials(true); 
	    config.addAllowedOrigin("http://localhost:3000");
	    config.addAllowedHeader("*");
	    config.addAllowedMethod("GET");
	    config.addAllowedMethod("POST");
	    config.addAllowedMethod("DELETE");
	    source.registerCorsConfiguration("/**", config);
	    return new CorsFilter(source);
	}
}
