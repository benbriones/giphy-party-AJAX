"use strict";
console.log("Let's get this party started!");


const $input = $('#gif-input');
const $removeButton = $('#delete-btn');
const $searchButton = $('#search-btn');
const $gifContainer = $('.gif-container');


/** grabs value of the search input, get request*/
async function handleSearch(evt) {

  let searchWord = $input.val();
  let imageLink = await getGif(searchWord); // update to getGifURL
  addGif(imageLink);
}

/** adds gif to container */
function addGif(link) { // change link to URL, make img tag instead
  console.log(link)
  let $newDiv = $('<div>')
  $newDiv
  .css('background-image', `url(${link})`)
  .css('width', '200px')
  .css('height', '200px')
  .css('display', 'inline-block')
  .css('background-size', 'cover')
  $gifContainer.append($newDiv);
}

async function getGif(gifText) {
  const params = new URLSearchParams({
    q: gifText,
    api_key: '75kHAOPE0Kfpdc6m3hqE4wFZMjbxFM4t',
    limit: 1
  });

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const gifImage = await response.json();
  // how to make random? - random index from how many gifs are given
  const newGif = gifImage.data[0].images.original.url;
  // return await gifImage.data[0].url;
  return newGif;
}

function removeGifs() {
  // evt.preventDefault();
  $gifContainer.empty();
}

$searchButton.on('click', handleSearch);
$removeButton.on('click', removeGifs);