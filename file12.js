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

let numberOfFilms;


function start() {
    numberOfFilms = +prompt("How many movies have you seen already?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert("The answer has to be a number and can not be empty!");
        numberOfFilms = +prompt("How many movies have you seen already?");
    }
}
start();

const personalMovieDB = {
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

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {

        let lastMovie = prompt('Which movie do you watch last?');
        while (lastMovie == '' || lastMovie == null || lastMovie.length > 50) {
            alert("The answer can not be empty!");
            lastMovie = prompt('Which movie do you watch last?');
        }

        let movieRate = +prompt('How do you rate the movie? Rate 1 to 10');
        while (movieRate == null || movieRate == '' || isNaN(movieRate)) {
            alert('The answer can not be empty and not a number!');
            movieRate = +prompt('How do you rate the movie ? Rate 1 to 10 ');
        }

        personalMovieDB.movies[lastMovie] = movieRate;
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('very few films');

    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('classical tv fan');

    } else if (personalMovieDB.count >= 30) {
        console.log('addicted tv fan');

    } else {
        console.log('Some mistake is occured ! ');
    }
}
detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat.Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
        console.log(hidden);
    }
}
showMyDB(personalMovieDB.privat);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
//     "Ваш любимый жанр под номером ${номер по порядку}".Каждый ответ записывается в массив данных
// genres


function writeYourGenre() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favorite genre ${i} :`);
    }
}
writeYourGenre();

console.log("end");