document.addEventListener("DOMContentLoaded", function () {
  const stripeCount = 10; // Number of stripes
  const stripesContainer = document.querySelector(".stripes");

  // Create the stripes dynamically
  for (let i = 0; i < stripeCount; i++) {
    const stripe = document.createElement("div");
    stripesContainer.appendChild(stripe);
  }

  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    const stripes = document.querySelectorAll(".stripes div");
    const content = document.querySelector(".content");

    // Animate stripes to move outwards
    stripes.forEach((stripe, index) => {
      stripe.style.transform = `translateX(${-100 * (index + 1)}%)`; // Animate each stripe
    });

    // After animation, reveal content
    setTimeout(function () {
      content.style.display = "block";
      stripesContainer.style.display = "none"; // Hide the stripes once animation completes
    }, 1000); // Duration matches the stripe animation
  });
});
