import { icons } from "../components/icons";
import { ADDRESS_HINT, WA_LINKS } from "../data/site";
import { sectionHeading } from "./clinica";

const SELOS = [
  { icon: icons.zap("size-4"), label: "Rápido" },
  { icon: icons.check("size-4"), label: "Fácil" },
  { icon: icons.shieldCheck("size-4"), label: "Confiável" },
];

export function toxicologico(): string {
  const selos = SELOS.map(
    (s) => `
      <li class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.82rem] font-semibold text-white">
        <span class="text-brand">${s.icon}</span>${s.label}
      </li>
    `,
  ).join("");

  return `
    <section id="toxicologico" aria-labelledby="toxicologico-label" class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        ${sectionHeading("05", "Exame Toxicológico", "toxicologico-label")}

        <!-- Banner de destaque: fundo escuro + acento vermelho -->
        <div class="reveal relative mt-12 overflow-hidden rounded-bento bg-night text-white" style="--stagger: 1">
          <div class="cross-pattern-light absolute inset-0" aria-hidden="true"></div>
          <span class="absolute inset-x-0 top-0 h-1.5 bg-brand" aria-hidden="true"></span>
          <span class="absolute -right-16 -top-16 hidden size-72 rounded-full border-[2.5rem] border-brand/15 lg:block" aria-hidden="true"></span>

          <div class="relative grid grid-cols-12 gap-x-6 gap-y-10 p-8 sm:p-12 lg:p-16">
            <div class="col-span-12 lg:col-span-7">
              <p class="inline-flex items-center gap-2 rounded-full bg-brand-cta px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white">
                ${icons.car("size-4")}
                Motoristas · CNH
              </p>
              <h2 class="mt-6 font-display text-3xl font-bold leading-snug tracking-tight sm:text-4xl xl:text-[2.6rem]">
                Exame toxicológico sem burocracia, pertinho de você.
              </h2>
              <p class="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Vai renovar a CNH ou tirar a habilitação nas categorias C, D ou E?
                Faça seu exame toxicológico na Labmed São Camilo: coleta rápida,
                processo simples e resultado com validade em todo o Brasil.
              </p>

              <ul class="mt-8 flex flex-wrap gap-2.5" aria-label="Diferenciais do exame toxicológico">
                ${selos}
              </ul>

              <div class="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9rem] text-white/80">
                <p class="flex items-center gap-2.5">
                  <span class="text-brand">${icons.clock("size-4")}</span>
                  Atendimento de segunda a sábado
                </p>
                <p class="flex items-center gap-2.5">
                  <span class="text-brand">${icons.mapPin("size-4")}</span>
                  ${ADDRESS_HINT}, no centro de Areal
                </p>
              </div>
            </div>

            <!-- Preço em destaque -->
            <div class="col-span-12 flex flex-col justify-center lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
              <p class="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-white/60">Valor do exame</p>
              <p class="mt-3 font-display font-bold leading-none">
                <span class="align-top text-2xl text-brand">R$</span>
                <span class="text-7xl tracking-tight sm:text-8xl">115</span>
                <span class="text-3xl text-white/70">,00</span>
              </p>
              <a
                href="${WA_LINKS.toxicologico}"
                target="_blank"
                rel="noopener"
                class="lift mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-cta px-7 py-4 text-[0.9rem] font-semibold text-white hover:bg-brand-dark"
              >
                ${icons.whatsapp()}
                Agendar toxicológico
              </a>
              <p class="mt-4 text-[0.8rem] text-white/60">Sem necessidade de jejum. Traga um documento com foto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
