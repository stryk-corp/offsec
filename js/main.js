(function () {
  var s = window.SITE;
  document.querySelectorAll("[data-t]").forEach(function (el) {
    el.textContent = s[el.getAttribute("data-t")] || "";
  });
  document.title = s.productName + " | " + document.title;

  var buy = document.getElementById("buy");
  if (buy) {
    buy.href = s.paymentLink;
    if (s.paymentLink.indexOf("PASTE_") === 0) {
      buy.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Add your payment page URL in js/config.js first.");
      });
    }
  }

  var dl = document.getElementById("dl");
  if (dl) {
    var params = new URLSearchParams(location.search);
    var ok = !s.successParam || params.has(s.successParam);
    document.getElementById(ok ? "granted" : "denied").hidden = false;
    dl.href = s.downloadPath;
  }

  var mail = document.getElementById("mail");
  if (mail) { mail.href = "mailto:" + s.supportEmail; mail.textContent = s.supportEmail; }
})();
