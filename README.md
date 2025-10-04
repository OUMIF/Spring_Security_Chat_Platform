# Spring Boot WebSocket Chat Application

Real-time chat application built with Spring Boot, WebSocket (STOMP/SockJS), and Spring Security with JWT authentication.

## Features

- Real-time messaging using WebSocket
- User authentication with JWT
- Join/leave notifications
- Multiple simultaneous users support
- SockJS fallback for older browsers

## Tech Stack

**Backend:**
- Spring Boot
- Spring Security (JWT)
- Spring WebSocket
- STOMP Protocol
- SockJS

**Frontend:**
- HTML/CSS/JavaScript
- SockJS Client
- STOMP.js

## Quick Start

1. Clone the repository
```bash
git clone <your-repo-url>
cd chat-application
```

2. Run the application
```bash
mvn spring-boot:run
```

3. Open your browser
```
http://localhost:8080/index.html
```

## WebSocket Endpoints

- **Connection**: `/ws` (with SockJS) or `/ws-raw` (raw WebSocket)
- **Send Message**: `/app/chat.sendMessage`
- **Join Chat**: `/app/chat.addUser`
- **Subscribe**: `/topic/public`

## Testing with Postman

Connect to `ws://localhost:8080/ws-raw` and send:

```
SUBSCRIBE
id:sub-0
destination:/topic/public


```

```
SEND
destination:/app/chat.sendMessage
content-type:application/json

{"sender":"User","content":"Hello!","type":"CHAT"}


```

## Security

- JWT authentication for REST endpoints
- Public access to WebSocket endpoints
- CORS configured for allowed origins
