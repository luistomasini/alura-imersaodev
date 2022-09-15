var listaDiscos = [
  "https://m.media-amazon.com/images/I/715ykeQAYcL._AC_SL1076_.jpg",
  "https://m.media-amazon.com/images/I/81evsr3Oq0L._AC_SL1425_.jpg",
  "https://m.media-amazon.com/images/I/918SLRbvSfL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/81BaZjQpt9L._AC_SL1400_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81abxORhaBL.jpg",
  "https://m.media-amazon.com/images/I/710Ir2Gfk5L._AC_SL1200_.jpg",
  "https://m.media-amazon.com/images/I/81lGjz4bElL._AC_SL1428_.jpg",
  "https://m.media-amazon.com/images/I/81oXh1sQasL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/81bcusKozsL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/91FPsiYg7NL._AC_SL1425_.jpg",
  "https://easystreetonline.com/Photo/418461269212",
  "https://images-na.ssl-images-amazon.com/images/I/81j7xM-oijL.jpg"
];
var nomeDiscos = [
  "Rush - A Farewell to Kings (1977)",
  "Led Zeppelin - Led Zeppelin IV (1971)",
  "Pink Floyd - Animals (1977)",
  "Derek and The Dominoes - Layla (1970)",
  "Yes - Close to the Edge (1972)",
  "King Crimson - In the Court of The Crimson King (1969)",
  "The Beatles - Rubber Soul (1965)",
  "Bob Dylan - Blonde on Blonde (1966)",
  "Foo Fighters - Wasting Light (2011)",
  "Sepultura - Chaos A.D. (1993)",
  "Tool - Lateralus (2001)",
  "Metallica - Master of Puppets (1986)"
];

var linkDiscos = [
  "https://open.spotify.com/embed/album/18i33u5FvfvgHjZMulpyO2?utm_source=generator",
  "https://open.spotify.com/embed/album/5EyIDBAqhnlkAHqvPRwdbX?utm_source=generator",
  "https://open.spotify.com/embed/album/3b4E89rxzZQ9zkhgKpj8N4?utm_source=generator",
  "https://open.spotify.com/embed/album/5iIWnMgvSM8uEBwXKsPcXM?utm_source=generator",
  "https://open.spotify.com/embed/album/6344rkGqCBDenGoS7eJlBN?utm_source=generator",
  "https://open.spotify.com/embed/album/6tVg2Wl9hVKMpHYcAl2V2M?utm_source=generator",
  "https://open.spotify.com/embed/album/50o7kf2wLwVmOTVYJOTplm?utm_source=generator",
  "https://open.spotify.com/embed/album/4NP1rhnsPdYpnyJP0p0k0L?utm_source=generator",
  "https://open.spotify.com/embed/album/5lnQLEUiVDkLbFJHXHQu9m?utm_source=generator",
  "https://open.spotify.com/embed/album/5r4qa5AIQUVypFRXQzjaiu?utm_source=generator",
  "https://open.spotify.com/embed/album/5l5m1hnH4punS1GQXgEi3T?utm_source=generator",
  "https://open.spotify.com/embed/album/2Lq2qX3hYhiuPckC8Flj21?utm_source=generator"
];

var wrapper = document.getElementById("_wrapper");
var covers = "";
for (let i = 0; i < listaDiscos.length; i++) {
  covers +=
    `<div class=capas><img src=` +
    listaDiscos[i] +
    ">" +
    "<p>" +
    nomeDiscos[i] +
    "</p>" +
    `<iframe src="${linkDiscos[i]}" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">` +
    "</iframe>" +
    "</div>";
}
wrapper.innerHTML = covers;