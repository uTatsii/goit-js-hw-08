import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYBACK_POSITION = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const savedTimePosition = localStorage.getItem(PLAYBACK_POSITION);
const throttle = require('lodash.throttle');

if (!player) {
  return;
}

savedTimePosition ? player.setCurrentTime(savedTimePosition) : null;

player.on('timeupdate', throttle(onVimeoPlayerUpdate, 1000));

function onVimeoPlayerUpdate({ seconds }) {
  localStorage.setItem(PLAYBACK_POSITION, seconds);
}
