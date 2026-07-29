import { icons, type IconName } from "../components/icons";
import { WA_LINKS } from "../data/site";
import { sectionHeading } from "./clinica";

interface Especialidade {
  icon: IconName;
  title: string;
  desc: string;
  /** classes de posicionamento no bento grid */
  span: string;
  featured?: boolean;
}

const ITEMS: Especialidade[] = [
  {
    icon: "flask",
    title: "Análises Clínicas",
    desc: "O coração da Labmed: coleta ágil, equipamentos calibrados e uma rotina completa de exames de sangue, urina e hormônios, com resultados rápidos e precisos.",
    span: "md:col-span-4 md:row-span-2",
    featured: true,
  },
  {
    icon: "waves",
    title: "Ultrassonografia",
    desc: "Imagens em alta definição com opção de Doppler em todas as áreas avaliadas.",
    span: "md:col-span-2",
  },
  {
    icon: "activity",
    title: "Fisioterapia",
    desc: "Reabilitação e alívio de dores com plano de tratamento individualizado.",
    span: "md:col-span-2",
  },
  {
    icon: "baby",
    title: "Psicóloga Infantil",
    desc: "Escuta especializada para o desenvolvimento emocional das crianças.",
    span: "md:col-span-2",
  },
  {
    icon: "messageHeart",
    title: "Psicanalista",
    desc: "Um espaço de escuta para compreender questões emocionais com profundidade.",
    span: "md:col-span-2",
  },
  {
    icon: "brain",
    title: "Neuropediatra",
    desc: "Avaliação e acompanhamento do desenvolvimento neurológico infantil.",
    span: "md:col-span-2",
  },
  {
    icon: "bookOpen",
    title: "Neuropsicopedagoga",
    desc: "Apoio à aprendizagem unindo neurociência, psicologia e pedagogia.",
    span: "md:col-span-3",
  },
  {
    icon: "droplets",
    title: "Análise de Água",
    desc: "Controle de qualidade da água e prevenção de doenças hídricas para residências, empresas e órgãos públicos.",
    span: "md:col-span-3",
  },
];

function card(item: Especialidade, index: number): string {
  if (item.featured) {
    return `
      <article class="bento-card reveal ${item.span} relative flex flex-col justify-between overflow-hidden rounded-bento border border-line bg-night p-8 text-white" style="--stagger: ${index}">
        <div class="cross-pattern-light absolute inset-0" aria-hidden="true"></div>
        <div class="relative">
          <span class="grid size-12 place-items-center rounded-2xl bg-brand text-white">${icons[item.icon]("size-6")}</span>
          <h3 class="mt-6 font-display text-2xl font-bold tracking-tight">${item.title}</h3>
          <p class="mt-3 max-w-sm leading-relaxed text-white/70">${item.desc}</p>
        </div>
        <a
          href="${WA_LINKS.exames}"
          target="_blank"
          rel="noopener"
          class="lift relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.85rem] font-semibold text-ink hover:bg-brand-cta hover:text-white"
        >
          Consultar exames disponíveis
          ${icons.arrowRight()}
        </a>
      </article>
    `;
  }

  return `
    <article class="bento-card reveal ${item.span} rounded-bento border border-line bg-white p-7" style="--stagger: ${index}">
      <span class="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">${icons[item.icon]()}</span>
      <h3 class="mt-5 font-display text-[1.05rem] font-semibold text-ink">${item.title}</h3>
      <p class="mt-2 text-[0.9rem] leading-relaxed">${item.desc}</p>
    </article>
  `;
}

export function especialidades(): string {
  return `
    <section id="especialidades" aria-labelledby="especialidades-label" class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="flex flex-wrap items-end justify-between gap-6">
          ${sectionHeading("03", "Especialidades", "especialidades-label")}
          <p class="reveal max-w-md pb-1 text-[0.95rem] leading-relaxed" style="--stagger: 1">
            Mais que um laboratório: uma equipe multidisciplinar reunida em um só lugar
            para cuidar da saúde de toda a família.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:[grid-auto-rows:minmax(0,auto)]">
          ${ITEMS.map(card).join("")}
        </div>
      </div>
    </section>
  `;
}
