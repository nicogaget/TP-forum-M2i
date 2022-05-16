package com.nico.back.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    private String id;
    private String content;
    private int likes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
