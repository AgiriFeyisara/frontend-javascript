interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Dolapo",
  lastName: "Adedara",
  age: 24,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Tunde",
  lastName: "Adewale",
  age: 26,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";

const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
