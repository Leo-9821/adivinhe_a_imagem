document.addEventListener('DOMContentLoaded', () => {
  const onlyImageRadio = document.getElementById('only-img');
  const imgCluesRadio = document.getElementById('img-clues');
  const cluesFieldset = document.getElementById('clues-fieldset');
  const confirmClueNumberBtn = document.getElementById('clue-number-btn');
  const insertCluesBtn = document.getElementById('insert-clues-btn');
  const clueTable = document.getElementById('clue-table');

  function toggleCluesFieldset() {
    if (imgCluesRadio.checked) {
      cluesFieldset.classList.add('visible');
    } else {
      cluesFieldset.classList.remove('visible');
    }
  }

  function confirmClueNumber() {
    const clueNumberInput = document.getElementById('clue-number');

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
      clueInput.classList.add('clue-input');
      valueInput.type = 'text';
      valueInput.placeholder = 'Valor';
      valueInput.classList.add('value-input');
      clueCell.appendChild(clueInput);
      valueCell.appendChild(valueInput);
      row.appendChild(clueCell);
      row.appendChild(valueCell);
      table.appendChild(row);
    }
  }

  function getClues() {
    const clues = {};

    const rows = clueTable.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const clueInput = cells[0].getElementsByTagName('input')[0];
      const valueInput = cells[1].getElementsByTagName('input')[0];
      const clue = clueInput.value.trim();
      const value = valueInput.value.trim();
      if (clue && value) {
        clues[clue] = value;
      }
    }
    return clues;
  }

  function setClues(clues) {
    if (Object.keys(clues).length) {
      // Busca o maior índice já salvo
      let maxIndex = 0;
      for (let key in localStorage) {
        if (key.startsWith('clues')) {
          const num = parseInt(key.replace('clues', ''), 10);
          if (!isNaN(num) && num > maxIndex) {
            maxIndex = num;
          }
        }
      }
      const nextIndex = maxIndex + 1;
      localStorage.setItem(`clues${nextIndex}`, JSON.stringify(clues));
    }
  }

  onlyImageRadio.addEventListener('change', toggleCluesFieldset);
  imgCluesRadio.addEventListener('change', toggleCluesFieldset);

  confirmClueNumberBtn.addEventListener('click', confirmClueNumber);

  insertCluesBtn.addEventListener('click', () => {
    const clues = getClues();
    setClues(clues);
    const clueInputs = clueTable.getElementsByClassName('value-input');

    for (let input of clueInputs) {
      input.value = '';
    }
  });
});
