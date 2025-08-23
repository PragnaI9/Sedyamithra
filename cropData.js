const cropData = {
    rice: {
        name: "Rice",
        scientificName: "Oryza sativa",
        cycle: "90-120 days",
        stages: [
            {
                name: "Germination",
                description: "The seed absorbs water and sprouts, developing roots and a shoot. Requires warm temperatures (25-30°C) and moist soil.",
                duration: "5-10 days",
                conditions: [
                    "Soil temperature: 25-30°C",
                    "Keep soil moist but not waterlogged",
                    "Seed treatment recommended"
                ],
                idealFertilizers: [
                    {
                        name: "Seed Starter (NPK 5-10-10)",
                        type: "Starter Fertilizer",
                        purpose: "Promotes strong root development",
                        application: "Mix with soil before planting"
                    }
                ],
                image: "assets/images/rice-germination.jpg",
                currentStage: 1,
                percentComplete: 5
            },
            {
                name: "Seedling",
                description: "Young plants develop in nursery before transplantation. Requires careful water management.",
                duration: "20-25 days",
                conditions: [
                    "Maintain water depth: 2-5cm",
                    "Day temp: 25-30°C, Night: 20°C",
                    "Protect from pests"
                ],
                idealFertilizers: [
                    {
                        name: "Urea (46-0-0)",
                        type: "Nitrogen",
                        purpose: "Promotes leafy growth",
                        application: "10kg per 100 sq.m nursery"
                    }
                ],
                image: "assets/images/rice-seedling.jpg",
                currentStage: 2,
                percentComplete: 25
            },
            {
                name: "Tillering",
                description: "Plant develops multiple stems. Critical for determining yield potential.",
                duration: "30-40 days",
                conditions: [
                    "Water depth: 5-10cm",
                    "Full sunlight required",
                    "Weed control essential"
                ],
                idealFertilizers: [
                    {
                        name: "DAP (18-46-0)",
                        type: "Phosphorus",
                        purpose: "Stimulates tiller development",
                        application: "40kg/acre in 2 splits"
                    }
                ],
                image: "assets/images/rice-tillering.jpg",
                currentStage: 3,
                percentComplete: 50
            },
            {
                name: "Flowering",
                description: "Panicles emerge and pollination occurs. Requires careful water and nutrient management.",
                duration: "15-20 days",
                conditions: [
                    "Critical water need",
                    "Avoid water stress",
                    "Monitor for pests"
                ],
                idealFertilizers: [
                    {
                        name: "Potash (0-0-50)",
                        type: "Potassium",
                        purpose: "Improves grain filling",
                        application: "20kg/acre at panicle initiation"
                    }
                ],
                image: "assets/images/rice-flowering.jpg",
                currentStage: 4,
                percentComplete: 75
            },
            {
                name: "Maturity",
                description: "Grains harden and moisture content decreases. Harvest when 80-85% grains are straw-colored.",
                duration: "25-30 days",
                conditions: [
                    "Gradual water reduction",
                    "Monitor grain moisture",
                    "Prepare for harvest"
                ],
                idealFertilizers: [],
                image: "assets/images/rice-maturity.jpg",
                currentStage: 5,
                percentComplete: 95
            }
        ]
    },
    wheat: {
        name: "Wheat",
        scientificName: "Triticum aestivum",
        cycle: "110-130 days",
        stages: [
            {
                name: "Germination",
                description: "Seeds absorb moisture and begin to sprout. Requires cool temperatures (10-20°C) and adequate moisture.",
                duration: "7-10 days",
                conditions: [
                    "Soil temperature: 10-20°C",
                    "Keep soil moist but not waterlogged",
                    "Seed treatment recommended"
                ],
                idealFertilizers: [
                    {
                        name: "Starter Fertilizer (NPK 10-20-10)",
                        type: "Starter Fertilizer",
                        purpose: "Promotes early root development",
                        application: "Apply at planting"
                    }
                ],
                image: "assets/images/wheat-germination.jpg",
                currentStage: 1,
                percentComplete: 10
            },
            {
                name: "Seedling",
                description: "Young plants develop and establish roots. Requires consistent moisture and sunlight.",
                duration: "14-21 days",
                conditions: [
                    "Maintain soil moisture",
                    "Day temp: 15-25°C",
                    "Protect from pests"
                ],
                idealFertilizers: [
                    {
                        name: "Urea (46-0-0)",
                        type: "Nitrogen",
                        purpose: "Encourages leafy growth",
                        application: "Apply 50kg/ha at tillering"
                    }
                ],
                image: "assets/images/wheat-seedling.jpg",
                currentStage: 2,
                percentComplete: 30
            },
            {
                name: "Tillering",
                description: "Wheat plants develop multiple tillers, increasing yield potential.",
                duration: "30-40 days",
                conditions: [
                    "Water depth: 5-10cm",
                    "Full sunlight required",
                    "Weed control essential"
                ],
                idealFertilizers: [
                    {
                        name: "DAP (18-46-0)",
                        type: "Phosphorus",
                        purpose: "Stimulates tiller development",
                        application: "Apply 40kg/ha at planting"
                    }
                ],
                image: "assets/images/wheat-tillering.jpg",
                currentStage: 3,
                percentComplete: 60
            },
            {
                name: "Flowering",
                description: "Wheat heads emerge and pollination occurs. Requires careful water management.",
                duration: "15-20 days",
                conditions: [
                    "Critical water need",
                    "Avoid water stress",
                    "Monitor for pests"
                ],
                idealFertilizers: [
                    {
                        name: "Potash (0-0-50)",
                        type: "Potassium",
                        purpose: "Improves grain filling",
                        application: "Apply 20kg/ha at flowering"
                    }
                ],
                image: "assets/images/wheat-flowering.jpg",
                currentStage: 4,
                percentComplete: 80
            },
            {
                name: "Maturity",
                description: "Grains harden and moisture content decreases. Harvest when grains are hard and straw is yellow.",
                duration: "20-30 days",
                conditions: [
                    "Gradual water reduction",
                    "Monitor grain moisture",
                    "Prepare for harvest"
                ],
                idealFertilizers: [],
                image: "assets/images/wheat-maturity.jpg",
                currentStage: 5,
                percentComplete: 100
            }
        ]
    },
    corn: {
        name: "Corn",
        scientificName: "Zea mays",
        cycle: "60-100 days",
        stages: [
            {
                name: "Germination",
                description: "Seeds absorb moisture and begin to sprout. Requires warm soil (15-30°C) and adequate moisture.",
                duration: "5-10 days",
                conditions: [
                    "Soil temperature: 15-30°C",
                    "Keep soil moist but not waterlogged",
                    "Seed treatment recommended"
                ],
                idealFertilizers: [
                    {
                        name: "Starter Fertilizer (NPK 10-20-30)",
                        type: "Starter Fertilizer",
                        purpose: "Promotes early root development",
                        application: "Apply at planting"
                    }
                ],
                image: "assets/images/corn-germination.jpg",
                currentStage: 1,
                percentComplete: 10
            },
            {
                name: "Seedling",
                description: "Young plants develop and establish roots. Requires consistent moisture and sunlight.",
                duration: "14-21 days",
                conditions: [
                    "Maintain soil moisture",
                    "Day temp: 20-30°C",
                    "Protect from pests"
                ],
                idealFertilizers: [
                    {
                        name: "Urea (46-0-0)",
                        type: "Nitrogen",
                        purpose: "Encourages leafy growth",
                        application: "Apply 50kg/ha at V6 stage"
                    }
                ],
                image: "assets/images/corn-seedling.jpg",
                currentStage: 2,
                percentComplete: 30
            },
            {
                name: "Vegetative",
                description: "Corn plants grow rapidly, developing leaves and stems.",
                duration: "30-40 days",
                conditions: [
                    "Water depth: 5-10cm",
                    "Full sunlight required",
                    "Weed control essential"
                ],
                idealFertilizers: [
                    {
                        name: "DAP (18-46-0)",
                        type: "Phosphorus",
                        purpose: "Stimulates vegetative growth",
                        application: "Apply 40kg/ha at planting"
                    }
                ],
                image: "assets/images/corn-vegetative.jpg",
                currentStage: 3,
                percentComplete: 60
            },
            {
                name: "Flowering",
                description: "Corn tassels emerge and pollination occurs. Requires careful water management.",
                duration: "15-20 days",
                conditions: [
                    "Critical water need",
                    "Avoid water stress",
                    "Monitor for pests"
                ],
                idealFertilizers: [
                    {
                        name: "Potash (0-0-50)",
                        type: "Potassium",
                        purpose: "Improves grain filling",
                        application: "Apply 20kg/ha at flowering"
                    }
                ],
                image: "assets/images/corn-flowering.jpg",
                currentStage: 4,
                percentComplete: 80
            },
            {
                name: "Maturity",
                description: "Grains harden and moisture content decreases. Harvest when grains are hard and kernels are dented.",
                duration: "20-30 days",
                conditions: [
                    "Gradual water reduction",
                    "Monitor grain moisture",
                    "Prepare for harvest"
                ],
                idealFertilizers: [],
                image: "assets/images/corn-maturity.jpg",
                currentStage: 5,
                percentComplete: 100
            }
        ]
    },
    cotton: {
        name: "Cotton",
        scientificName: "Gossypium spp.",
        cycle: "150-180 days",
        stages: [
            {
                name: "Germination",
                description: "Seeds absorb moisture and begin to sprout. Requires warm soil (20-30°C) and adequate moisture.",
                duration: "7-10 days",
                conditions: [
                    "Soil temperature: 20-30°C",
                    "Keep soil moist but not waterlogged",
                    "Seed treatment recommended"
                ],
                idealFertilizers: [
                    {
                        name: "Starter Fertilizer (NPK 10-20-20)",
                        type: "Starter Fertilizer",
                        purpose: "Promotes early root development",
                        application: "Apply at planting"
                    }
                ],
                image: "assets/images/cotton-germination.jpg",
                currentStage: 1,
                percentComplete: 10
            },
            {
                name: "Seedling",
                description: "Young plants develop and establish roots. Requires consistent moisture and sunlight.",
                duration: "14-21 days",
                conditions: [
                    "Maintain soil moisture",
                    "Day temp: 25-30°C",
                    "Protect from pests"
                ],
                idealFertilizers: [
                    {
                        name: "Urea (46-0-0)",
                        type: "Nitrogen",
                        purpose: "Encourages leafy growth",
                        application: "Apply 50kg/ha at 4-6 leaf stage"
                    }
                ],
                image: "assets/images/cotton-seedling.jpg",
                currentStage: 2,
                percentComplete: 30
            },
            {
                name: "Vegetative",
                description: "Cotton plants grow rapidly, developing leaves and stems.",
                duration: "30-40 days",
                conditions: [
                    "Water depth: 5-10cm",
                    "Full sunlight required",
                    "Weed control essential"
                ],
                idealFertilizers: [
                    {
                        name: "DAP (18-46-0)",
                        type: "Phosphorus",
                        purpose: "Stimulates vegetative growth",
                        application: "Apply 40kg/ha at planting"
                    }
                ],
                image: "assets/images/cotton-vegetative.jpg",
                currentStage: 3,
                percentComplete: 60
            },
            {
                name: "Flowering",
                description: "Cotton flowers bloom and pollination occurs. Requires careful water management.",
                duration: "15-20 days",
                conditions: [
                    "Critical water need",
                    "Avoid water stress",
                    "Monitor for pests"
                ],
                idealFertilizers: [
                    {
                        name: "Potash (0-0-50)",
                        type: "Potassium",
                        purpose: "Improves fiber quality",
                        application: "Apply 20kg/ha at flowering"
                    }
                ],
                image: "assets/images/cotton-flowering.jpg",
                currentStage: 4,
                percentComplete: 80
            },
            {
                name: "Maturity",
                description: "Bolls open and fibers are ready for harvest. Monitor for pests and diseases.",
                duration: "20-30 days",
                conditions: [
                    "Gradual water reduction",
                    "Monitor boll opening",
                    "Prepare for harvest"
                ],
                idealFertilizers: [],
                image: "assets/images/cotton-maturity.jpg",
                currentStage: 5,
                percentComplete: 100
            }
        ]
    }
};
