function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Usa setInterval para que la función updateClock se ejecute cada segundo (1000 ms).
  setInterval(updateClock, 1000);

// Llama a updateClock inmediatamente para que el reloj no tenga retraso inicial.
  updateClock(); // Llamada inicial para que no haya retraso
  