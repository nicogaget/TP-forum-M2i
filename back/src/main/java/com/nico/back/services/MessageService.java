package com.nico.back.services;

import com.nico.back.models.Message;
import com.nico.back.repositories.MessageRepository;

import java.time.LocalDateTime;
import java.util.List;

public class MessageService {

    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }


    public List<Message> findAll() {

        return this.messageRepository.findAll();
    }


    public Message findById(String id) {
        return this.messageRepository.findById(id).get();
    }


    public Message create(Message message) {
        message.setCreatedAt(LocalDateTime.now());
        message.setUpdatedAt(LocalDateTime.now());
        return this.messageRepository.save(message);
    }


    public Message update(Message message) {
        return this.messageRepository.save(message);
    }

    public void deleteById(String id) {
        this.messageRepository.deleteById(id);
    }

    public void like(String id){
        Message message = this.messageRepository.findById(id).get();
        //message.setLikes(message.getLikes()+1);
        this.messageRepository.save(message);


    }
}
