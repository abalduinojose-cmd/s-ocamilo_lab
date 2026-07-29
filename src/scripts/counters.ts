/**
 * Contadores animados ([data-counter="valor final"]).
 * Animação via requestAnimationFrame com ease-out; respeita
 * prefers-reduced-motion mostrando o valor final direto.
 */
export function initCounters(): void {
  const els = document.querySelectorAll<HTMLElement>("[data-counter]");
  if (!els.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animate = (el: HTMLElement) => {
    const target = Number(el.dataset.counter ?? "0");
    if (reduced) {
      el.textContent = String(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 },
  );

  els.forEach((el) => observer.observe(el));
}
