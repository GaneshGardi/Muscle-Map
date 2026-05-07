package com.example.muscle_map.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI muscleMapOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("Muscle Map API")
                        .version("1.0.0")
                        .description("API documentation for Muscle Map application. This includes user management and workout plan management APIs.")
                        );
    }
}