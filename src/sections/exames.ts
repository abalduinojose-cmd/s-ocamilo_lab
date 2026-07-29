import { icons } from "../components/icons";
import { WA_LINKS } from "../data/site";
import { sectionHeading } from "./clinica";

interface Exame {
  nome: string;
  desc: string;
}

const EXAMES: Exame[] = [
  { nome: "Hemograma", desc: "Avaliação completa das células do sangue: imunidade, anemia e infecções." },
  { nome: "Glicemia", desc: "Medição da taxa de açúcar no sangue, essencial no controle do diabetes." },
  { nome: "Colesterol Total", desc: "Monitoramento dos níveis de gordura no sangue e saúde cardiovascular." },
  { nome: "TSH e T4 Livre", desc: "Avaliação da função da tireoide e do equilíbrio hormonal." },
  { nome: "Ácido Úrico", desc: "Diagnóstico de gota e acompanhamento da função renal." },
  { nome: "Transaminases (TGO e TGP)", desc: "Avaliação da saúde do fígado e das vias biliares." },
];

function row(exame: Exame, i: number): string {
  const num = String(i + 1).padStart(2, "0");
  return `
    <li class="exam-row reveal group border-b border-line hover:bg-white" style="--stagger: ${i}">
      <div class="grid grid-cols-12 items-center gap-x-4 gap-y-3 px-2 py-6 sm:px-4 lg:py-7">
        <span class="col-span-2 font-display text-sm font-semibold text-steel-dark sm:col-span-1" aria-hidden="true">${num}</span>
        <h3 class="col-span-10 font-display text-lg font-semibold tracking-tight text-ink sm:col-span-3 lg:text-xl">${exame.nome}</h3>
        <p class="col-span-12 text-[0.92rem] leading-relaxed sm:col-span-5 lg:col-span-5">${exame.desc}</p>
        <div class="col-span-12 sm:col-span-3 lg:col-span-3 sm:text-right">
          <a
            href="${WA_LINKS.exame(exame.nome)}"
            target="_blank"
            rel="noopener"
            class="lift inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-[0.8rem] font-semibold text-ink group-hover:border-brand/40 hover:!border-brand hover:bg-brand-cta hover:text-white"
          >
            Agendar este exame
            ${icons.arrowRight("size-3.5")}
          </a>
        </div>
      </div>
    </li>
  `;
}

export function exames(): string {
  return `
    <section id="exames" aria-labelledby="exames-label" class="bg-mist py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12 lg:col-span-8">
            ${sectionHeading("01", "Exames Laboratoriais", "exames-label")}
            <h2 class="reveal mt-8 max-w-2xl font-display text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl" style="--stagger: 1">
              O carro-chefe da casa: os exames que o seu médico pede, sem sair de Areal.
            </h2>
            <p class="reveal mt-4 max-w-xl text-lg leading-relaxed" style="--stagger: 2">
              Coleta ágil no balcão, preparo orientado pelo WhatsApp e resultado
              com a rapidez e a precisão que são a nossa missão.
            </p>
          </div>
        </div>

        <ul class="mt-12 border-t border-line">
          ${EXAMES.map(row).join("")}
        </ul>

        <!-- Aviso: catálogo completo -->
        <div class="reveal mt-10 flex flex-col items-start justify-between gap-6 rounded-bento border border-dashed border-brand/35 bg-brand-soft/50 p-8 sm:flex-row sm:items-center" style="--stagger: 1">
          <div class="flex items-start gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand ring-1 ring-brand/20">${icons.flask()}</span>
            <div>
              <p class="font-display text-lg font-semibold text-ink">E muitos outros exames</p>
              <p class="mt-1 max-w-md text-[0.92rem] leading-relaxed">
                Trabalhamos com uma rotina laboratorial completa. Não encontrou o exame
                que procura? Fale com a gente e consulte disponibilidade e preparo.
              </p>
            </div>
          </div>
          <a
            href="${WA_LINKS.exames}"
            target="_blank"
            rel="noopener"
            class="lift inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.85rem] font-semibold text-white hover:bg-brand-cta"
          >
            Consultar pelo WhatsApp
            ${icons.whatsapp("size-4")}
          </a>
        </div>
      </div>
    </section>
  `;
}
