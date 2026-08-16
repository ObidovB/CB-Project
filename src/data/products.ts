import { Product } from "../types/product";

export const products: Product[] = [
    {
        id: 1,
        title: "Concrete M100",
        grade: "B7.5",
        description: "High-quality concrete for light construction",
        price: "420.000",
        image: "/images/m100.png",
        usage: "Suitable for non-structural elements, foundations for lightweight buildings, sidewalks, and garden paths. Ideal for decorative concrete work and temporary structures.",
        composition: {
            cement: "230-260 kg",
            sand: "650-700 kg",
            crushedStone: "1050-1100 kg",
            water: "150-170 liters",
            supplements: "As per requirement"
        },
        specs: ["Compressive Strength: 7.5 MPa", "Durability Class: C18/22.5", "Water Resistance: W2", "Frost Resistance: F50"]
    },
    {
        id: 2,
        title: "Concrete M150",
        grade: "B10",
        description: "Standard-quality concrete for various applications",
        price: "465.000",
        image: "/images/m100.png",
        usage: "Used for footings, light structural walls, pavements, and residential building foundations. Common for general construction projects with moderate load requirements.",
        composition: {
            cement: "280-300 kg",
            sand: "620-650 kg",
            crushedStone: "1080-1120 kg",
            water: "160-180 liters",
            supplements: "As per requirement"
        },
        specs: ["Compressive Strength: 10 MPa", "Durability Class: C20/25", "Water Resistance: W4", "Frost Resistance: F75"]
    },
    {
        id: 3,
        title: "Concrete M200",
        grade: "B15",
        description: "High-strength concrete for demanding applications",
        price: "520.000",
        image: "/images/m100.png",
        usage: "Ideal for load-bearing walls, building columns, multi-story residential buildings, and industrial structures. Used where moderate to high strength is required.",
        composition: {
            cement: "330-350 kg",
            sand: "580-610 kg",
            crushedStone: "1100-1150 kg",
            water: "170-190 liters",
            supplements: "Plasticizers and air-entraining agents"
        },
        specs: ["Compressive Strength: 15 MPa", "Durability Class: C25/30", "Water Resistance: W6", "Frost Resistance: F100"]
    },
    {
        id: 4,
        title: "Concrete M250",
        grade: "B20",
        description: "Very high-strength concrete for heavy-duty construction",
        price: "580.000",
        image: "/images/m100.png",
        usage: "Suitable for heavy-duty industrial floors, reinforced structural elements, bridge supports, and high-rise buildings requiring superior strength and durability.",
        composition: {
            cement: "380-410 kg",
            sand: "550-580 kg",
            crushedStone: "1120-1170 kg",
            water: "180-200 liters",
            supplements: "Pozzolanic materials and superplasticizers"
        },
        specs: ["Compressive Strength: 20 MPa", "Durability Class: C30/37", "Water Resistance: W8", "Frost Resistance: F150"]
    },
    {
        id: 5,
        title: "Concrete M300",
        grade: "B25",
        description: "Ultra-high-strength concrete for specialized structures",
        price: "650.000",
        image: "/images/m100.png",
        usage: "Used for critical infrastructure, underground construction, parking structures, and bridges requiring exceptional durability and load-bearing capacity.",
        composition: {
            cement: "420-450 kg",
            sand: "520-550 kg",
            crushedStone: "1140-1190 kg",
            water: "190-210 liters",
            supplements: "Silica fume and advanced additives"
        },
        specs: ["Compressive Strength: 25 MPa", "Durability Class: C35/45", "Water Resistance: W10", "Frost Resistance: F200"]
    },
    {
        id: 6,
        title: "Concrete M350",
        grade: "B30",
        description: "Ultra-high-strength concrete for premium applications",
        price: "680.000",
        image: "/images/m100.png",
        usage: "Ideal for premium high-rise buildings, major infrastructure projects, nuclear facilities, and structures in aggressive environments requiring maximum strength.",
        composition: {
            cement: "460-490 kg",
            sand: "490-520 kg",
            crushedStone: "1160-1210 kg",
            water: "200-220 liters",
            supplements: "Silica fume, fly ash, and superplasticizers"
        },
        specs: ["Compressive Strength: 30 MPa", "Durability Class: C40/50", "Water Resistance: W12", "Frost Resistance: F300"]
    },
    {
        id: 7,
        title: "Concrete M400",
        grade: "B35",
        description: "Professional-grade ultra-high-strength concrete",
        price: "740.000",
        image: "/images/m100.png",
        usage: "Used in specialized engineering projects including offshore structures, heavy industrial facilities, and high-performance building systems.",
        composition: {
            cement: "500-530 kg",
            sand: "460-490 kg",
            crushedStone: "1180-1230 kg",
            water: "210-230 liters",
            supplements: "Advanced mineral admixtures and nano-materials"
        },
        specs: ["Compressive Strength: 35 MPa", "Durability Class: C45/55", "Water Resistance: W14", "Frost Resistance: F300"]
    },
    {
        id: 8,
        title: "Concrete M450",
        grade: "B40",
        description: "Premium ultra-high-performance concrete",
        price: "800.000",
        image: "/images/m100.png",
        usage: "Reserved for specialized applications requiring maximum performance: skyscraper foundations, critical infrastructure, and environments with severe exposure conditions.",
        composition: {
            cement: "540-570 kg",
            sand: "430-460 kg",
            crushedStone: "1200-1250 kg",
            water: "220-240 liters",
            supplements: "Fiber reinforcement, silica fume, and performance enhancers"
        },
        specs: ["Compressive Strength: 40 MPa", "Durability Class: C50/60", "Water Resistance: W16", "Frost Resistance: F300"]
    },
    // {
    //     id: 9,
    //     title: "Concrete M500",
    //     grade: "B45",
    //     description: "Premium ultra-high-performance concrete",
    //     price: "860.000",
    //     image: "/images/m100.png",
    //     usage: "Reserved for specialized applications requiring maximum performance: skyscraper foundations, critical infrastructure, and environments with severe exposure conditions.",
    //     composition: {
    //         cement: "540-570 kg",
    //         sand: "430-460 kg",
    //         crushedStone: "1200-1250 kg",
    //         water: "220-240 liters",
    //         supplements: "Fiber reinforcement, silica fume, and performance enhancers"
    //     },
    //     specs: ["Compressive Strength: 40 MPa", "Durability Class: C50/60", "Water Resistance: W16", "Frost Resistance: F300"]
    // },
    // {
    //     id: 10,
    //     title: "Concrete M550",
    //     grade: "B50",
    //     description: "Premium ultra-high-performance concrete",
    //     price: "940.000",
    //     image: "/images/m100.png",
    //     usage: "Reserved for specialized applications requiring maximum performance: skyscraper foundations, critical infrastructure, and environments with severe exposure conditions.",
    //     composition: {
    //         cement: "540-570 kg",
    //         sand: "430-460 kg",
    //         crushedStone: "1200-1250 kg",
    //         water: "220-240 liters",
    //         supplements: "Fiber reinforcement, silica fume, and performance enhancers"
    //     },
    //     specs: ["Compressive Strength: 40 MPa", "Durability Class: C50/60", "Water Resistance: W16", "Frost Resistance: F300"]
    // },
    // {
    //     id: 11,
    //     title: "Concrete M600",
    //     grade: "B55",
    //     description: "Premium ultra-high-performance concrete",
    //     price: "1.000.000",
    //     image: "/images/m100.png",
    //     usage: "Reserved for specialized applications requiring maximum performance: skyscraper foundations, critical infrastructure, and environments with severe exposure conditions.",
    //     composition: {
    //         cement: "540-570 kg",
    //         sand: "430-460 kg",
    //         crushedStone: "1200-1250 kg",
    //         water: "220-240 liters",
    //         supplements: "Fiber reinforcement, silica fume, and performance enhancers"
    //     },
    //     specs: ["Compressive Strength: 40 MPa", "Durability Class: C50/60", "Water Resistance: W16", "Frost Resistance: F300"]
    // },
    // {
    //     id: 12,
    //     title: "Concrete M650",
    //     grade: "B60",
    //     description: "Premium ultra-high-performance concrete",
    //     price: "1.060.000",
    //     image: "/images/m100.png",
    //     usage: "Reserved for specialized applications requiring maximum performance: skyscraper foundations, critical infrastructure, and environments with severe exposure conditions.",
    //     composition: {
    //         cement: "540-570 kg",
    //         sand: "430-460 kg",
    //         crushedStone: "1200-1250 kg",
    //         water: "220-240 liters",
    //         supplements: "Fiber reinforcement, silica fume, and performance enhancers"
    //     },
    //     specs: ["Compressive Strength: 40 MPa", "Durability Class: C50/60", "Water Resistance: W16", "Frost Resistance: F300"]
    // },
]