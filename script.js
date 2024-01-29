// data required is in this json ..... start
const myJson = [
  {
    name: "Dilbar Dilbar",
    album: "Sirf Tum",
    genre: "Rhythm",
    artist: ["Alka Yagnik"],
    image:
      "https://c.saavncdn.com/318/Sirf-Tum-Hindi-1999-20221205181935-150x150.jpg",
    url: "https://aac.saavncdn.com/318/bde7d516cefa94e1963c3f54c885cbbb_160.mp4",
  },
  
  {
    name:"Muskurane (Romantic)" ,
    album:"Citylights",
    genre: "Rhythm",
    artist: ["Jeet Gannguli", "Arijit Singh"],
    image:"https://c.saavncdn.com/065/Citylights-Hindi-2014-20190607111647-150x150.jpg",
    url: "https://aac.saavncdn.com/065/b3699b611960d4b19124fcab45bc5020_160.mp4",
  },
  
   {
    name: "Kuch Baatein",
    album:"Kuch Baatein",
    genre: "Rhythm",
    artist: ["Payal Dev", "Jubin Nautiyal"],
    image:"https://c.saavncdn.com/241/Kuch-Baatein-Hindi-2022-20220310031017-150x150.jpg",
    url:"https://aac.saavncdn.com/241/3e1b0710bac64063546d09095baafdcd_160.mp4" ,
  },
  
   {
    name: "Pasoori",
    album:"Pasoori",
    genre: "Rock",
    artist: ["Shae Gill", "Ali Sethi"],
    image:"https://c.saavncdn.com/663/Pasoori-Punjabi-2022-20220203181058-150x150.jpg",
    url: "https://aac.saavncdn.com/663/4aef67fd9511a82b1f49835101c145a7_160.mp4",
  },
  
   {
    name: "Jugnu",
    album:"Jugnu",
    genre: "Pop",
    artist: ["Jugnu"],
    image:"https://c.saavncdn.com/272/Jugnu-Hindi-2021-20211024110230-150x150.jpg",
    url:"https://aac.saavncdn.com/272/848475f738a2707e2c1a59b7ff029c05_160.mp4",
  },
  
   {
    name:"Kuch Kuch Hota Hai" ,
    album:"Kuch Kuch Hota Hai",
    genre: "Rhythm",
    artist: ["Jatin-Lalit", "Udit Narayan"],
    image:"https://c.saavncdn.com/907/Kuch-Kuch-Hota-Hai-Hindi-1998-20190516130035-150x150.jpg",
    url: "https://c.saavncdn.com/907/Kuch-Kuch-Hota-Hai-Hindi-1998-20190516130035-150x150.jpg",
  },
  
   {
    name: "Sadi Gali",
    album:"Tanu Weds Manu",
    genre: "Rhythm",
    artist: ["Lehmber Hussainpuri"],
    image:"https://c.saavncdn.com/032/Tanu-Weds-Manu-Hindi-2011-20221211151236-150x150.jpg",
    url: "https://aac.saavncdn.com/032/7ca01a655f88d9658709eef15d397296_160.mp4",
  },
  
   {
    name: "Ram Siya Ram",
    album:"Adipurush",
    genre: "Rhythm",
    artist: ["Sachet-Parampara"],
    image:"https://c.saavncdn.com/972/Adipurush-Hindi-2023-20230607184755-150x150.jpg",
    url:"https://aac.saavncdn.com/972/b3c1747f9507110bf6ba8f11d6705ec5_160.mp4" ,
  },
  
   {
    name: "Dhoom Again",
    album:"Dhoom 2",
    genre: "Rock",
    artist: ["Vishal Dadlani", "Dominique Cerejo", "Pritam, Asif Ali Baig"],
    image:"https://c.saavncdn.com/465/Dhoom-2-Back-In-Action-Hindi-2006-20190329180922-150x150.jpg",
    url: "https://aac.saavncdn.com/465/3244d0b5fb254f497b7611dd2a103feb_160.mp4",
  },
  
   {
    name: "Koka",
    album:"Koka",
    genre: "Rhythm",
    artist: ["Mankirt Aulakh", "Simar Kaur"],
    image:"https://c.saavncdn.com/139/Koka-Punjabi-2023-20231106213308-150x150.jpg",
    url: "https://aac.saavncdn.com/139/e7871b2fc5865927fae6e490585788b9_160.mp4",
  },
  
   {
    name: "Sairat Zaala Ji",
    album:"Sairat",
    genre: "Rhythm",
    artist: ["Chinmayi Sripada", "Ajay Gogavale"],
    image:"https://c.saavncdn.com/998/Sairat-Marathi-2016-150x150.jpg",
    url: "https://aac.saavncdn.com/998/bd2aa5cde227d8d315d855267f2ddd2f_160.mp4",
  },
  
   {
    name: "Dil Kehta Hai",
    album:"Akele Hum Akele Tum",
    genre: "Rhythm",
    artist: ["Anu Malik", "Alka Yagnik", "Kumar Sanu"],
    image:"https://c.saavncdn.com/450/Akele-Hum-Akele-Tum-Hindi-1995-20210226141837-150x150.jpg",
    url: "https://aac.saavncdn.com/439/3b36d2ecd957b9aaacf5fa698be43efc_160.mp4",
  },
  
   {
    name: "Karige Loga",
    album:"Aarya - 2",
    genre: "Rhythm",
    artist: ["Kunal Ganjawala"],
    image:"https://c.saavncdn.com/298/Aarya-2-Telugu-2009-20190822135933-150x150.jpg",
    url: "https://aac.saavncdn.com/298/8517f82913fdd7757ad7723126211986_160.mp4",
  },
  {
    name: "Sochenge Tumhe Pyar",
    album: "Deewana",
    genre: "Rhythm",
    artist: ["Kumar Sanu"],
    image:
      "https://c.saavncdn.com/235/Deewana-With-Jhankar-Beats-1992-150x150.jpg",
    url: "https://aac.saavncdn.com/235/06dc4728caa78f4c49a2257193d1270a_160.mp4",
  },

  {
    name: "Dheere Dheere Se",
    album: "Aashiqui",
    genre: "Rhythm",
    artist: ["Anuradha Paudwal", "Kumar Sanu"],
    image:
      "https://c.saavncdn.com/582/Dheere-Dheere-Se-Redefined--Hindi-2021-20210111141714-150x150.jpg",
    url: "https://aac.saavncdn.com/582/467bdeb6c2955f7f3b5f5e4296b27b3b_160.mp4",
  },

  {
    name: "Chura Ke Dil Mera",
    album: "Main Khiladi Tu Anari",
    genre: "Pop",
    artist: ["Anu Malik", "Alka Yagnik", "Kumar Sanu"],
    image:
      "https://c.saavncdn.com/474/Main-Khiladi-Tu-Anari-Hindi-1994-20210407074948-150x150.jpg",
    url: "https://aac.saavncdn.com/713/26658d6c40a3d1ac76710723c2ea1a9a_160.mp4",
  },

  {
    name: "Do Dil Mil Rahe Hai",
    album: "Pardes",
    genre: "Rhythm",
    artist: ["Kumar Sanu"],
    image:
      "https://c.saavncdn.com/386/Pardes-Hindi-1997-20230809151030-150x150.jpg",
    url: "https://aac.saavncdn.com/643/b789247348a68365f2ae6bfcfc52cd09_160.mp4",
  },

  {
    name: "Yeh Dil Aashiqana",
    album: "Yeh Dil Aashiqana",
    genre: "Rock",
    artist: ["Kumar Sanu", "Alka Yagnik"],
    image:
      "https://c.saavncdn.com/652/Yeh-Dil-Aashiqana-Hindi-2002-20230809145455-150x150.jpg",
    url: "https://aac.saavncdn.com/652/70555b37c6d8e292d0e72659a9a602d9_160.mp4",
  },

  {
    name: "Aisa Deewana",
    album: "Dil Maange More",
    genre: "Rock",
    artist: ["Sonu Nigam", "Alka Yagnik"],
    image:
      "https://c.saavncdn.com/406/Dil-Maange-More-Hindi-2004-20221124142445-150x150.jpg",
    url: "https://aac.saavncdn.com/406/79e3c487d7b4656baa29bc0b983cc048_160.mp4",
  },

  {
    name: "Chal Tere Ishq Mein",
    album: "Gadar 2",
    genre: "Pop",
    artist: ["Neeti Mohan", "Vishal Mishra", "Shehnaz Akhtar"],
    image:
      "https://c.saavncdn.com/609/Gadar-2-Hindi-2023-20230912105532-150x150.jpg",
    url: "https://aac.saavncdn.com/609/91f88aa7e0362e953a82275ecc96d98b_160.mp4",
  },

  {
    name: "Do Pal",
    album: "Veer-Zaara",
    genre: "Rhythm",
    artist: ["Lata Mangeshkar", "Sonu Nigam"],
    image:
      "https://c.saavncdn.com/313/Veer-Zaara-Hindi-2004-20190329150841-150x150.jpg",
    url: "https://aac.saavncdn.com/313/52841a31301c03593866cea4f2bfd2e3_160.mp4",
  },

  {
    name: "Mere Haath Mein",
    album: "Fanaa",
    genre: "Rhythm",
    artist: ["Sunidhi Chauhan", "Sonu Nigam"],
    image:
      "https://c.saavncdn.com/146/Fanaa-Hindi-2006-20190329181154-150x150.jpg",
    url: "https://aac.saavncdn.com/146/4d1357dd932fdd5a140f88ffe9373bde_160.mp4",
  },

  {
    name: "O Sajan",
    album: "Tarzan The Wonder Car",
    genre: "Rock",
    artist: ["Himesh Reshammiya, Jayesh Gandhi"],
    image:
      "https://c.saavncdn.com/795/Tarzan-The-Wonder-Car-Hindi-2022-20230903154516-150x150.jpg",
    url: "https://aac.saavncdn.com/795/346511595a9bd7f86192dfc61850391f_160.mp4",
  },

  {
    name: "Fevicol Se",
    album: "Dabangg 2",
    genre: "Rock",
    artist: ["Mamta Sharma", "Wajid Khan"],
    image:
      "https://c.saavncdn.com/652/Dabangg-2-Hindi-2012-20221213012606-150x150.jpg",
    url: "https://aac.saavncdn.com/652/9268882356b1170e7598d72a4239f379_160.mp4",
  },

  {
    name: "Tere Mast Mast Do Nain",
    album: "Dabangg",
    genre: "Rhythm",
    artist: ["Rahat Fateh Ali Khan"],
    image:
      "https://c.saavncdn.com/765/Dabangg-Hindi-2010-20221211114032-150x150.jpg",
    url: "https://aac.saavncdn.com/765/b0723a62f089b5b6b64120a49fbf2fee_160.mp4",
  },

  {
    name: "Chori Kiya Re Jiya",
    album: "Dabangg",
    genre: "Rhythm",
    artist: ["Sonu Nigam", "Shreya Ghoshal"],
    image:
      "https://c.saavncdn.com/765/Dabangg-Hindi-2010-20221211114032-150x150.jpg",
    url: "https://aac.saavncdn.com/765/367d390c0c3c272fabefc6da8a81b305_160.mp4",
  },

  {
    name: "Falak Dekhun",
    album: "Garam Masala",
    genre: "Rock",
    artist: ["Sonu Nigam"],
    image:
      "https://c.saavncdn.com/575/Garam-Masala-Hindi-2005-20210226131435-150x150.jpg",
    url: "https://aac.saavncdn.com/575/265fe1cd4844185cdb087d547359b25a_160.mp4",
  },

  {
    name: "Dil Ka Achar",
    album: "Bin Bulaye Baraati",
    genre: "Rock",
    artist: ["Anand Raj Anand", "Mamta Sharma"],
    image: "https://c.saavncdn.com/555/Bin-Bulaye-Baraati-2011-150x150.jpg",
    url: "https://aac.saavncdn.com/555/a6e66554be5472af7a08a1c780259286_160.mp4",
  },

  {
    name: "Aapke Pyaar Mein Hum",
    album: "Raaz",
    genre: "Pop",
    artist: ["Alka Yagnik"],
    image:
      "https://c.saavncdn.com/998/Raaz-Hindi-2002-20230906111812-150x150.jpg",
    url: "https://aac.saavncdn.com/998/2d400071bc8365604632b8935cd63a46_160.mp4",
  },

  {
    name: "Bin Tere Sanam",
    album: "Yaara Dildara",
    genre: "Pop",
    artist: ["Udit Narayan", "Arnab Chakraborty", "Kavita Krishnamurthy"],
    image:
      "https://c.saavncdn.com/453/Yaara-Dildara-Hindi-2012-20210407130950-150x150.jpg",
    url: "https://aac.saavncdn.com/363/aa7ab05c53bcdabe5a82c0e4a555da23_160.mp4",
  },

  {
    name: "Aashiq Banaya Aapne",
    album: "Hate Story 4",
    genre: "Rock",
    artist: ["Himesh Reshammiya", "Neha Kakkar"],
    image:
      "https://c.saavncdn.com/111/Hate-Story-IV-Hindi-2018-20180223-150x150.jpg",
    url: "https://aac.saavncdn.com/111/6868ab9ebc54581b11c67706e0113970_160.mp4",
  },

  {
    name: "Wajah Tum Ho",
    album: "Hate Story",
    genre: "Pop",
    artist: ["Mithoon", "Altamash Faridi", "Tulsi Kumar"],
    image: "https://c.saavncdn.com/590/Wajah-Tum-Ho-Hindi-2016-150x150.jpg",
    url: "https://aac.saavncdn.com/590/203a78e1bdbce665301557a37c49da2f_160.mp4",
  },

  {
    name: "Bole Chudiyan",
    album: "Kabhi Khushi Kabhie Gham",
    genre: "Rhythm",
    artist: [
      "Sonu Nigam",
      "Alka Yagnik",
      "Udit Narayan",
      "Kavita Krishnamurthy",
    ],
    image:
      "https://c.saavncdn.com/778/Kabhi-Khushi-Kabhie-Gham-Hindi-2001-20190516150535-150x150.jpg",
    url: "https://aac.saavncdn.com/778/899d95d44fe4a91db0100fb23d24257f_160.mp4",
  },

  {
    name: "Yeh Bandhan Toh",
    album: "Karan Arjun",
    genre: "Rhythm",
    artist: ["Kumar Sanu", "Udit Narayan", "Alka Yagnik"],
    image:
      "https://c.saavncdn.com/232/Karan-Arjun-Hindi-1995-20230304134701-150x150.jpg",
    url: "https://aac.saavncdn.com/232/0e4cbd31bf749fc30c207f33eb0eda1d_160.mp4",
  },

  {
    name: "Baazigar O Baazigar",
    album: "Baazigar",
    genre: "Rock",
    artist: ["Kumar Sanu", "Alka Yagnik"],
    image:
      "https://c.saavncdn.com/768/Top-20-Hits-With-Heart-Beats-Hindi-2017-20171113062921-150x150.jpg",
    url: "https://aac.saavncdn.com/768/07ba021b8d6abf63caada7b6b79a4061_160.mp4",
  },

  {
    name: "Wada Raha",
    album: "Khakee",
    genre: "Pop",
    artist: ["Shreya Ghoshal"],
    image:
      "https://c.saavncdn.com/817/Khakee-Hindi-2003-20221201092105-150x150.jpg",
    url: "https://aac.saavncdn.com/817/f141d536da7b1c3fe031239ee2d92999_160.mp4",
  },

  {
    name: "Teri Meri",
    album: "Bodyguard",
    genre: "Pop",
    artist: ["Himesh Reshammiya", "Shreya Ghoshal"],
    image:
      "https://c.saavncdn.com/722/Bodyguard-Hindi-2011-20221211211236-150x150.jpg",
    url: "https://aac.saavncdn.com/667/ea1e7d916b43ea0eb0997c76f3f057e6_160.mp4",
  },

  {
    name: "Guli Mata",
    album: "Guli Mata",
    genre: "Pop",
    artist: ["Saad Lamjarred", "Shreya Ghoshal"],
    image:
      "https://c.saavncdn.com/696/Guli-Mata-Hindi-2023-20230714050721-150x150.jpg",
    url: "https://aac.saavncdn.com/696/a0d4777094b3144f5914ba3588d08977_160.mp4",
  },

  {
    name: "Ang Laga De",
    album: "Goliyon Ki Raasleela Ram-Leela",
    genre: "Rhythm",
    artist: ["Aditi Paul"],
    image:
      "https://c.saavncdn.com/317/Ang-Laga-De-From-Goliyon-Ki-Raasleela-Ram-Leela-Deep-Techno-Remix-Hindi-2022-20230430081837-150x150.jpg",
    url: "https://aac.saavncdn.com/317/f8a964e1df55afbbcc56dc4099244d14_160.mp4",
  },

  {
    name: "Hum Tumhare Hain Sanam",
    album: "Hum Tumhare Hain Sanam",
    genre: "Pop",
    artist: ["Anuradha Paudwal", "Udit Narayan"],
    image:
      "https://c.saavncdn.com/209/Hum-Tumhare-Hain-Sanam-Hindi-2002-20221128130130-150x150.jpg",
    url: "https://aac.saavncdn.com/209/c5676f3fa4fd5e3ab7f2713cbc8c0859_160.mp4",
  },

  {
    name: "Taaron Ka Chamakta",
    album: "Hum Tumhare Hain Sanam",
    genre: "Rock",
    artist: ["Udit Narayan", "Bali Brahmbhatt"],
    image:
      "https://c.saavncdn.com/209/Hum-Tumhare-Hain-Sanam-Hindi-2002-20221128130130-150x150.jpg",
    url: "https://aac.saavncdn.com/209/5dc778b337bb8662dcac89c4b22b56fa_160.mp4",
  },

  {
    name: "Sab Kuchh Bhula Diya",
    album: "Hum Tumhare Hain Sanam",
    genre: "Rhythm",
    artist: ["Sonu Nigam", "Sapna Awasthi"],
    image:
      "https://c.saavncdn.com/209/Hum-Tumhare-Hain-Sanam-Hindi-2002-20221128130130-150x150.jpg",
    url: "https://aac.saavncdn.com/209/e3fb251a797710c5e9f7ac9f05f1347d_160.mp4",
  },

  {
    name: "Hawaon Ne Yeh Kaha ",
    album: "Aap Mujhe Achche Lagne Lage",
    genre: "Pop",
    artist: ["Udit Narayan"],
    image:
      "https://c.saavncdn.com/523/Aap-Mujhe-Achche-Lagne-Lage-Hindi-2004-20190924060930-150x150.jpg",
    url: "https://aac.saavncdn.com/523/9770eef606624a9813a1b8f39131ac07_160.mp4",
  },

  {
    name: "Kubaku Mujhe Tu",
    album: "Dil Maange More",
    genre: "Rock",
    artist: ["Shaan", "Jayesh"],
    image:
      "https://c.saavncdn.com/406/Dil-Maange-More-Hindi-2004-20221124142445-150x150.jpg",
    url: "https://aac.saavncdn.com/406/c9a1f649c0236bd16dbbe69c77d16294_160.mp4",
  },

  {
    name: "Suraj Hua Maddham",
    album: "Kabhi Khushi Kabhie Gham",
    genre: "Rhythm",
    artist: ["Sonu Nigam", "Alka Yagnik"],
    image:
      "https://c.saavncdn.com/778/Kabhi-Khushi-Kabhie-Gham-Hindi-2001-20190516150535-150x150.jpg",
    url: "https://aac.saavncdn.com/778/c9c52c1295f9053c008f2d49b0339a88_160.mp4",
  },
];
// data required is in this json ...... end

// creating 3 playlists from data json
const popPlaylist = [];
const rockPlaylist = [];
const rhythmPlaylist = [];

const allBtn = document.getElementById("all");
const popBtn = document.getElementById("pop");
const rockBtn = document.getElementById("rock");
const rhythmBtn = document.getElementById("rhythm");
const sortedByGenre = document.getElementById("sortedbygenre");
const themeSelector = document.getElementById("theme-toggle-switch");
const themeImage = document.getElementById("theme-img");
const sortByGenreBtn = document.getElementById("sortBtn");
const sortByGenreDropdownMenu = document.getElementById(
  "sort-dropdown-by-genre"
);
const playlistSelectorBtn = document.getElementById("selectPlaylist");
const selectPlaylistDropdown = document.getElementById(
  "selectPlaylist-dropdown"
);
const songSourceEle = document.getElementById("song-source");
const song = document.getElementById("song");
const playPauseBtn = document.getElementById("playPauseBtn");
const songTitle = document.getElementById("song-title");
const songAlbum = document.getElementById("song-album");
const songArtists = document.getElementById("song-artists");
const songImage = document.getElementById("song-image");
const soundtrack = new Audio();
const songRange = document.getElementById("song-range");
const playlistContainerDiv = document.getElementById("playlists-container");
const createPlaylistFormBtn = document.getElementById("createPlaylistForm");
const playlistName = document.getElementById("playlist-name");
const playlistDropdown = document.getElementById("playlist-dropdown");
const deletePlaylistDropdown = document.getElementById(
  "delete-playlist-dropdown"
);

let currentPlaylist = myJson;
var currentSong;
let currentSongIndexNo;
let nowPlaying = null;
let arrayOfPlaylists = [];
let playlistObj;
let playlistSelected = null;
let plName;
let plLength;

// starting the music right after page loaded


allBtn.onclick = showAllPlaylist;
popBtn.onclick = showPopPlaylist;
rockBtn.onclick = showRockPlaylist;
rhythmBtn.onclick = showRhythmPlaylist;
sortByGenreBtn.onclick = sortByGenreDropdown;
// playlistSelectorBtn.onclick = playlistSelectorDropdown;

showPlaylist(currentPlaylist, "playlist-right");

myJson.forEach((item) => {
  if (item.genre === "Pop") {
    popPlaylist.push(item);
  } else if (item.genre === "Rock") {
    rockPlaylist.push(item);
  } else if (item.genre === "Rhythm") {
    rhythmPlaylist.push(item);
  }
});

// theme selector funtion
themeSelector.onclick = () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeImage.src = "assets/sun.jpeg";
  } else {
    themeImage.src = "assets/moon.jpg";
  }
};
// theme selector funtion end

// sort button for songs to be sorted by genre

function sortByGenreDropdown() {
  toggleDropDown(sortByGenreDropdownMenu);
}

// common functions
function toggleDropDown(dropdownMenu) {
  if (dropdownMenu.innerHTML.trim() !== "") {
    if (dropdownMenu.classList.contains("d-block")) {
      dropdownMenu.classList.remove("d-block");
      dropdownMenu.classList.add("d-none");
      // document.removeEventListener('click', closeDropdownOnClickOutside);
    } else {
      dropdownMenu.classList.remove("d-none");
      dropdownMenu.classList.add("d-block");
      // document.addEventListener('click', closeDropdownOnClickOutside);
    }
  } else {
    alert("Please create Playlist first and then add song to the playlist...");
  }
}

// function for randomizing the playlist or shuffling the playlist
function randomizePlaylist(playlist) {
  if (playlist.length === 0) {
    return playlist;
  }
  const newPlaylist = [];
  const randNums = Array.from({ length: playlist.length }, (_, index) => index);
  for (let i = randNums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randNums[i], randNums[j]] = [randNums[j], randNums[i]];
    newPlaylist.push(playlist[randNums[i]]);
  }

  return newPlaylist;
}

function showAllPlaylist() {
  const allSongs = randomizePlaylist(myJson);
  sortByGenreDropdown();
  document.getElementById("playlist-right").innerHTML = "";
  showPlaylist(allSongs, "playlist-right");
  sortedByGenre.textContent = "";
  sortedByGenre.textContent = "Showing All songs";
}

function showPopPlaylist() {
  const popSongs = randomizePlaylist(popPlaylist);
  sortByGenreDropdown();
  console.log(popSongs);
  document.getElementById("playlist-right").innerHTML = "";
  showPlaylist(popSongs, "playlist-right");
  sortedByGenre.textContent = "";
  sortedByGenre.textContent = "Pop songs";
}

function showRockPlaylist() {
  const rockSongs = randomizePlaylist(rockPlaylist);
  sortByGenreDropdown();
  console.log(rockSongs);
  document.getElementById("playlist-right").innerHTML = "";
  showPlaylist(rockSongs, "playlist-right");
  sortedByGenre.textContent = "";
  sortedByGenre.textContent = "Rock songs";
}
function showRhythmPlaylist() {
  const rhythmSongs = randomizePlaylist(rhythmPlaylist);
  sortByGenreDropdown();
  console.log(rhythmSongs);
  document.getElementById("playlist-right").innerHTML = "";
  showPlaylist(rhythmSongs, "playlist-right");
  sortedByGenre.textContent = "";
  sortedByGenre.textContent = "Rhythm songs";
}

// function playlistSelectorDropdown() {
//   toggleDropDown(selectPlaylistDropdown);
// }

function showPlaylist(playlist, location) {
  currentPlaylist = randomizePlaylist(playlist);
  console.log(currentPlaylist);
  const playlistEle = document.getElementById(location);
  playlistEle.innerHTML ='';
  currentPlaylist.forEach((song) => {
    let ele = `<div class="lable-card" onclick="playThisSong('${song.url}');">
                  <h6>${song.name}</h6>
                  <small><i>(${song.album})<i></small>
                </div>`;
    playlistEle.insertAdjacentHTML("beforeend", ele);
  });
}

// Function to play a selected song

function playThisSong(songurl) {
  // getting song url and adding to the object created by Audio class and playing song
  let songUrl = songurl.trim();
  currentSong = currentPlaylist.find((song) => song.url === songUrl);
  soundtrack.src = songUrl;
  playPause();

  // adding information to player song card like name, album,image,artist
  songTitle.textContent = `${currentSong.name}`;
  songAlbum.textContent = `${currentSong.album}`;
  songArtists.textContent = `${currentSong.artist}`;
  songImage.src = currentSong.image;

  // initiating song progress bar
  soundtrack.addEventListener("loadmetadata", function () {
    songRange.max = soundtrack.duration;
    songRange.value = soundtrack.currentTime;
  });

  // changing style of now playing song
  let attributeSelector = `[onclick*="${songurl}"]`;
  if (nowPlaying === null) {
    nowPlaying = document.querySelector(attributeSelector);
    nowPlaying.classList.add("song-card-now-playing");
  } else {
    nowPlaying.classList.remove("song-card-now-playing");
    nowPlaying = document.querySelector(attributeSelector);
    nowPlaying.classList.add("song-card-now-playing");
  }

  console.log(currentSong);
}

// song progress bar related functions
songProgress();
function songProgress() {
  if (soundtrack.play()) {
    setInterval(() => {
      songRange.value = soundtrack.currentTime;
    }, 500);
  }
  songRange.onchange = function () {
    soundtrack.play();
    if (playPauseBtn.classList.contains("fa-play")) {
      playPauseBtn.classList.remove("fa-play");
      playPauseBtn.classList.add("fa-pause");
    }
    soundtrack.currentTime = songRange.value;
  };
}

// Function to play/pause the audio
function playPause() {
  if (soundtrack.paused) {
    soundtrack.play();
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
  } else {
    soundtrack.pause();
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
  }
}

// Function to play/pause the next audio
function playNextSong() {
  console.log(currentSong);
  console.log("play next song");
  console.log(currentPlaylist);
  currentSongIndexNo = currentPlaylist.indexOf(currentSong);
  console.log(currentSongIndexNo);
  if (currentSongIndexNo !== currentPlaylist.length - 1) {
    currentSong = currentPlaylist[currentSongIndexNo + 1];
    playThisSong(currentSong.url);
  }
}

// Function to play/pause the prev audio
function playPrevSong() {
  console.log(currentSong);
  console.log("play next song");
  console.log(currentPlaylist);
  currentSongIndexNo = currentPlaylist.indexOf(currentSong);
  console.log(currentSongIndexNo);
  if (currentSongIndexNo !== 0) {
    currentSong = currentPlaylist[currentSongIndexNo - 1];
    playThisSong(currentSong.url);
  }
}

// create playlist
createPlaylistFormBtn.addEventListener("submit", function (event) {
  // Prevent the default form submission to avoid page reload
  event.preventDefault();

  var newName = document.getElementById("playlistNameInput").value;
  if (newName !== "") {
    if (arrayOfPlaylists.find((obj) => obj.name === newName)) {
      document.getElementById("playlistNameInput").value = "";
      alert("Playlist Name Already Exists..");
    } else {
      playlistObj = {
        name: String(newName),
        songs: [],
      };
      document.getElementById("playlistNameInput").value = "";
      arrayOfPlaylists.push(playlistObj);
    }
    console.log(arrayOfPlaylists);
    createListOfPlaylists();
    // alert("Playlist Created...!!");
  }
});

function createListOfPlaylists() {
  playlistContainerDiv.innerHTML = "";
  playlistDropdown.innerHTML = "";
  deletePlaylistDropdown.innerHTML = "";

  arrayOfPlaylists.forEach((playlist) => {
    let i = arrayOfPlaylists.indexOf(playlist);
    let ele1 = `<div class="lable-card-for-playlists" onclick="showPL(this)">
                  <h6 class="playlist-name">${playlist.name}</h6><h6>(${playlist.songs.length})</h6>
                </div>`;
    let ele2 = `<div class="add-song-or-deleted-pl-item" onclick="addThisSongToPlaylist(this)">${playlist.name}</div>`;
    let ele3 = `<div class="add-song-or-deleted-pl-item" onclick="deletePlaylist(this)">${playlist.name}</div>`;

    playlistContainerDiv.insertAdjacentHTML("beforeend", ele1);
    playlistDropdown.insertAdjacentHTML("beforeend", ele2);
    deletePlaylistDropdown.insertAdjacentHTML("beforeend", ele3);
  });
}


function showPL(clickedElement) {
  var textContent = clickedElement.textContent.trim();
  var trimmedStr = textContent.split('(')[0].trim();
  for(let i=0;i<arrayOfPlaylists.length;i++){
    if (arrayOfPlaylists[i].name === trimmedStr){
        currentPlaylist = arrayOfPlaylists[i].songs;
        console.log("playlist Found");
        console.log("arrayOfPlaylists[i].songs");
        break;
    }
  }
  showPlaylist(currentPlaylist,"playlists-container2");

}


function addThisSongToPlaylist(clickedElement) {
  var textContent = clickedElement.textContent.trim();
  console.log('Clicked Div Text:', textContent);
  console.log(currentSong);
  if (currentSong) {
    for(let i =0;i<arrayOfPlaylists.length;i++){
      if(arrayOfPlaylists[i].name === textContent){
        arrayOfPlaylists[i].songs.push(currentSong);
      }
    }
    createListOfPlaylists();
    toggleDropDown(playlistDropdown);
  } else {
    alert("Please select song from playlist....!");
  }
  console.log("current PL  :"+ currentPlaylist);
}

function deletePlaylist(clickedElement) {
  toggleDropDown(deletePlaylistDropdown);
  var textContent = clickedElement.textContent.trim();
  var confirmDelete = confirm('Are you sure you want to delete the playlist "' + textContent + '"?');
  if (confirmDelete) {
    arrayOfPlaylists = arrayOfPlaylists.filter((pl) => pl.name !== textContent);
    createListOfPlaylists();
    alert('Playlist "' + plName + '" has been deleted.');
    
  }
  
}


currentSong = myJson[6];
playThisSong(currentSong.url);