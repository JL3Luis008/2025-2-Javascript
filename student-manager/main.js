"use strict";

let students = [];
//cargar lo que se guardo en localStorage
window.onload = function () {
  const stored = localStorage.getItem("students");
  if (Stored) {
students = JSON.parse(stored)
displayStudents ();
updateAverage();
  }
};

function addStudent() { 
  const name = document.getElementById("nameInput").value.trim();
 if (name === "" || name === isNaN || name === undefined){
  alert ("The name is not valid");
  return;
 }
 document.getElementById("nameInput").value = "";

  const grade = parseFloat(document.getElementById("gradeInput").value);
 if (grade > 100 || grade < 0 || grade === undefined){
  alert ("The grade is not valid");
  return;
 }
 parseFloat(document.getElementById("gradeInput").value) = "";

  const student = { 
    name, 
    grade,  // operador ternario
    status: grade >= 70 ? "Passed" : "Failed",
  };

  students.push(student);
  
saveToLocalStorage();
  displayStudents();
  updateAverage();
}

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${students[i].name} - ${students[i].grade} </p>
    `;
    list.appendChild(li);
  }
}

function updateAverage() {
  if (students.length === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].grade;
  }
  let average = total / students.length;

  document.getElementById("averageDisplay").textContent = `Average Grade: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {
 localStorage.setItem("student",JSON.stringify(students));
}

