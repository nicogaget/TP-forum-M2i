package com.nico.back.repositories;

import com.nico.back.models.Sujet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SujetRepository extends MongoRepository<Sujet,String> {
}
