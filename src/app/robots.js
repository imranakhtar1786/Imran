export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://imran-akhtar.vercel.app/sitemap.xml',
  };
}