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
}
