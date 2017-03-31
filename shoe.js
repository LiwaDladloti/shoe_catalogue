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
            shoePrice : 'R1 200.00'
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
    } else {
        document.getElementById('stockInfo').innerHTML = '<h1> No stock!!</h1>'
    }
}

var stockAll = document.querySelector('.stockAll').innerHTML;
var template = Handlebars.compile(stockAll);

function showAllStock() {
    document.getElementById('stockInfo').innerHTML = template({dataList: shoeList});
}