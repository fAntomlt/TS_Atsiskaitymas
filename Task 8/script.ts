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
    const meterInput = document.querySelector("#meter")
    const outputDiv = document.querySelector("#output")

    if (!meterInput || !outputDiv) return;

    meterInput.addEventListener("input", function () {
        const meters = parseFloat((meterInput as HTMLInputElement).value)
        if(isNaN(meters)){
            outputDiv.textContent = "";
            return;
        }
        while(outputDiv.firstChild){
            outputDiv.removeChild(outputDiv.firstChild)
        }

        const cm: number = meters * 100
        const inches: number = meters * 39.37
        const feet: number = meters * 3.281
        const miles: number = meters / 1609
        const yards: number = meters * 1.094

        const cmResult = document.createElement("p")
        cmResult.textContent = `Centimetrai (cm): ${cm.toFixed(2)}`;
        outputDiv.appendChild(cmResult)
  
        const inchesResult = document.createElement("p")
        inchesResult.textContent = `Coliai (in): ${inches.toFixed(2)}`;
        outputDiv.appendChild(inchesResult)
  
        const feetResult = document.createElement("p")
        feetResult.textContent = `Pedos (ft): ${feet.toFixed(2)}`;
        outputDiv.appendChild(feetResult)
  
        const milesResult = document.createElement("p")
        milesResult.textContent = `Mylios (mi): ${miles.toFixed(6)}`;
        outputDiv.appendChild(milesResult)
  
        const yardsResult = document.createElement("p")
        yardsResult.textContent = `Jardai (yd): ${yards.toFixed(2)}`;
        outputDiv.appendChild(yardsResult)
    });
};