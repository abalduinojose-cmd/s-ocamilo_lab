import { icons } from "../components/icons";
import { ADDRESS_HINT, ADDRESS_SHORT, PHONE_DISPLAY, SOCIAL, WA_LINKS } from "../data/site";
import { sectionHeading } from "./clinica";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Labmed+S%C3%A3o+Camilo+Areal+RJ";

const HORARIOS = [
  { dia: "Segunda a sexta", horas: "6h30 às 15h30", days: "1,2,3,4,5", fechado: false },
  { dia: "Sábado", horas: "7h às 11h", days: "6", fechado: false },
  { dia: "Domingo", horas: "Fechado", days: "0", fechado: true },
];

export function contato(): string {
  const linhas = HORARIOS.map(
    (h, i) => `
      <li class="reveal -mx-3 flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 transition-colors" data-days="${h.days}" style="--stagger: ${i}">
        <span class="flex items-center gap-2.5 font-medium text-ink">
          <span class="${h.fechado ? "text-steel" : "text-brand"}">${icons.cross("size-3.5")}</span>
          ${h.dia}
          <span data-today-badge class="hidden rounded-full bg-brand px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">Hoje</span>
        </span>
        <span class="${h.fechado ? "text-steel-dark" : "font-semibold text-ink"} text-[0.95rem]">${h.horas}</span>
      </li>
    `,
  ).join("");

  return `
    <section id="contato" aria-labelledby="contato-label" class="border-t border-line bg-mist py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        ${sectionHeading("06", "Horários e Contato", "contato-label")}

        <div class="mt-12 grid grid-cols-12 gap-5 lg:gap-6">
          <!-- Funcionamento -->
          <div class="col-span-12 md:col-span-6 lg:col-span-5">
            <div class="reveal flex h-full flex-col rounded-bento bg-white p-8 ring-1 ring-line">
              <div class="flex items-center justify-between gap-4">
                <h3 class="font-display text-xl font-bold text-ink">Funcionamento</h3>
                <!-- Indicador calculado via JS pelo horário local -->
                <p class="flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-[0.78rem] font-semibold text-ink" data-open-status>
                  <span class="size-2 rounded-full bg-steel" data-open-dot></span>
                  Verificando...
                </p>
              </div>

              <ul class="mt-5 divide-y divide-line">${linhas}</ul>

              <div class="mt-auto border-t border-line pt-5">
                <p class="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-steel-dark">
                  ${icons.mapPin("size-4 mt-0.5 shrink-0 text-brand")}
                  <span>${ADDRESS_SHORT}<br />${ADDRESS_HINT}</span>
                </p>
                <a
                  href="${MAPS_URL}"
                  target="_blank"
                  rel="noopener"
                  class="lift mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[0.82rem] font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  Como chegar
                  ${icons.arrowUpRight("size-3.5")}
                </a>
              </div>
            </div>
          </div>

          <!-- Canal direto: card escuro de conversão -->
          <div class="col-span-12 md:col-span-6 lg:col-span-7">
            <div class="reveal relative flex h-full flex-col justify-between overflow-hidden rounded-bento bg-night p-8 text-white sm:p-10" style="--stagger: 1">
              <span class="absolute -right-24 -top-24 size-72 rounded-full bg-brand/15 blur-3xl" aria-hidden="true"></span>

              <div class="relative">
                <h3 class="max-w-md font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  Fale com a gente. É rápido, direto e sem robô.
                </h3>
                <p class="mt-4 max-w-md leading-relaxed text-white/70">
                  Agendamentos, dúvidas sobre preparo de exames e resultados: nosso
                  atendimento pelo WhatsApp responde no horário de funcionamento.
                </p>
              </div>

              <div class="relative mt-8">
                <div class="flex flex-wrap items-center gap-4">
                  <a
                    href="${WA_LINKS.geral}"
                    target="_blank"
                    rel="noopener"
                    class="lift inline-flex items-center gap-3 rounded-full bg-brand-cta px-7 py-4 font-semibold text-white shadow-[0_10px_28px_-10px_rgb(237_28_36/0.6)] hover:bg-brand-dark"
                  >
                    ${icons.whatsapp()}
                    <span class="text-left leading-tight">
                      <span class="block text-[0.7rem] font-medium uppercase tracking-wider text-white/75">WhatsApp</span>
                      <span class="block text-[0.95rem]">${PHONE_DISPLAY}</span>
                    </span>
                  </a>

                  <div class="flex items-center gap-2.5">
                    <a
                      href="${SOCIAL.instagram}"
                      target="_blank"
                      rel="noopener"
                      aria-label="Instagram da Labmed São Camilo"
                      class="lift grid size-[3.25rem] place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
                    >${icons.instagram()}</a>
                    <a
                      href="${SOCIAL.facebook}"
                      target="_blank"
                      rel="noopener"
                      aria-label="Facebook da Labmed São Camilo"
                      class="lift grid size-[3.25rem] place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
                    >${icons.facebook()}</a>
                  </div>
                </div>

                <p class="mt-6 text-[0.85rem] text-white/60">
                  Siga <a href="${SOCIAL.instagram}" target="_blank" rel="noopener" class="font-semibold text-white underline decoration-brand-light/60 underline-offset-4 transition-colors hover:decoration-brand-light">@labmedsaocamilo</a>
                  para avisos de funcionamento e novidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
