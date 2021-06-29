import { dataForm } from "./modules/form"
import { showWeather } from "./modules/showWeather"


// Display user form
dataForm()

// Add button action to show weather
const btn = document.getElementById('formBtn')

btn.onclick = showWeather