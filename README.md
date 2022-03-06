Приложение для просмотра статистики европейских турниров по футболу. В качестве источника получения данных используется бесплатная версия публичного API [https://www.football-data.org/](https://www.football-data.org/).

## В ходе выполнения задания были использованы следующие основные пакеты:
Create React App
react-router-dom v6 
redux (создано единое глобальное хранилище store)
react-moment 
material-ui v5 (верстка компонентов)
eslint (рефакторинг кода)
process, dotenv, dotenv-webpack (работа с глобальными переменными)
path (настройка путей)

## В приложении реализованы страницы: 
* Список всех соревнований All competitions 
* Список основных лиг Leading Leages 
* Список команд Teams
* Таблица матчей для отдельного соревнования/команды
  
## Дополнительный функционал
* поиск по наименованию на странице
* Фильтр по дате
* Календарь лиги - список матчей лиги/соревнования
* Календарь одной команды - список матчей команды
  
Приложение было создано с помощью [Create React App](https://github.com/facebook/create-react-app).

## Установка:
установить зависимости ### `npm install`
запустить приложение ### `npm start`

## Требует доработки:
Не успела реализовать 
* Пагинацию в таблицах матчей
* Деплой на гитхаб-пейджес
* форматирование с поощью prettier
* отрефакторить код на возможные огрехи
