import Character from "./Character"

export default class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon", 100, 40)
    }

    calcDistance(dist) {
        if(dist >= 1 && dist <= 10) {
            return 1 - (0.1 * (dist - 1))
        }
    }

    setParams(dist, stoned = false) {
        this.dist = dist;
        this.stoned = stoned;
        this.attackBase = this.attack;
    }

    get attack() {
        const distanceModificator = this.calcDistance(this.dist)
        if(this.stoned) {
            const attackModificator = (this.attackBase * distanceModificator) - (Math.round(Math.log2(this.dist)) * 5);
            return attackModificator > 0 ? attackModificator : 0;
        } else {
            return this.attackBase * distanceModificator;
        }
    }

    set attack(value) {
        this.attackBase = value;
    }
}