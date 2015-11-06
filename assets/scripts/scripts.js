var temp = document.querySelector(".html");
var section = document.querySelectorAll(".section");
var modal = document.querySelector(".settings");
var navigation = {
    index: ".html",
    competences: ".js",
    formations: ".json",
    experiences: ".scss",
    Contact: ".contact",
    Portfolio: ".portfolio",
    CV: ".html"
};

function modalSettings() {
  if (modal.style.display == "none") {
    modal.setAttribute("style", "display: block");
  } else {
    modal.setAttribute("style", "display: none");
  }
}

function closeMain() {
  var modal = document.querySelector(".prez");
  modal.style.display = "none";
}

function changeFont(fs) {
  var size = fs[4]+fs[5];
  var p = document.querySelectorAll('.code p')
  var i = 0
  while (i < p.length) {
    var temp = p[i];
    temp.style.fontSize = size + "px";
    i++;
  }
  modal.setAttribute("style", "display: none");
}

function clickFile(li) {
    temp.style.display = "none";
    var stock = li.innerHTML;
    var query = "";
    var title = "";
    var stop = 0;
    var whatLi = 0;
    var j = 0;

    while(stock[j]) {
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

function changeMode() {
  var i = 0;
  while (i < section.length) {
    if (section[i].className[0] == 'c' && section[i].className[1] == '-'){
      section[i].className = section[i].className.replace(/c-/, "")
    } else {
      section[i].className = "c-" + section[i].className;
      section[i].style.display = "none";
    }
    i++;
  }
  modal.setAttribute("style", "display: none");
  var page = document.getElementById("title").textContent;
  var pageTrim = "";
  var i = 0;
  while (page[i] != '.')
    i++;
  i++;
  while (page[i]) {
    pageTrim += page[i];
    i++;
  }
  var show = document.querySelector('.' + pageTrim);
  show.style.display = "block";
}
