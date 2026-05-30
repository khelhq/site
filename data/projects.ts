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

  // New fields for slug spec
  client: string;
  timeline: string;
  whatWeBuilt: string;
  problem: string;
  approach: string;
  outcome: string;
  nextProjectSlug: string;
  nextProjectTitle: string;
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
    liveUrl: "https://www.airstudios.world/",
    client: "Air Studios",
    timeline: "8 Weeks / Q1 2025",
    whatWeBuilt: "Interactive Brand Site, Custom Illustration Engine, Digital Portfolio",
    problem: "Air Studios needed a digital presence that lived up to their high-tier visual storytelling. Their previous website was a rigid, template-based grid that flattened their illustrations and failed to capture the cinematic, fluid nature of their visual projects.",
    approach: "Our design philosophy was built on motion and play. Instead of locking their work into standard grid layouts, we created a fluid canvas where elements feel in constant motion. We integrated GSAP scroll triggers and dynamic webGL-inspired filters, allowing their illustrations to scale and animate organically as users interact with the page. We made the choice to use an intimidatingly clear black backdrop to amplify the vibrant, custom color palettes of their art style.",
    outcome: "We shipped a bespoke portfolio platform that resulted in a 40% increase in inbound inquiries within the first month of launch. Qualitatively, it elevated Air Studios from a regional creative studio to a globally recognized digital production brand, leading to high-profile collaborations with international agencies.",
    nextProjectSlug: "muzeyi-yelyen",
    nextProjectTitle: "Muzeyi Yelyen"
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
    liveUrl: "https://muzeyi-portfolio.vercel.app/",
    client: "Muzeyi Yelyen",
    timeline: "6 Weeks / Q2 2025",
    whatWeBuilt: "Minimal Portfolio, Creative Storytelling Platform",
    problem: "Muzeyi Yelyen needed a personal portfolio that felt personal. Traditional portfolio templates felt too sterile and commercial, failing to reflect his deeply organic, storytelling-driven design philosophy and personal writing voice.",
    approach: "We stripped away all unnecessary visual noise, opting for an ultra-minimalist design system with raw typographic accents and smooth, high-fidelity transitions. We treated each page load as the opening of a book, designing custom text-reveal entry animations that ease the user into the narrative. We chose to focus on micro-interactions, making sure the portfolio remains entirely unobtrusive so that the illustration work remains the primary focal point of the browser.",
    outcome: "Shipped a highly personalized portfolio featured on multiple visual design inspiration sites. Muzeyi reported a massive qualitative shift: clients now approach him with a clear understanding of his storytelling methodology, leading to highly aligned, higher-value commissions.",
    nextProjectSlug: "air-studios",
    nextProjectTitle: "Air Studios"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
