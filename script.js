// Funksies vir die rekenaar
function voegBy(getal1, getal2) {
    return getal1 + getal2;
}

function trekAf(getal1, getal2) {
    return getal1 - getal2;
}

function vermenigvuldig(getal1, getal2) {
    return getal1 * getal2;
}

function deel(getal1, getal2) {
    if (getal2 === 0) {
        return "Kan nie deur nul deel nie.";
    }
    return getal1 / getal2;
}

// Funksie om die operasies uit te voer
function reken(operasie) {
    // Kry die waardes van die twee getalle
    let getal1 = parseFloat(document.getElementById('getal1').value);
    let getal2 = parseFloat(document.getElementById('getal2').value);

    let resultaat;
    switch (operasie) {
        case 'voegBy':
            resultaat = voegBy(getal1, getal2);
            break;
        case 'trekAf':
            resultaat = trekAf(getal1, getal2);
            break;
        case 'vermenigvuldig':
            resultaat = vermenigvuldig(getal1, getal2);
            break;
        case 'deel':
            resultaat = deel(getal1, getal2);
            break;
        default:
            resultaat = "Onbekende operasie.";
    }

    // Wys die resultaat op die bladsy
    document.getElementById('resultText').textContent = resultaat;
}
