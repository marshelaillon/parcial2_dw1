let starCounts = [1, 0];

function openModal(imageSrc) {
  const modalElement = document.getElementById('cardModal');
  if (modalElement) {
    const modalBody = modalElement.querySelector('.modal-body');
    modalBody.innerHTML = `
      <img src="${imageSrc}" class="img-fluid w-100 mb-3" alt="Imagen de la tarjeta">
      <p>Este es el contenido del modal que se abre cuando haces click en el botón "Abrir" del Card Modal.</p>
    `;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}

function updateStars(cardIndex, action) {
  const starElement = document.querySelector(`[data-card="${cardIndex}"]`);

  if (!starElement) return;

  switch (action) {
    case 'agregar':
      starCounts[cardIndex]++;
      break;
    case 'quitar':
      if (starCounts[cardIndex] > 0) {
        starCounts[cardIndex]--;
      }
      break;
    case 'resetear':
      starCounts[cardIndex] = 0;
      break;
  }

  starElement.textContent = starCounts[cardIndex];
}

document.addEventListener('DOMContentLoaded', function () {
  starCounts.forEach((count, index) => {
    const starElement = document.querySelector(`[data-card="${index}"]`);
    if (starElement) {
      starElement.textContent = count;
    }
  });
});