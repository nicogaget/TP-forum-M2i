package com.nico.back.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sujet {
    @Id
    private String id;
    @Size(max = 35)
    @NotBlank
    @NotNull
    private String title;
    private int likes;
    private List<Message> messages;
    private LocalDateTime createdAt;
    private LocalDateTime updateAt;
}
