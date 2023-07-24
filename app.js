// Sample data (you can replace this with your actual data)
const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 28 },
  { id: 4, name: "Alice", age: 32 },
  { id: 5, name: "Mark5", age: 22 },
  { id: 6, name: "Mark6", age: 22 },
  { id: 7, name: "Mark7", age: 22 },
  { id: 8, name: "Mark8", age: 22 },
  { id: 9, name: "John9", age: 30 },
  { id: 10, name: "John10", age: 30 },
  { id: 11, name: "John11", age: 30 },
  { id: 12, name: "John12", age: 30 },
  { id: 13, name: "Jane13", age: 25 },
  { id: 14, name: "Bob14", age: 28 },
  { id: 15, name: "Alice15", age: 32 },
  { id: 16, name: "Mark16", age: 22 },
  // Add more data as needed
];

// Function to render the table rows based on the data
function renderRows(startIndex, endIndex) {
    
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear previous rows

  for (let i = startIndex; i < endIndex; i++) {
    const rowData = data[i];
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = rowData.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = rowData.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = rowData.age;
    row.appendChild(ageCell);

    tableBody.appendChild(row);
  }
}

 

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", (event) => {
  const value = parseInt(event.target.value);
  sliderValue.innerText = value;
console.log(value)
  // Render the rows within the viewport
  renderRows(value, value + 5);
});

