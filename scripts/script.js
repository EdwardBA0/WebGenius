
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".color-changing-title");
    const text = title.dataset.text;
  
    // Vacía el contenido del título
    title.innerHTML = "";
  
    // Recorre cada letra del texto y crea un span para cada una
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      title.appendChild(span);
    }
  });
  