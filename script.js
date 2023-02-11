"use strict";

function showGraphImage(){
    var img1 = document.getElementById('graph');
    if(img1.style.visibility === 'hidden'){
        img1.style.visibility = 'visible';
       
    }else {
        img1.style.visibility = 'hidden';
    }
}

function showPicsImage(){
    var img1 = document.getElementById('pics');
    if(img1.style.visibility === 'hidden'){
        img1.style.visibility = 'visible';
        document.body.style.backgroundColor = '#f1b335';
    }else {
        img1.style.visibility = 'hidden';
        document.body.style.backgroundColor = '#f2eaf2';
    }
}