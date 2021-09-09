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

var whitelist = [];
var blacklist = [];

function loadLists() {
  var tcd = new Album("#411218", "#e8982e");
  var lr = new Album("#000000", "#caaf09");
  var grad = new Album("#853082", "#dcd9b6");
  var heartbreak = new Album("#c2cece", "#b72124");
  var mbdtf = new Album("#ed2140", "#e0af70");
  var wtt = new Album("#ae874c", "#000000");
  var cs = new Album("#efefef", "#3a3a3a");
  var yeez = new Album("#ed2c18", "#ffffff");
  var tlop = new Album("#f58b57", "#000000");
  var ye = new Album("#5c81ae", "#2cea4c");
  var ksg = new Album("#ea5e8d", "#014e8a");
  var jik = new Album("#0000ff", "#fdeb3f");
  var yand = new Album("#c88dc8", "#000000");
  var singles2010 = new Album("#181713", "#d9352c");
  var singles2015 = new Album("#000000", "#ffffff");
  var singles2018 = new Album("#ff69b4", "#000000");
  var wuitb = new Album("#2b201e", "#dddcda");
  var dond = new Album("#000000", "#ffffff");

  whitelist.push(new Track("We Don't Care", tcd));
  whitelist.push(new Track("All Falls Down", tcd));
  whitelist.push(new Track("Spaceship", tcd));
  whitelist.push(new Track("Jesus Walks", tcd));
  whitelist.push(new Track("Never Let Me Down", tcd));
  whitelist.push(new Track("Get Em High", tcd));
  whitelist.push(new Track("The New Workout Plan", tcd));
  whitelist.push(new Track("Slow Jamz", tcd));
  whitelist.push(new Track("Breathe In Breathe Out", tcd));
  whitelist.push(new Track("School Spirit", tcd));
  whitelist.push(new Track("Two Words", tcd));
  whitelist.push(new Track("Through The Wire", tcd));
  whitelist.push(new Track("Family Business", tcd));
  whitelist.push(new Track("Last Call", tcd));
  whitelist.push(new Track("Heard 'Em Say", lr));
  whitelist.push(new Track("Touch The Sky", lr));
  whitelist.push(new Track("Gold Digger", lr));
  whitelist.push(new Track("Drive Slow", lr));
  whitelist.push(new Track("My Way Home", lr));
  whitelist.push(new Track("Crack Music", lr));
  whitelist.push(new Track("Roses", lr));
  whitelist.push(new Track("Bring Me Down", lr));
  whitelist.push(new Track("Addiction", lr));
  whitelist.push(new Track("Diamonds (Remix)", lr));
  whitelist.push(new Track("We Major", lr));
  whitelist.push(new Track("Hey Mama", lr));
  whitelist.push(new Track("Celebration", lr));
  whitelist.push(new Track("Gone", lr));
  whitelist.push(new Track("Diamonds (Solo)", lr));
  whitelist.push(new Track("Late", lr));
  whitelist.push(new Track("Good Morning", grad));
  whitelist.push(new Track("Champion", grad));
  whitelist.push(new Track("Stronger", grad));
  whitelist.push(new Track("I Wonder", grad));
  whitelist.push(new Track("Good Life", grad));
  whitelist.push(new Track("Can't Tell Me Nothing", grad));
  whitelist.push(new Track("Barry Bonds", grad));
  whitelist.push(new Track("Drunk and Hot Girls", grad));
  whitelist.push(new Track("Flashing Lights", grad));
  whitelist.push(new Track("Everything I Am", grad));
  whitelist.push(new Track("The Glory", grad));
  whitelist.push(new Track("Homecoming", grad));
  whitelist.push(new Track("Big Brother", grad));
  whitelist.push(new Track("Say You Will", heartbreak));
  whitelist.push(new Track("Welcome to Heartbreak", heartbreak));
  whitelist.push(new Track("Heartless", heartbreak));
  whitelist.push(new Track("Amazing", heartbreak));
  whitelist.push(new Track("Love Lockdown", heartbreak));
  whitelist.push(new Track("Paranoid", heartbreak));
  whitelist.push(new Track("RoboCop", heartbreak));
  whitelist.push(new Track("Street Lights", heartbreak));
  whitelist.push(new Track("Bad News", heartbreak));
  whitelist.push(new Track("See You in My Nightmares", heartbreak));
  whitelist.push(new Track("Coldest Winter", heartbreak));
  whitelist.push(new Track("Pinocchio Story", heartbreak));
  whitelist.push(new Track("Dark Fantasy", mbdtf));
  whitelist.push(new Track("Gorgeous", mbdtf));
  whitelist.push(new Track("POWER", mbdtf));
  whitelist.push(new Track("All of the Lights", mbdtf));
  whitelist.push(new Track("Monster", mbdtf));
  whitelist.push(new Track("So Appalled", mbdtf));
  whitelist.push(new Track("Devil in a New Dress", mbdtf));
  whitelist.push(new Track("Runaway", mbdtf));
  whitelist.push(new Track("Hell of a Life", mbdtf));
  whitelist.push(new Track("Blame Game", mbdtf));
  whitelist.push(new Track("Lost in the World", mbdtf));
  whitelist.push(new Track("No Church in the Wild", wtt));
  whitelist.push(new Track("Lift Off", wtt));
  whitelist.push(new Track("Ni**as in Paris", wtt));
  whitelist.push(new Track("Otis", wtt));
  whitelist.push(new Track("Gotta Have It", wtt));
  whitelist.push(new Track("New Day", wtt));
  whitelist.push(new Track("That's My Bitch", wtt));
  whitelist.push(new Track("Welcome to the Jungle", wtt));
  whitelist.push(new Track("Who Gon Stop Me", wtt));
  whitelist.push(new Track("Murder to Excellence", wtt));
  whitelist.push(new Track("Made in America", wtt));
  whitelist.push(new Track("Why I Love You", wtt));
  whitelist.push(new Track("Illest Motherfucker Alive", wtt));
  whitelist.push(new Track("H.A.M", wtt));
  whitelist.push(new Track("Primetime", wtt));
  whitelist.push(new Track("The Joy", wtt));
  whitelist.push(new Track("To The World", cs));
  whitelist.push(new Track("Clique", cs));
  whitelist.push(new Track("Mercy", cs));
  whitelist.push(new Track("New God Flow", cs));
  whitelist.push(new Track("The Morning", cs));
  whitelist.push(new Track("Cold", cs));
  whitelist.push(new Track("The One", cs));
  whitelist.push(new Track("I Don't Like", cs));
  whitelist.push(new Track("On Sight", yeez));
  whitelist.push(new Track("Black Skinhead", yeez));
  whitelist.push(new Track("I Am a God", yeez));
  whitelist.push(new Track("New Slaves", yeez));
  whitelist.push(new Track("Hold My Liquor", yeez));
  whitelist.push(new Track("I'm In It", yeez));
  whitelist.push(new Track("Blood on the Leaves", yeez));
  whitelist.push(new Track("Guilt Trip", yeez));
  whitelist.push(new Track("Send It Up", yeez));
  whitelist.push(new Track("Bound 2", yeez));
  whitelist.push(new Track("Ultralight Beam", tlop));
  whitelist.push(new Track("FSMH Pt. 1", tlop));
  whitelist.push(new Track("Pt. 2", tlop));
  whitelist.push(new Track("Famous", tlop));
  whitelist.push(new Track("Feedback", tlop));
  whitelist.push(new Track("Highlights", tlop));
  whitelist.push(new Track("Freestyle 4", tlop));
  whitelist.push(new Track("Waves", tlop));
  whitelist.push(new Track("FML", tlop));
  whitelist.push(new Track("Real Friends", tlop));
  whitelist.push(new Track("Wolves", tlop));
  whitelist.push(new Track("30 Hours", tlop));
  whitelist.push(new Track("No More Parties in LA", tlop));
  whitelist.push(new Track("Facts", tlop));
  whitelist.push(new Track("Fade", tlop));
  whitelist.push(new Track("Saint Pablo", tlop));
  whitelist.push(new Track("I Thought About Killing You", ye));
  whitelist.push(new Track("Yikes", ye));
  whitelist.push(new Track("All Mine", ye));
  whitelist.push(new Track("Wouldn't Leave", ye));
  whitelist.push(new Track("No Mistakes", ye));
  whitelist.push(new Track("Ghost Town", ye));
  whitelist.push(new Track("Violent Crimes", ye));
  whitelist.push(new Track("Feel the Love", ksg));
  whitelist.push(new Track("Fire", ksg));
  whitelist.push(new Track("4th Dimension", ksg));
  whitelist.push(new Track("Freeee", ksg));
  whitelist.push(new Track("Reborn", ksg));
  whitelist.push(new Track("Kids See Ghosts", ksg));
  whitelist.push(new Track("Cudi Montage", ksg));
  whitelist.push(new Track("Selah", jik));
  whitelist.push(new Track("Follow God", jik));
  whitelist.push(new Track("Closed On Sunday", jik));
  whitelist.push(new Track("On God", jik));
  whitelist.push(new Track("Everything We Need", jik));
  whitelist.push(new Track("Water", jik));
  whitelist.push(new Track("God Is", jik));
  whitelist.push(new Track("Hands On", jik));
  whitelist.push(new Track("Use This Gospel", jik));
  whitelist.push(new Track("Jail", dond));
  whitelist.push(new Track("God Breathed", dond));
  whitelist.push(new Track("Off The Grid", dond));
  whitelist.push(new Track("Hurricane", dond));
  whitelist.push(new Track("Praise God", dond));
  whitelist.push(new Track("Jonah", dond));
  whitelist.push(new Track("Ok Ok", dond));
  whitelist.push(new Track("Junya", dond));
  whitelist.push(new Track("Believe What I Say", dond));
  whitelist.push(new Track("24", dond));
  whitelist.push(new Track("Remote Control", dond));
  whitelist.push(new Track("Moon", dond));
  whitelist.push(new Track("Heaven and Hell", dond));
  whitelist.push(new Track("Donda", dond));
  whitelist.push(new Track("Keep My Spirit Alive", dond));
  whitelist.push(new Track("Jesus Lord", dond));
  whitelist.push(new Track("New Again", dond));
  whitelist.push(new Track("Lord I Need You", dond));
  whitelist.push(new Track("Pure Souls", dond));
  whitelist.push(new Track("Come to Life", dond));
  whitelist.push(new Track("No Child Left Behind", dond));

  let wl = document.getElementById("whitelist");
  whitelist.forEach((item) => {
    wl.appendChild(createWhitelistButton(item));
  });

  blacklist.push(new Track("Back to Basics", lr));
  blacklist.push(new Track("We Can Make It Better", lr));
  blacklist.push(new Track("Good Night", grad));
  blacklist.push(new Track("Bittersweet Poetry", grad));
  blacklist.push(new Track("POWER (Remix)", singles2010));
  blacklist.push(new Track("G.O.O.D Friday", singles2010));
  blacklist.push(new Track("Lord Lord Lord", singles2010));
  blacklist.push(new Track("Christian Dior Denim Flow", singles2010));
  blacklist.push(new Track("Don't Stop!", singles2010));
  blacklist.push(new Track("Take One for the Team", singles2010));
  blacklist.push(new Track("Don't Look Down", singles2010));
  blacklist.push(new Track("Looking for Trouble", singles2010));
  blacklist.push(new Track("Chain Heavy", singles2010));
  blacklist.push(new Track("Christmas in Harlem", singles2010));
  blacklist.push(new Track("See Me Now", mbdtf));
  blacklist.push(new Track("Only One", singles2015));
  blacklist.push(new Track("FourFiveSeconds", singles2015));
  blacklist.push(new Track("All Day", singles2015));
  blacklist.push(new Track("XTCY", singles2018));
  blacklist.push(new Track("I Love It", singles2018));
  blacklist.push(new Track("Ye vs. the People", singles2018));
  blacklist.push(new Track("Lift Yourself", singles2018));
  blacklist.push(new Track("Wash Us in the Blood", wuitb));
  blacklist.push(new Track("Jail pt 2", dond));
  blacklist.push(new Track("Ok Ok pt 2", dond));
  blacklist.push(new Track("Junya pt 2", dond));
  blacklist.push(new Track("Jesus Lord pt 2", dond));

  let bl = document.getElementById("blacklist");
  blacklist.forEach((item) => {
    bl.appendChild(createBlacklistButton(item));
  });
}

function remove(name) {
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

function loadBracket(size) {
  var canvas = document.getElementById('bracket');
  var canvasStyle = getComputedStyle(canvas);
  context = canvas.getContext('2d');

  //base_image = new Image();
  //base_image.src = 'images/pablobrackettemplate.png';
  //base_image.onload = function(){
  //context.drawImage(base_image, 0, 0);

  context.beginPath();
  context.fillStyle = "#ffffff";
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();

  var initialX = 15;
  var initialY = 20;
  var x = initialX;
  var y = initialY;
  var HORIZONTAL_LINE_LENGTH = 165;
  var LEVELS = Math.log(size, 2);
  var leftHalf = true;
  var verticalLineGap = 33;
  context.fillStyle = "#ff0000";
  context.lineWidth = 5;

  for(let level = 1; level < LEVELS; level++) {
    for (let i = 0; i < (size / level); i++) {

      //have we switched halves from the left to the right of the bracket? If so, move coordinates to other half
      if(i > (size/level) / 2 - 1 && leftHalf) {
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

function restart() {
  let generateButton = document.getElementById('restartButton');
  generateButton.id = "generateButton";
  generateButton.innerText = 'GENERATE BRACKET';
  loadBracket(64);
  generateButton.onclick = function() { generateBracket(64); };
  document.getElementById('titles').style.visibility = "visible";
  document.getElementById('lists').style.visibility = "visible";
}

function setupRounds() {
  let generateButton = document.getElementById('generateButton');
  generateButton.id = "restartButton";
  generateButton.innerText = 'RESTART';
  generateButton.onclick = function() { restart(); };
  document.getElementById('titles').style.visibility = "hidden";
  document.getElementById('lists').style.visibility = "hidden";
}

function generateBracket(size) {
  var canvas = document.getElementById('bracket'),
  context = canvas.getContext('2d');

  //get 64 random tracks from the whitelist
  let lineup = shuffle(whitelist);
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
    context.font = "16px Arial";
    context.fillText(song.getName(), x + 5, y + 20);

    songCount++;
    y += 33;

    //if one half of the bracket has been filled, move to the other half
    if(songCount == size / 2){
      y = 10;
      x = 1750;
    }
  });

  setupRounds();
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
