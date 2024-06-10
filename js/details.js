window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    
    // Get elements to populate with disease details
    const diseaseName = document.getElementById('diseaseName');
    const diseaseDescription = document.getElementById('diseaseDescription');
    const diseaseMedicines = document.getElementById('diseaseMedicines');
    const diseasePrecautions = document.getElementById('diseasePrecautions');

    // Set the content based on URL parameters
    diseaseName.textContent = params.get('name');
    diseaseDescription.textContent = params.get('description');
    diseaseMedicines.textContent = params.get('medicines');
    diseasePrecautions.textContent = params.get('precautions');
};
