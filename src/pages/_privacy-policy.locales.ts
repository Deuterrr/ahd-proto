import type { PolicyPageContent } from '../types/policy';
import { policyContactsEn, policyContactsId } from '../data/policyContact';

const en: PolicyPageContent = {
  title: "Privacy Policy",
  lastUpdatedLabel: "Last Updated:",
  lastUpdatedDate: "May 22, 2026",
  intro: "This Privacy Policy explains how AHD collects, uses, protects, and manages personal information, cookies, and similar technologies when you visit our website.",
  seo: {
    title: "Privacy Policy | AHD",
    desc: "Learn how AHD collects, uses, and protects personal information through our website and digital services.",
    robots: 'index, follow',
  },
  contacts: policyContactsEn,
  sections: [
    {
      title: "Data Security",
      paragraphs: [
        {
            text: "AHD implements reasonable technical and organizational measures designed to protect website data, communications, and related systems from unauthorized access, misuse, alteration, or disclosure. While appropriate safeguards are maintained, no internet-based service or electronic storage system can guarantee absolute security. Users should therefore exercise appropriate caution when transmitting information online."
        }
      ]
    },
    {
      title: "User Rights",
      paragraphs: [
        {
            text: "Where permitted by applicable laws and regulations, users may request access to personal information held by AHD, request corrections to inaccurate or incomplete information, or request the deletion of personal data when appropriate. Requests regarding personal information may be submitted through AHD's official communication channels and will be reviewed in accordance with applicable legal requirements."
        }
      ]
    },
  ]
};

const id: PolicyPageContent = {
  title: "Kebijakan Privasi",
  lastUpdatedLabel: "Terakhir Diperbarui:",
  lastUpdatedDate: "22 Mei 2026",
  intro: "Kebijakan Privasi ini menjelaskan bagaimana AHD mengumpulkan, menggunakan, melindungi, dan mengelola informasi pribadi, cookie, dan teknologi serupa saat Anda mengunjungi situs web kami.",
  seo: {
    title: "Kebijakan Privasi | AHD",
    desc: "Pelajari bagaimana AHD mengumpulkan, menggunakan, dan melindungi informasi pribadi melalui situs web dan layanan digital kami.",
    robots: 'index, follow',
  },
  contacts: policyContactsId,
  sections: [
    {
      title: "Keamanan Data",
      paragraphs: [
        {
            text: "AHD menerapkan langkah-langkah teknis dan organisasi yang wajar yang dirancang untuk melindungi data situs web, komunikasi, dan sistem terkait dari akses, penyalahgunaan, perubahan, atau pengungkapan yang tidak sah. Meskipun perlindungan yang tepat dipertahankan, tidak ada layanan berbasis internet atau sistem penyimpanan elektronik yang dapat menjamin keamanan absolut. Oleh karena itu, pengguna harus sangat berhati-hati saat mengirimkan informasi secara online."
        }
      ]
    },
    {
      title: "Hak Pengguna",
      paragraphs: [
        {
            text: "Jika diizinkan oleh hukum dan peraturan yang berlaku, pengguna dapat meminta akses ke informasi pribadi yang dipegang oleh AHD, meminta koreksi atas informasi yang tidak akurat atau tidak lengkap, atau meminta penghapusan data pribadi jika sesuai. Permintaan mengenai informasi pribadi dapat diajukan melalui saluran komunikasi resmi AHD dan akan ditinjau sesuai dengan persyaratan hukum yang berlaku."
        }
      ]
    },
  ]
};

export const locales = { en, id };
