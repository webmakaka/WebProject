# [Ларичев Антон] React + Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid [RUS,2021]

<br/>

## 04 Старт проекта

<br/>

### 002 Развертка проекта

    $ cd app/client
    $ npx create-next-app . --typescript --use-yarn
    $ npm run dev

    $ yarn add -D @types/react @types/node

<br/>

### 004 Настройка eslint

    $ yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

<br/>

### 005 Настройка stylelint

    $ yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-order-config-standard

<br/>

### 006 Отладка в VSCode

<br/>

### 007 React Dev Tools

<br/>

## 05 Компоненты Head и Document

<br/>

### 001 Жизненный цикл React

<br/>

### 002 Компонент head

<br/>

### 003 React Fragment

<br/>

### 004 Компонент Document

<br/>

## 06 Figma для разработчика

<br/>

### 001 Обзор модуля

<br/>

### 002 Разбор интерфейса

<br/>

### 003 Свойства компонент

<br/>

### 004 Экспорт графики

<br/>

## 07 Простые компоненты

<br/>

### 001 Шрифты и цвета

<br/>

### 002 Первый компонент

<br/>

![Application](/img/pic-course02-m07-p01.png?raw=true)

<br/>

### 003 Classnames

    $ yarn add -D @types/classnames

<br/>

![Application](/img/pic-course02-m07-p02.png?raw=true)

<br/>

### 004 HTMLProps

<br/>

### 005 Работа с svg

<br/>

При работе с версией "next": "11.0.0" ошибка, но работает с "next": "10.1.3".

```
info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
ValidationError: Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
 - configuration[0].module.rules[4].issuer has an unknown property 'test'. These properties are valid:
   object { and?, not?, or? }
   -> Logic operators used in a condition matcher.
```

<br/>

    $ yarn add -D @svgr/webpack

<br/>

![Application](/img/pic-course02-m07-p03.png?raw=true)

<br/>

### 006 Упражнение - Компонент p

<br/>

![Application](/img/pic-course02-m07-p04.png?raw=true)

<br/>

### 007 Компонент тэга

<br/>

![Application](/img/pic-course02-m07-p05.png?raw=true)

<br/>

## 08 Statefull компоненты

<br/>

### 001 React Hooks

<br/>

![Application](/img/pic-course02-m08-p01.png?raw=true)

<br/>

### 002 useState

<br/>

### 003 useEffect

<br/>

### 004 Правила использования Hooks

    $ yarn add -D eslint-plugin-react-hooks

<br/>

### 005 Архитектура компонента рейтинга

<br/>

### 006 Компонент рейтинга - 1

<br/>

![Application](/img/pic-course02-m08-p02.png?raw=true)

<br/>

### 007 Компонент рейтинга - 2

<br/>

## 09 HOC компоненты

<br/>

### 001 Что такое HOC?

<br/>

### 002 Layout

<br/>

![Application](/img/pic-course02-m09-p01.png?raw=true)

<br/>

### 003 Пишем HOC withLayout

<br/>

## 10 CSS Grid

<br/>

### 001 Обзор модуля

<br/>

### 002 Template и gap

<br/>

### 003 Justify и align

<br/>

### 004 Распределение ячеек

<br/>

### 005 Template-area

<br/>

### 006 Лучшие практики

<br/>

### 007 Вёрстка layout

<br/>

![Application](/img/pic-course02-m10-p01.png?raw=true)

<br/>

### 008 Упражнение - Вёрстка footers

    $ yarn add date-fns

<br/>

![Application](/img/pic-course02-m10-p02.png?raw=true)

<br/>

## 11 Server side rendering

<br/>

### 001 Переменные окружения

<br/>

### 002 Как работает SSR?

<br/>

### 003 SSR в NextJS

<br/>

### 004 Использование getStaticProps

<br/>

```
$ curl \
    --data '{
        "firstCategory": 0
    }' \
    --header "Content-Type: application/json" \
    --request POST https://courses-top.ru/api/top-page/find \
    | jq
```

<br/>

    $ yarn add axios

<br/>

http://json2ts.com/

<br/>

![Application](/img/pic-course02-m11-p01.png?raw=true)

<br/>

### 005 Использование getStaticPaths

<br/>

```
// GET PAGE BY ALIAS
$ curl \
    --header "Content-Type: application/json" \
    --request GET https://courses-top.ru/api/top-page/byAlias/photoshop \
    | jq
```

<br/>

http://localhost:3000/courses/photoshop/

<br/>

    $ npm run build
    $ npm run start

<br/>

## 12 Контекст

<br/>

### 001 useContext

<br/>

### 002 Пишем свой контекст

<br/>

![Application](/img/pic-course02-m12-p01.png?raw=true)

<br/>

### 003 Вёрстка меню

<br/>

![Application](/img/pic-course02-m12-p02.png?raw=true)

<br/>

## 13 Роутинг

<br/>

### 001 Компонент Link

<br/>

### 002 useRouter

<br/>

### 002 useRouter

<br/>

### 003 Упражнение - Добавление страниц

<br/>

### 004 Структура роутинга

<br/>

![Application](/img/pic-course02-m13-p01.png?raw=true)

<br/>

### 005 Вёрстка Sidebar

<br/>

![Application](/img/pic-course02-m13-p02.png?raw=true)

<br/>

## 14 Страница продуктов

<br/>

### 001 Компоненты страниц

<br/>

### 002 Вёрстка страницы продуктов - 1

<br/>

![Application](/img/pic-course02-m14-p01.png?raw=true)

<br/>

### 003 Regex отображения цены

<br/>

![Application](/img/pic-course02-m14-p02.png?raw=true)

<br/>

### 004 Упражнение - Доработка страницы

<br/>

### 005 Вёрстка страницы продуктов - 2

<br/>

![Application](/img/pic-course02-m14-p03.png?raw=true)

<br/>

### 006 Вставка HTML

http://localhost:3000/courses/big-data

<br/>

### 007 useReducer

<br/>

### 008 Компонент сортировки

<br/>

### 009 Reducer сортировки

<br/>

![Application](/img/pic-course02-m14-p04.png?raw=true)

<br/>

## 15 Компонент продукта

<br/>

### 001 Компонент Input

<br/>

### 002 Упражнение - Компонент Textarea

<br/>

### 002 Упражнение - Компонент Textarea

<br/>

### 003 Компонент поиска

<br/>

![Application](/img/pic-course02-m15-p01.png?raw=true)

<br/>

### 004 Компонент продукта - планирование

<br/>

### 005 Компонент продукта - сетка

<br/>

![Application](/img/pic-course02-m15-p02.png?raw=true)

<br/>

### 006 Компонент продукта - стили

<br/>

![Application](/img/pic-course02-m15-p03.png?raw=true)

<br/>

### 007 Склонение слов

<br/>

![Application](/img/pic-course02-m15-p04.png?raw=true)

<br/>

### 008 Компонент Image

<br/>

### 009 Компонент продукта - адаптив

<br/>

![Application](/img/pic-course02-m15-p05.png?raw=true)

<br/>

## 16 Работа с формами

<br/>

### 001 Компонент отзыва

<br/>

![Application](/img/pic-course02-m16-p01.png?raw=true)

<br/>

### 002 Форма отзыва

<br/>

![Application](/img/pic-course02-m16-p02.png?raw=true)

<br/>

### 003 useForm

<br/>

### 004 Работа с формами

    $ yarn add react-hook-form

<br/>

### 005 Проброс ref

<br/>

### 006 Обработка ошибок

<br/>

![Application](/img/pic-course02-m16-p03.png?raw=true)

<br/>

### 007 Упражнение - Обработка ошибок Rating

<br/>

### 008 Отправка запроса со страницы

<br/>

### 009 useRef

<br/>

### 010 Упражнение - Исправление бага useReducer

<br/>

## 17 Анимация на Framer Motion

<br/>

### 001 Вводное видео

<br/>

### 002 Принципы анимации

<br/>

### 003 Анимация меню

<br/>

### 004 Анимация сортировки

<br/>

### 005 Пишем свой hook

<br/>

### 006 useAnimation

<br/>

### 007 Упражнение - Анимация отзывов

<br/>

### 008 Динамическая иконка

<br/>

### 009 Мобильное меню

<br/>

![Application](/img/pic-course02-m17-p01.png?raw=true)

<br/>

![Application](/img/pic-course02-m17-p02.png?raw=true)

<br/>

### 010 Жесты и MotionValues

<br/>

### 011 Производительность

<br/>

## 18 Доступность

<br/>

### 001 Виды доступности

<br/>

### 002 Цветовая доступность

<br/>

### 003 Доступность меню с клавиатуры

<br/>

### 004 Доступность форм с клавиатуры

<br/>

### 005 Упражнение - доступность сортировки

<br/>

### 006 ARIA атрибуты

**114 AI-ARIA-Authoring-Practices**  
https://www.w3.org/TR/wai-aria-practices-1.1/

**118 MDN-Web-Docs-ARIA**  
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

<br/>

### 007 Использование Screen Reader

<br/>

### 008 Aria-label и aria-labelledby

<br/>

### 009 Aria-hidden

<br/>

### 010 Добавление landmarks

<br/>

### 011 Доступность форм

<br/>

### 012 Упражнение - Доступность оповещений

<br/>

### 013 Доступность меню и списка

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
