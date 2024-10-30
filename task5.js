class ElectroTehnic {
    constructor (name, on) {
        this.name = name;
        this.on = on;
        if (this.on) {
            console.log(`${name} в сети`);
        } else {
            console.log(`${name} не в сети`);
        }
    }
}

class Consumption extends ElectroTehnic {
    function (power) {
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
}

const computer2 = new Consumption('компьютер2', true,)
const desk_lamp2 = new Consumption('настольная лампа2', true)
const vacuum_cleaner2 = new Consumption('пылесос2', false)

computer2.function(56)
desk_lamp2.function(4)
vacuum_cleaner2.function(70)