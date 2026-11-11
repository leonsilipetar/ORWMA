const dodajBtn  = document.getElementById('dodaj');
const unos = document.getElementById('unos');
const lista = document.getElementById('lista');

dodajBtn.addEventListener('click', function() {
    const zadatak = unos.value.trim();
    if (zadatak) {
        console.log(zadatak);

        const stavka = document.createElement('li');
        stavka.classList.add('zadatak');

        const tekst = document.createElement('span');
        tekst.textContent = zadatak;
        stavka.appendChild(tekst);

        stavka.addEventListener('click', function() {
            stavka.classList.toggle('gotovo');
        });

        const obrisiBtn = document.createElement('button');
        obrisiBtn.textContent = 'X';
        obrisiBtn.classList.add('obrisi');
        obrisiBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            stavka.remove();
        });
        stavka.appendChild(obrisiBtn);

        lista.appendChild(stavka);
        unos.value = '';
    }
});