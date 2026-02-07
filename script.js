//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// auto focus first input
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    // allow only digits & backspace
    if (
      e.key !== "Backspace" &&
      (e.key < "0" || e.key > "9")
    ) {
      e.preventDefault();
    }

    // backspace behavior
    if (e.key === "Backspace") {
      input.value = "";
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

  input.addEventListener("input", () => {
    // move forward on typing
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});
