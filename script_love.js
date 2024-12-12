function flipCard(card) {
  const cardInner = card.querySelector('.card-inner');
  cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = Math.random() * 100 + 'vw';
  firework.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000); // Удалить через 1 секунду
}

// Генерируем фейерверки каждые 1 секунду
setInterval(createFirework, 1000);

// Инициализация текста при загрузке
document.addEventListener('DOMContentLoaded', () => {
  // Если нужно, можно установить текст по умолчанию, но в данном случае это не требуется
});