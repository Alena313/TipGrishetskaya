function calc(form) {

}

function cost(n) {

    // if(free.isChecked)
    // {
    //     (alert("hjb"))
    //     if(document.getElementsById("small1").isChecked){

    //   document.getElementsByName("hidden").values[0].value=document.getElementsById("small1").values[0].value;
    //   alert(document.getElementsByName("hidden").values[0].value)
    //  }
    // }
    let sum = 0;
    var el = document.getElementById("price" + n);
    var rates = document.getElementsByName("free" + n);
    for (var i = 0; i < rates.length; i++) {
        if (rates[i].checked) {


            el.value = rates[i].value;
        }

    }


}
function ewq() {
    document.getElementById("finally").value = " ";
    let count = 0;
    if (document.getElementById("big1").checked) {
        count++;
    }
    if (document.getElementById("big2").checked) {
        count++;
    }
    if (document.getElementById("big3").checked) {
        count++;
    }
    if (document.getElementById("big4").checked) {
        count++;
    }
    if (document.getElementById("big5").checked) {
        count++;
    }

    if (count >= 2) {
        document.getElementById("finally").value = "в ваш заказ добавлен бесплатный напиток"
    }

    let sum = 0;
    var el;
    for (n = 1; n < 5; n++) {
        el = document.getElementById("price" + n);
        sum += +(el.value)
    }

    document.getElementById("finally").value += "\n" + "Сумма заказа=" + (sum);
    let markup = 0;
    switch (document.getElementById("sel").value) {
        case "first":
            markup = sum * 0.05;
            break;
    }
    if (count >= 3) { markup = 0; }
    sum = sum + markup;
    document.getElementById("finally").value += "\n" + "Сумма с доставкой=" + (sum);


}