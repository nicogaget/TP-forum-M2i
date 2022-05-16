package com.nico.back.services;

import com.nico.back.models.Message;
import com.nico.back.models.Sujet;
import com.nico.back.repositories.SujetRepository;

import java.util.List;

public class SujetService {

    private final SujetRepository sujetRepository;


    public SujetService(SujetRepository sujetRepository) {
        this.sujetRepository = sujetRepository;
    }


    public List<Sujet> findAll() {

        return this.sujetRepository.findAll();
    }

    public Sujet findById(String id) {
        return this.sujetRepository.findById(id).get();
    }


    public Sujet create(Sujet entity) {
        return this.sujetRepository.save(entity);
    }


    public Sujet update(Sujet entity) {
        return this.sujetRepository.save(entity);
    }


    public void deleteById(String id) {
        this.sujetRepository.deleteById(id);
    }

    public void like(String id){
        Sujet sujet = this.sujetRepository.findById(id).get();
        sujet.setLikes(sujet.getLikes()+1);
        this.sujetRepository.save(sujet);
    }
}
