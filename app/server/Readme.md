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

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
