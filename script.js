const songs = [
    "Chidinma Love Me.mp3",
    "Eben Joyful Noise.mp3",
    "Fally Ipupa Control.mp3",
    "KO-C x Fanicko Sango.mp3",
    "Maroon 3 Little Birds.mp3"
];

const createSongList = () => {
    const list = document.createElement("ol");

    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        const content = document.createTextNode(songs[i]);
        item.appendChild(content);
        
        list.appendChild(item);
    }
    return list;
}

document.getElementById("songList").appendChild(createSongList());

songList.onclick = (e) => {
    const clickedItem = e.target;
    const source = document.getElementById("source");
    source.src = "Songs/" + clickedItem.innerText;

    document.getElementById("currentlyPlayingSong").innerText = "Currently Playing: ";
    document.getElementById("currentSong").innerText = clickedItem.innerText;

    player.load();
    player.play();
}

const playAudio = () => {
    if (player.readyState) {
        player.play();
    }
}

const pauseAudio = () => {
    player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;
}

const updateProgress = () => {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
}