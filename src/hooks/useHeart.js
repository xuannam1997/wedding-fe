import { useEffect } from "react";

const useHeart = () => {
  useEffect(() => {
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      things = [],
      thingsCount = 8,
      mouse = {
        x: -100,
        y: -100,
      },
      minDist = 150;

    if (window.innerWidth <= 1200) {
      thingsCount = 8;
    }
    if (window.innerWidth <= 650) {
      thingsCount = 5;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var image = new Image();
    // image.src =
    //   "https://i.pinimg.com/originals/90/2c/2b/902c2bbccb72ca76cf3bbe95741174e9.png";
    image.src = "/images/heart.png";

    for (var i = 0; i < thingsCount; i++) {
      let opacity = Math.random() + 0.4;
      let thingWidth = 30;
      let thingHeight = 30;
      if (window.innerWidth <= 1200) {
        thingWidth = 25;
        thingHeight = 25;
      }

      let speed = Math.random() * 1 + 0.5;
      things.push({
        width: thingWidth,
        height: thingHeight,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - thingHeight,
        speed: speed,
        vY: speed,
        vX: 0,
        d: Math.random() * 1.2 - 0.6, // wind or something like that
        stepSize: Math.random() / 20,
        step: 0,
        angle: Math.random() * 180 - 90,
        rad: Math.random(),
        opacity: 1,
        _ratate: Math.random(), // ratate 正負
      });
    }

    function drawThings() {
      things.map((thing) => {
        ctx.beginPath();
        thing.rad = (thing.angle * Math.PI) / 180;
        ctx.save();
        var cx = thing.x + thing.width / 2;
        var cy = thing.y + thing.height / 2;
        ctx.globalAlpha = thing.opacity;
        ctx.setTransform(
          Math.cos(thing.rad),
          Math.sin(thing.rad),
          -Math.sin(thing.rad),
          Math.cos(thing.rad),
          cx - cx * Math.cos(thing.rad) + cy * Math.sin(thing.rad),
          cy - cx * Math.sin(thing.rad) - cy * Math.cos(thing.rad)
        );
        ctx.drawImage(image, thing.x, thing.y, thing.width, thing.height);
        ctx.restore();
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawThings();
    }

    function update() {
      things.map((thing) => {
        var dist = Math.sqrt(
          (thing.x - mouse.x) ** 2 + (thing.y - mouse.y) ** 2
        );

        if (dist < minDist) {
          var force = minDist / (dist * dist),
            xcomp = (mouse.x - thing.x) / dist,
            ycomp = (mouse.y - thing.y) / dist,
            deltaV = force * 2; // deplay when hover mouse

          thing.vX -= deltaV * xcomp;
          thing.vY -= deltaV * ycomp;

          if (thing.d * xcomp > 0) {
            thing.d = 0 - thing.d;
          }
        } else {
          thing.vX *= 0.98;

          if (thing.vY < thing.speed) {
            thing.vY = thing.speed;
          }

          thing.vX +=
            Math.cos((thing.step += Math.random() * 0.05)) * thing.stepSize;
        }

        thing.y += thing.vY;
        thing.x += thing.vX + thing.d;

        var _angle = Math.random() + 0.2;
        // stuff.angle += _angle;
        if (thing._ratate == 0) {
          thing.angle += _angle;
        } else {
          thing.angle -= _angle;
        }

        if (thing.y > canvas.height) {
          reset(thing);
        }

        if (thing.x > canvas.width || thing.x < 0 - thing.width) {
          reset(thing);
        }
      });
    }

    function reset(thing) {
      let thingWidth = 30;
      let thingHeight = 30;
      if (window.innerWidth <= 1200) {
        thingWidth = 25;
        thingHeight = 25;
      }

      thing.opacity = 1;
      thing.width = thingHeight;
      thing.height = thingHeight;
      thing.x = Math.floor(Math.random() * canvas.width);
      thing.y = 0 - thing.height;
      thing.speed = Math.random() * 1 + 0.5;
      thing.vY = thing.speed;
      thing.vX = 0;
      // thing.angle = 0;
      // thing.size = 0;
      thing._ratate = Math.random();
    }

    canvas.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();
  }, []);
};

export default useHeart;
