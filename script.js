$(document).ready(onReady);

function onReady() {
  console.log('jquery and javascript ready');
  $('#submit-btn').on('click', addEmployee);
}

let employeeArr = [];
let totalMonthly = 0;

function addEmployee() {
  console.log('in addEmployee');
  let employee = {
    firstname: $('#input-first-name').val(),
    lastname: $('#input-last-name').val(),
    ID: $('#input-ID').val(),
    title: $('#input-title').val(),
    annualSalary: $('#input-annual-salary').val(),
  };
  employeeArr.push(employee);
  render();
}
function calculateTotalMonthly() {
  let totalMonthly = 0;
  console.log(employeeArr);
  for (let employee of employeeArr) {
    totalMonthly += Number(employee.annualSalary);
    console.log(totalMonthly);
  }
  return totalMonthly;
}

function render() {
  console.log('ready to render');
  //clear the inputs
  $('#input-last-name').val('');
  $('#input-first-name').val('');
  $('#input-ID').val('');
  $('#input-annual-salary').val('');
  $('#input-title').val('');
  //idea is to render the employeeArr into the DOM
  $('#container-row').empty();
  for (let employee of employeeArr) {
    $('#container-row').append(`
    <tr id="containter-row">
    <td>${employee.firstname}</td>
    <td>${employee.lastname}</td>
    <td>${employee.ID}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
    <td><button id="delete-btn">Delete</button></td>
    </tr>`);
  }
  //calculate the total monthly
  let totalMonthly = calculateTotalMonthly();
  //render it to the DOM
  $('#right-align').empty();
  $('#right-align').append(`
    <h2 id="right-align">Total Monthly: $${totalMonthly}</h2>
    `);
}
