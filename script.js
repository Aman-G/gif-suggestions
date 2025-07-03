// Fetch memes from local JSON
fetch('memes.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('gif-list');
    data.forEach(gif => {
      const card = document.createElement('div');
      card.className = 'gif-card';

      const img = document.createElement('img');
      img.src = gif.gifUrl;
      img.alt = gif.name;

      const name = document.createElement('div');
      name.className = 'gif-name';
      name.textContent = gif.name;

      card.appendChild(img);
      card.appendChild(name);

      // Copy to clipboard on click
      card.addEventListener('click', () => {
        const text = `!redeem ${gif.name.replace(/\s+/g, '_')}`;
        navigator.clipboard.writeText(text).then(() => {
          alert(`Copied: ${text}`);
        });
      });

      container.appendChild(card);
    });
  });
