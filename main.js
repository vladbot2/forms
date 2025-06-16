const carForm = document.getElementById('carForm');
const carTableBody = document.getElementById('carTableBody');
const clearBtn = document.getElementById('clearBtn');

let count = 1;

carForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const brandInput = document.getElementById('brand');
  const yearInput = document.getElementById('year');
  const electricInput = document.getElementById('electric');

  const brand = brandInput.value.trim();
  const year = yearInput.value.trim();
  const electric = electricInput.value;

  if (brand === "") {
    return;
  }

  if (year === "") {
    return;
  }

  if (electric === "") {
    return;
  }

  const row = document.createElement('tr');

  const cellNumber = document.createElement('td');
  const cellBrand = document.createElement('td');
  const cellYear = document.createElement('td');
  const cellElectric = document.createElement('td');

  cellNumber.textContent = count;
  cellBrand.textContent = brand;
  cellYear.textContent = year;
  cellElectric.textContent = electric;

  row.appendChild(cellNumber);
  row.appendChild(cellBrand);
  row.appendChild(cellYear);
  row.appendChild(cellElectric);

  carTableBody.appendChild(row);

  count = count + 1;
  carForm.reset();
});

clearBtn.addEventListener('click', function() {
  carTableBody.innerHTML = "";
  count = 1;
});
