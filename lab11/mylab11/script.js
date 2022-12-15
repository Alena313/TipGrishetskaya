function ewq() {
    let lit = $("#my_links > li:has(a)")
    lit.css('color', 'red')

    let at = $("div#mylinks > a[href^='documents']")
    at.css('color', 'green')

    tablet = $("table#moto_table tr:odd  td:last-child")
    tablet.css('color', 'blue')
}