"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    //*let myFunction: ()=> number;
    //*let myFunction: (y:number,z:number)=> number;
    //? let myFunction: ()=> void;
    //* myFunction = 10;
    //! console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('hugo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-file.js.map