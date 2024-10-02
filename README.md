Utilizamos setInterval para actualizar el reloj cada segundo, obteniendo la hora actual con el objeto Date().
PASO A PASO ARCHIVO JS:

function updateClock(): Esta función es la que actualiza los valores de las horas, minutos y segundos en el HTML.

const now = new Date();:

Creamos un nuevo objeto Date(), que contiene la fecha y hora actual del sistema en el momento en que se llama la función.
Este objeto tiene métodos como .getHours(), .getMinutes() y .getSeconds() que extraen las partes de la hora actual.
const hours = String(now.getHours()).padStart(2, '0');:

now.getHours() devuelve la hora actual (en formato de 24 horas).
String(...).padStart(2, '0'): Convierte el número de horas en una cadena de texto y asegura que siempre tenga dos dígitos. Si la hora es menor a 10, como "8", lo convertirá a "08" agregando un 0 delante.

Actualización del DOM:

document.getElementById('hours') selecciona el elemento <span id="hours"> en el HTML.
textContent = hours reemplaza el contenido de ese elemento con el valor de hours, que hemos calculado previamente.
Este proceso también se realiza para los minutos y segundos.
setInterval(updateClock, 1000);:

setInterval() es una función de JavaScript que ejecuta la función updateClock repetidamente cada cierto intervalo de tiempo. En este caso, 1000 milisegundos (1 segundo).
Esto asegura que el reloj se actualice cada segundo.
updateClock();:

Este es un truco que permite que el reloj se actualice inmediatamente cuando se carga la página.
Sin esta línea, el reloj empezaría vacío o con valores incorrectos durante el primer segundo, porque el setInterval() espera 1000 ms antes de la primera ejecución.
