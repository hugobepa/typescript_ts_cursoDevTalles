"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const error = (message) => { throw new Error(message); };
    const error2 = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('auxilio');
})();
//# sourceMappingURL=never.js.map