"use strict";

let currentStep = 1;

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");

prevBtn.addEventListener("click", handleOnClickPrevBtn);
nextBtn.addEventListener("click", handelOnClickNextBtn);

function handelOnClickNextBtn() {
  currentStep++;
  if (currentStep > steps.length) {
    currentStep = steps.length;
  }
  update();
}

function handleOnClickPrevBtn() {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
}

function update() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      console.log("in step < currentStep");
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  lines.forEach((line, index) => {
    if (index < currentStep - 1) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });

  if (currentStep === 1) {
    prevBtn.disabled = true;
  } else if (currentStep === steps.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
