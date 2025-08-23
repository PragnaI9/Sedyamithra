function loadCropData(cropId) {
    const crop = cropData[cropId];
    const stageProgress = document.getElementById('stageProgress');
    const stageDetails = document.getElementById('stageDetails');
    
    // Show the containers
    stageProgress.classList.remove('hidden');
    stageDetails.classList.remove('hidden');
    
    // Update crop name in UI
    document.getElementById('crop-name').textContent = `${crop.name} Growth Stages`;
    
    // Clear previous stage markers
    const stageMarkers = document.querySelector('#stageProgress .flex.justify-between');
    stageMarkers.innerHTML = '';
    
    // Create stage progress bar
    crop.stages.forEach((stage, index) => {
        const stageElement = document.createElement('div');
        stageElement.className = `stage-marker flex flex-col items-center ${index === 0 ? 'active' : ''}`;
        stageElement.setAttribute('data-stage', index + 1);
        stageElement.innerHTML = `
            <div class="w-10 h-10 rounded-full ${index === 0 ? 'bg-green-600' : 'bg-gray-300'} text-white flex items-center justify-center mb-1">
                ${index + 1}
            </div>
            <span class="text-xs text-center">${stage.name}</span>
        `;
        
        stageElement.addEventListener('click', () => {
            // Update active stage
            document.querySelectorAll('.stage-marker div').forEach(div => {
                div.classList.remove('bg-green-600');
                div.classList.add('bg-gray-300');
            });
            stageElement.querySelector('div').classList.add('bg-green-600');
            stageElement.querySelector('div').classList.remove('bg-gray-300');
            
            // Update progress bar
            document.getElementById('progressBar').style.width = `${stage.percentComplete}%`;
            
            // Load stage details
            loadStageDetails(crop, index);
        });
        
        stageMarkers.appendChild(stageElement);
    });
    
    // Initialize first stage
    loadStageDetails(crop, 0);
    document.getElementById('progressBar').style.width = `${crop.stages[0].percentComplete}%`;
}
