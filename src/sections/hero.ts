import { icons } from "../components/icons";
import { ADDRESS_HINT, ADDRESS_SHORT, SERVICES, WA_LINKS, asset } from "../data/site";

export function hero(): string {
  const pills = SERVICES.map(
    (s, i) => `
      <li class="reveal" style="--stagger: ${i + 3}">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.78rem] font-medium text-ink-soft">
          <span class="text-brand">${icons.cross("size-3")}</span>${s}
        </span>
      </li>
    `,
  ).join("");

  return `
    <section id="inicio" aria-labelledby="hero-title" class="relative overflow-hidden bg-white pt-[4.5rem]">
      <div class="cross-pattern absolute inset-0" aria-hidden="true"></div>

      <div class="relative mx-auto grid max-w-7xl grid-cols-12 gap-x-6 px-5 pb-14 pt-12 sm:px-8 lg:pb-20 lg:pt-20">
        <!-- Coluna editorial -->
        <div class="col-span-12 lg:col-span-7 xl:col-span-6">
          <p class="reveal inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-[0.8rem] font-semibold text-brand-deep" style="--stagger: 0">
            ${icons.microscope("size-4")}
            Laboratório de Análises Clínicas
          </p>

          <h1 id="hero-title" class="reveal mt-6 font-display text-[2.4rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-6xl xl:text-[4.25rem]" style="--stagger: 1">
            Precisão no diagnóstico,<br class="hidden sm:block" />
            <span class="text-brand">cuidado</span> em cada resultado.
          </h1>

          <p class="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink-soft" style="--stagger: 2">
            Em Areal, um laboratório completo para cuidar da sua saúde: exames laboratoriais,
            ultrassonografia e uma equipe multidisciplinar que trata cada pessoa pelo nome,
            com resultados rápidos e confiáveis.
          </p>

          <ul class="reveal mt-8 flex max-w-xl flex-wrap gap-2" style="--stagger: 3" aria-label="Serviços oferecidos">
            ${pills}
          </ul>

          <div class="reveal mt-10 flex flex-wrap items-center gap-4" style="--stagger: 5">
            <a
              href="${WA_LINKS.geral}"
              target="_blank"
              rel="noopener"
              class="lift inline-flex items-center gap-2.5 rounded-full bg-brand-cta px-7 py-4 text-[0.95rem] font-semibold text-white shadow-[0_10px_28px_-10px_rgb(237_28_36/0.5)] hover:bg-brand-dark"
            >
              ${icons.whatsapp()}
              Agendar pelo WhatsApp
            </a>
            <a
              href="#exames"
              class="lift inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-[0.95rem] font-semibold text-ink hover:border-ink/40"
            >
              Ver exames
              ${icons.arrowRight()}
            </a>
          </div>
        </div>

        <!-- Composição visual: foto real da coleta (carro-chefe) -->
        <div class="col-span-12 mt-14 lg:col-span-5 lg:mt-0 xl:col-span-6">
          <div class="relative mx-auto max-w-md lg:max-w-lg lg:ml-auto">
            <span class="absolute -right-8 -top-8 -z-10 size-64 rounded-full bg-brand-soft/70 blur-2xl" aria-hidden="true"></span>

            <div class="reveal overflow-hidden rounded-bento shadow-[0_24px_64px_-24px_rgb(35_35_39/0.35)] ring-1 ring-line" style="--stagger: 2">
              <img
                src="${asset("fotos/coleta.jpg")}"
                alt="Profissional da Labmed São Camilo realiza coleta de sangue em uma criança, com luvas e material estéril"
                width="900"
                height="900"
                fetchpriority="high"
                class="aspect-square w-full object-cover"
              />
            </div>

            <!-- Card flutuante: atendimento acolhedor -->
            <div class="reveal absolute -left-4 bottom-16 max-w-[16rem] rounded-2xl bg-white p-4 shadow-[0_18px_44px_-18px_rgb(35_35_39/0.35)] ring-1 ring-line sm:-left-8 sm:p-5" style="--stagger: 4" aria-hidden="true">
              <div class="flex items-center gap-3">
                <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">${icons.heartHand()}</span>
                <div>
                  <p class="font-display text-sm font-semibold text-ink">Atendimento acolhedor</p>
                  <p class="mt-0.5 text-[0.78rem] text-steel-dark">Você é tratado pelo nome</p>
                </div>
              </div>
            </div>

            <!-- Card flutuante: status aberto/fechado (preenchido via JS) -->
            <div class="reveal absolute -bottom-5 right-4 rounded-2xl bg-night px-5 py-4 text-white shadow-[0_18px_44px_-18px_rgb(35_35_39/0.55)]" style="--stagger: 5">
              <p class="flex items-center gap-2 text-[0.8rem] font-medium" data-open-status>
                <span class="size-2 rounded-full bg-steel" data-open-dot></span>
                Verificando horário...
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Barra de informação rápida -->
      <div class="relative border-y border-line bg-mist/70">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-[0.85rem] text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p class="flex items-center gap-2.5">
            <span class="text-brand">${icons.clock("size-4")}</span>
            <span><strong class="font-semibold text-ink">Seg a sex</strong> 6h30 às 15h30 · <strong class="font-semibold text-ink">Sáb</strong> 7h às 11h</span>
          </p>
          <p class="flex items-center gap-2.5">
            <span class="text-brand">${icons.mapPin("size-4")}</span>
            <span>${ADDRESS_SHORT} · ${ADDRESS_HINT}</span>
          </p>
        </div>
      </div>
    </section>
  `;
}
