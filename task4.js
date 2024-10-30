function ChekElectro(name, on) {
    this.name = name;
    this.on = on;
    if (this.on) {
        console.log(`${name} в сети`);
    }
    else {
        console.log(`${name} не в сети`);
    }
}

ChekElectro.prototype.electricConsumption = function (power) {
    if (this.on) {
        if (power > 50) {
            console.log(`${this.name} потребляет много энергии`);
        }
        else {
            console.log(`${this.name} потребляет мало энергии`);
        }
    }
    else {
        console.log(`включите ${this.name} в сеть`);
    }
}

const computer = new ChekElectro('компьютер', true)
const desk_lamp = new ChekElectro('настольная лампа', true)
const vacuum_cleaner = new ChekElectro('пылесос', false)


computer.electricConsumption(68)
desk_lamp.electricConsumption(7)
vacuum_cleaner.electricConsumption(55)