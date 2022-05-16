package com.nico.back.controllers;

import com.nico.back.models.Message;
import com.nico.back.models.Sujet;
import com.nico.back.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("messages")
public class MessageController {
    @Autowired
    private MessageService service;

    @GetMapping
    public List<Message> findAll() {
        return  this.service.findAll();
    }

    @GetMapping("{id}")
    public Message findById(@PathVariable String id) {
        return this.service.findById(id);
    }

    @PostMapping
    public Message create(@RequestBody Message message) {
        return (Message) this.service.create(message);
    }

    @PutMapping("{id}")
    public Message update(@RequestBody Message message) {
        return this.service.update(message);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        this.service.deleteById(id);
    }

}
