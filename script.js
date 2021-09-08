class Track {
  constructor(name, album) {
    this.name = name;
    this.album = album;
    this.backgroundColor = this.getBackgroundColor();
    this.textColor = this.getTextColor();
  }
  getName() {
    return this.name;
  }
  getBackgroundColor(){
    switch (this.album) {
      case 1: //CD
        return "#411218";
      case 2: //LR
        return "#000000";
      case 3: //Grad
        return "#853082";
      case 4: //808s
        return "#c2cece";
      case 5: //MBDTF
        return "#ed2140";
      case 6: //WTT
        return "#ae874c";
      case 7: //Cruel Summer
        return "#efefef";
      case 8: //Yeezus
        return "#ed2c18";
      case 9: //TLOP
        return "#f58b57";
      case 10: //Ye
        return "#5c81ae";
      case 11: //KSG
        return "#ea5e8d";
      case 12: //JIK
        return "#0000ff";
      case 13: //Yandhi
        return "#c88dc8";
      case 14: //GOOD Fridays 2010
        return "#181713";
      case 15: //2015 singles
        return "#000000";
      case 16: //2018 singles - hot pink
        return "#ff69b4";
      case 17: //WUITB
        return "#2b201e";
      case 18: //Donda
        return "#000000";
      default:
        return "#ffffff";
    }
  }
  getTextColor(){
    switch (this.album) {
      case 1: //CD
        return "#e8982e";
      case 2: //LR
        return "#caaf09";
      case 3: //Grad
        return "#dcd9b6";
      case 4: //808s
        return "#b72124";
      case 5: //MBDTF
        return "#e0af70";
      case 6: //WTT
        return "#000000";
      case 7: //Cruel Summer
        return "#3a3a3a";
      case 8: //Yeezus
        return "#ffffff";
      case 9: //TLOP
        return "#000000";
      case 10: //Ye
        return "#2cea4c";
      case 11: //KSG
        return "#014e8a";
      case 12: //JIK
        return "#fdeb3f";
      case 13: //Yandhi
        return "#000000";
      case 14: //GOOD Fridays 2010
        return "#d9352c";
      case 15: //2015 singles
        return "#ffffff"
      case 16: //2018 singles
        return "#000000";
      case 17: //WUITB
        return "#dddcda";
      case 18: //Donda
        return "#ffffff";
      default:
        return "#000000";
    }
  }
}

var whitelist = [];
var blacklist = [];

function loadLists() {
  whitelist.push(new Track("We Don't Care", 1));
  whitelist.push(new Track("All Falls Down", 1));
  whitelist.push(new Track("Spaceship", 1));
  whitelist.push(new Track("Jesus Walks", 1));
  whitelist.push(new Track("Never Let Me Down", 1));
  whitelist.push(new Track("Get Em High", 1));
  whitelist.push(new Track("The New Workout Plan", 1));
  whitelist.push(new Track("Slow Jamz", 1));
  whitelist.push(new Track("Breathe In Breathe Out", 1));
  whitelist.push(new Track("School Spirit", 1));
  whitelist.push(new Track("Two Words", 1));
  whitelist.push(new Track("Through The Wire", 1));
  whitelist.push(new Track("Family Business", 1));
  whitelist.push(new Track("Last Call", 1));
  whitelist.push(new Track("Heard 'Em Say", 2));
  whitelist.push(new Track("Touch The Sky", 2));
  whitelist.push(new Track("Gold Digger", 2));
  whitelist.push(new Track("Drive Slow", 2));
  whitelist.push(new Track("My Way Home", 2));
  whitelist.push(new Track("Crack Music", 2));
  whitelist.push(new Track("Roses", 2));
  whitelist.push(new Track("Bring Me Down", 2));
  whitelist.push(new Track("Addiction", 2));
  whitelist.push(new Track("Diamonds (Remix)", 2));
  whitelist.push(new Track("We Major", 2));
  whitelist.push(new Track("Hey Mama", 2));
  whitelist.push(new Track("Celebration", 2));
  whitelist.push(new Track("Gone", 2));
  whitelist.push(new Track("Diamonds (Solo)", 2));
  whitelist.push(new Track("Late", 2));
  whitelist.push(new Track("Good Morning", 3));
  whitelist.push(new Track("Champion", 3));
  whitelist.push(new Track("Stronger", 3));
  whitelist.push(new Track("I Wonder", 3));
  whitelist.push(new Track("Good Life", 3));
  whitelist.push(new Track("Can't Tell Me Nothing", 3));
  whitelist.push(new Track("Barry Bonds", 3));
  whitelist.push(new Track("Drunk and Hot Girls", 3));
  whitelist.push(new Track("Flashing Lights", 3));
  whitelist.push(new Track("Everything I Am", 3));
  whitelist.push(new Track("The Glory", 3));
  whitelist.push(new Track("Homecoming", 3));
  whitelist.push(new Track("Big Brother", 3));
  whitelist.push(new Track("Say You Will", 4));
  whitelist.push(new Track("Welcome to Heartbreak", 4));
  whitelist.push(new Track("Heartless", 4));
  whitelist.push(new Track("Amazing", 4));
  whitelist.push(new Track("Love Lockdown", 4));
  whitelist.push(new Track("Paranoid", 4));
  whitelist.push(new Track("RoboCop", 4));
  whitelist.push(new Track("Street Lights", 4));
  whitelist.push(new Track("Bad News", 4));
  whitelist.push(new Track("See You in My Nightmares", 4));
  whitelist.push(new Track("Coldest Winter", 4));
  whitelist.push(new Track("Pinocchio Story", 4));
  whitelist.push(new Track("Dark Fantasy", 5));
  whitelist.push(new Track("Gorgeous", 5));
  whitelist.push(new Track("POWER", 5));
  whitelist.push(new Track("All of the Lights", 5));
  whitelist.push(new Track("Monster", 5));
  whitelist.push(new Track("So Appalled", 5));
  whitelist.push(new Track("Devil in a New Dress", 5));
  whitelist.push(new Track("Runaway", 5));
  whitelist.push(new Track("Hell of a Life", 5));
  whitelist.push(new Track("Blame Game", 5));
  whitelist.push(new Track("Lost in the World", 5));
  whitelist.push(new Track("No Church in the Wild", 6));
  whitelist.push(new Track("Lift Off", 6));
  whitelist.push(new Track("Ni**as in Paris", 6));
  whitelist.push(new Track("Otis", 6));
  whitelist.push(new Track("Gotta Have It", 6));
  whitelist.push(new Track("New Day", 6));
  whitelist.push(new Track("That's My Bitch", 6));
  whitelist.push(new Track("Welcome to the Jungle", 6));
  whitelist.push(new Track("Who Gon Stop Me", 6));
  whitelist.push(new Track("Murder to Excellence", 6));
  whitelist.push(new Track("Made in America", 6));
  whitelist.push(new Track("Why I Love You", 6));
  whitelist.push(new Track("Illest Motherfucker Alive", 6));
  whitelist.push(new Track("H.A.M", 6));
  whitelist.push(new Track("Primetime", 6));
  whitelist.push(new Track("The Joy", 6));
  whitelist.push(new Track("To The World", 7));
  whitelist.push(new Track("Clique", 7));
  whitelist.push(new Track("Mercy", 7));
  whitelist.push(new Track("New God Flow", 7));
  whitelist.push(new Track("The Morning", 7));
  whitelist.push(new Track("Cold", 7));
  whitelist.push(new Track("The One", 7));
  whitelist.push(new Track("I Don't Like", 7));
  whitelist.push(new Track("On Sight", 8));
  whitelist.push(new Track("Black Skinhead", 8));
  whitelist.push(new Track("I Am a God", 8));
  whitelist.push(new Track("New Slaves", 8));
  whitelist.push(new Track("Hold My Liquor", 8));
  whitelist.push(new Track("I'm In It", 8));
  whitelist.push(new Track("Blood on the Leaves", 8));
  whitelist.push(new Track("Guilt Trip", 8));
  whitelist.push(new Track("Send It Up", 8));
  whitelist.push(new Track("Bound 2", 8));
  whitelist.push(new Track("Ultralight Beam", 9));
  whitelist.push(new Track("FSMH Pt. 1", 9));
  whitelist.push(new Track("Pt. 2", 9));
  whitelist.push(new Track("Famous", 9));
  whitelist.push(new Track("Feedback", 9));
  whitelist.push(new Track("Highlights", 9));
  whitelist.push(new Track("Freestyle 4", 9));
  whitelist.push(new Track("Waves", 9));
  whitelist.push(new Track("FML", 9));
  whitelist.push(new Track("Real Friends", 9));
  whitelist.push(new Track("Wolves", 9));
  whitelist.push(new Track("30 Hours", 9));
  whitelist.push(new Track("No More Parties in LA", 9));
  whitelist.push(new Track("Facts", 9));
  whitelist.push(new Track("Fade", 9));
  whitelist.push(new Track("Saint Pablo", 9));
  whitelist.push(new Track("I Thought About Killing You", 10));
  whitelist.push(new Track("Yikes", 10));
  whitelist.push(new Track("All Mine", 10));
  whitelist.push(new Track("Wouldn't Leave", 10));
  whitelist.push(new Track("No Mistakes", 10));
  whitelist.push(new Track("Ghost Town", 10));
  whitelist.push(new Track("Violent Crimes", 10));
  whitelist.push(new Track("Feel the Love", 11));
  whitelist.push(new Track("Fire", 11));
  whitelist.push(new Track("4th Dimension", 11));
  whitelist.push(new Track("Freeee", 11));
  whitelist.push(new Track("Reborn", 11));
  whitelist.push(new Track("Kids See Ghosts", 11));
  whitelist.push(new Track("Cudi Montage", 11));
  whitelist.push(new Track("Selah", 12));
  whitelist.push(new Track("Follow God", 12));
  whitelist.push(new Track("Closed On Sunday", 12));
  whitelist.push(new Track("On God", 12));
  whitelist.push(new Track("Everything We Need", 12));
  whitelist.push(new Track("Water", 12));
  whitelist.push(new Track("God Is", 12));
  whitelist.push(new Track("Hands On", 12));
  whitelist.push(new Track("Use This Gospel", 12));
  whitelist.push(new Track("Jail", 18));
  whitelist.push(new Track("God Breathed", 18));
  whitelist.push(new Track("Off The Grid", 18));
  whitelist.push(new Track("Hurricane", 18));
  whitelist.push(new Track("Praise God", 18));
  whitelist.push(new Track("Jonah", 18));
  whitelist.push(new Track("Ok Ok", 18));
  whitelist.push(new Track("Junya", 18));
  whitelist.push(new Track("Believe What I Say", 18));
  whitelist.push(new Track("24", 18));
  whitelist.push(new Track("Remote Control", 18));
  whitelist.push(new Track("Moon", 18));
  whitelist.push(new Track("Heaven and Hell", 18));
  whitelist.push(new Track("Donda", 18));
  whitelist.push(new Track("Keep My Spirit Alive", 18));
  whitelist.push(new Track("Jesus Lord", 18));
  whitelist.push(new Track("New Again", 18));
  whitelist.push(new Track("Lord I Need You", 18));
  whitelist.push(new Track("Pure Souls", 18));
  whitelist.push(new Track("Come to Life", 18));
  whitelist.push(new Track("No Child Left Behind", 18));

  let wl = document.getElementById("whitelist");
  whitelist.forEach((item) => {
    wl.appendChild(createWhitelistButton(item));
  });

  blacklist.push(new Track("Back to Basics", 2));
  blacklist.push(new Track("We Can Make It Better", 2));
  blacklist.push(new Track("Good Night", 3));
  blacklist.push(new Track("Bittersweet Poetry", 3));
  blacklist.push(new Track("POWER (Remix)", 14));
  blacklist.push(new Track("G.O.O.D Friday", 14));
  blacklist.push(new Track("Lord Lord Lord", 14));
  blacklist.push(new Track("Christian Dior Denim Flow", 14));
  blacklist.push(new Track("Don't Stop!", 14));
  blacklist.push(new Track("Take One for the Team", 14));
  blacklist.push(new Track("Don't Look Down", 14));
  blacklist.push(new Track("Looking for Trouble", 14));
  blacklist.push(new Track("Chain Heavy", 14));
  blacklist.push(new Track("Christmas in Harlem", 14));
  blacklist.push(new Track("See Me Now", 5));
  blacklist.push(new Track("Only One", 15));
  blacklist.push(new Track("FourFiveSeconds", 15));
  blacklist.push(new Track("All Day", 15));
  blacklist.push(new Track("XTCY", 16));
  blacklist.push(new Track("I Love It", 16));
  blacklist.push(new Track("Ye vs. the People", 16));
  blacklist.push(new Track("Lift Yourself", 16));
  blacklist.push(new Track("Wash Us in the Blood", 17));
  blacklist.push(new Track("Jail pt 2", 18));
  blacklist.push(new Track("Ok Ok pt 2", 18));
  blacklist.push(new Track("Junya pt 2", 18));
  blacklist.push(new Track("Jesus Lord pt 2", 18));

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
  trackNameP.style.color = item.getTextColor();
  songButton.style.backgroundColor = item.getBackgroundColor();
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
  trackNameP.style.color = item.getTextColor();
  songButton.style.backgroundColor = item.getBackgroundColor();
  trackNameP.appendChild(trackNameText);
  songButton.appendChild(trackNameP);
  return songButton;
}

function loadBracket(size) {
  var canvas = document.getElementById('bracket');
  var canvasStyle = getComputedStyle(canvas);
  context = canvas.getContext('2d');

  base_image = new Image();
  //base_image.src = 'images/pablobrackettemplate.png';
  //base_image.onload = function(){
  context.drawImage(base_image, 0, 0);

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
    context.beginPath();
    context.fillStyle = song.getBackgroundColor();
    context.rect(x, y, 170, 28);
    context.fill();

    context.fillStyle = song.getTextColor();
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
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
