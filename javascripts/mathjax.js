/*
  MathJax configuration for MkDocs Material with pymdownx.arithmatex.
  Ensures formulas render on initial load and after client-side navigation.
*/

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
  }
};

// Re-typeset after Material's instant navigation swaps content
// Material for MkDocs exposes a global observable `document$` for page updates.
// Prefer it to ensure MathJax runs after instant navigation.
if (window.document$) {
  window.document$.subscribe(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  });
} else {
  // Fallbacks for older theme versions
  document.addEventListener("DOMContentLoaded", () => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  });
  document.addEventListener("md-content-rendered", () => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  });
}
