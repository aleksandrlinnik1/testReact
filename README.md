# React test task [CLICK](https://aleksandrlinnik1.github.io/testReact/)
# Task:
Необходимо создать приложение, содержащее зону отображение плана помещения в правой части экрана (план предоставляется во вложении в формате .geojson) c возможностью его зуммирования.
Координата левой нижней точки отображения плана относительно карты:
53.91687819154794 - широта
27.63435423374176 - долгота 
Зум карты по умолчанию – достаточный, чтоб в область просмотра поместился весь план здания.
В левой части экрана должен быть выведен список персон с отображением аватарки и ФИО.
Список должен выводиться с постраничным выводом по 3 записи на страницу.
Запрос для получения списка персон:
GET​/api​/get_all_people

Аватарка – используем изображение, ссылка на которое указана в параметре "image_ref"
ФИО – параметры "name", "midname", "surname"

Описание запроса во вложенном файле openapi_4_3_1.yaml
Адрес сервера: 213.184.245.66
Порт: 5010
Логин: fetest
Пароль: root123456

Дизайн приложения – на усмотрение соискателя.
Технические аспекты, не учтённые в задании, остаются на усмотрение соискателя.

Итоговый результат: исходный код приложения для сборки
Технология разработки: ReactJS
