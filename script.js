const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");

  let total = 0;
  priceElements.forEach((elem) => {
    total += parseFloat(elem.textContent);
  });

  // Create a new row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");

  // Create a single cell with colspan=2
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");

  // Create the #ans element and set total
  const ansDiv = document.createElement("div");
  ansDiv.id = "ans";
  ansDiv.textContent = total;

  // Add #ans div inside the total cell
  totalCell.appendChild(ansDiv);
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  getSumBtn.disabled = true; // Optional: to prevent duplicates
};

getSumBtn.addEventListener("click", getSum);
