"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName}  ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clarck', 'Joseph', 'kent');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map