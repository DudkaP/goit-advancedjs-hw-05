import { concatenation } from './concatenation';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button') as HTMLButtonElement;
  const input = document.querySelector('input') as HTMLInputElement;

  if (button && input) {
    button.addEventListener('click', () => {
      if (input.value.trim().length > 0) {
        concatenation(input.value, 'hello!');
      }
    });
  }
});
