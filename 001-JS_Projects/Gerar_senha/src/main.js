import { Password } from "./modules/Password";
import './assets/css/style.css';


const fieldPassword = document.getElementById('password');
const button = document.getElementById('gerar');
button.addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const numeros = document.getElementById('num').checked;
    const maiusculas = document.getElementById('mai').checked;
    const minusculas = document.getElementById('min').checked;
    const simbolos = document.getElementById('sim').checked;
    
    const password = new Password(amount, minusculas, maiusculas, simbolos, numeros)
    password.create()
    fieldPassword.innerText = password.passwordFormated()
});
