/* Sahara Creative World — interactions.
   Tout est progressif : sans JS, le site reste entièrement lisible et
   navigable (les animations de révélation ne s'activent que si la classe
   « js » est présente sur <html>). */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Barre de navigation : fond translucide après défilement ---------- */

  var header = document.querySelector(".site-header");

  function onScroll() {
    header.classList.toggle("est-defilee", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-principal");

  function fermerMenu() {
    menu.classList.remove("est-ouvert");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var ouvert = menu.classList.toggle("est-ouvert");
    toggle.setAttribute("aria-expanded", String(ouvert));
  });

  /* Échap referme le menu et rend le focus au bouton (pas de piège clavier) */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("est-ouvert")) {
      fermerMenu();
      toggle.focus();
    }
  });

  /* Refermer le menu après le choix d'une ancre */
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) fermerMenu();
  });

  /* ---------- Révélation au défilement ---------- */

  var reveals = document.querySelectorAll(".reveal");

  function toutReveler() {
    reveals.forEach(function (el) { el.classList.add("est-visible"); });
  }

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    toutReveler();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("est-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });

    reveals.forEach(function (el) { observer.observe(el); });

    /* Si l'utilisateur active la réduction des animations en cours de visite */
    reduceMotion.addEventListener("change", function (e) {
      if (e.matches) toutReveler();
    });
  }

  /* ---------- Formulaire de contact : validation accessible ----------
     Les erreurs sont décrites en texte (préfixe « Erreur : »), reliées au
     champ via aria-describedby et signalées par aria-invalid — jamais par
     la couleur seule (WCAG 1.4.1, 3.3.1, 3.3.3). */

  var form = document.querySelector(".contact-form");
  var statut = form.querySelector(".form-status");

  var champs = [
    {
      input: document.getElementById("champ-nom"),
      erreur: document.getElementById("erreur-nom"),
      valider: function (v) {
        if (v.trim() === "") return "Erreur : veuillez indiquer votre nom.";
        return "";
      }
    },
    {
      input: document.getElementById("champ-email"),
      erreur: document.getElementById("erreur-email"),
      valider: function (v) {
        if (v.trim() === "") return "Erreur : veuillez indiquer votre adresse e-mail.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) {
          return "Erreur : l'adresse e-mail semble incomplète (exemple : nom@domaine.com).";
        }
        return "";
      }
    },
    {
      input: document.getElementById("champ-message"),
      erreur: document.getElementById("erreur-message"),
      valider: function (v) {
        if (v.trim() === "") return "Erreur : veuillez écrire votre message.";
        return "";
      }
    }
  ];

  function validerChamp(champ) {
    var message = champ.valider(champ.input.value);
    var enErreur = message !== "";

    champ.erreur.textContent = message;
    champ.input.setAttribute("aria-invalid", String(enErreur));
    champ.input.closest(".form-field").classList.toggle("a-erreur", enErreur);

    if (enErreur) {
      champ.input.setAttribute("aria-describedby", champ.erreur.id);
    } else {
      champ.input.removeAttribute("aria-describedby");
    }
    return !enErreur;
  }

  champs.forEach(function (champ) {
    /* Revalidation à la sortie du champ uniquement s'il était déjà en erreur,
       pour ne pas interrompre la saisie. */
    champ.input.addEventListener("blur", function () {
      if (champ.input.getAttribute("aria-invalid") === "true" || champ.input.value !== "") {
        validerChamp(champ);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var premierInvalide = null;
    champs.forEach(function (champ) {
      var ok = validerChamp(champ);
      if (!ok && !premierInvalide) premierInvalide = champ.input;
    });

    if (premierInvalide) {
      statut.textContent = "";
      premierInvalide.focus();
      return;
    }

    /* PLACEHOLDER : brancher ici l'envoi réel (backend ou service de
       formulaire) avant la mise en production. */
    form.reset();
    champs.forEach(function (champ) {
      champ.input.removeAttribute("aria-invalid");
    });
    statut.textContent = "Merci ! Votre message a bien été enregistré. Nous vous répondrons sous 48 heures ouvrées.";
  });
})();
