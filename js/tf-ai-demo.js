// Lietotājs augšupielādē attēlu, un AI to analizē
const model = await tf.loadLayersModel('model.json');
const img = document.getElementById('uploaded-img');
const prediction = model.predict(tf.browser.fromPixels(img));

// Parāda rezultātu (piemēram, "Šis ir 80% portfolio darbs")
document.getElementById('ai-result').textContent = 
  `AI teikums: "${prediction}"`;
