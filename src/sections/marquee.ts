import { icons } from "../components/icons";
import { SERVICES } from "../data/site";

/** Faixa sutil com os serviços — reforço de marca entre hero e conteúdo. */
export function marquee(): string {
  const items = SERVICES.map(
    (s) => `
      <span class="mx-6 inline-flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
        <span class="text-brand-light/80">${icons.cross("size-3.5")}</span>${s}
      </span>
    `,
  ).join("");

  // Conteúdo duplicado para o loop contínuo (aria-hidden na cópia)
  return `
    <div class="marquee overflow-hidden bg-night py-4" aria-hidden="true">
      <div class="marquee-track flex w-max whitespace-nowrap">
        <div class="flex items-center">${items}</div>
        <div class="flex items-center">${items}</div>
      </div>
    </div>
  `;
}
