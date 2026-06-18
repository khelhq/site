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
    slug: "presbon-safe",
    title: "Presbon Safe",
    category: "NGO Website",
    imageUrl: "/mockup3.webp",
    year: "2026",
    overview: "Presbon Safe is an NGO championing safer mining practices and sustainable futures in Artisanal and Small-Scale Mining (ASM) communities in Ghana and globally. We built their complete digital platform including news, publications, a donation system powered by Paystack, and a compelling public-facing presence.",
    challenge: "Creating a digital platform for an NGO that needed to communicate urgency, credibility, and impact while also providing functional tools like news publishing, research publication access, and a seamless donation experience across multiple currencies.",
    solution: "We designed a mission-driven website with a cinematic hero experience, structured content sections for research and news, and a fully integrated Paystack donation flow supporting GHS, USD, and NGN currencies with preset and custom amounts.",
    gallery: [
      "/mkup1.png",
      "/mkup2.png"
    ],
    liveUrl: "https://presbon-web.vercel.app/",
    client: "Presbon Safe",
    timeline: "3 Weeks / Q2 2026",
    whatWeBuilt: "NGO Website, News Platform, Research Publications Hub, Paystack Donation Integration",
    problem: "Presbon Safe needed a digital platform that could effectively communicate their mission of promoting safe, mercury-free mining practices to a global audience. They required a site that could host news updates, showcase academic research publications, and critically, enable international donations through a reliable payment gateway — all while maintaining the gravitas befitting an organization protecting miners' lives and the environment.",
    approach: "We built a full-featured Next.js platform anchored by a cinematic, full-bleed hero section with animated statistics to immediately convey impact. The information architecture was structured around three pillars: storytelling (news and press releases with category filtering), credibility (research publications linking to peer-reviewed journals), and action (a custom Paystack-powered donation page with multi-currency support, preset donation tiers, and contextual impact messaging). We used a deep green and gold color palette rooted in the organization's identity, paired with editorial typography to balance authority with approachability.",
    outcome: "Delivered a comprehensive platform that elevated Presbon Safe's digital presence from non-existent to a professional, globally accessible hub. The integrated Paystack donation system enabled seamless contributions from supporters worldwide, while the research and news sections established Presbon Safe as a credible voice in the ASM sustainability space.",
    nextProjectSlug: "air-studios",
    nextProjectTitle: "Air Studios"
  },
  {
    slug: "air-studios",
    title: "Air Studios",
    category: "Agency Website",
    imageUrl: "/Mockkup.webp",
    year: "2025",
    overview: "Air Studios is a creative studio based in Ghana specializing in illustration, design, and storytelling. They approached us to create a digital platform to showcase their top-tier visual content.",
    challenge: "Transforming their creative ideas into an impactful digital experience that ensures their flagship film, TV, and multimedia projects live up to their brand with creativity and precision.",
    solution: "We designed a fluid, highly interactive portfolio using modern web technologies like Next.js and GSAP to create smooth transitions and a premium aesthetic that elevates their creative work.",
    gallery: [
      "/Mockkup.webp",
      "/Mockkup.webp"
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
    title: "Muzeyi Yelyen 25'",
    category: "Website",
    imageUrl: "/Mockkupv2.webp",
    year: "2025",
    overview: "Muzeyi Yelyen is a Ghanaian based illustrator, designer and writer. This portfolio was designed to showcase his visual stories, illustrations, and design work across books, advertising, and branding.",
    challenge: "Creating a standout portfolio that remains unobtrusive, allowing the creative work itself to take center stage without distraction.",
    solution: "A minimalist design system paired with fluid interactions that evoke a wonder for storytelling, reflecting his personal philosophy of continuously exploring new ways to share narratives.",
    gallery: [
      "/Mockkupv2.webp",
      "/Mockkupv2.webp"
    ],
    liveUrl: "https://muzeyi-portfolio.vercel.app/",
    client: "Muzeyi Yelyen",
    timeline: "6 Weeks / Q2 2025",
    whatWeBuilt: "Minimal Portfolio, Creative Storytelling Platform",
    problem: "Muzeyi Yelyen needed a personal portfolio that felt personal. Traditional portfolio templates felt too sterile and commercial, failing to reflect his deeply organic, storytelling-driven design philosophy and personal writing voice.",
    approach: "We stripped away all unnecessary visual noise, opting for an ultra-minimalist design system with raw typographic accents and smooth, high-fidelity transitions. We treated each page load as the opening of a book, designing custom text-reveal entry animations that ease the user into the narrative. We chose to focus on micro-interactions, making sure the portfolio remains entirely unobtrusive so that the illustration work remains the primary focal point of the browser.",
    outcome: "Shipped a highly personalized portfolio featured on multiple visual design inspiration sites. Muzeyi reported a massive qualitative shift: clients now approach him with a clear understanding of his storytelling methodology, leading to highly aligned, higher-value commissions.",
    nextProjectSlug: "elevat-ed",
    nextProjectTitle: "Elevat-ed"
  },
  {
    slug: "elevat-ed",
    title: "Elevat-ed",
    category: "NGO Platform",
    imageUrl: "/ele1.webp",
    year: "2026",
    overview: "Elevat-ed is a student-led NGO focused on shaping the educational system in Ghana. They needed a digital platform to tell their story, increase their visibility, and attract supporters who believe in their ambition.",
    challenge: "Helping a nascent, student-led NGO establish a strong digital footprint to clearly communicate their vision and rally partners and volunteers.",
    solution: "We developed a minimal, African-based editorial design system that reflects their core values, creating a clean and compelling storytelling platform.",
    gallery: [
      "/ele1.webp",
      "/ele2.webp",
      "/ele3.webp"
    ],
    liveUrl: "https://elevat-ed-iota.vercel.app/",
    client: "Elevat-ed",
    timeline: "4 Weeks / Q1 2026",
    whatWeBuilt: "Brand Identity, Minimalist Web Platform, Storytelling Digital Experience",
    problem: "As an emerging student-led NGO looking to shape the educational landscape in Ghana, Elevat-ed struggled with visibility. They needed a compelling way to share their story, communicate their vision, and rally supporters and stakeholders who believed in their ambition to join their cause.",
    approach: "We started by deeply identifying their core values (moving past early conceptual 'alcohol values' misinterpretations to find their true essence), which allowed us to uncover the foundational philosophy of the design system that would best suit their mission. We translated these insights into a minimal yet culturally resonant African-based editorial style. This design system was then applied to build a platform that focuses heavily on authentic storytelling and clear communication of their impact plan.",
    outcome: "The resulting platform successfully established Elevat-ed's digital presence, providing them with a powerful storytelling tool. The minimal, editorial aesthetic established their credibility, helping them effectively attract new supporters, partners, and volunteers who aligned with their educational goals.",
    nextProjectSlug: "presbon-safe",
    nextProjectTitle: "Presbon Safe"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
