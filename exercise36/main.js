const colorInput = document.querySelector('.js-color-input');
const colorPreview = document.querySelector('.js-color-preview');
const historyContainer = document.querySelector('.js-history-container');
const clearHistoryBtn = document.querySelector('.js-clear-btn');


let colorHistory = [];


colorInput.addEventListener('input', (e) => {
    const chosenColor = e.target.value;

    colorPreview.style.backgroundColor = chosenColor;
    colorPreview.textContent = '';


    if (!colorHistory.includes(chosenColor)) {
        colorHistory.unshift(chosenColor);
        updateHistoryDOM();
    }
});

function updateHistoryDOM() {
    
    historyContainer.innerHTML = '';

    colorHistory.forEach(color => {
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'history-item';

        const colorBox = document.createElement('div');
        colorBox.className = 'history-color-box';
        colorBox.style.backgroundColor = color;

        const colorText = document.createElement('span');
        colorText.textContent = color;

        
        itemDiv.appendChild(colorBox);
        itemDiv.appendChild(colorText);
        historyContainer.appendChild(itemDiv);
    });
}


clearHistoryBtn.addEventListener('click', () => {
    colorHistory = [];
    historyContainer.innerHTML = '';
    colorPreview.style.backgroundColor = '#ffffff';
    colorPreview.textContent = 'Color Preview';
    colorInput.value = '#000000';
});