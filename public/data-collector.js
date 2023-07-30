(function () {
  "use strict";
  const HIST_SIZE = 50;
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
    if (id === "humidity" || id === "temperature") {
      const datum = dataSet[id][dataSet[id].length - 1];
      const PI4 = Math.PI / 4;
      let t = (datum - ymin) / (ymax - ymin);
      t = (1 - t) * 5 * PI4 - t * PI4;
      const r = WIDTH * 0.8;
      const xm = WIDTH / 2;
      const ym = HEIGHT / 2;
      ctx.beginPath();
      ctx.moveTo(xm, ym);
      console.log(xm, ym);
      console.log(r * Math.cos(t), r * Math.sin(t));
      ctx.lineTo(xm + r * Math.cos(t), ym - r * Math.sin(t));
      ctx.stroke();
    } else {
      ctx.beginPath();
      let xi = 0;
      let first = true;
      for (const datum of dataSet[id]) {
        let x = xscale * xi;
        let y = HEIGHT * (1 - (datum - ymin) / (ymax - ymin));
        console.log(x,y);
        if (first) {
          ctx.moveTo(x, y);
          first = false;
        } else {
          ctx.lineTo(x, y);
        }
        ++xi;
      }
      ctx.stroke();
    }
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
