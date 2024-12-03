document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("backgroundAudio");
    audio.muted = false; // Ensure the audio is unmuted

    document.body.addEventListener("click", function () {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    });

    const messages = [
        "Noo (T ^ T)", "Are you sure kub p mimi ?", "Really Sure jing lorr😢",
        "I'll be very sad naaa😕", "You're the sunshine of my life nakubb 💐",
        "Your smile is my favorite 🥰", "You make my heart skip a beat loeiii >< 💓",
        "nakubb mimi Please🥺", "I'm gonna cry naaa..😭",
        "You are breaking my heart😭💔"
    ];
    let messageIndex = 0;

    document.getElementById("noButton").addEventListener("click", function () {
        var yesButton = document.querySelector('button[onclick*="thankyou.html"]');
        var currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = currentFontSize + 10 + "px"; // Increase font size by 10px

        this.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    });
  });

        
        var c = document.getElementById('alx');

  var b = document.body;
  var a = c.getContext('2d');


  e = [];
  h = [];
  WIDTH = c.width = innerWidth;
  HEIGHT = c.height = innerHeight;
  v = 32 + 16 + 8;
  R = Math.random;
  C = Math.cos;
  Y = 6.3;

  for (i = 0; i < Y ; i += 0.2) 
    h.push([WIDTH / 2  + 210 * Math.pow(Math.sin(i), 3), 
      HEIGHT / 2  + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

  for (i = 0; i < Y  ; i += 0.4) 
    h.push([WIDTH / 2  + 150 * Math.pow(Math.sin(i), 3), 
      HEIGHT / 2  + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

  for (i = 0; i < Y  ; i += 0.8) 
    h.push([WIDTH / 2  + 90 * Math.pow(Math.sin(i), 3), 
      HEIGHT / 2  + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

  for (i = 0; i < v;) {
      x = R() * WIDTH;
      y = R() * HEIGHT;
      H = 80 * (i / v) + Math.random * 100;
      S = 40 * R() + 60;
      B = 60 * R() + 20;
      f = [];
      for (k = 0; k < v;) f[k++] = {
          x: x,
          y: y,
          X: 0,
          Y: 0,
          R: 1 - k / v + 1,
          S: R() + 1,
          q: ~~(R() * v),
          D: 2 * (i % 2) - 1,
          F: 0.2 * R() + 0.7,
          f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
      };
      e[i++] = f
  }

  function path(d) {
      a.fillStyle = d.f;
      a.beginPath();
      a.arc(d.x, d.y, d.R, 0, Y, 1);
      a.closePath();
      a.fill()
  }
  setInterval(function () {
      // a.fillStyle = "rgba(0,0,0,.2)";
      a.clearRect(0, 0, WIDTH, HEIGHT);
      for (i = v; i--;) {
          f = e[i];
          u = f[0];
          q = h[u.q];
          D = u.x - q[0];
          E = u.y - q[1];
          G = Math.sqrt(D * D + E * E);
          10 > G && (0.95 < R() ? u.q = ~~ (R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
          u.X += -D / G * u.S;
          u.Y += -E / G * u.S;
          u.x += u.X;
          u.y += u.Y;
          path(u);
          u.X *= u.F;
          u.Y *= u.F;
          for (k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N)
      }
  }, 25);