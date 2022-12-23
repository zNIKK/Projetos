import Password from "./modules/Password";
import './assets/css/style.css';

fieldPassword = document.getElementById('password');

fieldPassword.innerText = Password.create()
