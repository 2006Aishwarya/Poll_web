// File: create_poll.js

document.addEventListener("DOMContentLoaded", () => {
  // Handle adding new options
  const optionsContainer = document.getElementById("options-container");
  const addOptionButton = document.getElementById("add-option");

  addOptionButton.addEventListener("click", () => {
    const optionItem = document.createElement("div");
    optionItem.className = "option-item";
    optionItem.innerHTML = `
            <input type="text" name="option" placeholder="Option">
            <button type="button" class="remove-option">X</button>
        `;
    optionsContainer.appendChild(optionItem);

    // Add remove functionality
    optionItem.querySelector(".remove-option").addEventListener("click", () => {
      optionsContainer.removeChild(optionItem);
    });
  });

  // Handle toggling visibility of settings
  const toggleDropdownVisibility = (toggleSelector, dropdownSelector) => {
    const toggle = document.querySelector(toggleSelector);
    const dropdown = document.querySelector(dropdownSelector);

    toggle.addEventListener("change", () => {
      dropdown.style.display = toggle.checked ? "block" : "none";
    });
  };

  toggleDropdownVisibility("#multiple-options", "#multiple-options-settings");
  toggleDropdownVisibility("#voting-security-toggle", "#voting-security");
  toggleDropdownVisibility("#results-visibility-toggle", "#results-visibility");
  toggleDropdownVisibility(
    "#edit-vote-permissions-toggle",
    "#edit-vote-permissions"
  );

  // Additional functionality for the multiple-options choice
  const multipleOptionsChoice = document.getElementById(
    "multiple-options-choice"
  );
  const rangeSettings = document.getElementById("range-settings");

  multipleOptionsChoice.addEventListener("change", () => {
    if (multipleOptionsChoice.value === "range") {
      rangeSettings.style.display = "block";
    } else {
      rangeSettings.style.display = "none";
    }
  });
});
