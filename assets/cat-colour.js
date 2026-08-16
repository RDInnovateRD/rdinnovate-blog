/* Auto-colour for categories that have no hand-tuned CSS.
 *
 * Any element carrying data-cat is checked: if its --c1 still resolves to the
 * :root fallback, no bespoke rule exists for that slug, so we derive a stable
 * gradient from the slug itself. Same slug always yields the same colour, and
 * curated categories are left untouched.
 */
(function () {
  var FALLBACK = '#7a2224';           // must match :root --c1 in style.css
  var els = document.querySelectorAll('[data-cat]');
  if (!els.length) return;

  // FNV-style hash -> 0..359
  function hueOf(slug) {
    var h = 2166136261;
    for (var i = 0; i < slug.length; i++) {
      h ^= slug.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return h % 360;
  }

  // keep generated hues clear of the brand maroon (~0deg) so cards never
  // read as "broken default"
  function shift(h) {
    return (h < 24 || h > 336) ? (h + 40) % 360 : h;
  }

  var cache = {};

  Array.prototype.forEach.call(els, function (el) {
    var slug = el.getAttribute('data-cat');
    if (!slug) return;

    var current = getComputedStyle(el).getPropertyValue('--c1').trim().toLowerCase();
    if (current && current !== FALLBACK) return;   // curated rule exists

    if (!cache[slug]) {
      var h = shift(hueOf(slug));
      cache[slug] = {
        c1: 'hsl(' + h + ',58%,36%)',
        c2: 'hsl(' + ((h + 34) % 360) + ',72%,52%)',
        c3: 'hsl(' + ((h + 348) % 360) + ',56%,20%)'
      };
    }
    var c = cache[slug];
    el.style.setProperty('--c1', c.c1);
    el.style.setProperty('--c2', c.c2);
    el.style.setProperty('--c3', c.c3);
  });
})();
