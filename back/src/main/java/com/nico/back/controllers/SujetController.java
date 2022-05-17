package com.nico.back.controllers;

import com.nico.back.models.Message;
import com.nico.back.models.Sujet;
import com.nico.back.services.SujetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sujets")
public class SujetController {
    @Autowired
    private SujetService service;

    @GetMapping
    public List<Sujet> findAll() {
        return  this.service.findAll();
    }
    @GetMapping("{id}")
    public Sujet findById(@PathVariable String id) {
        return this.service.findById(id);
    }

    @PostMapping
    public Sujet create(@RequestBody Sujet sujet) {
        return this.service.create(sujet);
    }

    @PutMapping("{id}")
    public Sujet update(@RequestBody Sujet sujet) {

        return this.service.update(sujet);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        this.service.deleteById(id);
    }

    @GetMapping("{id}/like")
    public void likeSujet(@PathVariable String id){
        this.service.like(id);
    }

    @GetMapping("{id}/unlike")
    public void unlikeSujet(@PathVariable String id){
        this.service.unlike(id);
    }


    @PostMapping("{id}/messages")
    public Sujet addMessage(@RequestBody Message message, @PathVariable String id){

      return this.service.addMessage(id,message);
    }

}
