import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}
player.on('timeupdate', throttle(onPlay, 1000));

let seconds = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(seconds);
