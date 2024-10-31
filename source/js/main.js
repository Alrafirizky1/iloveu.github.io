$(document).ready(function () {
  const particlesJSON = {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff0000" // Optional: Color of hearts
      },
      "shape": {
        "type": "image",
        "image": {
          "src": "https://cdn-icons-png.flaticon.com/512/833/833472.png", // URL for heart image
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 20,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 5,
          "sync": false
        }
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  };

  particlesJS("particles-js", particlesJSON);

  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  function startTimeSalam() {
    let ucapanSalam = "";
    const todaySalam = new Date();
    const hSalam = todaySalam.getHours();
    const mSalam = checkTime(todaySalam.getMinutes());
    const sSalam = checkTime(todaySalam.getSeconds());

    if (hSalam < 4) {
      ucapanSalam = "Selamat Malam Ichaa";
      kata1 = "Jangan tidur terlalu larut";
      kata2 = "Semoga mimpi indah <i class='fa fa-heart'></i>";
    } else if (hSalam < 11) {
      ucapanSalam = "Selamat Pagi Ichaa sayangg";
      kata1 = "Semangat kerjanya yaaa dan,";
      kata2 = "Semoga hari hari mu menyenangkan <i class='fa fa-heart'></i>";
    } else if (hSalam < 16) {
      ucapanSalam = "Selamat Siang Ichaaa";
      kata1 = "Jangan lupa istirahat yaa";
      kata2 = "Makan Nasi jangan lupaa. I LOVE U SM <i class='fa fa-heart'></i>";
    } else if (hSalam < 20) {
      ucapanSalam = "Selamat Sore ayanggg";
      kata1 = "Jangan lupa mandi hahaha";
      kata2 = "siapa tau nanti tiba tiba ku ajak jalan HAHAHA <i class='fa fa-heart'></i>";
    } else {
      ucapanSalam = "Selamat Malam cantiku cintaku duniakuu";
      kata1 = "Jangan tidur Terlalu larut";
      kata2 = "Sleep tight, and I LOVE U <i class='fa fa-heart'></i>";
    }

    var typed = new Typed('h3', {
      strings: [ucapanSalam, kata1, kata2],
      smartBackspace: true,
      showCursor: false,
      typeSpeed: 50,
    });
  }

  window.onload = startTimeSalam();
});
