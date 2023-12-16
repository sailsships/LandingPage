function bbscriptOnClick() {
  var allowedHistorylength = 2;

  if (history.length < allowedHistorylength) {
    history.pushState(null, null, '#');
  }

  window.onpopstate = function (e) {
    if (e.state !== null) {
      document.title = e.state.title;
      load(e.state.url);
    } else {
      location.replace("https://facket-openting.com/55f1447f-10b4-4bea-af66-878ed9f0559e");
    }
  }
}
