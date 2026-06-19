import { concatenation } from './concatenation';
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const input = document.querySelector('input');
    if (button && input) {
        button.addEventListener('click', () => {
            if (input.value.trim().length > 0) {
                concatenation(input.value, 'hello!');
            }
        });
    }
});
//# sourceMappingURL=index.js.map