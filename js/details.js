window.onload = function() {
    const params = new URLSearchParams(window.location.search);

    
    const diseaseNameElement = document.getElementById('diseaseName');
    const diseaseDescriptionElement = document.getElementById('diseaseDescription');
    const diseaseSymptomsElement = document.getElementById('diseaseSymptoms');
    const diseaseCausesElement = document.getElementById('diseaseCauses');
    const diseaseManagementElement = document.getElementById('diseaseManagement');
    const diseaseMedicinesElement = document.getElementById('diseaseMedicines');
    const diseasePrecautionsElement = document.getElementById('diseasePrecautions');

  
    const diseaseName = decodeURIComponent(params.get('name')) || 'Unknown Disease';
    const diseaseDescription = decodeURIComponent(params.get('description')) || 'No description available.';
    const diseaseSymptoms = decodeURIComponent(params.get('symptoms')) || 'Symptoms not available.';
    const diseaseCauses = decodeURIComponent(params.get('causes')) || 'Causes not specified.';
    const diseaseManagement = decodeURIComponent(params.get('management')) || 'Management details not available.';
    const diseaseMedicines = decodeURIComponent(params.get('medicines')) || 'Medicines not specified.';
    const diseasePrecautions = decodeURIComponent(params.get('precautions')) || 'Precautions not provided.';

    
    diseaseNameElement.textContent = diseaseName;
    diseaseDescriptionElement.textContent = diseaseDescription;
    diseaseSymptomsElement.textContent = diseaseSymptoms;
    diseaseCausesElement.textContent = diseaseCauses;
    diseaseManagementElement.textContent = diseaseManagement;
    diseaseMedicinesElement.textContent = diseaseMedicines;
    diseasePrecautionsElement.textContent = diseasePrecautions;
};
