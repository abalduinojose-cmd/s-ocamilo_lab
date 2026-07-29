import { icons } from "../components/icons";
import { WA_LINKS } from "../data/site";
import { sectionHeading } from "./clinica";

const AREAS = [
  "Abdômen total",
  "Rins (vias urinárias)",
  "Tireoide",
  "Mamas",
  "Pélvica (masculina)",
  "Próstata (via abdominal)",
  "Bolsa escrotal",
  "Órgão genital masculino",
];

export function ultrassom(): string {
  const areas = AREAS.map(
    (a, i) => `
      <li class="reveal flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5" style="--stagger: ${i % 4}">
        <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">${icons.check("size-3.5")}</span>
        <span class="text-[0.9rem] font-medium text-ink">${a}</span>
      </li>
    `,
  ).join("");

  return `
    <section id="ultrassonografia" aria-labelledby="ultrassom-label" class="bg-mist py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        ${sectionHeading("04", "Ultrassonografia", "ultrassom-label")}

        <div class="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
          <!-- Especialista -->
          <div class="col-span-12 lg:col-span-5">
            <h2 class="reveal font-display text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl" style="--stagger: 0">
              Imagem que revela, olhar que interpreta.
            </h2>
            <p class="reveal mt-5 max-w-lg text-lg leading-relaxed" style="--stagger: 1">
              Todos os exames de ultrassonografia da Labmed São Camilo são realizados
              com equipamento de alta definição e leitura criteriosa, área por área.
            </p>

            <!-- Card do especialista -->
            <div class="reveal mt-8 flex items-center gap-4 rounded-bento bg-white p-6 ring-1 ring-line" style="--stagger: 2">
              <!-- PLACEHOLDER: substitua por foto real do especialista
                   (<img src="/fotos/dr-rodrigo.webp" alt="Dr. Rodrigo Simões Lemos Dias" class="size-16 rounded-2xl object-cover" />) -->
              <span class="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-mist to-line text-steel-dark">
                ${icons.user("size-7")}
              </span>
              <div>
                <p class="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand-dark">Responsável técnico</p>
                <p class="mt-1 font-display text-lg font-semibold leading-tight text-ink">Dr. Rodrigo Simões Lemos Dias</p>
                <p class="mt-0.5 text-[0.85rem] text-steel-dark">Ultrassonografia</p>
              </div>
            </div>

            <p class="reveal mt-6 inline-flex items-center gap-2.5 rounded-full bg-night px-5 py-3 text-[0.85rem] font-semibold text-white" style="--stagger: 3">
              <span class="text-brand">${icons.waves("size-4")}</span>
              Opção de Doppler em todas as áreas
            </p>
          </div>

          <!-- Áreas atendidas -->
          <div class="col-span-12 lg:col-span-7 lg:pl-6">
            <h3 class="reveal font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-steel-dark" style="--stagger: 0">
              Exames disponíveis
            </h3>
            <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              ${areas}
            </ul>

            <div class="reveal mt-8" style="--stagger: 2">
              <a
                href="${WA_LINKS.ultrassom}"
                target="_blank"
                rel="noopener"
                class="lift inline-flex items-center gap-2.5 rounded-full bg-brand-cta px-7 py-4 text-[0.9rem] font-semibold text-white hover:bg-brand-dark"
              >
                ${icons.whatsapp()}
                Agendar ultrassonografia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
