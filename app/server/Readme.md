# [Ларичев Антон] NestJS - с нуля, современный backend на TypeScript и Node JS [2021, RUS]

<br/>

    $ npm install -g @nestjs/cli
    $ npm install -g typescript

<br/>

    $ cd app/server
    $ nest new .

    $ tsc --init

<br/>

## 04 Модули, контроллеры и провайдеры

    $ nest generate module auth
    $ nest generate module top-page
    $ nest generate module product
    $ nest generate module review

<br/>

### 004 Создание моделей

    $ nest generate class product/product.model --no-spec
    $ nest generate class auth/auth.model --no-spec
    $ nest generate class review/review.model --no-spec
    $ nest generate class top-page/top-page.model --no-spec

<br/>

### 005 Введение в контроллеры

<br/>

### 006 Создание контроллеров

    $ nest generate controller auth --no-spec
    $ nest generate controller product --no-spec
    $ nest generate controller review --no-spec
    $ nest generate controller top-page --no-spec

<br/>

### 007 Введение в провайдеры

<br/>

## 05 Работа с базой данных

<br/>

### 001 Работа с переменными окружения

    $ npm install @nestjs/config

<br/>

### 002 Подготовка окружения

    $ docker-compose up

<br/>

### 003 Подключение Mongo

    $ yarn add mongoose @typegoose/typegoose nestjs-typegoose

    $ yarn add -D @types/mongoose

    $ npm start

<br/>

### 004 Подключение моделей

<br/>

![Application](/img/pic-course01-p01.png?raw=true)

<br/>

### 005 Сервис отзывов

    $ nest generate service review --no-spec

<br/>

### 006 Упражнение 2 - Удаление отзывов по продукту

<br/>

## 06 Тесты

<br/>

### 001 Типы тестирования

<br/>

### 002 Тесты отзывов

    $ npm run test:e2e

<br/>

### 003 Unit тесты

    $ npm run test

<br/>

## 07 Валидация данных

<br/>

### 001 Exception filters и pipes

<br/>

### 002 Реализация ValidationPipe

    $ yarn add class-transformer class-validator

<br/>

## 08 Отладка приложений

<br/>

### 001 Debug в VSCode

<br/>

### 002 Анализ памяти

autocannon

<br/>

### 003 Анализ производительности

clinicjs.org

<br/>

## 09 Авторизация

<br/>

### 001 Регистрация пользователя

    $ nest generate service auth --no-spec

    $ yarn add bcryptjs
    $ yarn add -D types/bcryptjs

<br/>

```
// CREATE USER
$ curl \
    --data '{
        "login": "marley@example.com",
        "password": "pass123"
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/api/auth/register \
    | python -m json.tool
```

<br/>

**returns:**

```
{
    "__v": 0,
    "_id": "60c4a539858699439e4a4fd4",
    "createdAt": "2021-06-12T12:14:49.728Z",
    "email": "marley",
    "passwordHash": "$2a$10$X0/pNtytrb//xo0tGzPIK.o.UnAO80mJ604T1XSgLC/L9MJaBvPg.",
    "updatedAt": "2021-06-12T12:14:49.728Z"
}
```

<br/>

### 002 Как работает JWT

<br/>

### 003 Авторизация и генерация JWT

    $ yarn add @nestjs/jwt

<br/>

```
// LOGIN USER
$ curl \
    --data '{
        "login": "marley@example.com",
        "password": "pass123"
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/api/auth/login \
    | python -m json.tool
```

<br/>

**returns:**

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmxleSIsImlhdCI6MTYyMzUwODk4NH0.UnuFUHMWq9xI1BaFEtJxsMIlB2-KaxsgeOmxwumjDS8"
}

```

<br/>

### 004 JWT стратегия и Guard

    $ yarn add @nestjs/passport passport passport-jwt

<br/>

    $ yarn add -D @types/passport-jwt

<br/>

```
$ export TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmxleSIsImlhdCI6MTYyMzUxMTkwMn0.TQBqDjbN_acjkgz9Lmk89TXCJUyJcKdlNGDJojFRci0
```

<br/>

```
// GET REVIEW BY PRODUCT ID
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    --request GET http://localhost:3000/api/review/byProduct/123456789076 \
    | python -m json.tool
```

<br/>

### 005 Декоратор для получения пользователя

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
