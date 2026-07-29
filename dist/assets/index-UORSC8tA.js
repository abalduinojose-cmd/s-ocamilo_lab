(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function l(e,a="size-5"){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${a}" aria-hidden="true">${e}</svg>`}const t={cross:(e="size-5")=>l('<path d="M12 5v14M5 12h14"/>',e),microscope:(e="size-5")=>l('<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',e),flask:(e="size-5")=>l('<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',e),waves:(e="size-5")=>l('<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',e),activity:(e="size-5")=>l('<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',e),heartHand:(e="size-5")=>l('<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',e),brain:(e="size-5")=>l('<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',e),baby:(e="size-5")=>l('<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',e),messageHeart:(e="size-5")=>l('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.3-.3-.3a2.5 2.5 0 0 0-3.5 3.5l.3.3L12 16.5l3.5-3.5.3-.3a2.5 2.5 0 0 0 0-3.5"/>',e),bookOpen:(e="size-5")=>l('<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',e),droplets:(e="size-5")=>l('<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',e),clock:(e="size-5")=>l('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',e),mapPin:(e="size-5")=>l('<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',e),phone:(e="size-5")=>l('<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',e),arrowRight:(e="size-4")=>l('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',e),arrowUpRight:(e="size-4")=>l('<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',e),check:(e="size-4")=>l('<path d="M20 6 9 17l-5-5"/>',e),shieldCheck:(e="size-5")=>l('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',e),zap:(e="size-5")=>l('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',e),car:(e="size-5")=>l('<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',e),stethoscope:(e="size-5")=>l('<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',e),user:(e="size-5")=>l('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',e),menu:(e="size-6")=>l('<line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/>',e),close:(e="size-6")=>l('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',e),whatsapp:(e="size-5")=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="${e}" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,instagram:(e="size-5")=>l('<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',e),facebook:(e="size-5")=>l('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',e)},w="(24) 2257-9826",z="552422579826",y="Praça Pres. Castelo Branco, 365 · Centro, Areal, RJ",b="Ao lado dos Correios",u={instagram:"https://www.instagram.com/labmedsaocamilo/",facebook:"https://www.facebook.com/profile.php?id=61554792941677"};function g(e){return`https://wa.me/${z}?text=${encodeURIComponent(e)}`}const p={geral:g("Olá! Gostaria de agendar um atendimento na Labmed São Camilo."),exames:g("Olá! Gostaria de informações sobre exames laboratoriais na Labmed São Camilo."),ultrassom:g("Olá! Gostaria de agendar um exame de ultrassonografia na Labmed São Camilo."),toxicologico:g("Olá! Gostaria de agendar o exame toxicológico para CNH na Labmed São Camilo."),exame:e=>g(`Olá! Gostaria de agendar o exame de ${e} na Labmed São Camilo.`)},A={0:null,1:[390,930],2:[390,930],3:[390,930],4:[390,930],5:[390,930],6:[420,660]},k=["Análises Clínicas","Ultrassonografia","Fisioterapia","Psicologia Infantil","Psicanálise","Neuropediatria","Neuropsicopedagogia","Análise de Água"],f=[{href:"#inicio",label:"Início"},{href:"#exames",label:"Exames"},{href:"#clinica",label:"A Clínica"},{href:"#especialidades",label:"Especialidades"},{href:"#ultrassonografia",label:"Ultrassonografia"},{href:"#toxicologico",label:"Toxicológico"},{href:"#contato",label:"Contato"}];function C(e=!1){return`
    <a href="#inicio" class="group flex items-center gap-2.5" aria-label="Labmed São Camilo, voltar ao início">
      <img
        src="/logo-mark.png"
        alt=""
        width="320"
        height="320"
        class="size-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span class="font-display leading-none">
        <span class="block text-[0.95rem] font-bold tracking-tight ${e?"text-white":"text-ink"}">Labmed</span>
        <span class="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand">São Camilo</span>
      </span>
    </a>
  `}function M(){const e=f.map(s=>`
      <li>
        <a href="${s.href}" class="nav-link text-[0.82rem] font-medium text-ink-soft transition-colors duration-200 hover:text-ink">
          ${s.label}
        </a>
      </li>
    `).join(""),a=f.map((s,n)=>`
      <li class="mobile-link" style="--stagger: ${n}">
        <a href="${s.href}" class="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold text-ink transition-colors hover:text-brand" data-menu-close>
          ${s.label}
          <span class="text-brand">${t.arrowUpRight("size-5")}</span>
        </a>
      </li>
    `).join("");return`
    <header id="site-header" class="fixed inset-x-0 top-0 z-50">
      <div class="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        ${C()}

        <nav aria-label="Navegação principal" class="hidden lg:block">
          <ul class="flex items-center gap-6 xl:gap-7">${e}</ul>
        </nav>

        <div class="flex items-center gap-3">
          <a
            href="${p.geral}"
            target="_blank"
            rel="noopener"
            class="lift hidden items-center gap-2 rounded-full bg-brand-cta px-4 py-2.5 text-[0.82rem] font-semibold text-white hover:bg-brand-dark sm:inline-flex"
          >
            ${t.whatsapp("size-4")}
            Agendar pelo WhatsApp
          </a>

          <button
            id="menu-toggle"
            type="button"
            class="flex size-11 cursor-pointer flex-col items-start justify-center rounded-full pl-2.5 text-ink transition-colors hover:bg-mist lg:hidden"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Abrir menu de navegação"
          >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
      </div>

      <!-- Menu mobile (overlay) -->
      <div id="mobile-menu" class="fixed inset-0 top-[4.5rem] z-40 bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <div class="cross-pattern flex h-full flex-col overflow-y-auto px-6 pb-10 pt-4">
          <nav aria-label="Navegação móvel">
            <ul>${a}</ul>
          </nav>
          <a
            href="${p.geral}"
            target="_blank"
            rel="noopener"
            class="lift mobile-link mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-cta px-6 py-4 font-semibold text-white hover:bg-brand-dark"
            style="--stagger: ${f.length}"
            data-menu-close
          >
            ${t.whatsapp()}
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  `}function _(){const e=k.map((a,s)=>`
      <li class="reveal" style="--stagger: ${s+3}">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.78rem] font-medium text-ink-soft">
          <span class="text-brand">${t.cross("size-3")}</span>${a}
        </span>
      </li>
    `).join("");return`
    <section id="inicio" aria-labelledby="hero-title" class="relative overflow-hidden bg-white pt-[4.5rem]">
      <div class="cross-pattern absolute inset-0" aria-hidden="true"></div>

      <div class="relative mx-auto grid max-w-7xl grid-cols-12 gap-x-6 px-5 pb-14 pt-12 sm:px-8 lg:pb-20 lg:pt-20">
        <!-- Coluna editorial -->
        <div class="col-span-12 lg:col-span-7 xl:col-span-6">
          <p class="reveal inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-[0.8rem] font-semibold text-brand-deep" style="--stagger: 0">
            ${t.microscope("size-4")}
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
            ${e}
          </ul>

          <div class="reveal mt-10 flex flex-wrap items-center gap-4" style="--stagger: 5">
            <a
              href="${p.geral}"
              target="_blank"
              rel="noopener"
              class="lift inline-flex items-center gap-2.5 rounded-full bg-brand-cta px-7 py-4 text-[0.95rem] font-semibold text-white shadow-[0_10px_28px_-10px_rgb(237_28_36/0.5)] hover:bg-brand-dark"
            >
              ${t.whatsapp()}
              Agendar pelo WhatsApp
            </a>
            <a
              href="#exames"
              class="lift inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-[0.95rem] font-semibold text-ink hover:border-ink/40"
            >
              Ver exames
              ${t.arrowRight()}
            </a>
          </div>
        </div>

        <!-- Composição visual: foto real da coleta (carro-chefe) -->
        <div class="col-span-12 mt-14 lg:col-span-5 lg:mt-0 xl:col-span-6">
          <div class="relative mx-auto max-w-md lg:max-w-lg lg:ml-auto">
            <span class="absolute -right-8 -top-8 -z-10 size-64 rounded-full bg-brand-soft/70 blur-2xl" aria-hidden="true"></span>

            <div class="reveal overflow-hidden rounded-bento shadow-[0_24px_64px_-24px_rgb(35_35_39/0.35)] ring-1 ring-line" style="--stagger: 2">
              <img
                src="/fotos/coleta.jpg"
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
                <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">${t.heartHand()}</span>
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
            <span class="text-brand">${t.clock("size-4")}</span>
            <span><strong class="font-semibold text-ink">Seg a sex</strong> 6h30 às 15h30 · <strong class="font-semibold text-ink">Sáb</strong> 7h às 11h</span>
          </p>
          <p class="flex items-center gap-2.5">
            <span class="text-brand">${t.mapPin("size-4")}</span>
            <span>${y} · ${b}</span>
          </p>
        </div>
      </div>
    </section>
  `}function S(){const e=k.map(a=>`
      <span class="mx-6 inline-flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
        <span class="text-brand-light/80">${t.cross("size-3.5")}</span>${a}
      </span>
    `).join("");return`
    <div class="marquee overflow-hidden bg-night py-4" aria-hidden="true">
      <div class="marquee-track flex w-max whitespace-nowrap">
        <div class="flex items-center">${e}</div>
        <div class="flex items-center">${e}</div>
      </div>
    </div>
  `}function x(e,a,s,n=!1){const i=n?"text-white/10":"text-ink/8",o=n?"text-brand-light":"text-brand-dark";return`
    <div class="reveal flex items-end gap-5">
      <span class="font-display text-6xl font-bold leading-none ${i} sm:text-7xl" aria-hidden="true">${e}</span>
      <p ${s?`id="${s}"`:""} class="pb-1.5 font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] ${o}">${a}</p>
    </div>
  `}function L(){return`
    <section id="clinica" aria-labelledby="clinica-label" class="relative overflow-hidden bg-night py-20 text-white lg:py-28">
      <!-- brilho vermelho sutil, dá profundidade ao bloco escuro -->
      <span class="absolute -left-40 -top-24 size-[32rem] rounded-full bg-brand/10 blur-3xl" aria-hidden="true"></span>
      <span class="absolute -bottom-32 right-0 size-[26rem] rounded-full bg-brand/5 blur-3xl" aria-hidden="true"></span>

      <div class="relative mx-auto grid max-w-7xl grid-cols-12 gap-x-6 gap-y-12 px-5 sm:px-8">
        <div class="col-span-12">
          ${x("02","A Clínica","clinica-label",!0)}
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
            <span class="grid size-11 place-items-center rounded-xl bg-white/10 text-brand-light">${t.stethoscope()}</span>
            <h3 class="mt-5 font-display text-lg font-semibold">Visão</h3>
            <p class="mt-2 leading-relaxed text-white/70">
              Ser reconhecido como um laboratório de referência em atendimento humanizado,
              com resultados de excelência.
            </p>
          </article>

          <article class="reveal rounded-bento bg-white p-8 text-ink lg:ml-8" style="--stagger: 3">
            <span class="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">${t.heartHand()}</span>
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
              ${t.heartHand("size-4")}
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
  `}const E=[{icon:"flask",title:"Análises Clínicas",desc:"O coração da Labmed: coleta ágil, equipamentos calibrados e uma rotina completa de exames de sangue, urina e hormônios, com resultados rápidos e precisos.",span:"md:col-span-4 md:row-span-2",featured:!0},{icon:"waves",title:"Ultrassonografia",desc:"Imagens em alta definição com opção de Doppler em todas as áreas avaliadas.",span:"md:col-span-2"},{icon:"activity",title:"Fisioterapia",desc:"Reabilitação e alívio de dores com plano de tratamento individualizado.",span:"md:col-span-2"},{icon:"baby",title:"Psicóloga Infantil",desc:"Escuta especializada para o desenvolvimento emocional das crianças.",span:"md:col-span-2"},{icon:"messageHeart",title:"Psicanalista",desc:"Um espaço de escuta para compreender questões emocionais com profundidade.",span:"md:col-span-2"},{icon:"brain",title:"Neuropediatra",desc:"Avaliação e acompanhamento do desenvolvimento neurológico infantil.",span:"md:col-span-2"},{icon:"bookOpen",title:"Neuropsicopedagoga",desc:"Apoio à aprendizagem unindo neurociência, psicologia e pedagogia.",span:"md:col-span-3"},{icon:"droplets",title:"Análise de Água",desc:"Controle de qualidade da água e prevenção de doenças hídricas para residências, empresas e órgãos públicos.",span:"md:col-span-3"}];function q(e,a){return e.featured?`
      <article class="bento-card reveal ${e.span} relative flex flex-col justify-between overflow-hidden rounded-bento border border-line bg-night p-8 text-white" style="--stagger: ${a}">
        <div class="cross-pattern-light absolute inset-0" aria-hidden="true"></div>
        <div class="relative">
          <span class="grid size-12 place-items-center rounded-2xl bg-brand text-white">${t[e.icon]("size-6")}</span>
          <h3 class="mt-6 font-display text-2xl font-bold tracking-tight">${e.title}</h3>
          <p class="mt-3 max-w-sm leading-relaxed text-white/70">${e.desc}</p>
        </div>
        <a
          href="${p.exames}"
          target="_blank"
          rel="noopener"
          class="lift relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.85rem] font-semibold text-ink hover:bg-brand-cta hover:text-white"
        >
          Consultar exames disponíveis
          ${t.arrowRight()}
        </a>
      </article>
    `:`
    <article class="bento-card reveal ${e.span} rounded-bento border border-line bg-white p-7" style="--stagger: ${a}">
      <span class="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">${t[e.icon]()}</span>
      <h3 class="mt-5 font-display text-[1.05rem] font-semibold text-ink">${e.title}</h3>
      <p class="mt-2 text-[0.9rem] leading-relaxed">${e.desc}</p>
    </article>
  `}function j(){return`
    <section id="especialidades" aria-labelledby="especialidades-label" class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="flex flex-wrap items-end justify-between gap-6">
          ${x("03","Especialidades","especialidades-label")}
          <p class="reveal max-w-md pb-1 text-[0.95rem] leading-relaxed" style="--stagger: 1">
            Mais que um laboratório: uma equipe multidisciplinar reunida em um só lugar
            para cuidar da saúde de toda a família.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:[grid-auto-rows:minmax(0,auto)]">
          ${E.map(q).join("")}
        </div>
      </div>
    </section>
  `}const O=["Psicologia Infantil","Psicanálise","Neuropediatria","Neuropsicopedagogia"],I=g("Olá! Gostaria de agendar um atendimento terapêutico na Labmed São Camilo.");function v(e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="${e}" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`}function R(){const e=O.map((a,s)=>`
      <li class="reveal" style="--stagger: ${s+2}">
        <span class="inline-flex items-center gap-1.5 rounded-full border border-sand-line bg-white/70 px-3.5 py-1.5 text-[0.8rem] font-medium text-ink">
          <span class="text-sage">${v("size-3.5")}</span>${a}
        </span>
      </li>
    `).join("");return`
    <section id="acolhimento" aria-labelledby="acolhimento-title" class="atendimento-acolhedor overflow-hidden border-y border-sand-line bg-sand py-20 lg:py-28">
      <div class="mx-auto grid max-w-7xl grid-cols-12 items-center gap-x-6 gap-y-12 px-5 sm:px-8">
        <!-- Texto -->
        <div class="col-span-12 lg:col-span-6">
          <p class="reveal inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[0.8rem] font-semibold text-wood-deep ring-1 ring-sand-line" style="--stagger: 0">
            ${t.heartHand("size-4")}
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
            ${e}
          </ul>

          <div class="reveal mt-9" style="--stagger: 4">
            <a
              href="${I}"
              target="_blank"
              rel="noopener"
              class="lift inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[0.9rem] font-semibold text-white hover:bg-wood-deep"
            >
              ${t.whatsapp()}
              Agendar um horário
            </a>
          </div>
        </div>

        <!-- Foto real da recepção: madeira clara, tons neutros, luz suave -->
        <div class="col-span-12 lg:col-span-6 lg:pl-10">
          <div class="relative mx-auto max-w-md">
            <span class="absolute -right-8 -top-10 text-sage/60" aria-hidden="true">${v("size-20 rotate-12")}</span>

            <figure class="reveal relative overflow-hidden rounded-bento shadow-[0_24px_64px_-24px_rgb(41_36_31/0.35)] ring-1 ring-sand-line" style="--stagger: 2">
              <img
                src="/fotos/recepcao.jpg"
                alt="Recepção da Labmed São Camilo: sala de espera com poltronas claras, madeira e o letreiro dourado da clínica"
                width="840"
                height="1120"
                loading="lazy"
                class="aspect-[3/4] w-full object-cover"
              />
              <figcaption class="absolute bottom-4 left-4">
                <span class="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[0.78rem] font-semibold text-wood-deep shadow-sm backdrop-blur">
                  ${v("size-3.5")}
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
  `}const H=[{nome:"Hemograma",desc:"Avaliação completa das células do sangue: imunidade, anemia e infecções."},{nome:"Glicemia",desc:"Medição da taxa de açúcar no sangue, essencial no controle do diabetes."},{nome:"Colesterol Total",desc:"Monitoramento dos níveis de gordura no sangue e saúde cardiovascular."},{nome:"TSH e T4 Livre",desc:"Avaliação da função da tireoide e do equilíbrio hormonal."},{nome:"Ácido Úrico",desc:"Diagnóstico de gota e acompanhamento da função renal."},{nome:"Transaminases (TGO e TGP)",desc:"Avaliação da saúde do fígado e das vias biliares."}];function P(e,a){const s=String(a+1).padStart(2,"0");return`
    <li class="exam-row reveal group border-b border-line hover:bg-white" style="--stagger: ${a}">
      <div class="grid grid-cols-12 items-center gap-x-4 gap-y-3 px-2 py-6 sm:px-4 lg:py-7">
        <span class="col-span-2 font-display text-sm font-semibold text-steel-dark sm:col-span-1" aria-hidden="true">${s}</span>
        <h3 class="col-span-10 font-display text-lg font-semibold tracking-tight text-ink sm:col-span-3 lg:text-xl">${e.nome}</h3>
        <p class="col-span-12 text-[0.92rem] leading-relaxed sm:col-span-5 lg:col-span-5">${e.desc}</p>
        <div class="col-span-12 sm:col-span-3 lg:col-span-3 sm:text-right">
          <a
            href="${p.exame(e.nome)}"
            target="_blank"
            rel="noopener"
            class="lift inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-[0.8rem] font-semibold text-ink group-hover:border-brand/40 hover:!border-brand hover:bg-brand-cta hover:text-white"
          >
            Agendar este exame
            ${t.arrowRight("size-3.5")}
          </a>
        </div>
      </div>
    </li>
  `}function T(){return`
    <section id="exames" aria-labelledby="exames-label" class="bg-mist py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12 lg:col-span-8">
            ${x("01","Exames Laboratoriais","exames-label")}
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
          ${H.map(P).join("")}
        </ul>

        <!-- Aviso: catálogo completo -->
        <div class="reveal mt-10 flex flex-col items-start justify-between gap-6 rounded-bento border border-dashed border-brand/35 bg-brand-soft/50 p-8 sm:flex-row sm:items-center" style="--stagger: 1">
          <div class="flex items-start gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand ring-1 ring-brand/20">${t.flask()}</span>
            <div>
              <p class="font-display text-lg font-semibold text-ink">E muitos outros exames</p>
              <p class="mt-1 max-w-md text-[0.92rem] leading-relaxed">
                Trabalhamos com uma rotina laboratorial completa. Não encontrou o exame
                que procura? Fale com a gente e consulte disponibilidade e preparo.
              </p>
            </div>
          </div>
          <a
            href="${p.exames}"
            target="_blank"
            rel="noopener"
            class="lift inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.85rem] font-semibold text-white hover:bg-brand-cta"
          >
            Consultar pelo WhatsApp
            ${t.whatsapp("size-4")}
          </a>
        </div>
      </div>
    </section>
  `}const N=["Abdômen total","Rins (vias urinárias)","Tireoide","Mamas","Pélvica (masculina)","Próstata (via abdominal)","Bolsa escrotal","Órgão genital masculino"];function D(){const e=N.map((a,s)=>`
      <li class="reveal flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5" style="--stagger: ${s%4}">
        <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">${t.check("size-3.5")}</span>
        <span class="text-[0.9rem] font-medium text-ink">${a}</span>
      </li>
    `).join("");return`
    <section id="ultrassonografia" aria-labelledby="ultrassom-label" class="bg-mist py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        ${x("04","Ultrassonografia","ultrassom-label")}

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
                ${t.user("size-7")}
              </span>
              <div>
                <p class="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-brand-dark">Responsável técnico</p>
                <p class="mt-1 font-display text-lg font-semibold leading-tight text-ink">Dr. Rodrigo Simões Lemos Dias</p>
                <p class="mt-0.5 text-[0.85rem] text-steel-dark">Ultrassonografia</p>
              </div>
            </div>

            <p class="reveal mt-6 inline-flex items-center gap-2.5 rounded-full bg-night px-5 py-3 text-[0.85rem] font-semibold text-white" style="--stagger: 3">
              <span class="text-brand">${t.waves("size-4")}</span>
              Opção de Doppler em todas as áreas
            </p>
          </div>

          <!-- Áreas atendidas -->
          <div class="col-span-12 lg:col-span-7 lg:pl-6">
            <h3 class="reveal font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-steel-dark" style="--stagger: 0">
              Exames disponíveis
            </h3>
            <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              ${e}
            </ul>

            <div class="reveal mt-8" style="--stagger: 2">
              <a
                href="${p.ultrassom}"
                target="_blank"
                rel="noopener"
                class="lift inline-flex items-center gap-2.5 rounded-full bg-brand-cta px-7 py-4 text-[0.9rem] font-semibold text-white hover:bg-brand-dark"
              >
                ${t.whatsapp()}
                Agendar ultrassonografia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const F=[{icon:t.zap("size-4"),label:"Rápido"},{icon:t.check("size-4"),label:"Fácil"},{icon:t.shieldCheck("size-4"),label:"Confiável"}];function V(){const e=F.map(a=>`
      <li class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.82rem] font-semibold text-white">
        <span class="text-brand">${a.icon}</span>${a.label}
      </li>
    `).join("");return`
    <section id="toxicologico" aria-labelledby="toxicologico-label" class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        ${x("05","Exame Toxicológico","toxicologico-label")}

        <!-- Banner de destaque: fundo escuro + acento vermelho -->
        <div class="reveal relative mt-12 overflow-hidden rounded-bento bg-night text-white" style="--stagger: 1">
          <div class="cross-pattern-light absolute inset-0" aria-hidden="true"></div>
          <span class="absolute inset-x-0 top-0 h-1.5 bg-brand" aria-hidden="true"></span>
          <span class="absolute -right-16 -top-16 hidden size-72 rounded-full border-[2.5rem] border-brand/15 lg:block" aria-hidden="true"></span>

          <div class="relative grid grid-cols-12 gap-x-6 gap-y-10 p-8 sm:p-12 lg:p-16">
            <div class="col-span-12 lg:col-span-7">
              <p class="inline-flex items-center gap-2 rounded-full bg-brand-cta px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white">
                ${t.car("size-4")}
                Motoristas · CNH
              </p>
              <h2 class="mt-6 font-display text-3xl font-bold leading-snug tracking-tight sm:text-4xl xl:text-[2.6rem]">
                Exame toxicológico sem burocracia, pertinho de você.
              </h2>
              <p class="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Vai renovar a CNH ou tirar a habilitação nas categorias C, D ou E?
                Faça seu exame toxicológico na Labmed São Camilo: coleta rápida,
                processo simples e resultado com validade em todo o Brasil.
              </p>

              <ul class="mt-8 flex flex-wrap gap-2.5" aria-label="Diferenciais do exame toxicológico">
                ${e}
              </ul>

              <div class="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9rem] text-white/80">
                <p class="flex items-center gap-2.5">
                  <span class="text-brand">${t.clock("size-4")}</span>
                  Atendimento de segunda a sábado
                </p>
                <p class="flex items-center gap-2.5">
                  <span class="text-brand">${t.mapPin("size-4")}</span>
                  ${b}, no centro de Areal
                </p>
              </div>
            </div>

            <!-- Preço em destaque -->
            <div class="col-span-12 flex flex-col justify-center lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
              <p class="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-white/60">Valor do exame</p>
              <p class="mt-3 font-display font-bold leading-none">
                <span class="align-top text-2xl text-brand">R$</span>
                <span class="text-7xl tracking-tight sm:text-8xl">115</span>
                <span class="text-3xl text-white/70">,00</span>
              </p>
              <a
                href="${p.toxicologico}"
                target="_blank"
                rel="noopener"
                class="lift mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-cta px-7 py-4 text-[0.9rem] font-semibold text-white hover:bg-brand-dark"
              >
                ${t.whatsapp()}
                Agendar toxicológico
              </a>
              <p class="mt-4 text-[0.8rem] text-white/60">Sem necessidade de jejum. Traga um documento com foto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const B="https://www.google.com/maps/search/?api=1&query=Labmed+S%C3%A3o+Camilo+Areal+RJ",U=[{dia:"Segunda a sexta",horas:"6h30 às 15h30",days:"1,2,3,4,5",fechado:!1},{dia:"Sábado",horas:"7h às 11h",days:"6",fechado:!1},{dia:"Domingo",horas:"Fechado",days:"0",fechado:!0}];function W(){const e=U.map((a,s)=>`
      <li class="reveal -mx-3 flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 transition-colors" data-days="${a.days}" style="--stagger: ${s}">
        <span class="flex items-center gap-2.5 font-medium text-ink">
          <span class="${a.fechado?"text-steel":"text-brand"}">${t.cross("size-3.5")}</span>
          ${a.dia}
          <span data-today-badge class="hidden rounded-full bg-brand px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">Hoje</span>
        </span>
        <span class="${a.fechado?"text-steel-dark":"font-semibold text-ink"} text-[0.95rem]">${a.horas}</span>
      </li>
    `).join("");return`
    <section id="contato" aria-labelledby="contato-label" class="border-t border-line bg-mist py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        ${x("06","Horários e Contato","contato-label")}

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

              <ul class="mt-5 divide-y divide-line">${e}</ul>

              <div class="mt-auto border-t border-line pt-5">
                <p class="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-steel-dark">
                  ${t.mapPin("size-4 mt-0.5 shrink-0 text-brand")}
                  <span>${y}<br />${b}</span>
                </p>
                <a
                  href="${B}"
                  target="_blank"
                  rel="noopener"
                  class="lift mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[0.82rem] font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  Como chegar
                  ${t.arrowUpRight("size-3.5")}
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
                    href="${p.geral}"
                    target="_blank"
                    rel="noopener"
                    class="lift inline-flex items-center gap-3 rounded-full bg-brand-cta px-7 py-4 font-semibold text-white shadow-[0_10px_28px_-10px_rgb(237_28_36/0.6)] hover:bg-brand-dark"
                  >
                    ${t.whatsapp()}
                    <span class="text-left leading-tight">
                      <span class="block text-[0.7rem] font-medium uppercase tracking-wider text-white/75">WhatsApp</span>
                      <span class="block text-[0.95rem]">${w}</span>
                    </span>
                  </a>

                  <div class="flex items-center gap-2.5">
                    <a
                      href="${u.instagram}"
                      target="_blank"
                      rel="noopener"
                      aria-label="Instagram da Labmed São Camilo"
                      class="lift grid size-[3.25rem] place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
                    >${t.instagram()}</a>
                    <a
                      href="${u.facebook}"
                      target="_blank"
                      rel="noopener"
                      aria-label="Facebook da Labmed São Camilo"
                      class="lift grid size-[3.25rem] place-items-center rounded-full border border-white/15 text-white/80 hover:border-white/40 hover:text-white"
                    >${t.facebook()}</a>
                  </div>
                </div>

                <p class="mt-6 text-[0.85rem] text-white/60">
                  Siga <a href="${u.instagram}" target="_blank" rel="noopener" class="font-semibold text-white underline decoration-brand-light/60 underline-offset-4 transition-colors hover:decoration-brand-light">@labmedsaocamilo</a>
                  para avisos de funcionamento e novidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function G(){return`
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
            href="${p.geral}"
            target="_blank"
            rel="noopener"
            class="lift inline-flex shrink-0 items-center gap-3 rounded-full bg-brand-cta px-7 py-4 font-semibold text-white shadow-[0_10px_28px_-10px_rgb(237_28_36/0.5)] hover:bg-brand-dark"
          >
            ${t.whatsapp()}
            <span class="text-left leading-tight">
              <span class="block text-[0.7rem] font-medium uppercase tracking-wider text-white/75">Agendar agora</span>
              <span class="block text-[0.95rem]">${w}</span>
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
                src="/fotos/logo-completa.png"
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
              ${t.mapPin("size-4 mt-0.5 shrink-0 text-white/50")}
              <span>${y}<br />${b}</span>
            </p>
            <p class="flex items-center gap-2.5">
              ${t.whatsapp("size-4 shrink-0 text-white/50")}
              <a href="${p.geral}" target="_blank" rel="noopener" class="transition-colors hover:text-white">${w}</a>
            </p>
            <p class="flex items-center gap-2.5">
              ${t.clock("size-4 shrink-0 text-white/50")}
              <span>Seg a sex 6h30 às 15h30 · Sáb 7h às 11h</span>
            </p>
          </address>

          <!-- Redes sociais discretas -->
          <div class="flex items-start gap-2.5">
            <a href="${u.instagram}" target="_blank" rel="noopener" aria-label="Instagram da Labmed São Camilo" class="lift grid size-10 place-items-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white">${t.instagram("size-4")}</a>
            <a href="${u.facebook}" target="_blank" rel="noopener" aria-label="Facebook da Labmed São Camilo" class="lift grid size-10 place-items-center rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white">${t.facebook("size-4")}</a>
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
      href="${p.geral}"
      target="_blank"
      rel="noopener"
      aria-label="Conversar com a Labmed São Camilo no WhatsApp"
      class="lift group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-white shadow-[0_14px_36px_-10px_rgb(37_211_102/0.6)] ring-1 ring-black/10 hover:bg-[#1DA855] sm:bottom-7 sm:right-7"
    >
      ${t.whatsapp("size-6")}
      <span class="max-w-0 overflow-hidden whitespace-nowrap text-[0.85rem] font-semibold transition-[max-width,padding] duration-300 group-hover:max-w-40 group-hover:pl-2.5 group-focus-visible:max-w-40 group-focus-visible:pl-2.5">
        Fale conosco
      </span>
    </a>
  `}function J(){const e=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(s=>s.classList.add("is-visible"));return}const a=new IntersectionObserver(s=>{for(const n of s)n.isIntersecting&&(n.target.classList.add("is-visible"),a.unobserve(n.target))},{threshold:.12,rootMargin:"0px 0px -8% 0px"});e.forEach(s=>a.observe(s))}function Z(){const e=document.getElementById("site-header"),a=document.getElementById("menu-toggle"),s=document.getElementById("mobile-menu"),n=()=>{e?.classList.toggle("is-scrolled",window.scrollY>8)};n(),window.addEventListener("scroll",n,{passive:!0});const i=r=>{!s||!a||(s.classList.toggle("is-open",r),a.classList.toggle("is-open",r),a.setAttribute("aria-expanded",String(r)),a.setAttribute("aria-label",r?"Fechar menu de navegação":"Abrir menu de navegação"),document.body.style.overflow=r?"hidden":"")};a?.addEventListener("click",()=>i(!s?.classList.contains("is-open"))),s?.querySelectorAll("[data-menu-close]").forEach(r=>r.addEventListener("click",()=>i(!1))),window.addEventListener("keydown",r=>{r.key==="Escape"&&i(!1)});const o=new Map;document.querySelectorAll(".nav-link").forEach(r=>{const d=r.getAttribute("href")?.slice(1);d&&o.set(d,r)});const c=new IntersectionObserver(r=>{for(const d of r)d.isIntersecting&&(o.forEach(m=>m.classList.remove("is-active")),o.get(d.target.id)?.classList.add("is-active"))},{rootMargin:"-40% 0px -55% 0px"});o.forEach((r,d)=>{const m=document.getElementById(d);m&&c.observe(m)})}function Y(){const e=document.querySelectorAll("[data-counter]");if(!e.length)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=i=>{const o=Number(i.dataset.counter??"0");if(a){i.textContent=String(o);return}const c=1200,r=performance.now(),d=m=>{const h=Math.min((m-r)/c,1),$=1-Math.pow(1-h,3);i.textContent=String(Math.round(o*$)),h<1&&requestAnimationFrame(d)};requestAnimationFrame(d)},n=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(s(o.target),n.unobserve(o.target))},{threshold:.5});e.forEach(i=>n.observe(i))}function K(){const e=document.querySelectorAll("[data-open-status]"),a=()=>{const s=new Date,n=s.getDay(),i=A[n],o=s.getHours()*60+s.getMinutes(),c=i!=null&&o>=i[0]&&o<i[1];e.forEach(r=>{const d=r.querySelector("[data-open-dot]"),m=c?"Aberto agora":"Fechado no momento";r.childNodes.forEach(h=>{h.nodeType===Node.TEXT_NODE&&(h.textContent="")}),r.append(` ${m}`),d&&(d.classList.toggle("bg-emerald-500",c),d.classList.toggle("bg-steel",!c),d.classList.toggle("motion-safe:animate-pulse",c))}),document.querySelectorAll("[data-days]").forEach(r=>{const d=(r.dataset.days??"").split(",").includes(String(n));r.querySelector("[data-today-badge]")?.classList.toggle("hidden",!d),r.classList.toggle("bg-brand-soft/40",d)})};a(),window.setInterval(a,6e4)}const X=document.querySelector("#app");X.innerHTML=`
  ${M()}
  <main>
    ${_()}
    ${S()}
    ${T()}
    ${L()}
    ${j()}
    ${R()}
    ${D()}
    ${V()}
    ${W()}
  </main>
  ${G()}
`;document.querySelectorAll("[data-year]").forEach(e=>{e.textContent=String(new Date().getFullYear())});Z();J();Y();K();
