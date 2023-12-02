// scripts.js

let currentModel = "Model XYZ";
let modelCosts = {
    "Model XYZ": 100,
    "Model CPRG": 213
};

function switchModel() {
    currentModel = (currentModel === "Model XYZ") ? "Model CPRG" : "Model XYZ";
    document.getElementById("model-text").innerText = currentModel;
    updateCost();
}

function changeDuration() {
    let duration = prompt("Enter the duration in days:", 0);
    if (duration !== null && !isNaN(duration) && duration >= 0) {
        document.getElementById("duration-text").innerText = duration;
        updateCost();
    } else {
        alert("Invalid input. Please enter a valid number for the duration.");
    }
}

function updateCost() {
    let duration = parseFloat(document.getElementById("duration-text").innerText);
    let cost = modelCosts[currentModel] * duration;
    document.getElementById("calculated-cost").innerText = cost.toFixed(2);
    document.getElementById("booking-message").innerText = `Thank you for your interest in booking ${currentModel} for ${duration} days!`;
}
