export type PolicySection = {
  title: string;
  paragraphs: {
    title?: string;
    text: string;
  }[];
};

export type ContactSection = {
    title: string;
    type: "link" | null;
    link?: string;
    value: string;
};

export type PolicyPageContent = {
  title: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  intro: string;
  seo: {
    title: string;
    desc: string;
    robots: string;
  }
  contacts: ContactSection[];
  sections: PolicySection[];
};
