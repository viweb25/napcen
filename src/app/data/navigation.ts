export interface Industry {
  name: string;
  slug: string;
  path: string;
  title: string;
  description: string;
  image: string;
  subtypes?: string[];
}

export const industriesData: Industry[] = [
  {
    name: "Chemical Manufacturing",
    slug: "chemical",
    path: "/industries/chemical",
    title: "Chemical Process Fume Scrubbing",
    description: "Corrosion-resistant systems for hazardous gas neutralization.",
    image: "/assets/images/industries/Chemical%20Process%20Fume%20Scrubbing.png",
    subtypes: ["Acid Gas Scrubbing", "Storage Tank Venting"]
  },
  {
    name: "Electronics & Semi",
    slug: "electronics",
    path: "/industries/electronics",
    title: "Semiconductor Air Filtration",
    description: "Ultra-clean filtration for cleanroom environments.",
    image: "/assets/images/industries/Semiconductor%20Air%20Filtration.png",
    subtypes: ["Cleanroom Ventilation", "Acid Mist Control"]
  },
  {
    name: "Food Processing",
    slug: "food-processing",
    path: "/industries/food-processing",
    title: "Sanitary Dust Collection",
    description: "Stainless steel solutions for food-grade safety.",
    image: "/assets/images/industries/Sanitary%20Dust%20Collection.png",
    subtypes: ["Odor Control", "Powder Dust Collection"]
  },
  {
    name: "Metal Processing",
    slug: "metal-processing",
    path: "/industries/metal-processing",
    title: "Metalworking Fume Extraction",
    description: "Heavy-duty extraction for welding and grinding.",
    image: "/assets/images/industries/Metalworking%20Fume%20Extraction.png",
    subtypes: ["Welding Fume", "Grinding Dust"]
  },
  {
    name: "Mining & Ore",
    slug: "mining",
    path: "/industries/mining",
    title: "Mining Dust & Gas Control",
    description: "Robust systems for ore processing and underground ventilation.",
    image: "/assets/images/industries/Mining%20Dust%20&%20Gas%20Control.png"
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    path: "/industries/water-treatment",
    title: "Municipal Wastewater Odor Control",
    description: "H2S and odor neutralizing scrubbers for treatment plants.",
    image: "/assets/images/industries/Municipal%20Wastewater%20Odor%20Control.png"
  },
  {
    name: "Oil & Gas",
    slug: "oil-and-gas",
    path: "/industries/oil-and-gas",
    title: "Oil & Gas Emission Control",
    description: "Vapor recovery and gas treatment for refineries.",
    image: "/assets/images/industries/Oil%20&%20Gas%20Emission%20Control.png"
  },
  {
    name: "Paint & Coatings",
    slug: "paint-coatings",
    path: "/industries/paint-coatings",
    title: "VOC & Paint Mist Extraction",
    description: "Filtration for industrial spray booths and coating lines.",
    image: "/assets/images/industries/VOC%20&%20Paint%20Mist%20Extraction.png"
  },
  {
  name: "Pharmaceuticals",
  slug: "pharma", // Changed from "pharmaceuticals" to "pharma" to match your error
  path: "/industries/pharma",
  title: "Pharma Clean Air Systems",
  description: "GMP-compliant chemical and particulate filtration.",
  image: "/assets/images/industries/Pharma%20Clean%20Air%20Systems.png"
},
  {
    name: "Textile Industry",
    slug: "textile",
    path: "/industries/textile",
    title: "Textile Fiber & Dust Control",
    description: "High-volume lint and particulate extraction.",
    image: "/assets/images/industries/Textile%20Industry.png"
  },
  {
    name: "Waste Incineration",
    slug: "waste-incineration",
    path: "/industries/waste-incineration",
    title: "Flue Gas Cleaning Systems",
    description: "High-temperature filtration for waste-to-energy plants.",
    image: "/assets/images/industries/Flue%20Gas%20Cleaning%20Systems.png"
  },
  {
    name: "Woodworking",
    slug: "woodworking",
    path: "/industries/woodworking",
    title: "Wood Dust & Particle Collection",
    description: "Fire-safe extraction for sawmills and furniture plants.",
    image: "/assets/images/industries/Wood%20Dust%20&%20Particle%20Collection.png"
  }
];