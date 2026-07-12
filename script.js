/* Sahara Creative World — interactions & i18n.
   Everything is progressive: without JS the site remains fully readable in
   English (static content), and the language toggle is hidden because it
   would be inert. Reveal animations only activate when <html> has the "js"
   class AND the user has not requested reduced motion. */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ==================== I18N ====================
     Both languages carry every user-facing string: visible text, aria-labels,
     alt text, form errors, <title> and meta description (WCAG 3.1.1 — the
     lang attribute follows the displayed language). */

  var I18N = {
    "meta.title": {
      en: "Sahara Creative World — Creative & Technology Agency in Agadir",
      fr: "Sahara Creative World — Agence créative & technologique à Agadir"
    },
    "meta.description": {
      en: "Sahara Creative World (SCW): a multidisciplinary agency in Agadir, Morocco. Audiovisual production, tech & digital and marketing.",
      fr: "Sahara Creative World (SCW) : agence multidisciplinaire à Agadir, Maroc. Production audiovisuelle, tech & digital et marketing."
    },
    "skip": { en: "Skip to main content", fr: "Aller au contenu principal" },
    "nav.label": { en: "Main navigation", fr: "Navigation principale" },
    "nav.logoAlt": {
      en: "Sahara Creative World — back to home",
      fr: "Sahara Creative World — retour à l'accueil"
    },
    "nav.menu": { en: "Menu", fr: "Menu" },
    "nav.accueil": { en: "Home", fr: "Accueil" },
    "nav.services": { en: "Services", fr: "Services" },
    "nav.apropos": { en: "About", fr: "À propos" },
    "nav.realisations": { en: "Our work", fr: "Réalisations" },
    "nav.contact": { en: "Contact", fr: "Contact" },

    "hero.kicker": {
      en: "Creative & technology agency — Agadir, Morocco",
      fr: "Agence créative & technologique — Agadir, Maroc"
    },
    "hero.l1": { en: "Create.", fr: "Créer." },
    "hero.l2": { en: "Produce.", fr: "Produire." },
    "hero.l3": { en: "Amplify.", fr: "Faire rayonner." },
    "hero.desc": {
      en: "From film sets to software, Sahara Creative World brings audiovisual production, technology and communication together under one roof.",
      fr: "Du plateau de tournage au logiciel, Sahara Creative World réunit sous un même toit la production audiovisuelle, la technologie et la communication."
    },
    "hero.cta1": { en: "Let's talk about your project", fr: "Discutons de votre projet" },
    "hero.cta2": { en: "Explore our services", fr: "Découvrir nos services" },

    "services.kicker": { en: "What we do", fr: "Ce que nous faisons" },
    "services.titre": {
      en: "Three divisions, one standard: excellence",
      fr: "Trois pôles, une seule exigence : l'excellence"
    },
    "services.av.titre": { en: "Audiovisual & production", fr: "Audiovisuel & production" },
    "services.av.desc": {
      en: "Film, VR/AR, motion design, podcast, post-production — stories crafted for the screen, every screen.",
      fr: "Cinéma, VR/AR, motion design, podcast, postproduction — des histoires taillées pour l'écran, tous les écrans."
    },
    "services.mkt.titre": { en: "Marketing & communication", fr: "Marketing & communication" },
    "services.mkt.desc": {
      en: "SEO/SEA, social media, influencer marketing — visibility you can measure.",
      fr: "SEO/SEA, réseaux sociaux, marketing d'influence — une visibilité qui se mesure."
    },
    "services.tech.titre": { en: "Tech & digital", fr: "Tech & digital" },
    "services.tech.desc": {
      en: "Software development, CI/CD, artificial intelligence and WCAG 2.2 accessibility audits — robust products, accessible to everyone.",
      fr: "Développement logiciel, CI/CD, intelligence artificielle et audits d'accessibilité WCAG 2.2 — des produits robustes, accessibles à tous."
    },

    "apropos.kicker": { en: "Who we are", fr: "Qui sommes-nous" },
    "apropos.titre": { en: "Born in Agadir, facing the world", fr: "Née à Agadir, tournée vers le monde" },
    "apropos.p1": {
      en: "Sahara Creative World is a multidisciplinary agency based in Agadir, in the heart of the Souss region. A single-shareholder limited company (SARL AU), it was designed from day one as an ecosystem: a place where a film, a web platform and a campaign can all grow out of the same conversation.",
      fr: "Sahara Creative World est une agence multidisciplinaire installée à Agadir, au cœur du Souss. SARL à associé unique, elle a été pensée dès le départ comme un écosystème : un lieu où un film, une plateforme web et une campagne peuvent naître de la même conversation."
    },
    "apropos.p2": {
      en: "This versatility is not a lack of focus — it is our method. Because our directors talk to our developers and our marketers, your projects gain the coherence they usually lose between multiple vendors.",
      fr: "Cette polyvalence n'est pas une dispersion — c'est notre méthode. Parce que nos réalisateurs parlent aux développeurs et aux marketeurs, vos projets gagnent en cohérence ce qu'ils perdent habituellement entre plusieurs prestataires."
    },
    "apropos.p3": {
      en: "From film production to marketing, by way of software, we hold on to a single ambition: to make Agadir a starting point, never a limit.",
      fr: "De la production cinématographique au marketing, en passant par le logiciel, nous cultivons une seule ambition : faire d'Agadir un point de départ, jamais une limite."
    },
    "apropos.imgAlt": {
      en: "Low-angle view of modern office towers against a blue sky, a symbol of international ambition.",
      fr: "Contre-plongée sur des tours de bureaux modernes se détachant sur un ciel bleu, symbole d'ambition internationale."
    },

    "real.kicker": { en: "Our projects", fr: "Nos travaux" },
    "real.titre": { en: "Our work", fr: "Réalisations" },
    "real.sub": {
      en: "Our first case studies are on their way. Here is how they will live here.",
      fr: "Nos premières études de cas arrivent bientôt. Voici comment elles vivront ici."
    },
    "real.badge": { en: "Coming soon", fr: "À venir" },
    "real.badge2": { en: "Coming soon", fr: "À venir" },
    "real.badge3": { en: "Coming soon", fr: "À venir" },
    "real.c1.titre": { en: "Case study — Audiovisual", fr: "Étude de cas — Audiovisuel" },
    "real.c1.desc": {
      en: "Full production, from script to post-production.",
      fr: "Production complète, du script à la postproduction."
    },
    "real.c2.titre": { en: "Case study — Digital", fr: "Étude de cas — Digital" },
    "real.c2.desc": {
      en: "A web platform with continuous, automated delivery.",
      fr: "Une plateforme web livrée en continu, de façon automatisée."
    },
    "real.c3.titre": { en: "Case study — Marketing", fr: "Étude de cas — Marketing" },
    "real.c3.desc": {
      en: "A measurable social media and SEO campaign.",
      fr: "Une campagne réseaux sociaux et SEO aux résultats mesurables."
    },

    "clients.kicker": { en: "References", fr: "Références" },
    "clients.titre": { en: "They put their trust in us", fr: "Ils nous ont fait confiance" },

    "contact.kicker": { en: "Let's talk", fr: "Parlons-en" },
    "contact.titre": { en: "Have a project in mind?", fr: "Un projet en tête ?" },
    "contact.desc": {
      en: "Tell us your idea — a member of the team will get back to you within 48 business hours.",
      fr: "Racontez-nous votre idée — un membre de l'équipe vous répond sous 48 heures ouvrées."
    },
    "contact.tel": { en: "Prefer to talk?", fr: "Vous préférez de vive voix ?" },
    "form.hint": { en: "All fields are required.", fr: "Tous les champs sont obligatoires." },
    "form.nom": { en: "Full name", fr: "Nom complet" },
    "form.email": { en: "Email address", fr: "Adresse e-mail" },
    "form.message": { en: "Your message", fr: "Votre message" },
    "form.envoyer": { en: "Send message", fr: "Envoyer le message" },

    /* Errors are stored as keys so an already-displayed error re-renders in
       the right language when the user switches (WCAG 3.3.1/3.3.3). */
    "erreur.nom.vide": {
      en: "Error: please enter your name.",
      fr: "Erreur : veuillez indiquer votre nom."
    },
    "erreur.email.vide": {
      en: "Error: please enter your email address.",
      fr: "Erreur : veuillez indiquer votre adresse e-mail."
    },
    "erreur.email.invalide": {
      en: "Error: this email address looks incomplete (example: name@domain.com).",
      fr: "Erreur : l'adresse e-mail semble incomplète (exemple : nom@domaine.com)."
    },
    "erreur.message.vide": {
      en: "Error: please write your message.",
      fr: "Erreur : veuillez écrire votre message."
    },
    "statut.envoi": {
      en: "Sending your message…",
      fr: "Envoi de votre message…"
    },
    "statut.erreur": {
      en: "Error: your message could not be sent. Please try again, or write to us directly at saharacreativeworld@gmail.com.",
      fr: "Erreur : votre message n'a pas pu être envoyé. Réessayez, ou écrivez-nous directement à saharacreativeworld@gmail.com."
    },
    "statut.succes": {
      en: "Thank you! Your message has been received. We will reply within 48 business hours.",
      fr: "Merci ! Votre message a bien été enregistré. Nous vous répondrons sous 48 heures ouvrées."
    },

    "footer.desc": {
      en: "A multidisciplinary creative and technology agency.",
      fr: "Agence créative et technologique multidisciplinaire."
    },
    "footer.coordonnees": { en: "Contact details", fr: "Coordonnées" },
    "footer.ville": { en: "Agadir, Morocco", fr: "Agadir, Maroc" },
    "footer.navigation": { en: "Navigation", fr: "Navigation" },
    "footer.accueil": { en: "Home", fr: "Accueil" },
    "footer.services": { en: "Services", fr: "Services" },
    "footer.apropos": { en: "About", fr: "À propos" },
    "footer.realisations": { en: "Our work", fr: "Réalisations" },
    "footer.contact": { en: "Contact", fr: "Contact" },
    "footer.legal": {
      en: "© 2026 Sahara Creative World. All rights reserved.",
      fr: "© 2026 Sahara Creative World. Tous droits réservés."
    }
  };

  var langueActive = "en";
  var langToggle = document.querySelector(".lang-toggle");

  function t(cle) {
    return (I18N[cle] && I18N[cle][langueActive]) || "";
  }

  /* Swaps text and attributes IN PLACE: no node is created, moved or removed,
     so landmark structure, tab order and keyboard focus are untouched. */
  function appliquerLangue(langue) {
    langueActive = langue;

    document.documentElement.setAttribute("lang", langue);
    document.title = t("meta.title");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description"));

    /* SEO : chaque état de langue se canonise lui-même (?lang=fr pour le
       français) et l'URL reste partageable. replaceState ne déplace ni le
       focus ni le défilement. */
    var canonique = document.querySelector('link[rel="canonical"]');
    if (canonique) {
      var base = canonique.href.split("?")[0];
      canonique.href = langue === "fr" ? base + "?lang=fr" : base;
    }
    try {
      var url = new URL(window.location.href);
      var actuel = url.searchParams.get("lang");
      var voulu = langue === "fr" ? "fr" : null;
      if (actuel !== voulu) {
        if (voulu) { url.searchParams.set("lang", voulu); }
        else { url.searchParams.delete("lang"); }
        window.history.replaceState(null, "", url);
      }
    } catch (e) { /* file:// ou API indisponible : sans conséquence */ }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    /* The toggle offers the OTHER language; its accessible name and lang
       attribute are in that target language so screen readers pronounce it
       correctly. The visible text ("FR"/"EN") appears in the accessible
       name (WCAG 2.5.3 Label in Name). */
    if (langue === "en") {
      langToggle.textContent = "FR";
      langToggle.setAttribute("aria-label", "Passer en français — FR");
      langToggle.setAttribute("lang", "fr");
    } else {
      langToggle.textContent = "EN";
      langToggle.setAttribute("aria-label", "Switch to English — EN");
      langToggle.setAttribute("lang", "en");
    }

    /* Re-render any error/status currently displayed, in the new language */
    champs.forEach(function (champ) {
      if (champ.cleErreur) champ.erreur.textContent = t(champ.cleErreur);
    });
    if (cleStatut) statut.textContent = t(cleStatut);

    try { localStorage.setItem("scw-langue", langue); } catch (e) { /* stockage indisponible */ }
  }

  /* ---------- Sticky nav: translucent backdrop once scrolled ---------- */

  var header = document.querySelector(".site-header");

  function onScroll() {
    header.classList.toggle("est-defilee", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Same-hash anchor fallback ----------
     Clicking a link whose hash already matches location.hash does nothing in
     some browsers (the "Home doesn't scroll back to top" bug). Re-scroll
     manually; scrollIntoView honours CSS scroll-behavior and scroll-margin. */

  document.querySelectorAll('a[href^="#"]').forEach(function (lien) {
    lien.addEventListener("click", function () {
      if (this.getAttribute("href") === window.location.hash) {
        var cible = document.querySelector(this.getAttribute("href"));
        if (cible) cible.scrollIntoView();
      }
    });
  });

  /* ---------- Mobile menu ---------- */

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

  /* Escape closes the menu and returns focus to the button (no keyboard trap) */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("est-ouvert")) {
      fermerMenu();
      toggle.focus();
    }
  });

  /* Close the menu after an anchor is chosen */
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) fermerMenu();
  });

  /* ---------- Scroll reveal ---------- */

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

    /* If the user enables reduced motion mid-visit */
    reduceMotion.addEventListener("change", function (e) {
      if (e.matches) toutReveler();
    });
  }

  /* ---------- Contact form: accessible validation ----------
     Errors are described in text (an "Error:" prefix), linked to the field
     via aria-describedby and flagged with aria-invalid — never by colour
     alone (WCAG 1.4.1, 3.3.1, 3.3.3). Validators return message KEYS so the
     displayed language always matches the page language. */

  var form = document.querySelector(".contact-form");
  var statut = form.querySelector(".form-status");
  var cleStatut = "";

  var champs = [
    {
      input: document.getElementById("champ-nom"),
      erreur: document.getElementById("erreur-nom"),
      cleErreur: "",
      valider: function (v) {
        if (v.trim() === "") return "erreur.nom.vide";
        return "";
      }
    },
    {
      input: document.getElementById("champ-email"),
      erreur: document.getElementById("erreur-email"),
      cleErreur: "",
      valider: function (v) {
        if (v.trim() === "") return "erreur.email.vide";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "erreur.email.invalide";
        return "";
      }
    },
    {
      input: document.getElementById("champ-message"),
      erreur: document.getElementById("erreur-message"),
      cleErreur: "",
      valider: function (v) {
        if (v.trim() === "") return "erreur.message.vide";
        return "";
      }
    }
  ];

  function validerChamp(champ) {
    champ.cleErreur = champ.valider(champ.input.value);
    var enErreur = champ.cleErreur !== "";

    champ.erreur.textContent = enErreur ? t(champ.cleErreur) : "";
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
    /* Revalidate on blur only if the field was already in error or has
       content, so typing is never interrupted. */
    champ.input.addEventListener("blur", function () {
      if (champ.input.getAttribute("aria-invalid") === "true" || champ.input.value !== "") {
        validerChamp(champ);
      }
    });
  });

  /* Envoi réel via Web3Forms (https://web3forms.com — fonctionne depuis un
     site 100 % statique comme GitHub Pages). Pour activer : créer une clé
     d'accès gratuite sur web3forms.com avec l'adresse de réception, puis la
     coller ci-dessous. Tant que la clé est vide, l'envoi est simulé. */
  var WEB3FORMS_ACCESS_KEY = "e90de7cb-cebd-46bd-8491-ae683f2e08ac";

  var boutonEnvoi = form.querySelector(".btn-submit");

  function afficherStatut(cle) {
    cleStatut = cle;
    statut.textContent = cle ? t(cle) : "";
    statut.classList.toggle("est-erreur", cle === "statut.erreur");
  }

  function reussirEnvoi() {
    form.reset();
    champs.forEach(function (champ) {
      champ.cleErreur = "";
      champ.input.removeAttribute("aria-invalid");
    });
    afficherStatut("statut.succes");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var premierInvalide = null;
    champs.forEach(function (champ) {
      var ok = validerChamp(champ);
      if (!ok && !premierInvalide) premierInvalide = champ.input;
    });

    if (premierInvalide) {
      afficherStatut("");
      premierInvalide.focus();
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === "") {
      /* Clé absente : comportement simulé (pré-production). */
      reussirEnvoi();
      return;
    }

    boutonEnvoi.disabled = true;
    afficherStatut("statut.envoi");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Nouveau message — saharacreativeworld",
        name: document.getElementById("champ-nom").value,
        email: document.getElementById("champ-email").value,
        message: document.getElementById("champ-message").value
      })
    }).then(function (reponse) {
      if (!reponse.ok) throw new Error("HTTP " + reponse.status);
      return reponse.json();
    }).then(function (donnees) {
      if (!donnees.success) throw new Error("refus du service");
      reussirEnvoi();
    }).catch(function () {
      afficherStatut("statut.erreur");
    }).finally(function () {
      boutonEnvoi.disabled = false;
    });
  });

  /* ---------- Language init & toggle ---------- */

  langToggle.addEventListener("click", function () {
    appliquerLangue(langueActive === "en" ? "fr" : "en");
    /* Focus stays on this button — no focus management needed because no
       node was added, removed or moved. */
  });

  /* Priorité : paramètre d'URL (?lang=fr — utilisé par les moteurs via les
     annotations hreflang), puis préférence enregistrée, puis anglais. */
  var languePreferee = "en";
  try {
    var langUrl = new URL(window.location.href).searchParams.get("lang");
    if (langUrl === "fr" || langUrl === "en") {
      languePreferee = langUrl;
    } else if (localStorage.getItem("scw-langue") === "fr") {
      languePreferee = "fr";
    }
  } catch (e) { /* stockage ou API indisponible */ }

  if (languePreferee !== "en") {
    appliquerLangue(languePreferee);
  }
})();
