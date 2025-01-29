function updateClock() {
    const now = new Date();
    
    // Convert UTC time to IST (GMT+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
    const istTime = new Date(now.getTime() + istOffset);

    const hours = String(istTime.getUTCHours()).padStart(2, '0');
    const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(istTime.getUTCSeconds()).padStart(2, '0');

    const day = istTime.toLocaleDateString('en-US', { weekday: 'long' });
    const date = istTime.toLocaleDateString('en-US', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} IST`;
    document.getElementById('date').textContent = `${day}, ${date}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to avoid delay
