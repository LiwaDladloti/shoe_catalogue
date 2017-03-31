var slider = 0;
imgSlide();


var shoeList = [
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Brown',
            shoeSize : '6',
            quantityInStock : '15',
            shoePrice : 'R1 200.00',
        },
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Black',
            shoeSize : '6',
            quantityInStock : '9',
            shoePrice : 'R1 200.00',
        },
        {
            shoeType : 'Monk Strap',
            shoeColour : 'Navy',
            shoeSize : '6',
            quantityInStock: '7',
            shoePrice : 'R1 200.00',
        },
        {
            shoeType : 'Loafer',
            shoeColour : 'Brown',
            shoeSize : '6',
            quantityInStock: '5',
            shoePrice : 'R1 200.00',
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
    console.log(types)
    var colours = document.getElementsByName('colours').selectedIndex;
    var sizes = document.getElementsByName('sizes').selectedIndex;
    
    //var data = temp({stockList: shoeList});
    //console.log(data)
    
    var emptyArray = [];
    for(var i=0; i < shoeList.length; i++){
        if(shoeList[i].shoeType === types[0].textContent){
            emptyArray.push(shoeList[i]);
        }
    }
    
    document.getElementById('stockInfo').innerHTML = temp({stockList: emptyArray});;
}
