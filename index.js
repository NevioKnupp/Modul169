const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const karten = [
  {
    name: 'Ascent',
    description: 'A peaceful town in Italy that has recently become a battleground.',
    image: 'ascent.jpg',
    mapLayout: 'ascent_layout.jpg'
  },
  {
    name: 'Bind',
    description: 'A Moroccan city where the tension between Kingdom and ARA has reached a boiling point.',
    image: 'bind.jpg',
    mapLayout: 'bind_layout.jpg'
  },
  {
    name: 'Breeze',
    description: 'An island paradise that hides a dark secret.',
    image: 'breeze.jpg',
    mapLayout: 'breeze_layout.jpg'
  }
];
const agenten = [
  {
    name: 'Jett',
    description: 'A nimble duelist who overwhelms enemies with her mobility and surprise.',
    image: 'jett.jpg',
    abilities: ['Cloudburst', 'Updraft', 'Tailwind', 'Blade Storm']
  },
  {
    name: 'Sage',
    description: 'A supportive sentinel who can heal and revive her allies.',
    image: 'sage.jpg',
    abilities: ['Barrier Orb', 'Slow Orb', 'Healing Orb', 'Resurrection']
  },
  {
    name: 'Killjoy',
    description: 'A tech-savvy sentinel who locks down areas and stalls enemies with her inventions.',
    image: 'killjoy.jpg',
    abilities: ['Alarmbot', 'Turret', 'Nanoswarm', 'Lockdown']
  }
];
const waffen = [
  {
    name: 'Vandal',
    type: 'Rifle',
    description: 'A high-powered rifle that can take down enemies with just a few well-placed shots.',
    image: 'vandal.jpg',
    price: 2900
  },
  {
    name: 'Operator',
    type: 'Sniper',
    description: 'A long-range rifle that can eliminate enemies from afar, but requires careful aim and positioning.',
    image: 'operator.jpg',
    price: 4700
  },
  {
    name: 'Spectre',
    type: 'SMG',
    description: 'A fast-firing submachine gun that is deadly at close range.',
    image: 'spectre.jpg',
    price: 1600
  }
];


app.get('/', (req, res) => {
  res.send('Willkommen bei der Valorant Webseite!');
});

app.get('/agenten', (req, res) => {
  let agentenHtml = '<h1>Alle Agenten in Valorant</h1>';
  agenten.forEach(agent => {
    agentenHtml += `
      <div>
        <h2>${agent.name}</h2>
        <img src="${agent.image}" alt="${agent.name}">
        <p>${agent.description}</p>
      </div>
    `;
  });
  res.send(agentenHtml);
});

app.get('/karten', (req, res) => {
  let kartenHtml = '<h1>Alle Karten in Valorant</h1>';
  karten.forEach(karte => {
    kartenHtml += `
      <div>
        <h2>${karte.name}</h2>
        <img src="${karte.image}" alt="${karte.name}">
        <p>${karte.description}</p>
        <img src="${karte.mapLayout}" alt="${karte.name} Layout">
      </div>
    `;
  });
  res.send(kartenHtml);
});

app.get('/waffen', (req, res) => {
  let waffenHtml = '<h1>Alle Waffen in Valorant</h1>';
  waffen.forEach(waffe => {
    waffenHtml += `
      <div>
        <h2>${waffe.name}</h2>
        <img src="${waffe.image}" alt="${waffe.name}">
        <p><strong>Typ:</strong> ${waffe.type}</p>
        <p><strong>Preis:</strong> ${waffe.price} Credits</p>
      </div>
    `;
  });
  res.send(waffenHtml);
});

app.listen(PORT, () => {
  console.log(`Die Valorant Webseite ist auf Port ${PORT} verfügbar.`);
});
