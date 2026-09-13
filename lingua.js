// Sceglie la lingua da mostrare.
//
// Le due versioni stanno tutte e due nella pagina, e si mostra quella del
// browser. Senza JavaScript si vedono entrambe, in fila — brutto ma leggibile,
// che è l'ordine di priorità giusto per una pagina che qualcuno apre per
// sapere se ci si può fidare.
(function () {
  var sezioni = document.querySelectorAll("[data-lingua]");
  var bottoni = document.querySelectorAll(".lingue button");
  if (!sezioni.length || !bottoni.length) return;

  function mostra(scelta) {
    sezioni.forEach(function (sezione) {
      sezione.hidden = sezione.dataset.lingua !== scelta;
    });
    bottoni.forEach(function (bottone) {
      bottone.setAttribute("aria-pressed", String(bottone.dataset.lingua === scelta));
    });
    document.documentElement.lang = scelta;
  }

  bottoni.forEach(function (bottone) {
    bottone.addEventListener("click", function () {
      mostra(bottone.dataset.lingua);
    });
  });

  var preferita = (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en";
  mostra(preferita);
})();
