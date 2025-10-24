"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('tony', 'stark');
    console.log(name);
})();
//# sourceMappingURL=args-required.js.map