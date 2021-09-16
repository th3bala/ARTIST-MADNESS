class Track {
  constructor(name, altName, album) {
    this.name = name;
    this.altName = altName;
    this.album = album;
  }
  getName() {
    return this.name;
  }
  getAltName() {
    return this.altName;
  }
  getAlbum() {
    return this.album;
  }
}

class Album {
  constructor(artist, backgroundColor, textColor) {
    this.artist = artist;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
  }
  getArtist() {
    return this.artist;
  }
  getBackgroundColor() {
    return this.backgroundColor;
  }
  getTextColor() {
    return this.textColor;
  }
}

//global variables
var whitelist = [];
var blacklist = [];
var lineup = [];
var currentRound = 1;
var currentSelection = 0;
var inProgress = false;
var HORIZONTAL_LINE_LENGTH = 165;

window.onbeforeunload = function() {
  if(inProgress)
    return 'Your bracket is still in progress. Are you sure you want to leave?'; //message doesn't actually display but whatever
  return undefined;
};

function loadLists(artist) {
  fetch('artdata.json')
  .then(response => {
   return response.json();
  })
  .then(artData => {
    let artistDataObj;
    switch (artist) {
      case "KANYE": artistDataObj = artData.KANYE;
      break;
      case "DRIZZY": artistDataObj = artData.DRIZZY;
      break;
      case "KDOT": artistDataObj = artData.KDOT;
      break;
    }
    artistDataObj.albums.forEach((album) => {
      let albumObj = new Album(album.artist, album.bgColor, album.fgColor);
      if(album.songs != null)
        album.songs.forEach((song) => {
          whitelist.push(new Track(song.dispName, song.altName, albumObj));
        });
      if(album.blacklistSongs != null)
        album.blacklistSongs.forEach((song) => {
          blacklist.push(new Track(song.dispName, song.altName, albumObj));
        });
    });
    let wl = document.getElementById("whitelist");
    whitelist.forEach((item) => {
      wl.appendChild(createWhitelistButton(item));
    });
    let bl = document.getElementById("blacklist");
    blacklist.forEach((item) => {
      bl.appendChild(createBlacklistButton(item));
    });
  });
}

function remove(name) {
  if(whitelist.length == 64) return; //refuse to allow the whitelist to go below 64 songs

  whitelist.find((t,i) => {
    if(t.name === name) {
      //Remove it from the whitelist
      whitelist.splice(i, 1);
      let trackToBeRemoved = document.getElementById(name);
      trackToBeRemoved.parentNode.removeChild(trackToBeRemoved);

      //Add it to the blacklist
      blacklist.push(t);
      document.getElementById("blacklist").appendChild(createBlacklistButton(t));

      return true;
    }
  });
}

function add(name) {
  blacklist.find((t,i) => {
    if(t.name === name) {
      //Remove it from the blacklist
      blacklist.splice(i, 1);
      let trackToBeRemoved = document.getElementById(name);
      trackToBeRemoved.parentNode.removeChild(trackToBeRemoved);

      //Add it to the whitelist
      whitelist.push(t);
      document.getElementById("whitelist").appendChild(createWhitelistButton(t));

      return true;
    }
  });
}

function createWhitelistButton(item) {
  let songButton = document.createElement("div");
  songButton.setAttribute("onclick", 'remove("' + item.name + '")');
  songButton.setAttribute("id", item.name);
  songButton.setAttribute("class", "songButton");
  let trackNameP = document.createElement("p");
  let trackNameText = document.createTextNode(item.name);
  trackNameP.style.color = item.getAlbum().getTextColor();
  songButton.style.backgroundColor = item.getAlbum().getBackgroundColor();
  trackNameP.appendChild(trackNameText);
  songButton.appendChild(trackNameP);
  return songButton;
}

function createBlacklistButton(item) {
  let songButton = document.createElement("div");
  songButton.setAttribute("onclick", 'add("' + item.name + '")');
  songButton.setAttribute("id", item.name);
  songButton.setAttribute("class", "songButton");
  let trackNameP = document.createElement("p");
  let trackNameText = document.createTextNode(item.name);
  trackNameP.style.color = item.getAlbum().getTextColor();
  songButton.style.backgroundColor = item.getAlbum().getBackgroundColor();
  trackNameP.appendChild(trackNameText);
  songButton.appendChild(trackNameP);
  return songButton;
}

function loadBracket(artist, size) {
  var canvas = document.getElementById('bracket');
  var canvasStyle = getComputedStyle(canvas);
  context = canvas.getContext('2d');
  var initialX = 15;
  var initialY = 19;
  var x = initialX;
  var y = initialY;
  var LEVELS = Math.log2(size);
  var leftHalf = true;
  var verticalLineGap = 33;
  var currentSize = size;

  context.beginPath();
  context.fillStyle = "#ffffff";
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();

  middle_image = new Image();
  switch (artist) {
    case "KANYE": middle_image.src = 'images/kanyemadnesslogo' + Math.floor(Math.random() * 2) + '.png'
    break;
    case "DRIZZY": middle_image.src = 'images/drizzymadnesslogo0.png';
    break;
    case "KDOT": middle_image.src = 'images/kdotmadnesslogo0.png';
    break;
  }

  middle_image.onload = function() {
    context.drawImage(middle_image, 710, 290);
    context.fillStyle = "#ffffff";
    context.rect(776, 476, 368, 68);
    context.fill();
  }

  context.fillStyle = "#f9f9f9"; //faint grey watermark
  context.font = "35px Work Sans";
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 21; j++) {
      if(i == 2 && j == 0) { //draw one in dark grey at the middle top
        context.save();
        context.fillStyle = "#424141";
        context.fillText("ARTISTMADNESS.COM", 387 * i, 40 + 50 * j);
        context.restore();
      }
      else context.fillText("ARTISTMADNESS.COM", 387 * i, 40 + 50 * j);
    }
  }

  context.fillStyle = "#ff0000";
  context.lineWidth = 5;

  for(let level = 1; level < LEVELS; level++) {
    currentSize = (size / Math.pow(2, level - 1));
    for (let i = 0; i < currentSize; i++) {
      //have we switched halves from the left to the right of the bracket? If so, move coordinates to other half
      if(i > currentSize / 2 - 1 && leftHalf) {
        leftHalf = false;
        y = initialY;
        x = 1740 - HORIZONTAL_LINE_LENGTH * (level - 1);
      }

      //draw horizontal line
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + HORIZONTAL_LINE_LENGTH, y);
      context.stroke();

      //for every other pair of horizontal lines, connect them with a vertical line
      if(i % 2 == 0) {
        let verticalLineDistance;
        (leftHalf) ? verticalLineDistance = HORIZONTAL_LINE_LENGTH : verticalLineDistance = 0;
        context.moveTo(x + verticalLineDistance, y);
        context.lineTo(x + verticalLineDistance, y + verticalLineGap);
        context.stroke();
      }

      y+=verticalLineGap;
    }
    //adjustments after we move to the next level of the tournament
    leftHalf = true;
    initialX += HORIZONTAL_LINE_LENGTH;
    initialY += verticalLineGap / 2;
    x = initialX;
    y = initialY;
    verticalLineGap*=2;
  }
}

function restart(artist) {
  if(inProgress) {
    if(!confirm("Your bracket is still in progress. Are you sure you want to restart?")) return;
  }
  let generateButton = document.getElementById('restartButton');
  generateButton.id = "generateButton";
  generateButton.innerText = 'GENERATE BRACKET';
  loadBracket(artist, 64);
  generateButton.onclick = function() { generateBracket(artist, 64); };
  document.getElementById('titles').style.display = "flex";
  document.getElementById('lists').style.display = "flex";

  let elementsToRemove = [];
  document.getElementById('roundTitle').remove();
  elementsToRemove.push(document.getElementById('or'));
  elementsToRemove.push(document.getElementById('songChoiceDiv1'));
  elementsToRemove.push(document.getElementById('songChoiceDiv2'));
  elementsToRemove.forEach((element) => {
    if(element != null)
      element.remove();
  });
  currentRound = 1;
  currentSelection = 0;
  inProgress = false;
}

function setupRounds(artist, size) {
  let generateButton = document.getElementById('generateButton');
  generateButton.id = "restartButton";
  generateButton.innerText = 'RESTART';
  generateButton.onclick = function() { restart(artist); };
  document.getElementById('titles').style.display = "none";
  document.getElementById('lists').style.display = "none";

  var LEVELS = Math.log2(size);

  let roundTitle = document.createElement("H2");
  roundTitle.className = "roundInfo";
  roundTitle.id = "roundTitle";
  roundTitle.innerHTML = "ROUND " + currentRound;

  let or = document.createElement("H2");
  or.className = "roundInfo";
  or.id = "or";
  or.innerHTML = "OR";

  for(let i = 0; i < 2; i++) {
	  let choiceDiv = document.createElement("DIV");
	  choiceDiv.style.display = "flex";
	  choiceDiv.style.justifyContent = "center";
	  choiceDiv.id = "songChoiceDiv" + (i + 1);
	  choice = document.createElement("BUTTON");
	  choice.className = "songChoiceButton";
	  choice.id = "songChoiceButton" + (i + 1);
	  listen = document.createElement("BUTTON");
	  listen.className = "listenButton";
	  listen.id = "listenButton" + (i + 1);
	  listen.innerHTML = "LISTEN &#9654";
	  updateSelectionButton(choice, listen, i, artist);
	  choice.onclick = function() { advanceRound(i, size, LEVELS, artist); };
	  document.getElementById("select").prepend(choiceDiv);
	  choiceDiv.append(choice);
	  choiceDiv.append(listen);
	  if(i == 0) document.getElementById("select").prepend(or);
  }
  document.getElementById("select").prepend(roundTitle);
}

function advanceRound(choice, size, levels, artist) {
  let x = 15;
  let y = -13;
  var verticalLineGap = 33;
  verticalLineGap = verticalLineGap * Math.pow(2, currentRound);
  var currentSize = (size / Math.pow(2, currentRound - 1));
  x = x + HORIZONTAL_LINE_LENGTH * currentRound;
  y = y + (verticalLineGap/2) + (currentSelection * verticalLineGap);
  let choice1 = document.getElementById("songChoiceButton1");
  let choice2 = document.getElementById("songChoiceButton2");

  if(currentSelection >= currentSize / 4) {
    x = 1740 - HORIZONTAL_LINE_LENGTH * currentRound;
    y = (verticalLineGap/2) + ((currentSelection - (currentSize / 4)) * verticalLineGap) - 13;
  }
  if (choice == 0) {
    lineup.splice(currentSelection + 1, 1); //starting from current selection + 1, remove 1 element, thus keeping the first element
  }
  else if (choice == 1) {
    lineup.splice(currentSelection, 1); //starting from current selection, remove 1 element, thus keeping the second element
  }
  let selectedTrack = lineup[currentSelection];
  var canvas = document.getElementById('bracket'),
  context = canvas.getContext('2d');
  context.beginPath();
  context.fillStyle = selectedTrack.getAlbum().getBackgroundColor();
  if(currentRound < levels-1) {
    context.rect(x, y, 170, 28);
    context.fill();
    context.fillStyle = selectedTrack.getAlbum().getTextColor();
    context.font = "16px Work Sans";

    let textLength = context.measureText(selectedTrack.getName()).width;
    if(textLength > 165){ //if the text is overflowing out of its background rectangle, scrunch it down
      var scalex = (160 / textLength);
      context.save();
      context.scale(scalex, 1);
      context.fillText(selectedTrack.getName(), (x+5)/scalex, y + 20);
      context.restore();
    }
    else { //text is not overflowing
      context.fillText(selectedTrack.getName(), x + 5, y + 20);
    }
  }
  else if(lineup.length == 3) {
    context.rect(750, 580, 170, 28);
    context.fill();
    context.fillStyle = selectedTrack.getAlbum().getTextColor();
    context.font = "16px Work Sans";

    let textLength = context.measureText(selectedTrack.getName()).width;
    if(textLength > 165){ //if the text is overflowing out of its background rectangle, scrunch it down
      var scalex = (160 / textLength);
      context.save();
      context.scale(scalex, 1);
      context.fillText(selectedTrack.getName(), 755/scalex, 600);
      context.restore();
    }
    else { //text is not overflowing
      context.fillText(selectedTrack.getName(), 755, 600);
    }
  }
  else if(lineup.length == 2) {
    context.rect(1010, 580, 170, 28);
    context.fill();
    context.fillStyle = selectedTrack.getAlbum().getTextColor();
    context.font = "16px Work Sans";

    let textLength = context.measureText(selectedTrack.getName()).width;
    if(textLength > 165){ //if the text is overflowing out of its background rectangle, scrunch it down
      var scalex = (160 / textLength);
      context.save();
      context.scale(scalex, 1);
      context.fillText(selectedTrack.getName(), 1015/scalex, 600);
      context.restore();
    }
    else { //text is not overflowing
      context.fillText(selectedTrack.getName(), 1015, 600);
    }
  }
  else if(lineup.length == 1) { //Champion
    context.rect(780, 480, 360, 60);
    context.fill();

    context.font = "30px Work Sans";
    var metrics = context.measureText(selectedTrack.getName().toUpperCase());
    var scalex = (360 / metrics.width);
    var scaley = 2;
    context.save();
    context.scale(scalex, scaley);
    context.fillStyle = selectedTrack.getAlbum().getTextColor();
    context.fillText(selectedTrack.getName().toUpperCase(), 780/scalex, 530/scaley);
    context.restore();
  }
  if(currentRound >= levels) {
    if(choice == 0) {
      document.getElementById("songChoiceDiv2").remove();
      choice1.onclick = "";
    }
    else if (choice == 1) {
      document.getElementById("songChoiceDiv1").remove();
      choice2.onclick = "";
    }
    document.getElementById('roundTitle').innerHTML = "CHAMPION";
    document.getElementById('or').remove();
    inProgress = false;
    return;
  }
  else if (currentSelection + 1 >= currentSize / 2) {
    currentSelection = 0;
    currentRound++;
    let roundTitleText;
    switch(currentRound) {
      case levels: roundTitleText = "FINAL ROUND";
      break;
      case levels - 1: roundTitleText = "SEMI FINALS";
      break;
      case levels - 2: roundTitleText = "QTR FINALS";
      break;
      default: roundTitleText = "ROUND " + currentRound;
      break;
    }
    document.getElementById('roundTitle').innerHTML = roundTitleText;
  }
  else {
    currentSelection++;
  }
  updateSelectionButton(choice1, document.getElementById("listenButton1"), 0, artist);
  updateSelectionButton(choice2, document.getElementById("listenButton2"), 1, artist);
}

function updateSelectionButton(choice, listen, i, artist) {
  let currentTrack = lineup[currentSelection + i];
  choice.innerHTML = currentTrack.getName();
  choice.style.backgroundColor = currentTrack.getAlbum().getBackgroundColor();
  choice.style.color = currentTrack.getAlbum().getTextColor();
  listen.style.backgroundColor = "lime";

  if (currentTrack.getAltName() != null) {
    if (currentTrack.getAltName() == "") {
      listen.onclick = "";
      listen.style.backgroundColor = "grey";
    }
    else {
      listen.onclick = function () {
        window.open('https://songwhip.com/' + currentTrack.getAltName(), '_blank');
      };
    }
  }
  else {
    let songwhipArtistName = currentTrack.getAlbum().getArtist();
    let songwhipSongName = currentTrack.getName().toLowerCase();
    songwhipSongName = songwhipSongName.replace(/[&]/g, 'and'); //replace ampersands with 'and'
    songwhipSongName = songwhipSongName.replace(/[\\#,!+()|$~%.'":*?<>{}-]/g, ''); //remove every other special character
    songwhipSongName = songwhipSongName.replace(/[\s/]/g, '-'); //replace spaces and forward slashes with hyphens
    songwhipSongName = songwhipSongName.replace(/--+/g, '-') //replace multiple hyphens with only one
    listen.onclick = function () {
      window.open('https://songwhip.com/' + songwhipArtistName + '/' + songwhipSongName, '_blank');
    };
  }
}

function generateBracket(artist, size) {
  inProgress = true;
  var canvas = document.getElementById('bracket'),
  context = canvas.getContext('2d');
  //get 64 random tracks from the whitelist
  lineup = shuffle(whitelist);
  lineup = lineup.slice(0,64);

  var x = 0;
  var y = 10;
  var songCount = 0;

  lineup.forEach((song) => {
    //add the song to the bracket image
    context.beginPath();
    context.fillStyle = song.getAlbum().getBackgroundColor();
    context.rect(x, y, 170, 28);
    context.fill();

    context.fillStyle = song.getAlbum().getTextColor();
    context.font = "16px Work Sans";
    let textLength = context.measureText(song.getName()).width;

    if(textLength > 165){ //if the text is overflowing out of its background rectangle, scrunch it down
      var scalex = (160 / textLength);
      context.save();
      context.scale(scalex, 1);
      context.fillText(song.getName(), (x+5)/scalex, y + 20);
      context.restore();
    }
    else { //text is not overflowing
      context.fillText(song.getName(), x + 5, y + 20);
    }
    songCount++;
    y += 33;

    //if one half of the bracket has been filled, move to the other half
    if(songCount == size / 2){
      y = 10;
      x = 1750;
    }
  });

  logGeneration();
  setupRounds(artist, size);
}

function logGeneration() { //Sends a request to countapi.xyz to log how many brackets have been generated.
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/artistmadness.com/generations");
  xhr.responseType = "json";
  xhr.send();
}

function saveBracket() {
  var canvas = document.getElementById("bracket");
  var dataURL = canvas.toDataURL("image/png", 1.0);
  var a = document.createElement('a');
  a.href = dataURL;
  a.download = "artistmadnessbracket.png";
  document.body.appendChild(a);
  a.click();
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
