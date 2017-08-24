var myH1 = document.querySelector('h1');
myH1.textContent = 'Javascript hack';

var myP = document.querySelector('p');
myP.onclick = function()
{
    alert('Zaraz wybuchnie bomba');
};

//komentarz

var myIMG = document.querySelector('img');
myIMG.onclick = function()
{
    var mySRC = myIMG.getAttribute("src")
    
    if(mySRC == 'images/kalistenika.jpg')
        {
            myIMG.setAttribute('src','images/kalistenika2.jpg');
        }
    else
        {
            myIMG.setAttribute('src','images/kalistenika.jpg');
        }
}

var myBut = document.querySelector('button');
myBut.onclick = function() 
{
    myH1.textContent = 'Plamplinka';
}