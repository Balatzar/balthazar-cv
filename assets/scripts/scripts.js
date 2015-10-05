var temp = document.querySelector(".html");
var navigation = {
    index: ".html",
    competences: ".js",
    formations: ".json",
    experiences: ".scss"
};

function clicko(li) {
    temp.style.display = "none";
    var stock = li.innerHTML;
    var query = "";
    var title = "";
    var stop = 0;
    
    for (var i = 0; stock[i] != '<'; i++) {
        query += stock[i];
    }
    
    for (var i = 0; i < stock.length; i++) {
        if (stock[i] == '<' || stock[i] == '>')
            stop++;
        else if ((stock[i] != '<' && stop == 0) || stop == 2)
            title += stock[i];
    }
    
    temp = document.querySelector(navigation[query]);
    temp.style.display = "block";
    document.querySelector("h1").innerHTML = title;
}