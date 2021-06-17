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

### 006 Тесты с авторизацией

```
// CREATE USER
login: test@example.com
pass: testpass123
```

    $ npm run test:e2e

<br/>

### 007 Упражнение 3 - Тесты логина

    $ npm run test:e2e

<br/>

## 10 Продвинутые темы

<br/>

### 001 Агрегации в Mongo

    $ nest generate service product --no-spec

```
// CREATE PRODUCT
$ curl \
    --data '{
        "image": "1.png",
        "title": "Мой продукт",
        "price": 100,
        "oldPrice": 120,
        "credit": 10,
        "description": "Описание продукта",
        "advantages": "Преимущества продукта",
        "disAdvantages": "Недостатки продукта",
        "categories": ["test"],
        "tags": ["тег1"],
        "characteristics": [{
            "name": "Характеристика 1",
            "value": "1"
        }, {
            "name": "Характеристика 12",
            "value": "2"
        }]
    }' \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    --request POST http://localhost:3000/api/product/create \
    | python -m json.tool
```

<br/>

```
// UPDATE PRODUCT
$ curl \
    --data '{
        "image": "2.png",
        "title": "Мой продукт",
        "price": 100,
        "oldPrice": 120,
        "credit": 10,
        "description": "Описание продукта",
        "advantages": "Преимущества продукта",
        "disAdvantages": "Недостатки продукта",
        "categories": ["test"],
        "tags": ["тег1"],
        "characteristics": [{
            "name": "Характеристика 1",
            "value": "1"
        }, {
            "name": "Характеристика 12",
            "value": "2"
        }]
    }' \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    --request PATCH http://localhost:3000/api/product/60c720d20c8e6f9e29b87067 \
    | python -m json.tool
```

<br/>

```
// DELETE PRODUCT
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    --request DELETE http://localhost:3000/api/product/60c720d20c8e6f9e29b87067
```

<br/>

```
// ADD REVIEW TO PRODUCT
$ curl \
    --data '{
        "name": "Тест 2",
        "title": "Заголовок",
        "description": "Тестовое описание",
        "rating": 4,
        "productId": "60c7219c0c8e6f9e29b87068"

    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/api/review/create \
    | python -m json.tool
```

<br/>

```
// FIND PRODUCT BY CATEGORY
$ curl \
    --data '{
        "category": "test",
        "limit": 5
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/api/product/find \
    | python -m json.tool
```

<br/>

### 002 Пишем свой Pipe

```
// UPDATE PRODUCT WITH WRONG ID
```

**returns:**

```
{
    "error": "Bad Request",
    "message": "[App] \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 Id",
    "statusCode": 400
}
```

<br/>

### 003 Функции в Mongo 4.4

```
// FIND PRODUCT BY CATEGORY
```

<br/>

### 004 Упражнение 4 - Создание сервиса страниц

<br/>

### 005 Сервис страниц

    $ nest generate service top-page --no-spec

```
// CREATE PAGE
$ curl \
    --data '{
        "firstCategory": 1,
        "secondCategory": "Разработка",
        "alias" : "typescript",
        "title": "Курсы по TypeScript",
        "category": "typescript",
        "hh": {
            "count": 1000,
            "juniorSalary": 80000,
            "middleSalary": 120000,
            "seniorSalary": 180000
        },
        "advantages": [{
            "title": "Скорость разработки",
            "description": "Мое описание"
        }],
        "SeoText": "тест1",
        "tagsTitle": "Полученные знания",
        "tags": ["TypeScript"]
    }' \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    --request POST http://localhost:3000/api/top-page/create \
    | python -m json.tool
```

<br/>

```
// GET PAGE BY ALIAS
$ curl \
    --header "Content-Type: application/json" \
    --request GET http://localhost:3000/api/top-page/byAlias/typescript \
    | python -m json.tool
```

<br/>

## 11 Выкладка на production (Бонус)

<br/>

### 001 Сборка Docker

    $ docker build -t webmakaka/top-api .

<br/>

### 002 Docker-compose

    $ docker-compose up

<br/>

### 003 GitHub actions

<br/>

## 12 Работа с файлами

<br/>

### 001 Загрузка файлов

    $ nest generate module files
    $ nest generate controller files --no-spec
    $ nest generate service files --no-spec

<br/>

    $ yarn add app-root-path
    $ yarn add date-fns

<br/>

    $ yarn add -D types/app-root-path
    $ yarn add -D multer @types/multer
    $ yarn add -D @types/fs-extra

<br/>

```
// UPLOAD FILE
$ curl \
    -F "files=@/home/marley/Pictures/rs.png" \
    --header "Content-Type: multipart/form-data" \
    --header "Authorization: Bearer ${TOKEN}" \
    --request POST "http://localhost:3000/api/files/upload" \
    | python -m json.tool
```

<br/>

### 002 Конвертация изображений

    $ yarn add sharp
    $ yarn add -D @types/sharp

```
// UPLOAD FILE
```

<br/>

### 003 Serve файлов

    $ yarn add @nestjs/serve-static

http://localhost:3000/static/2021-06-15/rs.webp

<br/>

## 13. Telegram bot уведомлений

<br/>

### 1. Подготовка бота

Нужны будут Телеграм ID, Токен

Bot: What's my Telegram ID

Bot: BotFather -> New Bot -> Дает токен

<br/>

### 2. Интеграция Telegraf

    $ yarn add telegraf

<br/>

    $ nest generate module telegram
    $ nest generate service telegram --no-spec

<br/>

### 3. Реализация forRootAsync

Не тестировалось!

В .env (предположительно) нужно прописать.

```
TELEGRAM_TOKEN=TELEGRAM_TOKEN
CHAT_ID=CHAT_ID
```

<br/>

```
// REVIEW NOTIFY
$ curl \
    --data '{
        "name": "Тест 1",
        "title": "Заголовок",
        "descriptio": "Описание тестовое",
        "rating": 5,
        "productId": "60c7219c0c8e6f9e29b87068",
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/api/review/notify \
    | python -m json.tool
```

<br/>

## 14. Интеграция с внешним API (hh.ru)

<br/>

### 1. Обзор модуля

<br/>

### 2. Подготовка моделей

    $ nest generate module hh
    $ nest generate service hh --no-spec
    $ nest generate controller hh --no-spec

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
