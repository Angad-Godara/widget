// Select the div based on the data-cf attribute
const divElement = document.querySelector('[data-cf]');

// Check if the element was found
if (divElement) {
    divElement.classList.add("gs__widget__wrapper")
    // Perform actions on the selected divElement
    // Insert HTML content inside the selected div
    divElement.innerHTML += '<h2 class="gs__widget__heading">CARBON FOOTPRINT TRACKER</h2>';
    divElement.innerHTML += '<img class="gs__widget__test__img" src="https://angad-godara.github.io/widget/assets/IMG_7564.JPG" />';
    divElement.innerHTML += '<p class="gs__widget__content">Mehr Transparenz für fundiertere Entscheidungen: wir wollen Produkte mit dem geringstmöglichen CO2-Fußabdruck anbieten. Zusammen mit Carbonfact haben wir den Footprint unserer Jeans ermittelt.</p>';
}
