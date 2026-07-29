import { icons } from "../components/icons";
import { WA_LINKS } from "../data/site";

const NAV_ITEMS = [
  { href: "#inicio", label: "Início" },
  { href: "#exames", label: "Exames" },
  { href: "#clinica", label: "A Clínica" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#ultrassonografia", label: "Ultrassonografia" },
  { href: "#toxicologico", label: "Toxicológico" },
  { href: "#contato", label: "Contato" },
];

/** Logomarca oficial (public/logo-mark.png) + wordmark nos dois tons. */
export function logo(inverted = false): string {
  const inkCls = inverted ? "text-white" : "text-ink";
  return `
    <a href="#inicio" class="group flex items-center gap-2.5" aria-label="Labmed São Camilo, voltar ao início">
      <img
        src="/logo-mark.png"
        alt=""
        width="320"
        height="320"
        class="size-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span class="font-display leading-none">
        <span class="block text-[0.95rem] font-bold tracking-tight ${inkCls}">Labmed</span>
        <span class="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand">São Camilo</span>
      </span>
    </a>
  `;
}

export function header(): string {
  const links = NAV_ITEMS.map(
    (item) => `
      <li>
        <a href="${item.href}" class="nav-link text-[0.82rem] font-medium text-ink-soft transition-colors duration-200 hover:text-ink">
          ${item.label}
        </a>
      </li>
    `,
  ).join("");

  const mobileLinks = NAV_ITEMS.map(
    (item, i) => `
      <li class="mobile-link" style="--stagger: ${i}">
        <a href="${item.href}" class="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold text-ink transition-colors hover:text-brand" data-menu-close>
          ${item.label}
          <span class="text-brand">${icons.arrowUpRight("size-5")}</span>
        </a>
      </li>
    `,
  ).join("");

  return `
    <header id="site-header" class="fixed inset-x-0 top-0 z-50">
      <div class="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        ${logo()}

        <nav aria-label="Navegação principal" class="hidden lg:block">
          <ul class="flex items-center gap-6 xl:gap-7">${links}</ul>
        </nav>

        <div class="flex items-center gap-3">
          <a
            href="${WA_LINKS.geral}"
            target="_blank"
            rel="noopener"
            class="lift hidden items-center gap-2 rounded-full bg-brand-cta px-4 py-2.5 text-[0.82rem] font-semibold text-white hover:bg-brand-dark sm:inline-flex"
          >
            ${icons.whatsapp("size-4")}
            Agendar pelo WhatsApp
          </a>

          <button
            id="menu-toggle"
            type="button"
            class="flex size-11 cursor-pointer flex-col items-start justify-center rounded-full pl-2.5 text-ink transition-colors hover:bg-mist lg:hidden"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Abrir menu de navegação"
          >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
      </div>

      <!-- Menu mobile (overlay) -->
      <div id="mobile-menu" class="fixed inset-0 top-[4.5rem] z-40 bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <div class="cross-pattern flex h-full flex-col overflow-y-auto px-6 pb-10 pt-4">
          <nav aria-label="Navegação móvel">
            <ul>${mobileLinks}</ul>
          </nav>
          <a
            href="${WA_LINKS.geral}"
            target="_blank"
            rel="noopener"
            class="lift mobile-link mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-cta px-6 py-4 font-semibold text-white hover:bg-brand-dark"
            style="--stagger: ${NAV_ITEMS.length}"
            data-menu-close
          >
            ${icons.whatsapp()}
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  `;
}
