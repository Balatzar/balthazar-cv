var temp = document.querySelector(".html");
var navigation = {
    index: ".html",
    competences: ".js",
    formations: ".json",
    experiences: ".scss",
    Contact: ".contact",
    Portfolio: ".portfolio",
    CV: ".html"
};

function clickFile(li) {
    temp.style.display = "none";
    var stock = li.innerHTML;
    var query, title = "";
    var stop, whatLi, j = 0;
    
    while (stock[j]) {
        if (stock[j] == '<') {
            ++whatLi;
        }
        ++j;
    }
    
    if (whatLi) {
        for (var i = 0; stock[i] != '<'; i++) {
             query += stock[i];
         }
    
        for (var i = 0; i < stock.length; i++) {
            if (stock[i] == '<' || stock[i] == '>')
                stop++;
            else if ((stock[i] != '<' && stop == 0) || stop == 2)
                title += stock[i];
        }
    } else {
        for (var i = 0; i < stock.length; i++) {
            title += stock[i];
            query += stock[i];
        }
    }
    
    temp = document.querySelector(navigation[query]);
    temp.style.display = "block";
    document.querySelector("h1").innerHTML = title;
}