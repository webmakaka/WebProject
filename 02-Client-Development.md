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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
