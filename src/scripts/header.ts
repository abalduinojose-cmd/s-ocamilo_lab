/**
 * Comportamentos do header: blur ao rolar, menu mobile e scroll-spy
 * (destaca o link da seção visível).
 */
export function initHeader(): void {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  // Blur/fundo ao rolar
  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const setMenu = (open: boolean) => {
    if (!menu || !toggle) return;
    menu.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle?.addEventListener("click", () => setMenu(!menu?.classList.contains("is-open")));
  menu?.querySelectorAll("[data-menu-close]").forEach((el) => el.addEventListener("click", () => setMenu(false)));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  // Scroll-spy: marca o link ativo conforme a seção visível
  const links = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((a) => {
    const id = a.getAttribute("href")?.slice(1);
    if (id) links.set(id, a);
  });

  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("is-active"));
          links.get(entry.target.id)?.classList.add("is-active");
        }
      }
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
}
