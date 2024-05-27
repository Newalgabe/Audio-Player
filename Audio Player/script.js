const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const stopBtn = document.getElementById('stop');
const rewindBtn = document.getElementById('rewind');
const fastforwardBtn = document.getElementById('fastforward');
const muteBtn = document.getElementById('mute');
const shuffleBtn = document.getElementById('shuffle');
const progress = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const lyricsElem = document.getElementById('lyrics');
const volumeControl = document.getElementById('volume');

const lyrics = `
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
Ever throwing at his home
Two glass houses, twenty stones
Fourteen yellow, six are blue
Could it be worse? Quite doubtful
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
One, two
One, two, three, four
Two steps forward, three steps back
Without warning, heart attack
He fell asleep in the snow
Never woke up, died alone
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
One, two
One, two, three, four
Please don't dress in black
When you're at his wake
Don't go there to mourn
But to celebrate
Please don't dress in black
When you're at his wake
Don't go there to mourn
But to celebrate
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
I don't wanna be
I don't wanna be me
I don't wanna be
Me anymore
One, two
One, two, three, four
I don't wanna be (I don't wanna be)
I don't wanna be me (wanna be me)
I don't wanna be (I don't wanna be)
Me anymore
I don't wanna be (I don't wanna be)
I don't wanna be me (wanna be me)
I don't wanna be (I don't wanna be)
Me anymore
`;

lyricsElem.textContent = lyrics.trim();

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
});

rewindBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

fastforwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
});

shuffleBtn.addEventListener('click', () => {
});

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', () => {
    progress.max = audio.duration;
    durationElem.textContent = formatTime(audio.duration);
});

progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

function updateProgress() {
    progress.value = audio.currentTime;
    currentTimeElem.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
