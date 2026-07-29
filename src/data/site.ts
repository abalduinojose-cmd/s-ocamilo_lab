/**
 * Dados centrais do site — edite aqui para trocar telefone,
 * endereço, horários e redes sociais em todos os lugares de uma vez.
 */

export const PHONE_DISPLAY = "(24) 2257-9826";
export const PHONE_WA = "552422579826";

export const ADDRESS_SHORT = "Praça Pres. Castelo Branco, 365 · Centro, Areal, RJ";
export const ADDRESS_HINT = "Ao lado dos Correios";

export const SOCIAL = {
  instagram: "https://www.instagram.com/labmedsaocamilo/",
  facebook: "https://www.facebook.com/profile.php?id=61554792941677",
};

/** Deep link do WhatsApp com mensagem pré-preenchida. */
export function wa(message: string): string {
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`;
}

/**
 * Caminho de arquivo estático respeitando o `base` do Vite
 * (necessário para o site funcionar em subcaminho, ex.: GitHub Pages).
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}

export const WA_LINKS = {
  geral: wa("Olá! Gostaria de agendar um atendimento na Labmed São Camilo."),
  exames: wa("Olá! Gostaria de informações sobre exames laboratoriais na Labmed São Camilo."),
  ultrassom: wa("Olá! Gostaria de agendar um exame de ultrassonografia na Labmed São Camilo."),
  toxicologico: wa("Olá! Gostaria de agendar o exame toxicológico para CNH na Labmed São Camilo."),
  exame: (nome: string) => wa(`Olá! Gostaria de agendar o exame de ${nome} na Labmed São Camilo.`),
};

/**
 * Horários de funcionamento (usados na UI e no indicador "Aberto agora").
 * Formato: [abre, fecha] em minutos desde 00:00. null = fechado.
 */
export const HOURS: Record<number, [number, number] | null> = {
  0: null, // domingo
  1: [390, 930], // seg 6h30 às 15h30
  2: [390, 930],
  3: [390, 930],
  4: [390, 930],
  5: [390, 930],
  6: [420, 660], // sáb 7h às 11h
};

export const SERVICES = [
  "Análises Clínicas",
  "Ultrassonografia",
  "Fisioterapia",
  "Psicologia Infantil",
  "Psicanálise",
  "Neuropediatria",
  "Neuropsicopedagogia",
  "Análise de Água",
];
