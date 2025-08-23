function loadStageDetails(crop, stageIndex) {
    const stage = crop.stages[stageIndex];
    
    // Update main stage details
    document.getElementById('stageTitle').textContent = stage.name;
    document.getElementById('stageDescription').textContent = stage.description;
    document.getElementById('stageDuration').textContent = stage.duration;
    document.getElementById('stageImage').src = stage.image;
    document.getElementById('stageImage').alt = `${stage.name} stage of ${crop.name}`;
    
    // Update conditions
    const conditionsList = document.getElementById('stageConditions');
    conditionsList.innerHTML = stage.conditions.map(cond => 
        `<li class="mb-1">${cond}</li>`
    ).join('');
    
    // Update fertilizers
    const fertilizerContainer = document.getElementById('fertilizerRecommendations');
    if (stage.idealFertilizers.length > 0) {
        fertilizerContainer.innerHTML = stage.idealFertilizers.map(fert => `
            <div class="bg-white border border-green-100 rounded-lg shadow-sm p-4 hover:shadow-md transition">
                <div class="flex justify-between mb-2">
                    <h4 class="font-medium">${fert.name}</h4>
                    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">${fert.type}</span>
                </div>
                <p class="text-sm text-gray-600 mb-3">${fert.purpose}</p>
                <div class="text-sm text-gray-700">
                    <span class="font-medium">Application:</span> ${fert.application}
                </div>
            </div>
        `).join('');
    } else {
        fertilizerContainer.innerHTML = `
            <div class="text-center text-gray-500 py-4">
                No fertilizer recommended at this stage
            </div>
        `;
    }
}
