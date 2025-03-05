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

class Potion{
  color: [number, number, number];
  volume: number

  constructor(color: [number, number, number], volume: number) {
    this.color = [...color]
    this.volume = volume
  }

  mix(otherPotion: Potion): Potion {
    const totalVolume = this.volume + otherPotion.volume
    const finalColor: [number, number, number] = [
      (this.color[0] * this.volume + otherPotion.color[0] * otherPotion.volume) / totalVolume, 
      (this.color[1] * this.volume + otherPotion.color[1] * otherPotion.volume) / totalVolume, 
      (this.color[2] * this.volume + otherPotion.color[2] * otherPotion.volume) / totalVolume,
    ].map(Math.round) as [number, number, number]
    return new Potion(finalColor, totalVolume)
  }
}