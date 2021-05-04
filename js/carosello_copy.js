var slideVisualizzata;
var vecchiaSlide;
var parentVisualizzato;
var vecchioParent;
var slides = document.getElementsByClassName("carosello__slide");
var parent = document.getElementsByClassName("carosello__parent__slide");
var pallini = document.getElementsByClassName("carosello__pallini");
var timerSlide;



//mostraSlide(0);
setParent(0);

function setSlide(k) {
    mostraSlide(k);
}

for (var il = 0; il < pallini.length; il++) {
    pallini[il].addEventListener("click", function(){
        var pallinis = document.getElementsByClassName("carosello__pallini");
        for(let k = 0; k < pallini.length; k++){
            if(pallinis[k] == this){
                setSlide(k)
            }
        }
    })
}

for (var j = 0; j < parent.length; j++) {
    parent[j].addEventListener("click", function(){
        var parents = document.getElementsByClassName("carosello__parent__slide");
        for(let f = 0; f < parents.length; f++){
            if(parents[f] == this){
                setParent(f)
            }
        }
    })
}


function seguente() {
    if (((slideVisualizzata + 1) + slides.length) % slides.length  > 0) {
        mostraSlide(((slideVisualizzata + 1) + slides.length) % slides.length);
    } else {
        setParent(((parentVisualizzato + 1) + parent.length) % parent.length);
    }
}

function precedente() {
    if (slideVisualizzata > 0) {
        mostraSlide(((slideVisualizzata - 1) + slides.length) % slides.length);
    } else {
        setParent(((parentVisualizzato - 1) + parent.length) % parent.length);
    }
}

function mostraSlide(x) {
    clearTimeout(timerSlide);
    vecchiaSlide = slideVisualizzata;

    if (vecchiaSlide != null) {
        slides[vecchiaSlide].style.display = "none";
    }
  //  var i;
    for (let i = 0; i < pallini.length; i++) {
        pallini[i].classList.remove("attivo");
    }
    slides[x].style.display = "flex";
    pallini[x].classList.toggle("attivo");

    slideVisualizzata = x;

    timerSlide = setTimeout(seguente, 3000);
}

function setParent(k) {
    vecchioParent = parentVisualizzato;
    parentVisualizzato = k;
    clearTimeout(timerSlide);
    mostraSlide(0);

    if (vecchioParent != parentVisualizzato) {
        parent[k].classList.add("selected");
        if (parent[vecchioParent] != null) {
            parent[vecchioParent].classList.remove("selected");
            //    parent[vecchioParent].classList.replace("carosello__parent__slide--active", "carosello__parent__slide");
            //    parent[vecchioParent].classList.toggle("carosello__parent__slide--unselected");
        }
    }
    else {
     //   parent[k].classList.toggle("selected");

    }

    
}

