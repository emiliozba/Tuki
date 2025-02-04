document.querySelector('.yes').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = 'jijijiji te quiero muchito';

    // Oculta la imagen especial y reduce el contenedor si está expandido
    const specialImageContainer = document.getElementById('special-image-container');
    specialImageContainer.classList.remove('expanded');
    const specialImage = document.getElementById('perro2');
    specialImage.style.display = 'none';
});

document.querySelector('.no').addEventListener('click', function() {
    const responses = [
        'Ya no aprietes no 😡😡😡',
        'si sigue apretando el no, Voy a estrenar un puente nuevo 😡😡😡',
        'Ya se me acabaron las opciones KAJSKAJS',
        'CARAJO?? 😡😡😡',
        'Si no aprietas "si" eres este:',
    ];
    
    // Selecciona una respuesta aleatoria del array
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Imprime la respuesta en el contenedor de mensajes
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = randomResponse;
    
    // Obtiene el botón "Sí"
    const yesButton = document.querySelector('.yes');
    
    // Aumenta el tamaño del botón "Sí"
    const currentFontSize = window.getComputedStyle(yesButton, null).getPropertyValue('font-size');
    const newFontSize = parseFloat(currentFontSize) + 15; // Aumenta el tamaño en 2px
    yesButton.style.fontSize = newFontSize + 'px';

    // Manejar la imagen especial
    const specialImageContainer = document.getElementById('special-image-container');
    const specialImage = document.getElementById('perro2');
    if (randomResponse === 'Si no aprietas "si" eres este:') {
        specialImage.style.display = 'block'; // Muestra la imagen
        specialImageContainer.classList.add('expanded'); // Expande el contenedor
    } else {
        specialImage.style.display = 'none'; // Oculta la imagen
        specialImageContainer.classList.remove('expanded'); // Reduce el contenedor
    }
});