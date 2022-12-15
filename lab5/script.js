
function Zoom(n) {
    if (n == 0) {
        mage.hidden = 1;
    }
    else {
        image.src = "k" + n + ".jpg";
        image.hidden = 0;
    }
}

function makeBigg(n) {
    n.width = "300";
    n.height="300";
}

function makeSmall(n) {
    n.width = "150";
    n.height="150";
}

function Show(n) {
    n.style.visibility = "visible"    
}
function Hide(n) {
    n.style.visibility = "hidden"
}
function mn(a,b) 
{
   
    document.getElementsByName("res").value=a+b;
}