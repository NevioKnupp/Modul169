const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const anime = [
  {
    name: 'Naruto',
    description: 'Follow the journey of Naruto Uzumaki as he trains to become a powerful ninja.',
    image: 'naruto.jpg',
    episodes: 720
  },
  {
    name: 'Attack on Titan',
    description: 'Witness the battle between humans and giant humanoid creatures known as Titans.',
    image: 'attack_on_titan.jpg',
    episodes: 88
  },
  {
    name: 'Death Note',
    description: 'Experience the thrilling cat-and-mouse game between a high school student and a supernatural notebook that can kill anyone whose name is written in it.',
    image: 'death_note.jpg',
    episodes: 37
  },
  {
    name: 'Darling in the Franxx',
    description: 'Discover a dystopian world where young pilots control giant mechas known as Franxx to defend humanity from mysterious creatures called Klaxosaurs.',
    image: 'darling_in_the_franxx.jpg',
    episodes: 24
  }
];

const characters = [
  {
    name: 'Naruto Uzumaki',
    description: 'The main protagonist of the Naruto series, a ninja with a dream to become the Hokage, the leader of his village.',
    image: 'naruto_u.jpg',
    powerLevel: 9000
  },
  {
    name: 'Eren Yeager',
    description: 'A young soldier who becomes a key player in the war against the Titans and seeks revenge for the destruction of his home.',
    image: 'eren.jpg',
    powerLevel: 8000
  },
  {
    name: 'Light Yagami',
    description: 'A high school student who obtains the Death Note and starts using it to rid the world of criminals, becoming known as the infamous serial killer "Kira."',
    image: 'light.jpg',
    powerLevel: 7000
  },
  {
    name: 'Zero Two',
    description: 'A mysterious girl with Klaxosaur blood who pilots the Franxx alongside Hiro and becomes instrumental in the fight against the Klaxosaurs.',
    image: 'zero_two.jpg',
    powerLevel: 8500
  }
];

const weapons = [
  {
    name: 'Rasengan',
    type: 'Ninjutsu',
    description: 'Naruto Uzumaki\'s signature technique, a spinning ball of chakra that can cause massive damage to its target.',
    image: 'rasengan.jpg',
    power: 'S-Rank'
  },
  {
    name: 'Vertical Maneuvering Equipment',
    type: 'Gear',
    description: 'The primary equipment used by the soldiers in Attack on Titan to navigate and fight against the Titans with high mobility.',
    image: 'vertical_maneuvering_equipment.jpg',
    power: 'Versatile'
  },
  {
    name: 'Death Note',
    type: 'Supernatural',
    description: 'The notebook used by Light Yagami to kill anyone whose name is written in it, under certain conditions.',
    image: 'death_note.jpg',
    power: 'Fatal'
  },
  {
    name: 'Pistil-Franxx Interface',
    type: 'Technology',
    description: 'The interface used by female pilots in Darling in the Franxx to control the Franxx mechas and unleash their true power.',
    image: 'pistil_franxx_interface.jpg',
    power: 'Synchronized'
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Anime Website!');
});

app.get('/anime', (req, res) => {
  let animeHtml = '<h1>All Anime</h1>';
  anime.forEach(anime => {
    animeHtml += `
      <div>
        <h2>${anime.name}</h2>
        <img src="${anime.image}" alt="${anime.name}">
        <p>${anime.description}</p>
        <p>Episodes: ${anime.episodes}</p>
      </div>
    `;
  });
  res.send(animeHtml);
});

app.get('/characters', (req, res) => {
  let charactersHtml = '<h1>All Characters</h1>';
  characters.forEach(character => {
    charactersHtml += `
      <div>
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p>${character.description}</p>
        <p>Power Level: ${character.powerLevel}</p>
      </div>
    `;
  });
  res.send(charactersHtml);
});

app.get('/weapons', (req, res) => {
  let weaponsHtml = '<h1>All Weapons</h1>';
  weapons.forEach(weapon => {
    weaponsHtml += `
      <div>
        <h2>${weapon.name}</h2>
        <img src="${weapon.image}" alt="${weapon.name}">
        <p><strong>Type:</strong> ${weapon.type}</p>
        <p>${weapon.description}</p>
        <p><strong>Power:</strong> ${weapon.power}</p>
      </div>
    `;
  });
  res.send(weaponsHtml);
});

app.listen(PORT, () => {
  console.log(`The Anime website is available on port ${PORT}.`);
});
