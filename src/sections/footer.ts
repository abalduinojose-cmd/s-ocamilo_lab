import { icons } from "../components/icons";
import { ADDRESS_HINT, ADDRESS_SHORT, PHONE_DISPLAY, SOCIAL, WA_LINKS, asset } from "../data/site";

export function footer(): string {
  return `
    <footer class="bg-espresso text-white">
      <!-- Faixa de CTA: repetição de conversão no fim da página -->
      <div class="border-b border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Cuidar da saúde começa com um exame.
            </p>
            <p class="mt-2 text-white/60">Agende em um minuto pelo WhatsApp, sem fila e sem robô.</p>
          </div>
          <a
            href="${WA_LINKS.geral}"
            target="_blank"
            rel="noopener"
            class="lift inline-flex shrink-0 items-center gap-3 rounded-full bg-brand-cta px-7 py-4 font-semibold text-white shadow-[0_10px_28px_-10px_rgb(237_28_36/0.5)] hover:bg-brand-dark"
          >
            ${icons.whatsapp()}
            <span class="text-left leading-tight">
              <span class="block text-[0.7rem] font-medium uppercase tracking-wider text-white/75">Agendar agora</span>
              <span class="block text-[0.95rem]">${PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>
      </div>

      <!-- Contato essencial -->
      <div class="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div class="grid gap-10 md:grid-cols-[auto_1fr_auto] md:gap-14">
          <!-- Logomarca completa em plaqueta -->
          <div>
            <span class="inline-block rounded-2xl bg-white p-4">
              <img
                src="${asset("fotos/logo-completa.png")}"
                alt="Clínica Labmed São Camilo"
                width="600"
                height="528"
                loading="lazy"
                class="h-24 w-auto object-contain sm:h-28"
              />
            </span>
            <p class="mt-4 max-w-xs leading-relaxed text-white/60">
              Diagnóstico com rapidez e precisão, atendimento que trata você pelo nome.
            </p>
          </div>

          <address class="space-y-3 text-[0.9rem] not-italic text-white/70 md:pt-1">
            <p class="flex items-start gap-2.5">
              ${icons.mapPin("size-4 mt-0.5 shrink-0 text-white/50")}
              <span>${ADDRESS_SHORT}<br />${ADDRESS_HINT}</span>
            </p>
            <p class="flex items-center gap-2.5">
              ${icons.whatsapp("size-4 shrink-0 text-white/50")}
              <a href="${WA_LINKS.geral}" target="_blank" rel="noopener" class="transition-colors hover:text-white">${PHONE_DISPLAY}</a>
            </p>
            <p class="flex items-center gap-2.5">
              ${icons.clock("size-4 shrink-0 text-white/50")}
              <span>Seg a sex 6h30 às 15h30 · Sáb 7h às 11h</span>
            </p>
          </address>

          <!-- Redes sociais discretas -->
          <div class="flex items-start gap-2.5">
            <a href="${SOCIAL.instagram}" target="_blank" rel="noopener" aria-label="Instagram da Labmed São Camilo" class="lift grid size-10 place-items-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white">${icons.instagram("size-4")}</a>
            <a href="${SOCIAL.facebook}" target="_blank" rel="noopener" aria-label="Facebook da Labmed São Camilo" class="lift grid size-10 place-items-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white">${icons.facebook("size-4")}</a>
          </div>
        </div>

        <div class="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[0.8rem] text-white/55 sm:flex-row sm:items-center">
          <p>© <span data-year></span> Labmed São Camilo. Todos os direitos reservados.</p>
          <p>Areal, RJ · Brasil</p>
        </div>
      </div>
    </footer>

    <!-- Botão flutuante de WhatsApp: verde oficial, discreto e reconhecível -->
    <a
      href="${WA_LINKS.geral}"
      target="_blank"
      rel="noopener"
      aria-label="Conversar com a Labmed São Camilo no WhatsApp"
      class="lift group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-white shadow-[0_14px_36px_-10px_rgb(37_211_102/0.6)] ring-1 ring-black/10 hover:bg-[#1DA855] sm:bottom-7 sm:right-7"
    >
      ${icons.whatsapp("size-6")}
      <span class="max-w-0 overflow-hidden whitespace-nowrap text-[0.85rem] font-semibold transition-[max-width,padding] duration-300 group-hover:max-w-40 group-hover:pl-2.5 group-focus-visible:max-w-40 group-focus-visible:pl-2.5">
        Fale conosco
      </span>
    </a>
  `;
}
