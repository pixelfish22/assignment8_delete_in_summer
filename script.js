//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
  'author': 'Churchill',
  'year': 1940,
  'yearIsBCE': false,
  'authorAge': '66'
},
  ghandiSpeech = {
    'author': 'Ghandi',
    'year': 1942,
    'yearIsBCE': false,
    'authorAge': '73'
  },
  demosthenesSpeech = {
    'author': 'Demosthenes',
    'year': 342,
    'yearIsBCE': true,
    'authorAge': '42'
  },
  speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
  donatePrompt;

function getAuthorAndYearString(speech) {
  return "This speech was written by " + speech.author + " in " + speech.year + "<br>"
}

function displayBCEString(isBCE) {

  return isBCE ? 'This speech took place before the common era.<br>' : 'This speech took place during the common era.<br>';
}
function getOldestOrYoungestString(speech) {
  // return
  var oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

  for (var i = 0; i < speechesArray.length; i++) {
    if (speechesArray[i].year < oldest) {
      oldest = speechesArray[i].year;
    }
    if (speechesArray[i].year > newest) {
      newest = speechesArray[i].year;
    }
  }

  if (speech.year === oldest) {
    return 'This is the oldest speech on the page.<br>';
  }
  if (speech.year === newest) {
    return 'This is the most recent speech on the page.<br>';
  }
  return 'This is neither the most recent nor the oldest speech on the page';
}

document.getElementById('BtnDonate').addEventListener('click', function () {
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
    donationText,
    articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if (donatePrompt >= 100) {
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for (var i = 0; i < articleElements.length; i++) {
      articleElements[i].className = 'generous-donation';
    }
  } else {
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function () {
  var speech = speechesArray[0];

  var responseString = '';
  responseString += getAuthorAndYearString(speech);
  responseString += displayBCEString(speech.isBCE);
  responseString += getOldestOrYoungestString(speech);
  document.getElementById('ConsoleDisplay').innerHTML = responseString;

});

document.getElementById('BtnGhandi').addEventListener('click', function () {
  var speech = speechesArray[1];

  var responseString = '';
  responseString += getAuthorAndYearString(speech);
  responseString += displayBCEString(speech.isBCE);
  responseString += getOldestOrYoungestString(speech);
  document.getElementById('ConsoleDisplay').innerHTML = responseString;
});

document.getElementById('BtnDemosthenes').addEventListener('click', function () {
  var speech = speechesArray[2];

  var responseString = '';
  responseString += getAuthorAndYearString(speech);
  responseString += displayBCEString(speech.isBCE);
  responseString += getOldestOrYoungestString(speech);
  document.getElementById('ConsoleDisplay').innerHTML = responseString;
});