# Aviasales App

### deploy
https://aviasales-app-n1982.vercel.app/

Это страница выдачи билетов со множеством фильтров, настроек и собственно билетов. 
Проект написан на React, поэтому тестовое задание приближено к ежедневным задачам.

Упрощенный макет нашего проекта — список билетов, фильтры и сортировка. Также есть небольшой сервер для тестового задания, который работает схоже с нашим основным backend движком и реализует технику long polling для передачи пачек билетов. Необходимо реализовать клиент, который будет получать случайно сгенерированные билеты от сервера и отрисует интерфейс согласно макету в Figma. Достаточно будет отрендерить 5 первых билетов соотвествующих выбранным фильтрам и сортировки.

### Документация по работе с сервером
https://github.com/KosyanMedia/test-tasks/blob/master/aviasales_frontend/server.md

### Макет (Figma)
 https://github.com/KosyanMedia/test-tasks/raw/f0f60244b045928746188a86ba4f76ddb5515111/aviasales_frontend/Aviasales%20Test%20Task.fig

## Redux

Реализуйте хранение состояния сортировки в сторе редакса
Реализуйте хранения состояния чекбоксов в сторе редакса
Реализуйте функционал включения/выключения фильтров, описанный ниже

Фильтры:
Если включается галочка "Все" - проставляются галочки всем остальным фильтрам
Если снимается галочка "Все" - снимаются все остальные фильтры
Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится
Результат должен быть запушин в репозиторий гитхаб. Ссылку на репозиторий с кодом всех выполненных заданий отправите в конце модуля, в специальное поле, после выполнения финального задания по данному проекту

##  Получение данных

В случае проблем с оригинальным апи -  https://aviasales-test-api.java-mentor.com/search

Установите redux-thunk и добавьте в приложение
Настройке работу Redux DevTools
Пользуясь описанием апи, получите первую порцию билетов и положите в store
Отрендерьте данные из стора на страницу
Результат должен быть запушин в репозиторий гитхаб. Ссылку на репозиторий с кодом всех выполненных заданий отправите в конце модуля, в специальное поле, после выполнения финального задания по данному проекту

# Завершение

В случае проблем с оригинальным апи - можете использовать наш аналог https://aviasales-test-api.java-mentor.com/search

Настройте получение полного набора данных (порядка десяти тысяч билетов) и обработку ошибок. Убедитесь, что key в рендере выбран правильно.
Настройте работу фильтров и сортировки
Добавьте лоадер, по которому будет видно, что не все данные еще загружены. При этом до завершения получения данных уже можно видеть и работать с неполным набором (см пример на сайте aviasales).
Проверьте приложение на отсутствие ошибок линтера, ошибок в консоли и приведите код в порядок.
Заливайте приложение на Vercel (now.sh). Ссылку разместите в readme.
Особенности работы фильтров:

Количество пересадок - это точное количество пересадок в одну из сторон.
Если по результатам фильтрации нет рейсов (например, ни одна галочка не выбрана) - должно быть сообщение "Рейсов, подходящих под заданные фильтры, не найдено"


