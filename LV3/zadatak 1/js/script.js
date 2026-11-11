const rezultat = document.getElementById("rezultat");

const a = document.getElementById("a");
const b = document.getElementById("b");

const zbroji = document.getElementById("zbroji");
const oduzmi = document.getElementById("oduzmi");
const pomnozi = document.getElementById("pomnozi");
const podijeli = document.getElementById("podijeli");

function isNumber(value){
    return !isNaN(value) && value.trim() !== "";
}

zbroji.addEventListener("click", () => {
    console.log("a = " + a.value);
    console.log("b = " + b.value);
    if(!isNumber(a.value) || !isNumber(b.value)){
        rezultat.textContent = "Unesite valjane brojeve!";
        rezultat.classList.add("error");
        return;
    }
    rezultat.classList.remove("error");
    rezultat.textContent = Number(a.value) + Number(b.value);
});

oduzmi.addEventListener("click", () => {
    console.log("a = " + a.value);
    console.log("b = " + b.value);
    if(!isNumber(a.value) || !isNumber(b.value)){
        rezultat.textContent = "Unesite valjane brojeve!";
        rezultat.classList.add("error");
        return;
    }
    rezultat.classList.remove("error");
    rezultat.textContent = Number(a.value) - Number(b.value);
});

pomnozi.addEventListener("click", () => {
    console.log("a = " + a.value);
    console.log("b = " + b.value);
    if(!isNumber(a.value) || !isNumber(b.value)){
        rezultat.textContent = "Unesite valjane brojeve!";
        rezultat.classList.add("error");
        return;
    }
    rezultat.classList.remove("error");
    rezultat.textContent = Number(a.value) * Number(b.value);
});

podijeli.addEventListener("click", () => {
    console.log("a = " + a.value);
    console.log("b = " + b.value);
    if(!isNumber(a.value) || !isNumber(b.value)){
        rezultat.textContent = "Unesite valjane brojeve!";
        rezultat.classList.add("error");
        return;
    }
    if(a.value == 0 || b.value == 0){
        rezultat.textContent = "Nije podržano dijeljenje s nulom!";
        rezultat.classList.add("error");
        return;
    }
    rezultat.classList.remove("error");
    rezultat.textContent = Number(a.value) / Number(b.value);
});