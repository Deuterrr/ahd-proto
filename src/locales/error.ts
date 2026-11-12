// Localized error page messaging and recovery action labels.
export type ErrorContent = {
  notFound: {
    title: string
    message: string
  }
  internalErr: {
    title: string
    message: string
  }
  button: string
}

export const id: ErrorContent = {
  notFound: {
    title: "Halaman Tidak Ditemukan",
    message: "Maaf, halaman yang Anda coba akses tidak dapat ditemukan.",
  },
  internalErr: {
    title: "Terjadi Kesalahan",
    message: "Maaf, terjadi kesalahan pada sistem kami.",
  },
  button: "Kembali ke Beranda"
}

export const en: ErrorContent = {
  notFound: {
    title: "Page Not Found",
    message: "Sorry, the page you are trying to access cannot be found.",
  },
  internalErr: {
    title: "Something Went Wrong",
    message: "Sorry, there was an error in our system.",
  },
  button: "Back to Home"
}

export const locales = { id, en }
