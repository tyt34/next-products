
**краткое стартовое описание**

используется

```
https://fakestoreapi.com/
```

страницы:

- продукты
- продукт
- форма создания / редактирования продукта
- авторизация пользователя

методы запросов:

- get
- post
- put
- delete

контролеры??????

хуки должны возвращать результат хуков tanstack query, который возвращает результат контроллеров

хуки:

- GET
- - useProducts
- - useProduct
- POST PUT DELTE
- usePostProduct
- usePutProduct
- useDeleteProduct

так как нет сервера то перезаписывать кеш (или сделать свой сервер о чем не указано)

Авторизация:

- записывать полученный токен из api в куку
- хранить состояние isAuth
- сделать AuthProvider который будет проверять куку при первом запуске приложения

Библиотеки:

- react / next
- redux toolkit / zuztand
- axios
- ts
- tanstack query
- react hook form
- yup / joi / zod для валидации полей
- ui библиотеку
