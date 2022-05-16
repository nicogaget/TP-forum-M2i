package com.nico.back.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
public class Sujet {
    @Id
    private String id;
    private String title;
    private int likes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;



}
