document.addEventListener('DOMContentLoaded', () => {
  const onlyImageRadio = document.getElementById('only-img');
  const imgCluesRadio = document.getElementById('img-clues');
  const cluesFieldset = document.getElementById('clues-fieldset');

  function toggleCluesFieldset() {
    if (imgCluesRadio.checked) {
      cluesFieldset.classList.add('visible');
    } else {
      cluesFieldset.classList.remove('visible');
    }
  }

  onlyImageRadio.addEventListener('change', toggleCluesFieldset);
  imgCluesRadio.addEventListener('change', toggleCluesFieldset);
});
