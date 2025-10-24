"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    //array
    const number = [1, 2, 3, 4, 5, '6', 7, 8];
    const number2 = [1, 2, 3, 4, 5, '6', 7, 8];
    const number3 = [1, 2, 3, 4, 5, 7, 8];
    const villain = ['omega rojo', 'dormammu', 'duende verde'];
    villain.forEach(e => { console.log(e.toLocaleUpperCase()); });
    //tuples
    const hero = ['Dr strange', 100, true];
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
//# sourceMappingURL=arrayTupla.js.map