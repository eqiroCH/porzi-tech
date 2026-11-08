/** Language-neutral facts: pictures, contact data, routes. All wording lives in content.ts. */

export interface Picture {
  src: string
  width: number
  height: number
  /** CSS object-position, to crop the picture into the hexagon */
  focus?: string
}

export const pictures = {
  simaticS5: { src: '/media/simatic-s5.webp', width: 1400, height: 1621, focus: '50% 30%' },
  pg730: { src: '/media/s5-programmiergeraet.webp', width: 1400, height: 1050, focus: '45% 50%' },
  s71500: { src: '/media/simatic-s7-1500.webp', width: 1400, height: 1050, focus: '30% 55%' },
  klemmen: { src: '/media/reihenklemmen.webp', width: 1400, height: 1050, focus: '55% 35%' },
  tig: { src: '/media/wig-schweissen.webp', width: 1400, height: 1050, focus: '45% 55%' },
  tigWorkshop: { src: '/media/wig-schweissen-werkstatt.webp', width: 1400, height: 930, focus: '50% 60%' },
  weldSeam: { src: '/media/schweissnaht-rohr.webp', width: 960, height: 500, focus: '50% 50%' },
  seedamm: { src: '/media/pfaeffikon-seedamm.webp', width: 1400, height: 916, focus: '45% 50%' },
} satisfies Record<string, Picture>

export type PictureKey = keyof typeof pictures

/**
 * Stand-in pictures from Wikimedia Commons, until Porzi Tech's own photos arrive.
 * Listed in the Impressum under "Bildnachweis".
 */
export const pictureCredits = [
  { what: 'Simatic S5-100U', who: 'Alxcor', licence: 'CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Simatic_S5-100U_CPU103.jpg' },
  { what: 'Simatic S5 PG 730', who: 'Palatinatian', licence: 'CC BY 3.0', href: 'https://commons.wikimedia.org/wiki/File:Siemens_Simatic_S5_PG_730.jpg' },
  { what: 'Simatic S7-1500', who: 'Palatinatian', licence: 'CC BY 3.0', href: 'https://commons.wikimedia.org/wiki/File:S71500.JPG' },
  { what: 'Reihenklemmen', who: 'tony_duell', licence: 'CC BY 2.0', href: 'https://commons.wikimedia.org/wiki/File:Cabinet_Terminal_Block.jpg' },
  { what: 'TIG-Schweissen', who: 'Mak04', licence: 'Public Domain', href: 'https://commons.wikimedia.org/wiki/File:TIG_welding.jpg' },
  { what: 'TIG-Schweissen, Werkstatt', who: 'U.S. Navy', licence: 'Public Domain', href: 'https://commons.wikimedia.org/wiki/File:US_Navy_090715-N-5821P-002_Aviation_Support_Equipment_Technician_Airman_Anthony_Hammond_performs_tungsten_inert_gas_welding_during_a_training_evolution.jpg' },
  { what: 'Schweissnaht 316L', who: '4X4 Blazer 1776', licence: 'CC BY 2.0', href: 'https://commons.wikimedia.org/wiki/File:Orbital_Welding_316L_Stainless_Steel.jpg' },
  { what: 'Pfäffikon SZ, Luegete', who: 'Roland zh', licence: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Pf%C3%A4ffikon_(SZ)_-_Luegete_-_Seedamm-_Rapperswil_2010-10-21_18-18-42.JPG' },
]

export const contact = {
  company: 'Porzi Tech GmbH',
  street: 'Churerstrasse 160A',
  city: '8808 Pfäffikon SZ',
  phone: '055 525 98 08',
  phoneHref: 'tel:+41555259808',
  email: 'info@porzi-tech.ch',
  emailHref: 'mailto:info@porzi-tech.ch',
  uid: 'CHE-137.297.616',
  register: 'HR Schwyz',
  mapsUrl:
    'https://www.google.com/maps/place/Porzi+Tech+Gmbh/@47.2014516,8.7982958,17z/data=!3m1!4b1!4m6!3m5!1s0x479ab7c48f4ffbfb:0x6ed4b78955a9cc3a!8m2!3d47.2014516!4d8.7982958!16s%2Fg%2F11ll7c284c',
  mapsEmbed: 'https://maps.google.com/maps?q=Porzi+Tech+GmbH,+Churerstrasse+160A,+8808+Pf%C3%A4ffikon+SZ&z=16&output=embed',
}

/** Office hours in minutes after midnight, Monday to Friday. */
export const officeHours = [
  { from: 8 * 60, to: 12 * 60 },
  { from: 13 * 60, to: 17 * 60 + 30 },
]

/**
 * AGB: set to the PDF path (e.g. '/agb-porzi-tech.pdf', placed in /public) once the client sends it.
 * The footer shows the AGB link only when this is set.
 */
export const agbUrl: string | null = null

export type ServiceSlug = 'automation' | 'anlagenservice' | 'schweisstechnik'

export const servicePaths: Record<ServiceSlug, string> = {
  automation: '/automation',
  anlagenservice: '/anlagenservice',
  schweisstechnik: '/schweisstechnik',
}

export const serviceOrder: ServiceSlug[] = ['automation', 'anlagenservice', 'schweisstechnik']
