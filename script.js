// Employee Class

class Employee {
    constructor(id, name, position, salary, department) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.department = department;
        this.createdAt = new Date();
        this.startDate = new Date();
        this.isOnLeave = false;
    }
}


// Management Class
class EmployeeManagement {
    baseId = 0;
    employees = []
    attendance = []

    createEmployee(name, position, salary, department) {


        let employee = new Employee(this.baseId++, name, position, salary, department)
        this.employees.push(employee)
    }

    getAllEmployees() {
        return this.employees
    }

    getAllEmployee(id) {
        let employee = this.employees.find(em => em.id === id)
        return employee
    }

    updateEmployee(id, updateInfo) {
        let allEmployees = this.employees.map(employee => {
            if (employee.Id === id) {
                return {
                    ...employee, ...updateInfo
                }
            } else {
                return employee
            }
        })
        this.employee = allEmployees
    }

    deleteEmployee(id) {
        let newEmloyees = this.employees.filter(em => em.id !== id)
        this.employees = newEmloyees
        return `Deleted Employee with id of ${Id}`
    }

    markAttendance(employee) {
        let attendanceObj = {
            employeeId: employee.id,
            timeEntered: new Date()
        }
        this.attendance.push(attendanceObj)
    }
}

let employeeMgmtApp = new EmployeeManagement()

const create = document.querySelector('#create')
const createBtn = document.querySelector('#create-btn')
const tableBody = document.querySelector('table tbody')
const createForm = document.querySelector('#create-form')
const nameInput = document.querySelector('#name')
const positionInput = document.querySelector('#position')
const salaryInput = document.querySelector('#salary')
const departmentInput = document.querySelector('#department')
const closeBtn = document.querySelector('#close')
const metrics = document.querySelectorAll('.metrics h1')


// Btn to show the form
createBtn.addEventListener('click', () => {
    create.style.display = 'flex'
})

// Btn to hide the form
closeBtn.addEventListener('click', () => {
    create.style.display = 'none'
})

// Handle Submit event and create employee
createForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    // Employee Creation
    employeeMgmtApp.createEmployee(
        nameInput.value,
        positionInput.value,
        Number(salaryInput.value),
        departmentInput.value
    )
    showEmployees()
})



function showEmployees() {
    let employees = employeeMgmtApp.getAllEmployees()
    let records = employees.map(employee => {
        return `
        <tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.salary}</td>
        <td>${employee.department}</td>
        <td>...</td>
        </tr>
        `
    })
    tableBody.innerHTML = records.join('')
}

