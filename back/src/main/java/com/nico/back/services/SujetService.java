package com.nico.back.services;

import com.nico.back.models.Message;
import com.nico.back.models.Sujet;
import com.nico.back.repositories.MessageRepository;
import com.nico.back.repositories.SujetRepository;

import java.time.LocalDateTime;
import java.util.List;

public class SujetService {

    private final SujetRepository sujetRepository;
    private final MessageRepository messageRepository;
    private MessageService messageService;


    public SujetService(SujetRepository sujetRepository,MessageRepository messageRepository, MessageService messageService) {
        this.sujetRepository = sujetRepository;
        this.messageRepository =messageRepository;
        this.messageService=messageService;
    }


    public List<Sujet> findAll() {

        return this.sujetRepository.findAll();
    }

    public Sujet findById(String id) {
        return this.sujetRepository.findById(id).get();
    }


    public Sujet create(Sujet sujet) {
        sujet.setCreatedAt(LocalDateTime.now());
        sujet.setUpdatedAt(LocalDateTime.now());
        return this.sujetRepository.save(sujet);
    }


    public Sujet update(Sujet sujet) {

        sujet.setUpdatedAt(LocalDateTime.now());
        return this.sujetRepository.save(sujet);
    }


    public void deleteById(String id) {
        this.sujetRepository.deleteById(id);
    }

    public void like(String id){
        Sujet sujet = this.sujetRepository.findById(id).get();
        sujet.like();
        this.sujetRepository.save(sujet);
    }

    public void unlike(String id){
        Sujet sujet = this.sujetRepository.findById(id).get();
        sujet.unlike();
        this.sujetRepository.save(sujet);
    }

    public Sujet addMessage(String id, Message message){
        Sujet sujet = this.sujetRepository.findById(id).get();
        message =this.messageService.create(message);
        sujet.addMessage(message);
        return this.sujetRepository.save(sujet);

    }
}
