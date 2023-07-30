(function () {
  "use strict";
  const HIST_SIZE = 50;
  let dataSet = {};
  ["humidity", "temperature", "gas", "ultrasonic"].map((tag) => {
    dataSet[tag] = [];
    new MutationObserver((mut, obs) => {
      const id = mut.target.id;
      const datum = Number(mut.target.textContent);
      dataSet[id].push(datum);
      if (dataSet[id].length > HIST_SIZE) {
        dataSet[id].shift();
      }
      updateDashboard();
    }).observe(document.getElementById(tag), {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true,
    });
  });
})();
