(function() {
  'use strict';
  console.log("is this working?");
  new MutationObserver((ml, ov) => {
    console.log(ml);
    console.log(ov);
  }).observe((document.getElementById("temperature")), {childList: true, attributes: true, subtree: true});
}());

// can you write me an example of using a mutation observer to track changes to a div