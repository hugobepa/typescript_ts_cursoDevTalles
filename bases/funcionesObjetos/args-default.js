"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (!firstName) {
            throw new Error('nombre requerido');
        }
        if (upper) {
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastName'}`;
        }
    };
    const name = fullName('tony', 'stark');
    console.log(name);
})();
//# sourceMappingURL=args-default.js.map