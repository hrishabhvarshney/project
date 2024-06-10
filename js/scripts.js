
const diseases = [
    {
        name: 'Mango Anthracnose',
        description: 'A fungal disease causing dark, sunken lesions on mango fruit, leaves, and stems.',
        medicines: 'Apply fungicides like copper or mancozeb during early flowering and fruit set.',
        precautions: 'Practice good sanitation by removing and destroying infected plant debris.'
    },
    {
        name: 'Mango Bacterial Canker',
        description: 'A bacterial disease causing water-soaked lesions on leaves, stems, and fruits of mango.',
        medicines: 'Copper-based bactericides can be used to control the disease.',
        precautions: 'Avoid injuries to the plant and maintain good hygiene practices.'
    },
    {
        name: 'Mango Cutting Weevil',
        description: 'A pest that bores into mango seeds, causing damage to developing fruits.',
        medicines: 'Use insecticides like carbaryl or endosulfan to control adult weevils.',
        precautions: 'Collect and destroy fallen and infested fruits to reduce weevil population.'
    },
    {
        name: 'Mango Die Back',
        description: 'A condition causing the tips of branches to die back, often due to fungal infection.',
        medicines: 'Treat with fungicides like copper oxychloride or carbendazim.',
        precautions: 'Prune affected branches and ensure proper nutrition and watering of the plant.'
    },
    {
        name: 'Mango Gall Midge',
        description: 'A pest causing galls on mango leaves, leading to deformation and reduced growth.',
        medicines: 'Use insecticides like dimethoate or imidacloprid to manage the infestation.',
        precautions: 'Remove and destroy infested leaves to prevent the spread of the pest.'
    },
    {
        name: 'Mango Healthy',
        description: 'A state where the mango plant is free from diseases and pests, showing vigorous growth.',
        medicines: 'No specific medicines needed for a healthy plant.',
        precautions: 'Maintain regular care practices including proper watering, fertilization, and pruning.'
    },
    {
        name: 'Mango Powdery Mildew',
        description: 'A fungal disease forming a white powdery layer on the surface of mango leaves, flowers, and fruits.',
        medicines: 'Apply sulfur-based fungicides or potassium bicarbonate.',
        precautions: 'Improve air circulation and avoid high humidity conditions around the plants.'
    },
    {
        name: 'Mango Sooty Mould',
        description: 'A fungal growth causing a black, sooty coating on mango leaves and fruits, often associated with insect infestations.',
        medicines: 'Control the insects (like aphids or scales) with insecticides to reduce sooty mold.',
        precautions: 'Maintain clean surroundings and manage insect populations effectively.'
    },
    {
        name: 'Apple Black Rot',
        description: 'A fungal disease causing black, rot-like lesions on apples and leaves.',
        medicines: 'Use fungicides like captan or thiophanate-methyl.',
        precautions: 'Prune and remove infected plant parts and maintain good orchard sanitation.'
    },
    {
        name: 'Apple Healthy',
        description: 'A state where the apple plant shows no signs of diseases or pests, growing robustly.',
        medicines: 'No specific medicines required for a healthy apple tree.',
        precautions: 'Continue with standard care practices including regular inspections and balanced fertilization.'
    },
    {
        name: 'Apple Rust',
        description: 'A fungal disease causing orange rust spots on leaves and fruit, often spread by nearby juniper plants.',
        medicines: 'Apply fungicides like myclobutanil or mancozeb.',
        precautions: 'Remove and destroy nearby juniper hosts and prune infected apple branches.'
    },
    {
        name: 'Apple Scab',
        description: 'A fungal disease causing dark, scabby lesions on apples and leaves.',
        medicines: 'Fungicides like captan or mancozeb can be used to treat the disease.',
        precautions: 'Rake and destroy fallen leaves and apply fungicides at the beginning of the growing season.'
    },
    {
        name: 'Banana Cordana',
        description: 'A fungal disease causing leaf spots and blight in banana plants.',
        medicines: 'Treat with fungicides like mancozeb or chlorothalonil.',
        precautions: 'Remove and destroy affected leaves and maintain proper spacing to improve air circulation.'
    },
    {
        name: 'Banana Healthy',
        description: 'A condition where banana plants grow vigorously without disease or pest issues.',
        medicines: 'No specific treatments are needed for healthy banana plants.',
        precautions: 'Follow good agricultural practices, including balanced fertilization and regular inspection.'
    },
    {
        name: 'Banana Pestalotiopsis',
        description: 'A fungal disease causing spots and rot on banana leaves and fruit.',
        medicines: 'Fungicides like benomyl or thiophanate-methyl can be effective.',
        precautions: 'Ensure proper drainage and avoid waterlogging to prevent the disease.'
    },
    {
        name: 'Banana Sigatoka',
        description: 'A major fungal disease causing streaks on leaves and reducing fruit yield.',
        medicines: 'Apply fungicides such as mancozeb or propiconazole.',
        precautions: 'Regularly remove and destroy infected leaves and ensure good plant spacing.'
    },
    {
        name: 'Grape Black Rot',
        description: 'A fungal disease causing black, mummified berries and leaf spots on grapes.',
        medicines: 'Fungicides like myclobutanil or captan can control the disease.',
        precautions: 'Prune and destroy infected plant parts and maintain good vineyard sanitation.'
    },
    {
        name: 'Grape Healthy',
        description: 'A state where grapevines are free from disease and pests, showing healthy growth.',
        medicines: 'No specific medicines are required for healthy grapevines.',
        precautions: 'Regularly inspect and follow standard care practices, including proper pruning and fertilization.'
    },
    {
        name: 'Grape Leaf Blight',
        description: 'A fungal disease causing brown spots and leaf blight on grape leaves.',
        medicines: 'Use fungicides like copper oxychloride or mancozeb.',
        precautions: 'Ensure proper air circulation and avoid overhead watering.'
    },
    {
        name: 'Guava Healthy',
        description: 'A condition where guava plants grow vigorously without showing signs of disease or pests.',
        medicines: 'No specific treatments are needed for healthy guava plants.',
        precautions: 'Maintain regular care practices, including proper watering, fertilization, and pruning.'
    },
    {
        name: 'Guava Red Rust',
        description: 'A fungal disease causing red, rust-like spots on guava leaves and fruit.',
        medicines: 'Treat with fungicides such as copper oxychloride or mancozeb.',
        precautions: 'Remove and destroy infected plant parts and improve air circulation around the plant.'
    }
];


window.onload = function() {
    const searchBar = document.getElementById('searchBar');
    const diseaseContainer = document.getElementById('diseaseContainer');

    function displayDiseases(diseases) {
        diseaseContainer.innerHTML = '';
        diseases.forEach(disease => {
            const card = document.createElement('div');
            card.classList.add('disease-card');
            card.innerHTML = `<h3>${disease.name}</h3><p>${disease.description}</p>`;
            card.onclick = () => {
                const params = new URLSearchParams({
                    name: disease.name,
                    description: disease.description,
                    medicines: disease.medicines,
                    precautions: disease.precautions
                });
                window.location.href = `details.html?${params.toString()}`;
            };
            diseaseContainer.appendChild(card);
        });
    }

    
    displayDiseases(diseases);


    searchBar.oninput = function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredDiseases = diseases.filter(disease => 
            disease.name.toLowerCase().includes(searchTerm)
        );
        displayDiseases(filteredDiseases);
    }
};
