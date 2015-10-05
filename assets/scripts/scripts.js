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
    
    for (var i = 0; stock[i] != '<'; i++) {
        query += stock[i];
    }
    temp = document.querySelector(navigation[query]);
    temp.style.display = "block";
}