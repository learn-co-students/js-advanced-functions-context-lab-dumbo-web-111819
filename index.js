/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    let person = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return person
}

function createEmployeeRecords(arrayOfEmployees){
    return arrayOfEmployees.map((employee) => createEmployeeRecord(employee))
}

function createTimeInEvent(dateTime){
    let dateTimeArray = dateTime.split(' ')
    this.timeInEvents.push({type: 'TimeIn', hour: parseInt(dateTimeArray[1]), date: dateTimeArray[0]})
    return this
}

function createTimeOutEvent( dateTime){
    let dateTimeArray = dateTime.split(' ')
    this.timeOutEvents.push({type: 'TimeOut', hour: parseInt(dateTimeArray[1]), date: dateTimeArray[0]})
    return this
}


function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(dateTime => date === dateTime.date)
    const timeOut = this.timeOutEvents.find(dateTime => date === dateTime.date)
    return (timeOut.hour - timeIn.hour) / 100
}


function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this,date)
    return hours * this.payPerHour
}


function allWagesFor(){
    let datesEmployeeWorked = this.timeInEvents.map(dateTime => dateTime.date)
    return datesEmployeeWorked.reduce((acc, date) => acc += wagesEarnedOnDate.call(this,date), 0)
    
}

function calculatePayroll(employeeRecordArray){
    return employeeRecordArray.reduce((acc,employee)=> acc += allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(srcArray, name){
    let employee = srcArray.find(person => person.firstName === name)
    return (employee ? employee:undefined)
}

