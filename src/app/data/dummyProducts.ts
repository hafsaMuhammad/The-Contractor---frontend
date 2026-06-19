type Category = {
  id: number;
  name: string;
};

export const dummyProducts = [
  {
    id: 1,
    name: "Ready Mix Concrete",
    price_per_unit: 38,
    available_quantity: 250,
    description:
      "High-strength ready mix concrete suitable for foundations and structural works.",
    image: "/products/concrete.jpg",
    category: {
      id: 1,
      name: "Construction Materials",
    },
  },

  {
    id: 2,
    name: "Steel Reinforcement Bars",
    price_per_unit: 520,
    available_quantity: 85,
    description:
      "Grade 60 steel reinforcement bars for residential and commercial construction projects.",
    image: "/products/rebar.jpg",
    category: {
      id: 1,
      name: "Construction Materials",
    },
  },

  {
    id: 3,
    name: "Excavator Rental",
    price_per_unit: 180,
    available_quantity: 8,
    description:
      "Hydraulic excavator for excavation, trenching and site preparation.",
    image: "/products/excavator.jpg",
    category: {
      id: 2,
      name: "Heavy Equipment",
    },
  },

  {
    id: 4,
    name: "Mobile Crane Rental",
    price_per_unit: 350,
    available_quantity: 4,
    description:
      "Mobile crane services for lifting structural steel and heavy equipment.",
    image: "/products/crane.jpg",
    category: {
      id: 2,
      name: "Heavy Equipment",
    },
  },

  {
    id: 5,
    name: "Scaffolding System",
    price_per_unit: 95,
    available_quantity: 120,
    description:
      "Safe and durable modular scaffolding for construction and maintenance projects.",
    image: "/products/scaffolding.jpg",
    category: {
      id: 3,
      name: "Site Equipment",
    },
  },

  {
    id: 6,
    name: "Concrete Mixer",
    price_per_unit: 75,
    available_quantity: 25,
    description:
      "Professional concrete mixer suitable for medium and large construction sites.",
    image: "/products/mixer.jpg",
    category: {
      id: 3,
      name: "Site Equipment",
    },
  },
];