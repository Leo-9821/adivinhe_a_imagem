document.addEventListener('DOMContentLoaded', () => {
  const onlyImageRadio = document.getElementById('only-img');
  const imgCluesRadio = document.getElementById('img-clues');
  const cluesFieldset = document.getElementById('clues-fieldset');
  const confirmClueNumberBtn = document.getElementById('clue-number-btn');
  const insertCluesBtn = document.getElementById('insert-clues-btn');

  function toggleCluesFieldset() {
    if (imgCluesRadio.checked) {
      cluesFieldset.classList.add('visible');
    } else {
      cluesFieldset.classList.remove('visible');
    }
  }

  function confirmClueNumber() {
    const clueNumberInput = document.getElementById('clue-number');
    const clueTable = document.getElementById('clue-table');

    const clueNumber = parseInt(clueNumberInput.value, 10);

    addClueRows(clueNumber, clueTable);
    insertCluesBtn.classList.add('visible');
  }

  function addClueRows(numberOfClues, table) {
    // Clear existing rows
    table.innerHTML = '';
    const rowHeader = document.createElement('tr');
    const clueHeader = document.createElement('th');
    const valueHeader = document.createElement('th');
    clueHeader.textContent = 'Dicas';
    valueHeader.textContent = 'Valores';
    rowHeader.appendChild(clueHeader);
    rowHeader.appendChild(valueHeader);
    table.appendChild(rowHeader);
    for (let i = 0; i < numberOfClues; i++) {
      const row = document.createElement('tr');
      const clueCell = document.createElement('td');
      const valueCell = document.createElement('td');
      const clueInput = document.createElement('input');
      const valueInput = document.createElement('input');
      clueInput.type = 'text';
      clueInput.placeholder = 'Dica';
      valueInput.type = 'text';
      valueInput.placeholder = 'Valor';
      clueCell.appendChild(clueInput);
      valueCell.appendChild(valueInput);
      row.appendChild(clueCell);
      row.appendChild(valueCell);
      table.appendChild(row);
    }
  }

  onlyImageRadio.addEventListener('change', toggleCluesFieldset);
  imgCluesRadio.addEventListener('change', toggleCluesFieldset);

  confirmClueNumberBtn.addEventListener('click', confirmClueNumber);
});
