import { icons } from "../components/icons";
import { asset, wa } from "../data/site";

const TERAPIAS = ["Psicologia Infantil", "Psicanálise", "Neuropediatria", "Neuropsicopedagogia"];

const WA_ACOLHIMENTO = wa("Olá! Gostaria de agendar um atendimento terapêutico na Labmed São Camilo.");

/** Folha decorativa (traço Lucide). */
function leaf(cls: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
}

/**
 * Faixa "Atendimento Acolhedor": o lado terapêutico da clínica.
 * Sem número de seção de propósito, é um respiro entre os blocos técnicos.
 */
export function acolhimento(): string {
  const pills = TERAPIAS.map(
    (t, i) => `
      <li class="reveal" style="--stagger: ${i + 2}">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-sand-line bg-white/70 px-3.5 py-1.5 text-[0.8rem] font-medium text-ink">
          <span class="text-sage">${leaf("size-3.5")}</span>${t}
        </span>
      </li>
    `,
  ).join("");

  return `
    <section id="acolhimento" aria-labelledby="acolhimento-title" class="atendimento-acolhedor overflow-hidden border-y border-sand-line bg-sand py-20 lg:py-28">
      <div class="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-6 gap-y-12 px-5 sm:px-8">
        <!-- Texto -->
        <div class="col-span-12 lg:col-span-6">
          <p class="reveal inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[0.8rem] font-semibold text-wood-deep ring-1 ring-sand-line" style="--stagger: 0">
            ${icons.heartHand("size-4")}
            Atendimento Acolhedor
          </p>

          <h2 id="acolhimento-title" class="reveal mt-6 font-display text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl" style="--stagger: 1">
            Um Espaço Seguro para Você
          </h2>

          <p class="reveal mt-5 max-w-xl text-lg leading-relaxed" style="--stagger: 2">
            Oferecemos um atendimento acolhedor e personalizado, focado no seu bem-estar
            emocional e no desenvolvimento de ferramentas para lidar com os desafios da vida.
          </p>

          <ul class="reveal mt-7 flex flex-wrap gap-2" style="--stagger: 3" aria-label="Atendimentos terapêuticos">
            ${pills}
          </ul>

          <div class="reveal mt-9" style="--stagger: 4">
            <a
              href="${WA_ACOLHIMENTO}"
              target="_blank"
              rel="noopener"
              class="lift inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[0.9rem] font-semibold text-white hover:bg-wood-deep"
            >
              ${icons.whatsapp()}
              Agendar um horário
            </a>
          </div>
        </div>

        <!-- Foto real da recepção: madeira clara, tons neutros, luz suave -->
        <div class="col-span-12 lg:col-span-6 lg:pl-10">
          <div class="relative mx-auto max-w-md">
            <span class="absolute -right-8 -top-10 text-sage/60" aria-hidden="true">${leaf("size-20 rotate-12")}</span>

            <figure class="reveal relative overflow-hidden rounded-bento shadow-[0_24px_64px_-24px_rgb(41_36_31/0.35)] ring-1 ring-sand-line" style="--stagger: 2">
              <img
                src="${asset("fotos/recepcao.jpg")}"
                alt="Recepção da Labmed São Camilo: sala de espera com poltronas claras, madeira e o letreiro dourado da clínica"
                width="840"
                height="1120"
                loading="lazy"
                class="aspect-[3/4] w-full object-cover"
              />
              <figcaption class="absolute bottom-4 left-4">
                <span class="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[0.78rem] font-semibold text-wood-deep shadow-sm backdrop-blur">
                  ${leaf("size-3.5")}
                  Escuta, calma e privacidade
                </span>
              </figcaption>
            </figure>

            <div class="reveal absolute -bottom-6 -left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_44px_-18px_rgb(41_36_31/0.35)] ring-1 ring-sand-line sm:-left-10" style="--stagger: 4">
              <p class="font-display text-sm font-semibold text-ink">Recepção acolhedora</p>
              <p class="mt-0.5 text-[0.78rem] text-wood-deep">Ambiente tranquilo, do jeito que deve ser</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
