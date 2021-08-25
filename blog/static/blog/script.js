function _(query){
	return document.querySelector(query);
}
function _all(query){
	return document.querySelectorAll(query);
}
let songList = [
	{
      "thumbnail": "A Sorta Fairytale.jpg",
      "audio": "A Sorta Fairytale.mp3",
      "songname": "A Sorta Fairytale",
      "artistname": "Tori Amos"
  },
  {
      "thumbnail": "Anchor.jpg",
      "audio": "Anchor.mp3",
      "songname": "Anchor",
      "artistname": "Motorama"
  },
  {
      "thumbnail": "Avant Gardener.jpg",
      "audio": "Avant Gardener.mp3",
      "songname": "Avant Gardener",
      "artistname": "Courtney Barnett"
  },
  {
      "thumbnail": "Bad Girls (Verdine Version).jpg",
      "audio": "Bad Girls (Verdine Version).mp3",
      "songname": "Bad Girls (Verdine Version)",
      "artistname": "Solange"
  },
  {
      "thumbnail": "Bad Girls.jpg",
      "audio": "Bad Girls.mp3",
      "songname": "Bad Girls",
      "artistname": "M.I.A."
  },
  {
      "thumbnail": "Breezeblocks.jpg",
      "audio": "Breezeblocks.mp3",
      "songname": "Breezeblocks",
      "artistname": "Alt-J"
  },
  {
      "thumbnail": "Cruel.jpg",
      "audio": "Cruel.mp3",
      "songname": "Cruel",
      "artistname": "St. Vincent"
  },
  {
      "thumbnail": "Dancing On My Own.jpg",
      "audio": "Dancing On My Own.mp3",
      "songname": "Dancing On My Own",
      "artistname": "Robyn"
  },
  {
      "thumbnail": "Dreams.jpg",
      "audio": "Dreams.mp3",
      "songname": "Dreams",
      "artistname": "Fleetwood Mac"
  },
  {
      "thumbnail": "Eleanor Rigby (Remastered 2009).jpg",
      "audio": "Eleanor Rigby (Remastered 2009).mp3",
      "songname": "Eleanor Rigby (Remastered 2009)",
      "artistname": "The Beatles"
  },
  {
      "thumbnail": "Everything Is Embarrassing.jpg",
      "audio": "Everything Is Embarrassing.mp3",
      "songname": "Everything Is Embarrassing",
      "artistname": "Sky Ferreira"
  },
  {
      "thumbnail": "Fade Into You.jpg",
      "audio": "Fade Into You.mp3",
      "songname": "Fade Into You",
      "artistname": "Mazzy Star"
  },
  {
      "thumbnail": "For Her.jpg",
      "audio": "For Her.mp3",
      "songname": "For Her",
      "artistname": "Fiona Apple"
  },
  {
      "thumbnail": "Genesis.jpg",
      "audio": "Genesis.mp3",
      "songname": "Genesis",
      "artistname": "Grimes"
  },
  {
      "thumbnail": "Goodbye Stranger.jpg",
      "audio": "Goodbye Stranger.mp3",
      "songname": "Goodbye Stranger",
      "artistname": "Supertramp"
  },
  {
      "thumbnail": "Green Light.jpg",
      "audio": "Green Light.mp3",
      "songname": "Green Light",
      "artistname": "Lorde"
  },
  {
      "thumbnail": "Heavy Balloon.jpg",
      "audio": "Heavy Balloon.mp3",
      "songname": "Heavy Balloon",
      "artistname": "Fiona Apple"
  },
  {
      "thumbnail": "In My Life.jpg",
      "audio": "In My Life.mp3",
      "songname": "In My Life",
      "artistname": "The Beatles"
  },
  {
      "thumbnail": "Intro.jpg",
      "audio": "Intro.mp3",
      "songname": "Intro",
      "artistname": "The xx"
  },
  {
      "thumbnail": "Jeremy.jpg",
      "audio": "Jeremy.mp3",
      "songname": "Jeremy",
      "artistname": "Pearl Jam"
  },
  {
      "thumbnail": "Kill V. Maim.jpg",
      "audio": "Kill V. Maim.mp3",
      "songname": "Kill V. Maim",
      "artistname": "Grimes"
  },
  {
      "thumbnail": "Oblivion.jpg",
      "audio": "Oblivion.mp3",
      "songname": "Oblivion",
      "artistname": "Grimes"
  },
  {
      "thumbnail": "Paper Bag.jpg",
      "audio": "Paper Bag.mp3",
      "songname": "Paper Bag",
      "artistname": "Fiona Apple"
  },
  {
      "thumbnail": "Paper Planes.jpg",
      "audio": "Paper Planes.mp3",
      "songname": "Paper Planes",
      "artistname": "M.I.A."
  },
  {
      "thumbnail": "Perfect Places.jpg",
      "audio": "Perfect Places.mp3",
      "songname": "Perfect Places",
      "artistname": "Lorde"
  },
  {
      "thumbnail": "Realiti.jpg",
      "audio": "Realiti.mp3",
      "songname": "Realiti",
      "artistname": "Grimes"
  },
  {
      "thumbnail": "Red Eyes.jpg",
      "audio": "Red Eyes.mp3",
      "songname": "Red Eyes",
      "artistname": "The War On Drugs"
  },
  {
      "thumbnail": "Rehab.jpg",
      "audio": "Rehab.mp3",
      "songname": "Rehab",
      "artistname": "Amy Winehouse"
  },
  {
      "thumbnail": "Relay.jpg",
      "audio": "Relay.mp3",
      "songname": "Relay",
      "artistname": "Fiona Apple"
  },
  {
      "thumbnail": "Seasons(Waiting on You).jpg",
      "audio": "Seasons(Waiting on You).mp3",
      "songname": "Seasons(Waiting on You)",
      "artistname": "Future Islands"
  },
  {
      "thumbnail": "Sprawl II (Mountains Beyond Mountains).jpg",
      "audio": "Sprawl II (Mountains Beyond Mountains).mp3",
      "songname": "Sprawl II (Mountains Beyond Mountains)",
      "artistname": "Arcade Fire"
  },
  {
      "thumbnail": "Supercut.jpg",
      "audio": "Supercut.mp3",
      "songname": "Supercut",
      "artistname": "Lorde"
  },
  {
      "thumbnail": "That's Not My Name.jpg",
      "audio": "That's Not My Name.mp3",
      "songname": "That's Not My Name",
      "artistname": "The Ting Tings"
  },
  {
      "thumbnail": "The Melody Of A Fallen Tree.jpg",
      "audio": "The Melody Of A Fallen Tree.mp3",
      "songname": "The Melody Of A Fallen Tree",
      "artistname": "Windsor For The Derby"
  },
  {
      "thumbnail": "The Steps.jpg",
      "audio": "The Steps.mp3",
      "songname": "The Steps",
      "artistname": "HAIM"
  },
  {
      "thumbnail": "Two Weeks (Explicit).jpg",
      "audio": "Two Weeks (Explicit).mp3",
      "songname": "Two Weeks (Explicit)",
      "artistname": "FKA twigs"
  },
  {
      "thumbnail": "Werewolf.jpg",
      "audio": "Werewolf.mp3",
      "songname": "Werewolf",
      "artistname": "Fiona Apple"
  },
  {
      "thumbnail": "Where Is My Mind?.jpg",
      "audio": "Where Is My Mind?.mp3",
      "songname": "Where Is My Mind?",
      "artistname": "Pixies"
  },
  {
      "thumbnail": "You're So Vain.jpg",
      "audio": "You're So Vain.mp3",
      "songname": "You're So Vain",
      "artistname": "Carly Simon"
  },
  {
      "thumbnail": "浮躁.jpg",
      "audio": "浮躁.mp3",
      "songname": "浮躁",
      "artistname": "王菲"
  }
];
let currentSongIndex = 0;

let player = _(".player"),
	toggleSongList = _(".player .toggle-list");

let main = {
	audio:_(".player .main audio"),
	thumbnail:_(".player .main img"),
	seekbar:_(".player .main input"),
	songname:_(".player .main .details h2"),
	artistname:_(".player .main .details p"),
	prevControl:_(".player .main .controls .prev-control"),
	playPauseControl:_(".player .main .controls .play-pause-control"),
	nextControl:_(".player .main .controls .next-control")
}

toggleSongList.addEventListener("click", function(){
	toggleSongList.classList.toggle("active");
	player.classList.toggle("activeSongList");
});

_(".player .player-list .list").innerHTML = (songList.map(function(song,songIndex){
	return `
		<div class="item" songIndex="${songIndex}">
			<div class="thumbnail">
				<img src="{{ BASE_DIR }}/static/blog/music/cover/A Sorta Fairytale.jpg">
			</div>
			<div class="details">
				<h2>${song.songname}</h2>
				<p>${song.artistname}</p>
			</div>
		</div>
	`;
}).join(""));

let songListItems = _all(".player .player-list .list .item");
for(let i=0;i<songListItems.length;i++){
	songListItems[i].addEventListener("click",function(){
		currentSongIndex = parseInt(songListItems[i].getAttribute("songIndex"));
		loadSong(currentSongIndex);
		player.classList.remove("activeSongList");
	});
}

function loadSong(songIndex){
	let song = songList[songIndex];
	main.thumbnail.setAttribute("src","{{ BASE_DIR }}/static/blog/music/cover/A Sorta Fairytale.jpg");
	document.body.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("{{ BASE_DIR }}/static/blog/music/cover/A Sorta Fairytale.jpg") center no-repeat`;
	document.body.style.backgroundSize = "cover";
	main.songname.innerText = song.songname;
	main.artistname.innerText = song.artistname;
	main.audio.setAttribute("src","{{ BASE_DIR }}/static/blog/music/audio/A Sorta Fairytale.mp3");
	main.seekbar.setAttribute("value",0);
	main.seekbar.setAttribute("min",0);
	main.seekbar.setAttribute("max",0);
	main.audio.addEventListener("canplay",function(){
		main.audio.play();
		if(!main.audio.paused){
			main.playPauseControl.classList.remove("paused");
		}
		main.seekbar.setAttribute("max",parseInt(main.audio.duration));
		main.audio.onended = function(){
			main.nextControl.click();
		}
	})
}
setInterval(function(){
	main.seekbar.value = parseInt(main.audio.currentTime);
},1000);

main.prevControl.addEventListener("click",function(){
	currentSongIndex--;
	if(currentSongIndex < 0){
		currentSongIndex = songList.length + currentSongIndex;
	}
	loadSong(currentSongIndex);
});
main.nextControl.addEventListener("click",function(){
	currentSongIndex = (currentSongIndex+1) % songList.length;
	loadSong(currentSongIndex);
});
main.playPauseControl.addEventListener("click",function(){
	if(main.audio.paused){
		main.playPauseControl.classList.remove("paused");
		main.audio.play();
	} else {
		main.playPauseControl.classList.add("paused");
		main.audio.pause();
	}
});
main.seekbar.addEventListener("change",function(){
	main.audio.currentTime = main.seekbar.value;
});
loadSong(currentSongIndex);
