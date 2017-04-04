var slider = 0;
imgSlide();

var shoeList = [
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Brown',
            shoeSize : '6',
            quantityInStock : '15',
            shoePrice : 'R1 200.00'
        },
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Black',
            shoeSize : '6',
            quantityInStock : '9',
            shoePrice : 'R1 200.00'
        },
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Navy',
            shoeSize : '6',
            quantityInStock: '7',
            shoePrice : 'R1 200.00'
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Brown',
            shoeSize : '6',
            quantityInStock: '5',
            shoePrice : 'R850.00'
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Black',
            shoeSize : '6',
            quantityInStock: '3',
            shoePrice : 'R850.00'
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Navy',
            shoeSize : '6',
            quantityInStock: '7',
            shoePrice : 'R850.00'
        },
        {
            shoeType : 'Brogue & Wingtips',
            shoeColour : 'Brown',
            shoeSize : '6',
            quantityInStock: '7',
            shoePrice : 'R989.99'
        },
        {
            shoeType : 'Brogue & Wingtips',
            shoeColour : 'Black',
            shoeSize : '6',
            quantityInStock: '1',
            shoePrice : 'R989.99'
        },
        {
            shoeType : 'Brogue & Wingtips',
            shoeColour : 'Navy',
            shoeSize : '6',
            quantityInStock: '4',
            shoePrice : 'R989.99'
        }        
    ]

function imgSlide() {
    'use strict';
    var mySlides = document.getElementsByClassName('slides');
    for (var i = 0; i < mySlides.length; i++){
        mySlides[i].style.display = 'none';
    }
    slider++;
    if (slider > mySlides.length) {
        slider = 1;
    }
    mySlides[slider - 1].style.display = 'inline-block';
    setTimeout(imgSlide, 4000);
}

var stockTemplate = document.querySelector('.stockTemplate').innerHTML;
var temp = Handlebars.compile(stockTemplate);

function checkShoes() {
    
    var shoeDrop = document.getElementById('shoeDrop').value;
    var colourDrop = document.getElementById('colourDrop').value;
    var sizeDrop = document.getElementById('sizeDrop').value;
    
    var types = document.getElementsByName('types');
    var colours = document.getElementsByName('colours');
    var sizes = document.getElementsByName('sizes');
    
if(shoeDrop === types[0].textContent && colourDrop === colours[0].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[0]);
    } else if (shoeDrop === types[0].textContent && colourDrop === colours[1].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[1]);
    } else if (shoeDrop === types[0].textContent && colourDrop === colours[2].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[2]);
    } else if (shoeDrop === types[1].textContent && colourDrop === colours[0].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[3]);
    } else if (shoeDrop === types[1].textContent && colourDrop === colours[1].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[4]);
    } else if (shoeDrop === types[1].textContent && colourDrop === colours[2].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[5]);
    } else if (shoeDrop === types[2].textContent && colourDrop === colours[0].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[6]);
    } else if (shoeDrop === types[2].textContent && colourDrop === colours[1].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[7]);
    } else if (shoeDrop === types[2].textContent && colourDrop === colours[2].textContent && sizeDrop === sizes[0].textContent){
        document.getElementById('stockInfo').innerHTML = temp(shoeList[8]);
    } else {
        document.getElementById('stockInfo').innerHTML = '<h1> No stock!!</h1>'
    }
}

var stockAll = document.querySelector('.stockAll').innerHTML;
var template = Handlebars.compile(stockAll);

function showAllStock() {
    document.getElementById('stockInfo').innerHTML = template({dataList: shoeList});
}

var pushHere = [];
function addStock() {
    var newShoe = document.getElementById('newShoe');
    var newColour = document.getElementById('newColour');
    var newSize = document.getElementById('newSize');
    var newQuantity = document.getElementById('newQuantity');
    var newPrice = document.getElementById('newPrice');
    
    var newList =   {
                    shoeType : newShoe.value,
                    shoeColour : newColour.value,
                    shoeSize : newSize.value,
                    quantityInStock: newQuantity.value,
                    shoePrice : newPrice.value
                    }
    
    pushHere = newList;
    shoeList.push(pushHere);
}