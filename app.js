'use strict'

let imgOne = document.getElementById("Kia")
let imgTwo = document.getElementById("Bmw")
let imgThree = document.getElementById("Ford")

let img = ['kia.jpg' , 'bmw.jpg' , 'ford.jpg'];

let cars = []

function CarRental(customerName, carModel, carPrice){
    this.customerName = customerName;
    this.carModel = carModel;
    this.carPrice = carPrice;

    this.carPrice = function(){
        return Math.ceil(Math.random() * (10000 - 1) + 1);
    }
    cars.push(this);
    saveToLocalStorage();
}

let form = document.getElementById('form');
form.addEventListener('submit' , handler)

function handler(event) {
    event.preventDefault();
    let newCustomerName = event.target.customerName.value;
    let newCarModel = event.target.carModel.value;
    let newCarPrice = event.target.carPrice.value;

    let instance = new CarRental(newCustomerName, newCarModel, newCarPrice)
    instance.renderData();
}

let tabel = document.getElementById('table');
let rowHead = document.createElement('tr');
tabel.appendChild(rowHead);

function rendHeaderOfTable(){
    let customerName = document.createElement('th');
    rowHead.appendChild(customerName);
    customerName.textContent = "Customer Name"

    let carModel = document.createElement('th');
    rowHead.appendChild(carModel);
    carModel.textContent = "Car Model"

    let carPrice = document.createElement('th');
    rowHead.appendChild(carPrice);
    carPrice.textContent = "Car Price"
}

rendHeaderOfTable();

CarRental.prototype.renderData = function(){
    let rowData = document.createElement('td');
    rowData.appendChild(rowData);

    let dataCustomerName = document.createElement('td');
    rowData.appendChild(dataCustomerName);
    dataCustomerName.textContent = this.customerName;

    let dataCarModel = document.createElement('td');
    rowData.appendChild(dataCarModel);
    dataCarModel.textContent = this.carModel;

    let dataCarPrice = document.createElement('td');
    rowData.appendChild(dataCarPrice);
    dataCarPrice.textContent = this.carPrice;

}

// save To Local Storage

function saveToLocalStorage(){
    let stringifed = JSON.stringifed(cars);
    localStorage.setItem('Item' , stringifed)
}

// read From Local Storage

function readFromLocalStorage(){
    let Item = localStorage.getItem('Item');
    let parsed = JSON.parse(Item);

    if (parsed != null){
        for (let i = 0; i < cars.length; i++) {
           let reInstance = new CarRental(parsed[i].customerName, parsed[i].carModel, parsed[i].carPrice);
           cars[i].renderData();
        }
    }
}

readFromLocalStorage();