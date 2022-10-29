$(document).ready(onReady);

function onReady() {
  console.log('jquery and javascript ready');
  $('#submit-btn').on('click', addEmployee);
}

let employeeArr = [];

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

function render() {
  console.log('ready to render');
  //idea is to render the employeeArr into the DOM
  console.log('ghghghgh', $('#container-row'));
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
}
