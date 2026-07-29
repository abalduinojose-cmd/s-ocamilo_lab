/**
 * Reveal on scroll com IntersectionObserver.
 * Elementos .reveal ganham .is-visible ao entrar no viewport;
 * o stagger é controlado pela custom property --stagger no CSS.
 */
export function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  els.forEach((el) => observer.observe(el));
}
