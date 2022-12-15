$(document).ready(function () {
    let num1 = $("#my_links li:has(a)")
    num1.css('color', 'blue')
    num1.css('fontSize', '25px')

    let num2 = $("#my_links a[href^='documents']")
    num2.css('color', 'yellow')
   

    tablet = $("#moto_table tr:even  td:last-child")
    
    tablet.css('color', 'aqua')
})