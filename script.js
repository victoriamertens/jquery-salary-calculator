$(document).ready(onReady);

function onReady() {
  $('#submit-btn').on('click', addEmployee);
  $('#container').on(
    'click',
    '#container-row #delete-btn-td #delete-btn',
    removeEmployee
  );
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

function removeEmployee() {
  let newEmployeeArr = [];
  console.log('in Remove Employee');
  //select the specific row information
  let deleteBtn = $(this);
  let deletedEmployeeID = deleteBtn.parent().siblings().eq(2).text();
  console.log(deletedEmployeeID);

  for (let employee of employeeArr) {
    console.log(employee.ID);
    if (employee.ID !== deletedEmployeeID) {
      newEmployeeArr.push(employee);
    }
  }
  employeeArr = newEmployeeArr;
  render();
  //empty those specific contents
}

function calculateTotalMonthly() {
  let totalMonthly = 0;

  for (let employee of employeeArr) {
    totalMonthly += Number(employee.annualSalary);
  }
  if (totalMonthly <= 20000) {
    return totalMonthly;
  } else {
    $('#right-align').addClass('red-alert');
    return totalMonthly;
  }
}

function render() {
  console.log('in render');
  //clear the inputs
  $('#input-last-name').val('');
  $('#input-first-name').val('');
  $('#input-ID').val('');
  $('#input-annual-salary').val('');
  $('#input-title').val('');
  //idea is to render the employeeArr into the DOM
  $('#container').empty();
  for (let employee of employeeArr) {
    $('#container').append(`
    <tr id="container-row">
    <td>${employee.firstname}</td>
    <td>${employee.lastname}</td>
    <td>${employee.ID}</td>
    <td>${employee.title}</td>
    <td id="salary-delete"> $ ${employee.annualSalary}</td>
    <td id="delete-btn-td"><button id="delete-btn">Delete</button></td>
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
