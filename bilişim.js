const geriBtn = document.getElementById("geri");
const baslaBtn = document.getElementById("baslat");
const ileriBtn = document.getElementById("sonraki");
const sayı = document.getElementById("input");
const işlem = document.getElementById("input1");
const paragraf = document.getElementById("paragraf");
const liste = [
    "video.mp4",
    "video2.mp4",
    "video3.mp4"
]
const sayılar = []
let videoIndex = 0;
const video = document.getElementById("video");
function geri() {
    if (videoIndex > 0) {
        videoIndex--;
    }
    else {
        videoIndex = liste.length - 1;
    }
    video.src = liste[videoIndex];
    video.play();
    geriBtn.classList.remove("animation");
    void geriBtn.offsetWidth;
    geriBtn.classList.add("animation");
}

function baslat() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
    baslaBtn.classList.remove("animation");
    void baslaBtn.offsetWidth;
    baslaBtn.classList.add("animation");
}

function sonraki() {
    ileriBtn.classList.remove("animation");
    void ileriBtn.offsetWidth;
    ileriBtn.classList.add("animation");
    if (videoIndex < liste.length - 1) {
        videoIndex++;
    }
    else {
        videoIndex = 0;
    }
    video.src = liste[videoIndex];
    video.play();
}
sayı.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let num = Number(sayı.value);
        if (!isNaN(num)) {
            sayılar.push(num); // convert to number before pushing
        }
        sayı.value = ""; // clear input field
    }
});

işlem.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let a = sayılar[0];
        if (işlem.value == "+"){
            a = sayılar.reduce((acc, val) => acc + val, 0);
        }
        if (işlem.value == "-") {
            for (let i = 1; i < sayılar.length; i++) {
                a -= sayılar[i];
            }
        }
        if (işlem.value == "/") {
            for (let i = 1; i < sayılar.length; i++) {
                a /= sayılar[i];
            }
        }
        if (işlem.value == "*") {
            for (let i = 1; i < sayılar.length; i++) {
                a *= sayılar[i];
            }
        }
        paragraf.innerHTML = a;
        işlem.value = "";
        }
});
