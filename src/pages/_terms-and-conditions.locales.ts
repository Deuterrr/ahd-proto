import type { PolicyPageContent } from '../types/policy';
import { policyContactsEn, policyContactsId } from '../data/policyContact';

export const en: PolicyPageContent = {
  title: "Terms & Conditions",
  lastUpdatedLabel: "Last Updated:",
  lastUpdatedDate: "May 22, 2026",
  intro: "By accessing and using this website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our website.",
  seo: {
    title: "Terms and Conditions | AHD",
    desc: "Read AHD’s Terms & Conditions regarding website usage, intellectual property, limitations, and user responsibilities.",
    robots: 'index, follow',
  },
  contacts: policyContactsEn,
  sections: [
    {
      title: "Terms Acceptance",
      paragraphs: [
        {
          text: "By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue the use of this website. Your continued use of the website constitutes acceptance of any updates or modifications to these Terms & Conditions that may be published from time to time."
        }
      ]
    },
  ]
};

export const id: PolicyPageContent = {
  title: "Syarat & Ketentuan",
  lastUpdatedLabel: "Terakhir Diperbarui:",
  lastUpdatedDate: "22 Mei 2026",
  intro: "Dengan mengakses dan menggunakan situs web ini, Anda setuju untuk mematuhi dan terikat oleh Syarat & Ketentuan berikut. Harap baca dengan saksama sebelum menggunakan situs web kami.",
  seo: {
    title: "Syarat & Ketentuan | AHD",
    desc: "Baca Syarat & Ketentuan AHD mengenai penggunaan situs web, hak kekayaan intelektual, batasan, dan tanggung jawab pengguna.",
    robots: 'index, follow',
  },
  contacts: policyContactsId,
  sections: [
    {
      title: "Penerimaan Syarat",
      paragraphs: [
        {
          text: "Dengan mengakses, menelusuri, atau menggunakan situs web ini, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap hentikan penggunaan situs web ini. Penggunaan situs web secara berkelanjutan oleh Anda merupakan penerimaan atas pembaruan atau modifikasi apa pun pada Syarat & Ketentuan ini yang mungkin diterbitkan dari waktu ke waktu."
        }
      ]
    },
  ]
};

export const locales = { en, id };
