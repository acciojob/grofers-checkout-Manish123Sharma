const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".price");

  // Calculate the total sum
  let total = 0;
  priceElements.forEach((elem) => {
    total += parseFloat(elem.textContent); // Convert text to number
  });

  // Create a new row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  // Create a single cell with colspan=2 to span both columns
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append the cell to the row
  totalRow.appendChild(totalCell);

  // Append the row to the table
  table.appendChild(totalRow);

  // Disable button after total is added to prevent duplication
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

