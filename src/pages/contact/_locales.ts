export type ContactPageContent = {
  header: {
    title: string;
    description: string;
  };
  info: {
    contact: {
      label: string;
      value: string;
    };
    timeAndPlace: {
      label: string;
      value: string;
    };
    socialMedia: {
      label: string;
    };
  };
  form: {
    title: string;
    fields: {
      name: string;
      institution: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    submit: string;
  };
}

export const en: ContactPageContent = {
  header: {
    title: "Let's Connect",
    description: "We are ready to help answer your questions and needs. Please don't hesitate to contact us through the available channels."
  },
  info: {
    contact: {
      label: "Contact",
      value: "(021) 5086 7668 <i>- Office</i>"
    },
    timeAndPlace: {
      label: "Time and Place",
      value: "08:00 - 17:00, Monday - Friday"
    },
    socialMedia: {
      label: "Social Media"
    }
  },
  form: {
    title: "Alternatively, contact us directly via the form",
    fields: {
      name: "Name*",
      institution: "Institution",
      email: "Email*",
      phone: "Phone",
      subject: "Message subject",
      message: "Write your message here..."
    },
    submit: "Send"
  }
}

export const id: ContactPageContent = {
  header: {
    title: "Mari Terhubung",
    description: "Kami siap membantu menjawab pertanyaan dan kebutuhan Anda. Jangan ragu untuk menghubungi kami melalui kontak yang tersedia."
  },
  info: {
    contact: {
      label: "Kontak",
      value: "(021) 5086 7668 <i>- Office</i>"
    },
    timeAndPlace: {
      label: "Waktu dan Tempat",
      value: "08:00 - 17:00, Senin - Jumat"
    },
    socialMedia: {
      label: "Media Sosial"
    }
  },
  form: {
    title: "Atau, langsung hubungi kami melalui formulir berikut",
    fields: {
      name: "Nama*",
      institution: "Instansi",
      email: "Email*",
      phone: "Telepon",
      subject: "Subjek pesan",
      message: "Tulis pesan di sini..."
    },
    submit: "Kirim"
  }
}

export const locales = { en, id }
