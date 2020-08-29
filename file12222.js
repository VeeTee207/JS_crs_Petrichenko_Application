/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("How many movies have you seen already?");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            alert("The answer has to be a number and can not be empty!");
            personalMovieDB.count = +prompt("How many movies have you seen already?");
        }
    },

    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {

            let lastMovie = prompt('Which movie do you watch last?');
            while (lastMovie == '' || lastMovie == null || lastMovie.length > 50) {
                alert("The answer can not be empty!");
                lastMovie = prompt('Which movie do you watch last?');
            }

            let movieRate = +prompt('How do you rate the movie in range 1 to 10 ?');
            while (movieRate == null || movieRate == '' || isNaN(movieRate)) {
                alert('The answer can not be empty and not a number!');
                movieRate = +prompt('How do you rate the movie ? Rate 1 to 10 ');
            }

            personalMovieDB.movies[lastMovie] = movieRate;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log('very few films');

        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('classical tv fan');

        } else if (personalMovieDB.count >= 30) {
            console.log('addicted tv fan');

        } else {
            console.log('Some mistake is occured ! ');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
            console.log(hidden);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenre: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your favorite genre ${i} :`);
            if (genre == null || genre === '') {
                console.log("Your enter is incorrect");
                // personalMovieDB.genres[i - 1] = prompt(`What is your favorite genre ${i} :`);
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre ;
            }
        }
            // additional option to add data but has to be redone
        
            // let genre = prompt(`Enter three favorite genres divided by , :`).toLowerCase();
            // if (genre == null || genre === '') {
            //     console.log("Your enter is incorrect");
                
            // } else {
            //     personalMovieDB.genres = genre.split(', ') ;
            //     personalMovieDB.genres.sort();
            // }
        

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i+1} is ${item}`);
        });
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenre();
