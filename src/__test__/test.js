import Character from "../js/Character";
import Daemon from "../js/Daemon";

test("Проверка на подходящюю дистанцию", () => {
    const pers = new Daemon("alex");
    pers.setParams(5, false);
    expect(pers).toEqual({
        name: "alex",
        type: "Daemon",
        health: 100,
        level: 1,
        attackBase: 60,
        defenceBase: 40,
        stoned: false,
        dist: 5
    })
})

test("Проверка на не подходящюю дистанцию", () => {
    const pers = new Daemon("alex");
    pers.setParams(11, false);
    expect(pers).toEqual({
        name: "alex",
        type: "Daemon",
        health: 100,
        level: 1,
        attackBase: NaN,
        defenceBase: 40,
        stoned: false,
        dist: 11
    })
})

test("Проверка на дурман", () => {
    const pers = new Daemon("alex");
    pers.setParams(5, true);
    expect(pers).toEqual({
        name: "alex",
        type: "Daemon",
        health: 100,
        level: 1,
        attackBase: 50,
        defenceBase: 40,
        stoned: true,
        dist: 5
    })
})

test("Имя(строка) персоанажа", () => {
    expect(() => new Character(7, "Bowman")).toThrow()
})

test("Проверка на кол-во символов(2)", () => {
    expect(() => new Character("c", "Bowman")).toThrow()
})

test("Проверка на тип", () => {
    expect(() => new Character("Oleg", "BoBo")).toThrow()
})

test("Проверка на кол-во символов(10)", () => {
    expect(() => new Character("abcdifjklmnop", "Bowman")).toThrow()
})