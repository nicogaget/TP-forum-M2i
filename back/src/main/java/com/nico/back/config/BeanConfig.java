package com.nico.back.config;

import com.nico.back.repositories.MessageRepository;
import com.nico.back.repositories.SujetRepository;
import com.nico.back.services.MessageService;
import com.nico.back.services.SujetService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {
    @Bean
    MessageService messageServiceFactory(MessageRepository messageRepository){
        return  new MessageService(messageRepository);
    }

    @Bean
    SujetService sujetServiceFactory(SujetRepository sujetRepository,MessageRepository messageRepository,
                                     MessageService messageService){
        return new SujetService(sujetRepository,messageRepository,messageService);
    }
}
