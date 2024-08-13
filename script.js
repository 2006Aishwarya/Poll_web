// File: script.js

document.getElementById('multiple-options').addEventListener('change', function() {
    const settings = document.getElementById('multiple-options-settings');
    if (this.checked) {
        settings.style.display = 'block';
    } else {
        settings.style.display = 'none';
    }
});

document.getElementById('multiple-options-choice').addEventListener('change', function() {
    const rangeSettings = document.getElementById('range-settings');
    if (this.value === 'range') {
        rangeSettings.style.display = 'block';
    } else {
        rangeSettings.style.display = 'none';
    }
});

document.getElementById('add-option').addEventListener('click', function() {
    const container = document.getElementById('options-container');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'option';
    input.placeholder = 'New Option';
    container.appendChild(input);
});

document.getElementById('add-other').addEventListener('click', function() {
    const container = document.getElementById('options-container');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'option';
    input.placeholder = 'Other';
    container.appendChild(input);
});

document.getElementById('
