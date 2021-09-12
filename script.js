class Track {
  constructor(name, album) {
    this.name = name;
    this.album = album;
  }
  getName() {
    return this.name;
  }
  getAlbum() {
    return this.album;
  }
}

class Album {
  constructor(backgroundColor, textColor) {
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
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
var HORIZONTAL_LINE_LENGTH = 165;

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
      case "DRAKE": artistDataObj = artData.DRAKE;
      break;
    }
    artistDataObj.albums.forEach((album) => {
      let albumObj = new Album(album.bgColor, album.fgColor);
      album.songs.forEach((song) => {
        whitelist.push(new Track(song, albumObj));
      });
      album.blacklistSongs.forEach((song) => {
        blacklist.push(new Track(song, albumObj));
      })
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
    case "DRAKE": middle_image.src = 'images/kanyemadnesslogo0.png';
    break;
  }

  middle_image.onload = function() {
    context.drawImage(middle_image, 710, 290);
    context.fillStyle = "#ffffff";
    context.rect(776, 476, 368, 68);
    context.fill();
  }

  context.fillStyle = "#000000";
  context.font = "44px Work Sans";
  context.fillText("ARTISTMADNESS.COM", 727, 50);

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
  elementsToRemove.push(document.getElementById('songChoiceButton1'));
  elementsToRemove.push(document.getElementById('songChoiceButton2'));
  elementsToRemove.forEach((element) => {
    if(element != null)
      element.remove();
  });
  currentRound = 1;
  currentSelection = 0;
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

  let choice1 = document.createElement("BUTTON");
  let choice2 = document.createElement("BUTTON");
  choice1.className = "songChoiceButton";
  choice2.className = "songChoiceButton";
  choice1.id = "songChoiceButton1";
  choice2.id = "songChoiceButton2";
  updateSelectionButtons(choice1, choice2);
  choice1.onclick = function() { advanceRound(0, size, LEVELS); };
  choice2.onclick = function() { advanceRound(1, size, LEVELS); };

  document.getElementById("select").prepend(choice2);
  document.getElementById("select").prepend(or);
  document.getElementById("select").prepend(choice1);
  document.getElementById("select").prepend(roundTitle);
}

function advanceRound(choice, size, levels) {
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
    context.fillText(selectedTrack.getName(), x + 5, y + 20);
  }
  else if(lineup.length == 3) {
    context.rect(750, 580, 170, 28);
    context.fill();

    context.fillStyle = selectedTrack.getAlbum().getTextColor();
    context.font = "16px Work Sans";
    context.fillText(selectedTrack.getName(), 755, 600);
  }
  else if(lineup.length == 2) {
    context.rect(1010, 580, 170, 28);
    context.fill();

    context.fillStyle = selectedTrack.getAlbum().getTextColor();
    context.font = "16px Work Sans";
    context.fillText(selectedTrack.getName(), 1015, 600);
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
      choice2.remove();
      choice1.onclick = "";
    }
    else if (choice == 1) {
      choice1.remove();
      choice2.onclick = "";
    }
    document.getElementById('roundTitle').innerHTML = "CHAMPION";
    document.getElementById('or').remove();
    finishRounds();
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
  updateSelectionButtons(choice1, choice2);
}

function updateSelectionButtons(choice1, choice2) {
  choice1.innerHTML = lineup[currentSelection].getName();
  choice2.innerHTML = lineup[currentSelection+1].getName();
  choice1.style.backgroundColor = lineup[currentSelection].getAlbum().getBackgroundColor();
  choice2.style.backgroundColor = lineup[currentSelection+1].getAlbum().getBackgroundColor();
  choice1.style.color = lineup[currentSelection].getAlbum().getTextColor();
  choice2.style.color = lineup[currentSelection+1].getAlbum().getTextColor();
}

function finishRounds() {
  //hide button
}

function generateBracket(artist, size) {
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

  setupRounds(artist, size);
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
