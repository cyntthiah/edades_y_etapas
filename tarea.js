var x = prompt("Ingrese su edad");

if (x % 1 == 0) {
    if (isNaN(x)) {

        alert("Favor ingrese un numero valido");

    }
    else {
        if (0 < x && x < 3) { alert("Is a toddler"); }
        if (3 <= x && x < 5) { alert("Is a Preschool"); }
        if (5 <= x && x < 12) { alert("Is a Gradeschooler"); }
        if (12 <= x && x < 18) { alert("Is a Teenager"); }
        if (18 <= x && x < 21) { alert("Is a Young adult"); }
    }
}
else {
    alert("Favor ingresar un entero valido")
}

