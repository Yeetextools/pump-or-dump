const tokens = [
  'BTC', 'ETH', 'SOL', 'DOGE', 'XRP', 'ADA', 'AVAX', 'MATIC', 'SHIB', 'LINK',
  'ARB', 'OP', 'DOT', 'PEPE', 'TON', 'TRX', 'APT', 'INJ', 'RNDR', 'TIA',
  'NEAR', 'WIF', 'SEI', 'SUI', 'FLOKI'
];

const directions = ['🚀 LONG', '🕳️ SHORT'];

const comments = [
  "Trust the coin. Trust the click.",
  "Looks solid... said no one ever.",
  "YOLO’d harder than ever before.",
  "Betting it all on vibes 🧘",
  "It’s either Lambo or ramen noodles tonight.",
  "This is the way. Probably.",
  "Use leverage responsibly. Just kidding, go 100x.",
  "Let the coin flip decide your fate.",
  "Mama didn’t raise no risk manager.",
  "Perfect entry... for liquidation!",
  "Chart? I barely know her.",
  "Exit strategy? Nah.",
  "Technical analysis? Never heard of it.",
  "Feeling lucky, punk?",
  "The token chose you.",
  "Fully degenerate. Fully committed.",
  "This signal was blessed by Satoshi himself.",
  "Red candles = buying opportunity?",
  "WAGMI or NGMI — no in-between.",
  "Imagine not taking this trade 🤡"
];

document.getElementById('generateBtn').addEventListener('click', () => {
  const token = tokens[Math.floor(Math.random() * tokens.length)];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  const leverage = ${getRandomInt(3, 100)}x;
  const profit = $${getRandomInt(1, 1000)};
  const comment = comments[Math.floor(Math.random() * comments.length)];

  document.getElementById('token').textContent = token;
  document.getElementById('direction').textContent = direction;
  document.getElementById('leverage').textContent = leverage;
  document.getElementById('profit').textContent = profit;
  document.getElementById('comment').textContent = comment;

  document.getElementById('resultBox').classList.remove('hidden');

  const sound = document.getElementById('clickSound');
  sound.currentTime = 0;
  sound.play();
});

document.getElementById('shareBtn').addEventListener('click', () => {
  const token = document.getElementById('token').textContent;
  const direction = document.getElementById('direction').textContent;
  const leverage = document.getElementById('leverage').textContent;
  const profit = document.getElementById('profit').textContent;
  const comment = document.getElementById('comment').textContent;

  const text = 💣 Pump or Dump Trade:\nToken: ${token}\nDirection: ${direction}\nLeverage: ${leverage}\nTarget: ${profit}\nComment: ${comment};
  
  navigator.clipboard.writeText(text).then(() => {
    alert('Trade copied to clipboard! Paste it wherever you want 🚀');
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
