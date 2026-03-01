/**
 * WSOGMM — Email obfuscation and utilities
 *
 * To change the contact email: edit the encoded parts below.
 * Format: atob() decodes base64. Use btoa("your@email.com") in console to encode.
 */
(function () {
  "use strict";

  // Email (base64 encoded to avoid bot scraping). Change via: btoa("your@email.com")
  var parts = ["dGVhbUB3c29nbW0uY29t"];

  function initEmail() {
    var link = document.getElementById("email-link");
    if (!link) return;

    try {
      var email = atob(parts[0]);
      link.href = "mailto:" + email;
      // Preserve "Send an Email" label if link has children (e.g. icon + text)
      if (!link.querySelector("svg")) {
        link.textContent = email;
      }
    } catch (e) {
      link.href = "mailto:team@wsogmm.com";
      if (!link.querySelector("svg")) {
        link.textContent = "team@wsogmm.com";
      }
    }
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  initEmail();
  initYear();
})();
