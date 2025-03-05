/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas:
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.:
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Potion = /** @class */ (function () {
    function Potion(color, volume) {
        this.color = __spreadArray([], color, true);
        this.volume = volume;
    }
    Potion.prototype.mix = function (otherPotion) {
        var totalVolume = this.volume + otherPotion.volume;
        var finalColor = [
            (this.color[0] * this.volume + otherPotion.color[0] * otherPotion.volume) / totalVolume,
            (this.color[1] * this.volume + otherPotion.color[1] * otherPotion.volume) / totalVolume,
            (this.color[2] * this.volume + otherPotion.color[2] * otherPotion.volume) / totalVolume,
        ].map(Math.round);
        return new Potion(finalColor, totalVolume);
    };
    return Potion;
}());
