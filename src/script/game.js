document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.image-grid-overlay');
  const rows = 4;
  const cols = 5;
  for (let i = 0; i < rows * cols; i++) {
    const rect = document.createElement('div');
    rect.className = 'image-grid-rect';
    overlay.appendChild(rect);
  }
  updateOverlay();

  function updateOverlay() {
    const rects = overlay.querySelectorAll('.image-grid-rect');
    rects.forEach(rect => {
      rect.addEventListener('click', () => {
        rect.style.opacity = '0';
        rect.style.transition = 'opacity 1.0s ease';
      });
    });
  }
});
