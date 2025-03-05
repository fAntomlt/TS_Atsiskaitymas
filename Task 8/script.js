/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
window.onload = function () {
    var meterInput = document.querySelector("#meter");
    var outputDiv = document.querySelector("#output");
    if (!meterInput || !outputDiv)
        return;
    meterInput.addEventListener("input", function () {
        var meters = parseFloat(meterInput.value);
        if (isNaN(meters)) {
            outputDiv.textContent = "";
            return;
        }
        while (outputDiv.firstChild) {
            outputDiv.removeChild(outputDiv.firstChild);
        }
        var cm = meters * 100;
        var inches = meters * 39.37;
        var feet = meters * 3.281;
        var miles = meters / 1609;
        var yards = meters * 1.094;
        var cmResult = document.createElement("p");
        cmResult.textContent = "Centimetrai (cm): ".concat(cm.toFixed(2));
        outputDiv.appendChild(cmResult);
        var inchesResult = document.createElement("p");
        inchesResult.textContent = "Coliai (in): ".concat(inches.toFixed(2));
        outputDiv.appendChild(inchesResult);
        var feetResult = document.createElement("p");
        feetResult.textContent = "Pedos (ft): ".concat(feet.toFixed(2));
        outputDiv.appendChild(feetResult);
        var milesResult = document.createElement("p");
        milesResult.textContent = "Mylios (mi): ".concat(miles.toFixed(6));
        outputDiv.appendChild(milesResult);
        var yardsResult = document.createElement("p");
        yardsResult.textContent = "Jardai (yd): ".concat(yards.toFixed(2));
        outputDiv.appendChild(yardsResult);
    });
};
