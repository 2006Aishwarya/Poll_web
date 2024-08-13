document.addEventListener("DOMContentLoaded", function () {
    const addOptionButton = document.getElementById("add-option");
    const optionsContainer = document.getElementById("options-container");
    let optionCount = 2;

    addOptionButton.addEventListener("click", () => {
        optionCount++;
        const newOption = document.createElement("input");
        newOption.setAttribute("type", "text");
        newOption.setAttribute("name", `option${optionCount}`);
        newOption.setAttribute("placeholder", `Option ${optionCount}`);
        optionsContainer.appendChild(newOption);
    });

    const multipleOptionsCheckbox = document.getElementById("multiple-options");
    const multipleOptionsSettings = document.getElementById("multiple-options-settings");
    const rangeSelect = document.getElementById("multiple-options-choice");
    const exactSettings = document.getElementById("exact-settings");
    const rangeSettings = document.getElementById("range-settings");

    multipleOptionsCheckbox.addEventListener("change", () => {
        multipleOptionsSettings.style.display = multipleOptionsCheckbox.checked ? "block" : "none";
    });

    rangeSelect.addEventListener("change", () => {
        const value = rangeSelect.value;
        exactSettings.style.display = value === "exact" ? "block" : "none";
        rangeSettings.style.display = value === "range" ? "block" : "none";
    });

    const pollTypeSelect = document.getElementById("poll-type");
    const imagePollContainer = document.getElementById("image-poll-container");
    pollTypeSelect.addEventListener("change", () => {
        imagePollContainer.style.display = pollTypeSelect.value === "image-poll" ? "block" : "none";
    });

    const addImageOptionButton = document.getElementById("add-image-option");
    addImageOptionButton.addEventListener("click", () => {
        const newImageUpload = document.createElement("input");
        newImageUpload.setAttribute("type", "file");
        newImageUpload.setAttribute("name", "image-upload");
        newImageUpload.setAttribute("accept", "image/*");

        const newImageLabel = document.createElement("input");
        newImageLabel.setAttribute("type", "text");
        newImageLabel.setAttribute("name", "image-label");
        newImageLabel.setAttribute("placeholder", "Label");

        document.getElementById("image-upload-container").appendChild(newImageUpload);
        document
