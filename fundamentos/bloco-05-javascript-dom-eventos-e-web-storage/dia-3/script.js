function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays() {
  const holidays = [24, 25, 31]
  
  const fridays = [4, 11, 18, 25]
  
  const daysUl = document.querySelector('#days')
  
  for(let index = 0; index < decemberDaysList.length; index += 1) {
    const dayLi = document.createElement('li')
    const day = decemberDaysList[index]
    dayLi.innerText = day
    dayLi.classList.add('day')
    
    if(holidays.includes(day)) {
      dayLi.classList.add('holiday')
    }
  
    if(fridays.includes(day)) {
      dayLi.classList.add('friday')
    }
  
    daysUl.appendChild(dayLi)
  }
}

addDays()


const buttonsContainer = document.querySelector('.buttons-container')

function createButtonHolidays(buttonName) {
  const buttonHolidays = document.createElement('button')
  buttonHolidays.id = 'btn-holiday'
  buttonHolidays.innerText = buttonName
  buttonsContainer.appendChild(buttonHolidays)
}

createButtonHolidays('Feriados')

function displayHolidays() {
  const buttonHolidays = document.querySelector('#btn-holiday')
  const holidays = document.querySelectorAll('.holiday')
  const newColor = 'rgb(50, 167, 145)'
  const initialColor = 'rgb(238, 238, 238)'
  
  function changeColor() {
    for(let index = 0; index < holidays.length; index += 1) {
      const holiday = holidays[index] 

      if(holiday.style.backgroundColor !== newColor) {
        holiday.style.backgroundColor = newColor
        holiday.style.color = 'white'
      } else {
        holiday.style.backgroundColor = initialColor
        holiday.style.color = '#777'
      }
    }
  }
  
  buttonHolidays.addEventListener('click', changeColor)
}

displayHolidays()


function createButtonFridays(buttonName) {
  const buttonFriday = document.createElement('button')
  buttonFriday.id = 'btn-friday'
  buttonFriday.innerText = buttonName
  buttonsContainer.appendChild(buttonFriday)
}

createButtonFridays('Sexta-Feira')


function displayFridays() {
  const buttonFriday = document.querySelector('#btn-friday')
  const fridays = document.querySelectorAll('.friday')
  const newColor = 'rgb(21, 123, 163)'
  const initialColor = 'rgb(238, 238, 238)'
  
  function changeColor() {
    for(let index = 0; index < fridays.length; index += 1) {
      const friday = fridays[index] 
      console.log(friday.style.backgroundColor);
      if(friday.style.backgroundColor !== newColor) {
        friday.style.backgroundColor = newColor
        friday.style.color = 'white'
      } else {
        friday.style.backgroundColor = initialColor
        friday.style.color = '#777'
      }
    }
  }
  
  buttonFriday.addEventListener('click', changeColor)
}

displayFridays()


function zoom() {
  const days = document.querySelectorAll('.day')

  function zoomIn(event) {
    const dayOn = event.target
    dayOn.style.fontSize = '32px'
  }
  
  function zoomOut(event) {
    const dayOff = event.target
    dayOff.style.fontSize = '20px'
  }
  
  for(let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', zoomIn)
    days[index].addEventListener('mouseout', zoomOut)
  }
}

zoom()


function addTask(nameTask) {
  const myTasks = document.querySelector('.my-tasks')
  const task = document.createElement('span')

  task.innerText = nameTask
  myTasks.appendChild(task)
}

addTask('Projeto')


function addPointColor(cor) {
  const myTasks = document.querySelector('.my-tasks')
  const point = document.createElement('div')

  point.classList.add('task')
  point.style.backgroundColor = cor
  myTasks.appendChild(point)
}

addPointColor('green')
addPointColor('red')


function pointSelect() {
  const points = document.querySelectorAll('.task')
  
  function select(event) {
    const selected = document.querySelector('.selected')
    if(selected !== null) {
      selected.classList.remove('selected')
    }

    event.target.classList.add('selected')
  }

  for(let index = 0; index < points.length; index += 1) {
    points[index].addEventListener('click', select)

  }

}

pointSelect()


function addColorInDays() {
  const days = document.querySelectorAll('.day')
  
  function addColor(event) {
    const point = document.querySelector('.selected')
    const selectedColor = point.style.backgroundColor
    const selectedDay = event.target

    selectedDay.style.backgroundColor = selectedColor
  }

  for(let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', addColor)
  }
}

addColorInDays()


function addAllCommitments() {
  const button = document.querySelector('#btn-add')
  const ulTasks = document.querySelector('.task-list')
  const input = document.querySelector('#task-input')

  function addCommitmentsClick() {
  
    const newCommitment = document.createElement('li')
    
    if(input.value === '') {
      return alert('Insira a tarefa na input')
    }

    newCommitment.innerText = input.value
    ulTasks.appendChild(newCommitment)

    input.value = ''
  }
  

  function addCommitmentsKey(event) {

    if(event.key === 'Enter') {
      const newCommitment = document.createElement('li')
      
      if(input.value === '') {
        return alert('Insira a tarefa na input')
      }
  
      newCommitment.innerText = input.value
      ulTasks.appendChild(newCommitment)
  
      input.value = ''
    }
  }
  
  button.addEventListener('click', addCommitmentsClick)
  input.addEventListener('keypress', addCommitmentsKey)
}

addAllCommitments()