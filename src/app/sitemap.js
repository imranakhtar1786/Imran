export default function sitemap() {
  const baseUrl = 'https://imran-akhtar.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}