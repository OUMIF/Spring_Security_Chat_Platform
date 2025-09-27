package com.example.demo.controller.chat;

import com.example.demo.entity.ChatMessage;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    public ChatMessage sendMessage(
         @Payload ChatMessage   // le vrai contenu que tu veux envoyer = payload
    )

}
