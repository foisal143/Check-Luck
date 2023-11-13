const emojis = [
  '😀',
  ' 😆 ',
  ' 🥰 ',
  ' 😘',
  ' 🖕 ',
  ' 🥺 ',
  ' 🤬 ',
  ' 😡 ',
  ' 🤪 ',
  ' 😜 ',
  ' 😛 ',
];

document.getElementById('btnCheck').addEventListener('click', () => {
  const emojiContainer = document.getElementById('emojiContainer');
  const index = Math.floor(Math.random() * emojis.length);
  emojiContainer.innerHTML = emojis[index];
  setTimeout(() => {
    emojiContainer.innerHTML = '';
  }, 2000);
});
