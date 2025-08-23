const cropGrowthInfo = {
    corn: {
        germination:"Corn germination typically occurs within 5-10 days.",     
        seedling: "The seedling stage lasts about 10-20 days.",
        tillering: "In tillering, the plant starts to grow side shoots.",
        flowering: "Flowering occurs around 50-60 days after planting.",
        maturity: "Maturity is reached about 75-90 days after planting."
    },
    wheat: {
        germination: "Wheat germination takes about 7-10 days.",
        seedling: "The seedling stage lasts approximately 15-30 days.",
        tillering: "Tillering occurs about 30-50 days after planting.",
        flowering: "Flowering begins roughly 60 days after planting.",
        maturity: "Maturity is expected about 120 days after planting."
    },
    rice: {
        germination: "Rice seeds typically germinate within 5-10 days.",
        seedling: "Seedlings grow for about 20-25 days.",
        tillering: "The tillering stage happens about 30-40 days after sowing.",
        flowering: "Flowering occurs around 50-70 days.",
        maturity: "Maturity is reached around 90-120 days after sowing."
    },
    cotton: {
        germination: "Cotton seeds generally germinate within 7-10 days.",
        seedling: "The seedling stage lasts about 20-30 days.",
        tillering: "Tillering occurs around 30-50 days after planting.",
        flowering: "Flowering begins approximately 60-90 days after planting.",
        maturity: "Maturity is achieved around 120-150 days after planting."
    }
    // Add more crops and their stages as needed
};

// Event listener for displaying growth stage information
document.getElementById('showInfo').addEventListener('click', () => {
    const selectedCrop = document.getElementById('cropSelect').value;
    const selectedStage = document.getElementById('growthStages').value;
    
    const info = cropGrowthInfo[selectedCrop][selectedStage] || "Information not available.";
    document.getElementById('stageInfo').innerHTML = `<p>${info}</p>`;
});

