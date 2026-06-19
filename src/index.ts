import { concatenation } from './concatenation';

const button = document.getElementById('concat-btn') as HTMLButtonElement;

button.addEventListener('click', () => {
  concatenation('John', 'Doe');
});
