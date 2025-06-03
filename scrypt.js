// Trade generator logic (keep your existing code if you have any)
document.getElementById('generateBtn').addEventListener('click', function() {
    const tokens = ['BTC', 'ETH', 'DOGE', 'SOL', 'XRP', 'SHIB', 'ADA', 'AVAX'];
    const directions = ['LONG', 'SHORT'];
    const comments = [
        "This trade has a 50/50 chance. Just like everything else in crypto.",
        "If this works, you're a genius. If not, blame the algorithm.",
        "Guaranteed profit* (*not guaranteed at all)",
        "Even a broken clock is right twice a day. This might be one of those times.",
        "Risk management? Never heard of it. 100x or bust!"
    ];
    
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const randomLeverage = Math.floor(Math.random() * 50) + 2;
    const randomProfit = (Math.random() * 100).toFixed(2);
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    
    document.getElementById('token').textContent = randomToken;
    document.getElementById('direction').textContent = randomDirection;
    document.getElementById('leverage').textContent = randomLeverage + 'x';
    document.getElementById('profit').textContent = randomProfit + '%';
    document.getElementById('comment').textContent = randomComment;
    
    document.getElementById('resultBox').classList.remove('hidden');
    document.getElementById('clickSound').play();
});

// Share button functionality
document.getElementById('shareBtn').addEventListener('click', function() {
    alert("Trade copied to clipboard!\n\nPro tip: Don't actually use this for trading.");
});

// Notification system
setTimeout(showNotification, 20000);
setInterval(showNotification, 180000);

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        if (notification.classList.contains('show')) {
            notification.classList.remove('show');
        }
    }, 8000);
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('notification').classList.remove('show');
});

document.getElementById('joinBtn').addEventListener('click', () => {
    window.open('https://t.me/yeetex_tools', '_blank');
    document.getElementById('notification').classList.remove('show');
});

document.getElementById('joinBtn').addEventListener('mouseenter', () => {
    document.getElementById('clickSound').play();
});
