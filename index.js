const entryPrompt = require('prompt-sync')({sigint: true})

function addProp(obj, propName, propValue){
  obj[propName] = propValue
}

function Get() {

    return fetch('https://apigenerator.dronahq.com/api/AzOE0xVO/carData')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
}

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }

  async function putData(url = '', id = 0, data = {}) {

    const response = await fetch(`${url}/${id}`, {
  
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  async function getByID(url = '', id = 0){
    const response = await fetch(`${url}/${id}`, {
  
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
        mode: 'cors',
    
        cache: 'no-cache',
    
        credentials: 'same-origin',
    
        headers: {
    
          'Content-Type': 'application/json'
    
        },
    
        redirect: 'follow',
    
        referrerPolicy: 'no-referrer',
    
      });
    
      return response.json();
}

async function deleteData(url = '', id = 0, data = {}) {
    
  const response = await fetch(`${url}/${id}`, {

  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.

  mode: 'cors',

  cache: 'no-cache',

  credentials: 'same-origin',

  headers: {

    'Content-Type': 'application/json'

  },

  redirect: 'follow',

  referrerPolicy: 'no-referrer',

});}

let continue1 = true

while(continue1){
  let input = entryPrompt("1 - GET, 2 - GetByID, 3 - POST, 4 - PUT, 5 - DELETE, 6 - STOP: ")
  if(input === '1'){
    console.log(Get())
  } else if(input === '2'){
    let idNum = parseInt(entryPrompt("Type the ID: "))
    console.log(getByID('https://apigenerator.dronahq.com/api/AzOE0xVO/carData', idNum))
  } else if(input === '3'){
      let continueLoop = true
      while(continueLoop){
          
          let choose = entryPrompt("1 start or 2 to stop: ")
          if(choose === '2'){
              continueLoop = false
          } else {
              let cars = {}
              let carName = entryPrompt("Car name: ")
              let year = parseInt(entryPrompt("Year: "))
              let km = parseInt(entryPrompt("Km: "))
              let value = parseFloat(entryPrompt("Value: "))
              addProp(cars, 'Car', carName)
              addProp(cars, 'Year', year)
              addProp(cars, 'Km', km)
              addProp(cars, 'Value', value)
              postData('https://apigenerator.dronahq.com/api/AzOE0xVO/carData', cars)
          }
          
      }
  } else if(input === '4'){
      let cars = {}
      let idToUpdate = entryPrompt("Insert the ID to update an information: ")
      let carName = entryPrompt("Car name: ")
      let year = parseInt(entryPrompt("Year: "))
      let km = parseInt(entryPrompt("Km: "))
      let value = parseFloat(entryPrompt("Value: "))
      addProp(cars, 'Car', carName)
      addProp(cars, 'Year', year)
      addProp(cars, 'Km', km)
      addProp(cars, 'Value', value)
      putData('https://apigenerator.dronahq.com/api/AzOE0xVO/carData', idToUpdate, cars)
  } else if(input === '5'){
      let idDelete = entryPrompt("Type the ID to delete: ")
      console.log(deleteData('https://apigenerator.dronahq.com/api/AzOE0xVO/carData', idDelete))
    } else if(input === '6'){
      continue1 = false
    }
} 
