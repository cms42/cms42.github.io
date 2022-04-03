<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>function a() {
  var e = Date.now();
  try {
    var t = +sessionStorage._ts || 0;
    if ((sessionStorage._ts = e) - t < 100) return setTimeout(a, 5e3);
  } catch (r) {}
  location.reload();
}
function i(e) {
  n(e.message);
}
function n(e) {
  t.innerHTML = e;
}
!(function s() {
  if (self.isSecureContext)
    if (self.ReadableStream) {
      var e = navigator.serviceWorker;
      if (e)
        e.register(
          (function r() {
            return location.pathname
              .replace(/\/-+https?:.+/, "")
              .replace(/\w+\.\w+$/, "")
              .replace(/\/*$/, "/");
          })() + "sw.js"
        )
          .then(a)
          ["catch"](i);
      else {
        var t = navigator.userAgent;
        /Firefox/.test(t)
          ? n("本网站不支持 FireFox 隐身模式")
          : /iPhone|iPad/.test(t) && n("iOS 上请使用 Safari 浏览器");
      }
    } else n("请使用最新的 HTML5 浏览器");
  else n("本程序需要 HTTPS 站点");
})();
