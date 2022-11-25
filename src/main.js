import { nanoid } from "nanoid";
import './style.css';

console.log(nanoid())

const display = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  display.innerText = nanoid()
})