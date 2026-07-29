import { icons } from "../components/icons";

/** Cabeçalho editorial padrão das seções: número grande + rótulo. */
export function sectionHeading(num: string, label: string, id?: string, dark = false): string {
  const numCls = dark ? "text-white/10" : "text-ink/8";
  const labelCls = dark ? "text-brand-light" : "text-brand-dark";
  return `
    <div class="reveal flex items-end gap-5">
      <span class="font-display text-6xl font-bold leading-none ${numCls} sm:text-7xl" aria-hidden="true">${num}</span>
      <p ${id ? `id="${id}"` : ""} class="pb-1.5 font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] ${labelCls}">${label}</p>
    </div>
  `;
}

export function clinica(): string {
  return `
    <section id="clinica" aria-labelledby="clinica-label" class="relative overflow-hidden bg-night py-20 text-white lg:py-28">
      <!-- brilho vermelho sutil, dá profundidade ao bloco escuro -->
      <span class="absolute -left-40 -top-24 size-[32rem] rounded-full bg-brand/10 blur-3xl" aria-hidden="true"></span>
      <span class="absolute -bottom-32 right-0 size-[26rem] rounded-full bg-brand/5 blur-3xl" aria-hidden="true"></span>

      <div class="relative mx-auto grid max-w-7xl grid-cols-12 gap-x-6 gap-y-12 px-5 sm:px-8">
        <div class="col-span-12">
          ${sectionHeading("02", "A Clínica", "clinica-label", true)}
        </div>

        <!-- Missão: bloco editorial dominante, deslocado à esquerda -->
        <div class="col-span-12 lg:col-span-7">
          <h2 class="reveal font-display text-3xl font-bold leading-snug tracking-tight sm:text-4xl" style="--stagger: 1">
            Um laboratório destinado a promover o
            <span class="text-brand-light">bem estar social</span>.
          </h2>
          <p class="reveal mt-6 max-w-2xl text-lg leading-relaxed text-white/70" style="--stagger: 2">
            Nossa missão é auxiliar no diagnóstico das doenças com rapidez e precisão,
            atuando também na prevenção de doenças hídricas. Cada exame que realizamos
            carrega essa responsabilidade: entregar respostas confiáveis para quem confia
            a saúde a nós.
          </p>

          <!-- Indicadores (contadores animados via JS) -->
          <dl class="reveal mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8" style="--stagger: 3">
            <div>
              <dt class="order-last mt-1 text-[0.78rem] font-medium uppercase tracking-wider text-white/55">Especialidades</dt>
              <dd class="font-display text-4xl font-bold sm:text-5xl"><span data-counter="8">0</span></dd>
            </div>
            <div>
              <dt class="order-last mt-1 text-[0.78rem] font-medium uppercase tracking-wider text-white/55">Dias por semana</dt>
              <dd class="font-display text-4xl font-bold sm:text-5xl"><span data-counter="6">0</span></dd>
            </div>
            <div>
              <dt class="order-last mt-1 text-[0.78rem] font-medium uppercase tracking-wider text-white/55">Atendimento humano</dt>
              <dd class="font-display text-4xl font-bold text-brand-light sm:text-5xl"><span data-counter="100">0</span>%</dd>
            </div>
          </dl>
        </div>

        <!-- Visão + Valores: cartões empilhados assimétricos -->
        <div class="col-span-12 flex flex-col gap-5 lg:col-span-5 lg:pl-8 lg:pt-10">
          <article class="reveal rounded-bento bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm lg:mr-8" style="--stagger: 2">
            <span class="grid size-11 place-items-center rounded-xl bg-white/10 text-brand-light">${icons.stethoscope()}</span>
            <h3 class="mt-5 font-display text-lg font-semibold">Visão</h3>
            <p class="mt-2 leading-relaxed text-white/70">
              Ser reconhecido como um laboratório de referência em atendimento humanizado,
              com resultados de excelência.
            </p>
          </article>

          <article class="reveal rounded-bento bg-white p-8 text-ink lg:ml-8" style="--stagger: 3">
            <span class="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">${icons.heartHand()}</span>
            <h3 class="mt-5 font-display text-lg font-semibold">Valores</h3>
            <p class="mt-2 leading-relaxed text-ink-soft">
              Cuidado, dedicação e respeito com o cliente em nosso atendimento,
              todos os dias, em cada detalhe.
            </p>
          </article>
        </div>

        <!-- Certificado de Coragem: atendimento humanizado de verdade -->
        <div class="col-span-12 mt-6 grid grid-cols-12 gap-5">
          <article class="reveal col-span-12 flex flex-col justify-between rounded-bento bg-white p-8 text-ink md:col-span-4" style="--stagger: 0">
            <div>
              <img
                src="/fotos/logo-completa.png"
                alt="Logomarca da Clínica São Camilo"
                width="600"
                height="528"
                loading="lazy"
                class="h-24 w-auto object-contain"
              />
              <h3 class="mt-6 font-display text-2xl font-bold tracking-tight">
                Coragem que ganha <span class="text-brand">certificado</span>.
              </h3>
              <p class="mt-3 leading-relaxed text-ink-soft">
                Aqui, criança que enfrenta a agulha sai de cabeça erguida: depois da coleta,
                entregamos o Certificado de Coragem na nossa sala infantil temática da
                Turma da Mônica. Exame vira conquista, e a próxima visita deixa de ser um medo.
              </p>
            </div>
            <p class="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-brand-dark">
              ${icons.heartHand("size-4")}
              Coleta infantil humanizada
            </p>
          </article>

          <figure class="reveal col-span-6 overflow-hidden rounded-bento ring-1 ring-white/10 md:col-span-4" style="--stagger: 1">
            <img
              src="/fotos/certificado-monica.jpg"
              alt="Menino sorri segurando o Certificado de Coragem ao lado do profissional da Labmed, na sala de coleta temática da Turma da Mônica"
              width="780"
              height="1040"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>

          <figure class="reveal col-span-6 overflow-hidden rounded-bento ring-1 ring-white/10 md:col-span-4 md:mt-10" style="--stagger: 2">
            <img
              src="/fotos/certificado-recepcao.jpg"
              alt="Profissional da Labmed São Camilo e menino comemoram o Certificado de Coragem na recepção da clínica"
              width="800"
              height="800"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>
        </div>
      </div>
    </section>
  `;
}
