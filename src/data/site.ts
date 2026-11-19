// ─────────────────────────────────────────────────────────────
// Site-wide settings. Change things here, not inside components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "YAY Foundation",
  fullName: "Youngsters Are Young-stars (YAY) Foundation",
  motto: "Healing Divides, Drawing Hearts",
  tagline: "Dream Big, Little Star",
  founded: "13 February 2025",
  description:
    "Youngsters Are Young-stars (YAY) Foundation is a youth-led Nigerian foundation working on menstrual hygiene, inclusive education, gender equity and environmental stewardship, aligned with the UN Sustainable Development Goals.",
  email: "yayfoundationorg@gmail.com",
  instagram: { handle: "@yayfoundation", url: "https://www.instagram.com/yayfoundation" },

  founder: {
    name: "Mosunmola Josephine Ojo",
    role: "Founder, YAY Foundation",
    // Paste the founder's LinkedIn profile URL here. The button appears once this is filled.
    linkedin: "https://www.linkedin.com/in/mosunmola-j-ojo-318a3635b",
  },

  // Free key from https://web3forms.com (sign up with the foundation email).
  // Empty = the form opens the visitor's email app instead of sending directly.
  web3formsKey: "",
};

export type NavItem = { href: string; label: string; short: string; icon: IconName };
export type IconName = "home" | "about" | "work" | "outreach" | "partner" | "mail" | "instagram" | "linkedin" | "arrow";

// Two pages: the home page (with sections reached by #anchors) and the Partner page.
export const nav: NavItem[] = [
  { href: "/", label: "Home", short: "Home", icon: "home" },
  { href: "/#about", label: "About", short: "About", icon: "about" },
  { href: "/#work", label: "Our work", short: "Work", icon: "work" },
  { href: "/#outreach", label: "Outreach", short: "Outreach", icon: "outreach" },
  { href: "/partner", label: "Partner with us", short: "Partner", icon: "partner" },
];
