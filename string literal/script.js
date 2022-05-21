const employee = {
  first_name: "Alfred",
  last_name: "Pennyworth",
  age: 67,
  occupation: "butler",
  place_of_residence: "Gotham",
  photo_url: "https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg",
};

const employees = document.querySelector(".employees");

const list = `<div class="employee">
<div class="employee__photo">
    <img src=${employee.photo_url} alt="Alfred Pennyworth">
</div>
<div class="employee_info">
    <div class="employee__full-name">${
      employee.first_name + " " + employee.last_name
    }</div>
    <div class="employee__occupation">${employee.occupation}</div>
    <div class="employee__residence">Last known place of residence:${
      employee.residence
    }</div>
    <div class="employee__age">Age: ${employee.age}</div> years old</div>
</div>
</div>`;
employees.innerHTML = list;
