(function () {
  "use strict";
  const HIST_SIZE = 200;
  let dataSet = {};

  function updateWidget(canvas, id) {
    const ctx = canvas.getContext("2d");
    const WIDTH = canvas.getBoundingClientRect().width;
    const HEIGHT = canvas.getBoundingClientRect().height;

    const ymin = { humidity: 0, temperature: 0, gas: 0, ultrasonic: 0 }[id];
    const ymax = { humidity: 100, temperature: 50, gas: 3000, ultrasonic: 120 }[
      id
    ];
    const xscale = WIDTH / HIST_SIZE;

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.beginPath();
    let xi = 0;
    let x, y;
    ctx.moveTo(0, HEIGHT + 1);
    for (const datum of dataSet[id]) {
      x = xscale * xi;
      y = HEIGHT * (1 - (datum - ymin) / (ymax - ymin));
      ctx.lineTo(x, y);
      ++xi;
    }
    ctx.lineTo(x, HEIGHT + 1);
    ctx.closePath();

    if (id == "humidity") {
      let grad = ctx.createLinearGradient(0, HEIGHT, 2, 0);
      grad.addColorStop(0, "white");
      grad.addColorStop(0.25, "#91f8ff");
      grad.addColorStop(1, "#3166c9");
      ctx.fillStyle = grad;
      ctx.strokeStyle = "black";
    } else if (id == "temperature") {
      let grad = ctx.createLinearGradient(0, HEIGHT, 2, 0);
      grad.addColorStop(0, "#00aaff");
      grad.addColorStop(0.25, "#66ccff");
      grad.addColorStop(0.5, "white");
      grad.addColorStop(0.75, "#ffaa00");
      grad.addColorStop(1, "#ff0000");
      ctx.fillStyle = grad;
      ctx.strokeStyle = "black";
    } else if (id == "gas") {
      let grad = ctx.createLinearGradient(0, HEIGHT, 2, 0);
      grad.addColorStop(0, "white");
      grad.addColorStop(1, "#aaa");
      ctx.fillStyle = grad;
      ctx.strokeStyle = "black";
    } else if (id == "ultrasonic") {
      let grad = ctx.createLinearGradient(0, HEIGHT, 2, 0);
      grad.addColorStop(0, "white");
      grad.addColorStop(0.25, "#aaa");
      ctx.fillStyle = grad;
      ctx.strokeStyle = "black";
    }

    ctx.fill();
    ctx.stroke();
  }

  ["humidity", "temperature", "gas", "ultrasonic"].map((tag) => {
    dataSet[tag] = [];
    new MutationObserver((mut, obs) => {
      const id = mut[0].target.id;
      const datum = Number(mut[0].target.textContent);
      dataSet[id].push(datum);
      if (dataSet[id].length > HIST_SIZE) {
        dataSet[id].shift();
      }
      updateWidget(document.getElementById(`${id}-widget`), id);
    }).observe(document.getElementById(tag), {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true,
    });
  });
})();
