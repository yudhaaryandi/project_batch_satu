function film(judul,durasi,genre,tahun){
    var film={};
    (film.judul=judul),
    (film.durasi=durasi),
    (film.genre=genre),
    (film.tahun=tahun);

    return film;
}
function tambahDataFilm() {
    var films=[];
    var a=film("end game",'3jam','action','2013')
    var b=film("infinity war",'2jam','action','2019')
    var c=film("iron man 1",'2jam','action','2018')
    var d=film("captain marvel",'2jam','action','2018')
    var e=film("doctor strange",'2jam','action','2018')

    films.push (a,b,c,d,e)
    console.log(films);
}
tambahDataFilm()