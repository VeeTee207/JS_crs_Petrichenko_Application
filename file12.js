// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
// - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//         - actors - тоже поместить пустой объект
//             - genres - сюда поместить пустой массив
//                 - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
// - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
// movies: {
//     'logan': '8.1'
// }

// Проверить, чтобы все работало без ошибок в консоли * /

'use strict';

const numberOfFilms = +prompt("How many movies have you seen already?"),

    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

// lastMovie = prompt('Which movie do you watch last?'),
// movieRate = +prompt('How do you rate it?');

// personalMovieDB['movies'][lastMovie] = movieRate;

//     1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов.Если это происходит -
//     возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
//     "Вы киноман".А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами * /

for (let i = 0; i < 2; i++) {

    const lastMovie = prompt('Which movie do you watch last?');
    if (lastMovie == '' || lastMovie.length > 50) {
        alert("The answer can not be empty or longer 50 symbols!");
        i--;
        continue;
    }
    const movieRate = +prompt('How do you rate it?');
    personalMovieDB.movies[lastMovie] = movieRate;
}

if (personalMovieDB.count <= 10) {
    console.log('very few films');

} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('classical tv fan');

} else if (personalMovieDB.count >= 30) {
    console.log('addicted tv fan');

} else {
    console.log('Some mistake is occured ! ');
}


console.log(personalMovieDB);