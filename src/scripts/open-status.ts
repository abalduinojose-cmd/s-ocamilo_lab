import { HOURS } from "../data/site";

/**
 * Indicador "Aberto agora / Fechado" calculado pelo horário local
 * do visitante. Atualiza todos os [data-open-status] da página,
 * anima o ponto quando aberto e destaca a linha do dia atual
 * ([data-days] + [data-today-badge]) na tabela de horários.
 */
export function initOpenStatus(): void {
  const els = document.querySelectorAll<HTMLElement>("[data-open-status]");

  const update = () => {
    const now = new Date();
    const day = now.getDay();
    const range = HOURS[day];
    const minutes = now.getHours() * 60 + now.getMinutes();
    const open = range !== null && range !== undefined && minutes >= range[0] && minutes < range[1];

    els.forEach((el) => {
      const dot = el.querySelector<HTMLElement>("[data-open-dot]");
      const label = open ? "Aberto agora" : "Fechado no momento";

      // preserva o dot, troca apenas o texto
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = "";
      });
      el.append(` ${label}`);

      if (dot) {
        dot.classList.toggle("bg-emerald-500", open);
        dot.classList.toggle("bg-steel", !open);
        dot.classList.toggle("motion-safe:animate-pulse", open);
      }
    });

    // destaca a linha de "hoje" na tabela de funcionamento
    document.querySelectorAll<HTMLElement>("[data-days]").forEach((row) => {
      const isToday = (row.dataset.days ?? "").split(",").includes(String(day));
      row.querySelector("[data-today-badge]")?.classList.toggle("hidden", !isToday);
      row.classList.toggle("bg-brand-soft/40", isToday);
    });
  };

  update();
  // reavalia a cada minuto (barato e mantém o status correto em abas longas)
  window.setInterval(update, 60_000);
}
