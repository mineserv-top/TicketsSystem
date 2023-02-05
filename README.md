# TicketsSystem
Удобная система тикетов для вашего Discord сервера от Mineserv.

TicketsSystem от Mineserv - удобный бот для вашего сервера, в нём присутствует разделение тикетов на категории, понятный и легко настраиваемый конфиг и возможность интеграции с [WhiteListSystem](https://github.com/mineserv-top/WhiteListSystem), они не будут друг другу мешать.

Ниже предоставлен пример конфигурации с описанием переменных.

```json
{
    "token": "",//Токен вашего бота.
    "prefix": "!",//Префикс вашего бота. По умолчанию !

    "adminRole": "",//Айди роли администратора

    "Tickets": {
        "mainChannel": "",//Канал, в который будет отправляться встраивание с кнопкой для создания тикета
        "Category1": {//Настройка первой категории тикетов
            "ChannelParent": "",//Группа каналов первой категории

            "CateroryLabel": "Первая Категория",//Название первой категории в меню выбора
            "CategoryEmoji": "☺️",//Эмодзи категории в меню выбора (слева от названия)
            "CategoryDescription": "Тута первая категория"//Описание первой категории в меню выбора (снизу от названия)
        },
        "Category2": {//Настройка второй категории
            "ChannelParent": "",//Группа каналов второй категории

            "CateroryLabel": "Вторая Категория",//Название второй категори в меню выбора
            "CategoryEmoji": "😌",//Эмодзи второй категории в меню выбора (слева от названия)
            "CategoryDescription": "тута вторая категория"//Описание второй категории в меню выбора (снизу от названия)
        },
        "Category3": {//Настройка третьей категории
            "ChannelParent": "",//Группа каналов третьей категории

            "CateroryLabel": "Третья Категория",//Название третьей категории в меню выбора
            "CategoryEmoji": "😊",//Эмодзи третьей категории в меню выбора (слева от названия)
            "CategoryDescription": "тута третья категория"//Описание третьей категории в меню выбора (снизу от названия)
        }
    },

    "thumbImage": "https://media.discordapp.net/attachments/1057078822375264349/1066034808523866223/WoWqWgf5J4U.png",
    "footerText": "MineServ | Tickets"
}
```