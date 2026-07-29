import "./style.css";

import { header } from "./sections/header";
import { hero } from "./sections/hero";
import { marquee } from "./sections/marquee";
import { clinica } from "./sections/clinica";
import { especialidades } from "./sections/especialidades";
import { acolhimento } from "./sections/acolhimento";
import { exames } from "./sections/exames";
import { ultrassom } from "./sections/ultrassom";
import { toxicologico } from "./sections/toxicologico";
import { contato } from "./sections/contato";
import { footer } from "./sections/footer";

import { initReveal } from "./scripts/reveal";
import { initHeader } from "./scripts/header";
import { initCounters } from "./scripts/counters";
import { initOpenStatus } from "./scripts/open-status";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  ${header()}
  <main>
    ${hero()}
    ${marquee()}
    ${exames()}
    ${clinica()}
    ${especialidades()}
    ${acolhimento()}
    ${ultrassom()}
    ${toxicologico()}
    ${contato()}
  </main>
  ${footer()}
`;

// © ano atual dinâmico
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

initHeader();
initReveal();
initCounters();
initOpenStatus();
