document.getElementById('startButton').addEventListener('click', () => {
    const numberOfStudents = parseInt(document.getElementById('numberOfStudents').value);
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; // Réinitialiser le conteneur de notes

    for (let i = 1; i <= numberOfStudents; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Note de l'élève ${i}`;
        input.min = 0; // Note minimale
        input.max = 20; // Note maximale
        notesContainer.appendChild(input);
    }

    document.getElementById('noteInputs').style.display = 'block'; // Afficher la section de saisie des notes
});

document.getElementById('calculateButton').addEventListener('click', () => {
    const inputs = document.querySelectorAll('#notesContainer input');
    const notes = Array.from(inputs).map(input => parseFloat(input.value)).filter(value => !isNaN(value));

    if (notes.length === 0) {
        document.getElementById('output').innerHTML = 'Veuillez entrer des notes valides.';
        return;
    }

    // Calcul de la moyenne
    const total = notes.reduce((acc, note) => acc + note, 0);
    const average = total / notes.length;

    // Nombre d'élèves avec une note supérieure à la moyenne
    const aboveAverageCount = notes.filter(note => note > average).length;

    // Affichage des résultats
    document.getElementById('output').innerHTML = `
        <p>Moyenne de la classe : ${average.toFixed(2)}</p>
        <p>Nombre d'élèves avec une note supérieure à la moyenne : ${aboveAverageCount}</p>
    `;
});