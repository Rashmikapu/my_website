function toggleExperience(button) {
    const content = button.nextElementSibling; // The content div next to the header
    const icon = button.querySelector(".icon");
  
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      icon.textContent = "−"; // Change to minus icon
    } else {
      content.style.display = "none";
      icon.textContent = "+"; // Change to plus icon
    }
  }
  