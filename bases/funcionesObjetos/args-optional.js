"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('nombre requerido');
        }
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('tony', 'stark');
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map