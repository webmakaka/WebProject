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

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
