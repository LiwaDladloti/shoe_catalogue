var slider = 0;
imgSlide();

var shoeList = [
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Brown Shoe',
            shoeSize : 'Size 6',
            quantityInStock : '15',
            shoePrice : 'R1 200.00'
        },
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Black Shoe',
            shoeSize : 'Size 6',
            quantityInStock : '9',
            shoePrice : 'R1 200.00'
        },
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Navy Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '7',
            shoePrice : 'R1 200.00'
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Brown Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '5',
            shoePrice : 'R850.00'
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Black Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '3',
            shoePrice : 'R850.00'
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Navy Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '7',
            shoePrice : 'R850.00'
        },
        {
            shoeType : 'Brogue & Wingtips',
            shoeColour : 'Brown Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '7',
            shoePrice : 'R989.99'
        },
        {
            shoeType : 'Brogue & Wingtips',
            shoeColour : 'Black Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '1',
            shoePrice : 'R989.99'
        },
        {
            shoeType : 'Brogue & Wingtips',
            shoeColour : 'Navy Shoe',
            shoeSize : 'Size 6',
            quantityInStock: '4',
            shoePrice : 'R989.99'
        }
    ];

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
var pushToThis = [];
    
    for(var i = 0; i < shoeList.length; i++) {
        var shoeValue = shoeList[i];
        if(shoeDrop === shoeValue.shoeType && colourDrop === shoeValue.shoeColour && sizeDrop === shoeValue.shoeSize) {
            pushToThis.push(shoeList[i]);
            document.getElementById('stockInfo').innerHTML = 
            temp({newShoe: pushToThis})
        }
    }
}

function showAllStock() {
    document.getElementById('stockInfo').innerHTML = temp({newShoe: shoeList});
}

function stockUpdate() {
    var stockDiv = document.getElementById('addingStock');       stockDiv.style.display = 'block';
    alert('You must be a staff member to enter this section!')
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
                    };
    
    pushHere = newList;
    shoeList.push(pushHere);
}