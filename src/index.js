import dataForm from './modules/form';
import request from './modules/apiRequest';

dataForm();
const btn = document.getElementById('formBtn');
btn.onclick = request;