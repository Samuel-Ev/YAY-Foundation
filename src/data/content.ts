// ─────────────────────────────────────────────────────────────
// All page content lives here, as plain data.
// Add an outreach, a stat or a photo by adding an item to a list:
// every page that shows that list updates automatically.
// (In a later version this file is what a CMS such as Sanity replaces.)
// ─────────────────────────────────────────────────────────────
import type { ImageMetadata } from "astro";
import leaflets from "../assets/photos/outreach-leaflets-crowd.jpg";
import facilitator from "../assets/photos/facilitator-speaking.jpg";
import notes from "../assets/photos/students-taking-notes.jpg";
import listening from "../assets/photos/students-listening.jpg";
import hall from "../assets/photos/school-hall-session.jpg";
import padsHall from "../assets/photos/students-with-pads-hall.jpg";
import groupPhoto from "../assets/photos/class-group-photo.jpg";
import schoolyard from "../assets/photos/outreach-pads-schoolyard.jpg";

export const heroPhoto = {
  src: schoolyard,
  alt: "A YAY Foundation volunteer stands with schoolgirls who are holding up packs of sanitary pads in a school yard.",
};

export const stats = [
  { value: 1700, suffix: "+", text: "students reached in school outreaches since February 2025" },
  { value: 1400, suffix: "+", text: "sanitary pad packs placed in girls' hands" },
  { value: 4, suffix: "", text: "regions of Nigeria: West, North, East and South" },
  { value: 10000, suffix: "", text: "lives to touch by 2030, our headline target" },
];

export const values = ["inclusivity", "hygiene", "education", "sustainability"];

export const pillars = [
  {
    title: "Hygiene, health and human dignity",
    text: "We work to end period poverty. Girls receive sanitary pads and plain-spoken teaching on menstrual health, and communities learn the hygiene habits that stop disease from spreading.",
    sdgs: [3, 5],
  },
  {
    title: "Inclusive quality education",
    text: "We provide books, learning materials and mentorship to underserved young people, so that poverty does not decide who gets to learn.",
    sdgs: [4, 10],
  },
  {
    title: "Gender equity and special-needs advocacy",
    text: "We bring boys in as allies for gender equality, and we speak up for neurodivergent children and for young people with physical or cognitive disabilities.",
    sdgs: [5, 10],
  },
  {
    title: "Environmental stewardship",
    text: "We train young people in responsible waste management, recycling and care for their local environment, building habits that last.",
    sdgs: [11],
  },
];

export const regions = [
  {
    zone: "Western Nigeria",
    state: "Ekiti State",
    points: ["700+ students reached in Ado-Ekiti and Ilawe-Ekiti", "400+ sanitary pad packs distributed", "100+ meals for children living on the street"],
  },
  {
    zone: "Northern Nigeria",
    state: "Kwara State",
    points: ["700+ girls reached in Ilorin", "700+ sanitary pad packs distributed", "Approved by the Kwara State Ministry of Education"],
  },
  {
    zone: "Southern Nigeria",
    state: "Rivers State",
    points: ["300+ students at Oromonike Girls Secondary School", "300+ sanitary pad packs distributed"],
  },
  {
    zone: "Eastern Nigeria",
    state: "Abia State",
    points: ["Research and legal base at Nigerian British University, Asa", "Links human rights law with sustainable development policy"],
  },
];

export const events = [
  {
    date: "2025-02-14",
    label: "14 February 2025 · Ado-Ekiti",
    title: "Mary Immaculate Grammar School",
    text: "A health education session for more than 250 girls on managing menstruation, the myths around it and how period poverty keeps girls out of class.",
  },
  {
    date: "2025-02-14",
    label: "14 February 2025 · Ilawe-Ekiti",
    title: "Corpus Christi College",
    text: "More than 150 schoolgirls joined a session on health, self-esteem, dignity and leadership. Across both Ekiti schools that day, over 400 pad packs and school supplies were handed out.",
  },
  {
    date: "2025-02-14",
    label: "14 February 2025 · Ekiti State",
    title: "Street child nutrition drive",
    text: "Volunteers cooked and served nutritious meals to more than 100 children living on the streets, because a hungry child cannot learn.",
  },
  {
    date: "2025-03-07",
    label: "7 March 2025 · Ekiti State",
    title: "International Women's Day drive",
    text: "300 more female students took part in career mentoring, leadership development, rights advocacy and environmental hygiene awareness.",
  },
  {
    date: "2026-08-01",
    label: "1 August 2026 · Ilorin, Kwara State",
    title: "Our largest outreach so far",
    text: "Over 700 girls received health education, sanitary supplies and mentorship, with the authorisation and endorsement of the Kwara State Ministry of Education.",
  },
];

export type Photo = { src: ImageMetadata; alt: string; caption: string };

export const gallery: Photo[] = [
  { src: leaflets, alt: "A crowd of schoolgirls reach out for leaflets handed out by a YAY Foundation volunteer.", caption: "Health leaflets going round" },
  { src: facilitator, alt: "A facilitator speaks into a microphone to a hall of seated students.", caption: "A facilitator takes questions" },
  { src: notes, alt: "Students in uniform writing notes during a session.", caption: "Taking notes" },
  { src: listening, alt: "Students in purple shirts listening closely during a talk.", caption: "Listening in" },
  { src: hall, alt: "A large school hall filled with students in blue uniforms.", caption: "A full school hall" },
  { src: padsHall, alt: "A large group of students hold up sanitary pad packs after a session.", caption: "After the session" },
  { src: groupPhoto, alt: "Students and teachers pose together holding sanitary pad packs.", caption: "Students and their teachers" },
];

export const targets = [
  { big: "1,500", unit: "girls trained in menstrual hygiene", indicator: "Menstrual hygiene training", target: "At least 1,500 girls", sdgs: ["SDG 3", "SDG 4", "SDG 5"], how: "School workshops, hygiene pack distribution, peer educator networks" },
  { big: "5,000", unit: "people reached within 12 months", indicator: "Community outreach", target: "5,000 people within 12 months", sdgs: ["SDG 10", "SDG 11"], how: "Town hall sessions, educational rallies, digital campaigns" },
  { big: "10,000", unit: "lives touched by 2030", indicator: "Long-term human impact", target: "10,000 lives by 2030", sdgs: ["SDGs 1 to 17"], how: "Multi-state expansion, civic education, youth leadership programmes" },
  { big: "Ministries", unit: "formal partnerships with state ministries", indicator: "Institutional partnerships", target: "Formal partnerships with state ministries", sdgs: ["SDG 17"], how: "Ministry approvals, public sector co-sponsorship, school alignment" },
  { big: "Every child", unit: "boys, neurodivergent youth and children with disabilities included", indicator: "Inclusive engagement", target: "Boys, neurodivergent youth and children with disabilities included", sdgs: ["SDG 5", "SDG 10"], how: "Male advocacy workshops, accessibility initiatives" },
];

export const goals = [
  { n: 2, name: "Zero Hunger" },
  { n: 3, name: "Good Health and Well-being" },
  { n: 4, name: "Quality Education" },
  { n: 5, name: "Gender Equality" },
  { n: 10, name: "Reduced Inequalities" },
  { n: 11, name: "Sustainable Cities and Communities" },
  { n: 17, name: "Partnerships for the Goals" },
];

// Order matters: this is the order the cards appear in.
export const partnerWays = [
  { title: "International bodies and funders", text: "Fund sanitary supplies, learning materials and expansion into new states, with outcomes reported against SDG indicators." },
  { title: "Government agencies", text: "Approve and co-sponsor outreaches in public schools, and work with us on hygiene, education and child rights policy in your state." },
  { title: "Foundations, schools and individuals", text: "Run a joint programme, invite us to your school, volunteer your time or give towards the next outreach." },
];

export const logoMeaning = [
  { icon: "hands", title: "Two hands, interlocked", text: "Inclusivity: equal opportunities for the boy and the girl child." },
  { icon: "diamond", title: "The diamond between them", text: "The space the hands create stands for sustainability." },
  { icon: "globe", title: "The circle", text: "The world, and the lives of children we want to improve across it." },
  { icon: "star", title: "The star in our name", text: "Every child can become a star through education." },
];
