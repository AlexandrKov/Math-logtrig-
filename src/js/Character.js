export default class Character {
    constructor(name, type, attack, defence) {
        if(name.length < 2 || name.length > 10) {
            throw new Error("Имя не меньше 2 символов и не больше 10");
        }
        if(typeof name !== "string") {
            throw new Error("Имя должно быть строкой");
        }
        const players = ["Magician", "Daemon"];
        if(!players.includes(type)) {
            throw new Error("Такого персонажа нет");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attackBase = attack;
        this.defenceBase = defence;
        this.stoned = false;
        this.dist = 1;
    }
}