// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'epl-la-bonne-semence-kara',
  logo: '/logo-epl-la-bonne-semence.png',
  settings: {
    name: 'EPL LA BONNE SEMENCE',
    shortName: 'EPL LA BONNE SEMENCE',
    slogan: 'SEMER AUJOURD’HUI, RÉCOLTER DEMAIN',
    address: 'Quartier Tomdè, Kozah Centre — Kara, Togo',
    email: 'contact@labonnesemence-kara.tg',
    phone: '+228 93 79 32 03',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 50000,
    canteenFee: 300,
    badgeFee: 500,
    uniformFee: 3000,
    apeFee: 1500,
  },
  footerText:
    'Une école primaire laïque agréée par l’État, à Tomdè (Kara), où chaque enfant reçoit les bases solides de sa réussite.',
  hero: {
    eyebrow: 'TRAVAIL - DISCIPLINE - RÉUSSITE',
    titleLines: ['École Primaire', 'Laïque'],
    highlight: 'LA BONNE SEMENCE',
    intro:
      'Bienvenue sur le site officiel de l’EPL LA BONNE SEMENCE, école primaire laïque agréée par l’État, au quartier Tomdè à Kara : un cadre sérieux et bienveillant pour bien commencer sa scolarité.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'La direction de l’EPL LA BONNE SEMENCE',
    eyebrow: 'UN MOT DU DIRECTEUR',
    titleLines: ['Bien semer,', 'pour bien grandir.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'À l’EPL LA BONNE SEMENCE, nous croyons que tout se joue dès les premières années d’école. Notre ambition est de semer chez chaque enfant le goût d’apprendre, la discipline et le respect des autres.',
      'Notre équipe enseignante accompagne les élèves du CP1 au CM2 avec exigence et attention, en lien étroit avec les familles de Tomdè et de toute la ville de Kara, pour les préparer avec confiance à l’entrée au collège.',
    ],
    signature: 'KROUSSAMA Proukou — Directeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'L’EPL LA BONNE SEMENCE est implantée dans le quartier Tomdè, dans la commune de Kozah Centre. Elle est née de la volonté d’offrir aux familles du quartier une école primaire de qualité, proche de chez elles.',
      'Conscients des attentes des familles dans leur recherche d’un établissement scolaire de qualité, nous avons créé une école qui allie excellence académique et épanouissement personnel en offrant un cadre d’apprentissage stimulant, sécurisé et adapté aux besoins de chaque enfant.',
      'L’EPL LA BONNE SEMENCE est une école primaire laïque privée, agréée par le Ministère de l’Éducation nationale du Togo. Elle suit le programme officiel togolais et prépare chaque élève, du CP1 au CM2, à réussir son CEPD et son entrée au collège.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Des bases solides en lecture, écriture et calcul pour chaque élève.' },
    { icon: 'heart', title: 'Bienveillance', text: 'Un environnement d’apprentissage chaleureux et respectueux.' },
    { icon: 'idea', title: 'Discipline et travail', text: 'Le goût de l’effort et la rigueur au quotidien.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Kara.' },
  ],
  faq: [
    {
      q: 'L’école est-elle reconnue par l’État ?',
      a: 'Oui. L’EPL LA BONNE SEMENCE est une école primaire laïque privée agréée par le Ministère de l’Éducation nationale du Togo. Elle suit le programme officiel du primaire, du CP1 au CM2.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Kara desservis.',
    },
    {
      q: 'Les frais de scolarité à l’EPL LA BONNE SEMENCE s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Primaire',
      slug: 'primaire',
      age: '6 à 11 ans',
      text: 'Le primaire pose et consolide les apprentissages fondamentaux, en suivant le programme officiel togolais. Chaque élève progresse dans un cadre structuré et bienveillant.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Ouverture aux sciences et au monde',
        'Maîtrise du français et initiation à l’anglais',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et mathématiques au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'users',
          title: 'Sport et coopération',
          text: 'Apprendre le respect, l’esprit d’équipe et l’autonomie.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (sauf pour enfant entrant en CP1)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
