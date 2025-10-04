package com.example.demo.entity;

import com.example.demo.enums.MessageType;
import lombok.*;
import org.springframework.context.annotation.Bean;

import java.awt.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ChatMessage {

    private String content;
    private String sender;
    private MessageType type;
}
