export type Project = {
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  gallery: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "air-studios",
    title: "Air Studios",
    category: "Website",
    imageUrl: "/Mockkup.jpg",
    year: "2025",
    overview: "Air Studios is a creative studio based in Ghana specializing in illustration, design, and storytelling. They approached us to create a digital platform to showcase their top-tier visual content.",
    challenge: "Transforming their creative ideas into an impactful digital experience that ensures their flagship film, TV, and multimedia projects live up to their brand with creativity and precision.",
    solution: "We designed a fluid, highly interactive portfolio using modern web technologies like Next.js and GSAP to create smooth transitions and a premium aesthetic that elevates their creative work.",
    gallery: [
      "/Mockkup.jpg",
      "/Mockkup.jpg"
    ],
    liveUrl: "https://www.airstudios.world/"
  },
  {
    slug: "muzeyi-yelyen",
    title: "Muzeyi Yelyen - Portofolio 25",
    category: "Website",
    imageUrl: "/Mockkupv2.jpg",
    year: "2025",
    overview: "Muzeyi Yelyen is a Ghanaian based illustrator, designer and writer. This portfolio was designed to showcase his visual stories, illustrations, and design work across books, advertising, and branding.",
    challenge: "Creating a standout portfolio that remains unobtrusive, allowing the creative work itself to take center stage without distraction.",
    solution: "A minimalist design system paired with fluid interactions that evoke a wonder for storytelling, reflecting his personal philosophy of continuously exploring new ways to share narratives.",
    gallery: [
      "/Mockkupv2.jpg",
      "/Mockkupv2.jpg"
    ],
    liveUrl: "https://muzeyi-portfolio.vercel.app/"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
