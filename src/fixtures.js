export const normalizedComments = [
    {
        "id": "qwerqwer",
        "user": "Gilliam Underwood",
        "text": "Вот это, конечно, вот да."
    },
    {
        "id": "lkjhsdlfkg",
        "user": "Dolly Franklin",
        "text": "Пуш это что-то с чем-то."
    },
    {
        "id": "zxcvzcxvzxcv",
        "user": "Brennan Atkins",
        "text": "Автор молодец, особенно Splice понравился."
    },
    {
        "id": "fghjfghjfghj",
        "user": "Jodi Humphrey",
        "text": "Век живи, век учись!."
    },
    {
        "id": "ertyoertywte",
        "user": "Joyce Weber",
        "text": "Мда уж, надо пойти перечитать."
    },
    {
        "id": "qwerqwertyy",
        "user": "Gilliam Underwood",
        "text": "Мой мир перевернулся!."
    },
    {
        "id": "sdfgsdfghu7u7urtv",
        "user": "Jodi Humphrey",
        "text": "Пойду протестирую! Кажется я по-новому начну жить!."
    },
    {
        "id": "kjfviudfv089w74",
        "user": "Joyce Weber",
        "text": "Вот это завернули! Пойду запланирую что-нибудь."
    },
    {
        "id": "r23uyrghasdfb7",
        "user": "Joyce Weber",
        "text": "Это уже асинхронность какая-то, а казалось бы язык однопоточный."
    },
    {
        "id": "rflsbvyeuwr334rg5",
        "user": "Random Name",
        "text": "ВАУ! Пойду заменю все if на switch"
    },
    {
        "id": "234faasffasgfq3r3eda",
        "user": "Felix Soyferman",
        "text": "Встречал такое в redux!."
    },
    {
        "id": "23rfasdfasdvg",
        "user": "Hello World",
        "text": "Встречал пи компиляции typescript в es5."
    },
    {
        "id": "fqasfd4r35tga",
        "user": "Sofia Michailenko",
        "text": "ES5... ES6... ад какой-то. Пойду в верстальщики!."
    },
    {
        "id": "23qwfasdf3",
        "user": "Brad McKeon",
        "text": "Тема жесть."
    },
    {
        "id": "dadsafw4f45w",
        "user": "Dolly Franklin",
        "text": "И кто такое придумал? вот то ли дело верстка..."
    },
    {
        "id": "234erasfdastw4a",
        "user": "Brennan Atkins",
        "text": "А только вчера циклы через for писал, а тут уже вон что."
    }
]

export const normalizedArticles = [
    {
        "id": "56c782f18990ecf954f6e027",
        "date": "2021-04-09T15:03:23.000Z",
        "title": "Методы массивов",
        "text": "Массивы предоставляют множество методов. Чтобы было проще, в этой главе они разбиты на группы.",
        "comments": ["qwerqwer", "lkjhsdlfkg", "zxcvzcxvzxcv", "fghjfghjfghj", "ertyoertywte"]
    },
    {
        "id": "56c782f17b4e0ba78c7ad717",
        "date": "2021-04-09T18:03:23.000Z",
        "title": "Конструкторы, создание объектов через new",
        "text": "множество однотипных объектов можно сделать при помощи функции-конструктора и оператора new.",
        "comments": ["qwerqwertyy", "sdfgsdfghu7u7urtv"]
    },
    {
        "id": "56c782f1978fdf9a0100df52",
        "date": "2021-04-02T11:03:23.000Z",
        "title": "Планирование: setTimeout и setInterval",
        "text": "Мы можем вызвать функцию не в данный момент, а позже, через заданный интервал времени. Это называется «планирование вызова».",
        "comments": ["kjfviudfv089w74", "r23uyrghasdfb7"]
    },
    {
        "id": "56c782f1e17f4f9311dfaa2c",
        "date": "2021-04-19T23:03:23.000Z",
        "title": "Конструкция switch",
        "text": "Конструкция switch заменяет собой сразу несколько if. Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.",
        "comments": ["rflsbvyeuwr334rg5", "234faasffasgfq3r3eda"]
    },
    {
        "id": "56c782f197fe2bad471b3740",
        "date": "2021-04-04T15:03:23.000Z",
        "title": "Устаревшее ключевое слово var",
        "text": "Обычно var не используется в современных скриптах, но всё ещё может скрываться в старых.",
        "comments": ["23rfasdfasdvg", "fqasfd4r35tga"]
    },
    {
        "id": "56c782f1a2c2c3268ddb3206",
        "date": "2021-04-08T19:03:23.000Z",
        "title": "Проверка класса: instanceof",
        "text": "Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.",
        "comments": ["23qwfasdf3", "dadsafw4f45w", "234erasfdastw4a"]
    },
    {
        "id": "56c782fghgfc2c3268ddb3206",
        "date": "2021-04-08T19:03:23.000Z",
        "title": "Промисы: обработка ошибок",
        "text": "Цепочки промисов отлично подходят для перехвата ошибок. Если промис завершается с ошибкой, то управление переходит в ближайший обработчик ошибок. На практике это очень удобно."
    }

]

export const articles = [
    {
        "id": "56c782f18990ecf954f6e027",
        "date": "2021-04-09T15:03:23.000Z",
        "title": "Методы массивов",
        "text": "Массивы предоставляют множество методов. Чтобы было проще, в этой главе они разбиты на группы.",
        "comments": [
            {
                "id": "qwerqwer",
                "user": "Gilliam Underwood",
                "text": "Вот это, конечно, вот да."
            },
            {
                "id": "lkjhsdlfkg",
                "user": "Dolly Franklin",
                "text": "Пуш это что-то с чем-то."
            },
            {
                "id": "zxcvzcxvzxcv",
                "user": "Brennan Atkins",
                "text": "Автор молодец, особенно Splice понравился."
            },
            {
                "id": "fghjfghjfghj",
                "user": "Jodi Humphrey",
                "text": "Век живи, век учись!."
            },
            {
                "id": "ertyoertywte",
                "user": "Joyce Weber",
                "text": "Мда уж, надо пойти перечитать."
            }
        ]
    },
    {
        "id": "56c782f17b4e0ba78c7ad717",
        "date": "2021-04-09T18:03:23.000Z",
        "title": "Конструкторы, создание объектов через new",
        "text": "Множество однотипных объектов можно сделать при помощи функции-конструктора и оператора new.",
        "comments": [
            {
                "id": "qwerqwertyy",
                "user": "Gilliam Underwood",
                "text": "Мой мир перевернулся!"
            },
            {
                "id": "sdfgsdfghu7u7urtv",
                "user": "Jodi Humphrey",
                "text": "Пойду протестирую! Кажется я по-новому начну жить!"
            }
        ]
    },
    {
        "id": "56c782f1978fdf9a0100df52",
        "date": "2021-04-02T11:03:23.000Z",
        "title": "Планирование: setTimeout и setInterval",
        "text": "Мы можем вызвать функцию не в данный момент, а позже, через заданный интервал времени. Это называется «планирование вызова».",
        "comments": [
            {
                "id": "kjfviudfv089w74",
                "user": "Joyce Weber",
                "text": "Вот это завернули! Пойду запланирую что-нибудь."
            },
            {
                "id": "r23uyrghasdfb7",
                "user": "Joyce Weber",
                "text": "Это уже асинхронность какая-то, а казалось бы язык однопоточный."
            }
        ]
    },
    {
        "id": "56c782f1e17f4f9311dfaa2c",
        "date": "2021-04-19T23:03:23.000Z",
        "title": "Конструкция switch",
        "text": "Конструкция switch заменяет собой сразу несколько if. Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.",
        "comments": [
            {
                "id": "rflsbvyeuwr334rg5",
                "user": "Random Name",
                "text": "ВАУ! Пойду заменю все if на switch"
            },
            {
                "id": "234faasffasgfq3r3eda",
                "user": "Felix Soyferman",
                "text": "Встречал такое в redux!."
            },
        ]
    },
    {
        "id": "56c782f197fe2bad471b3740",
        "date": "2021-04-04T15:03:23.000Z",
        "title": "Устаревшее ключевое слово var",
        "text": "Обычно var не используется в современных скриптах, но всё ещё может скрываться в старых.",
        "comments": [
            {
                "id": "23rfasdfasdvg",
                "user": "Hello World",
                "text": "Встречал пи компиляции typescript в es5."
            },
            {
                "id": "fqasfd4r35tga",
                "user": "Sofia Michailenko",
                "text": "ES5... ES6... ад какой-то. Пойду в верстальщики!."
            }
        ]
    },
    {
        "id": "56c782f1a2c2c3268ddb3206",
        "date": "2021-04-08T19:03:23.000Z",
        "title": "Проверка класса: instanceof",
        "text": "Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с учётом наследования.",
        "comments": [
            {
                "id": "23qwfasdf3",
                "user": "Brad McKeon",
                "text": "Тема жесть."
            },
            {
                "id": "dadsafw4f45w",
                "user": "Dolly Franklin",
                "text": "И кто такое придумал? вот то ли дело верстка..."
            },
            {
                "id": "234erasfdastw4a",
                "user": "Brennan Atkins",
                "text": "А только вчера циклы через for писал, а тут уже вон что."
            }
        ]
    },
    {
        "id": "56c782fghgfc2c3268ddb3206",
        "date": "2021-04-08T19:03:23.000Z",
        "title": "Промисы: обработка ошибок",
        "text": "Цепочки промисов отлично подходят для перехвата ошибок. Если промис завершается с ошибкой, то управление переходит в ближайший обработчик ошибок. На практике это очень удобно."
    }

]