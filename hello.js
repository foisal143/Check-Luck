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
  document.getElementById('btnCheck').setAttribute('disabled', true);
  setTimeout(() => {
    emojiContainer.innerHTML = '';
    document.getElementById('btnCheck').removeAttribute('disabled');
  }, 2000);
});
