"use strict";
console.log("Let's get this party started!");


const $input = $('#gif-input');
const $removeButton = $('#delete-btn');
const $searchButton = $('#search-btn');
const $gifContainer = $('.gif-container');


/** grabs value of the search input, get request*/
async function handleSearch(evt) {
  evt.preventDefault();
  let searchWord = $input.val();
  let imageLink = await getGifURL(searchWord);
  addGif(imageLink);
}

/** adds gif to container */
function addGif(url) {
  let $newDiv = $('<div>');
  let $newImage = $("<img>")
    .attr('src', url)
    .css('object-fit', 'cover');

  $newDiv.css('display', 'inline-block');

  $newDiv.append($newImage);
  $gifContainer.append($newDiv);
}

/** takes search input and returns url of a matching gif */
async function getGifURL(gifText) {
  const params = new URLSearchParams({
    q: gifText,
    api_key: '75kHAOPE0Kfpdc6m3hqE4wFZMjbxFM4t'
  });

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const gifImage = await response.json();

  let dataLength = gifImage.data.length;
  let randomNum = Math.floor(Math.random() * dataLength);

  const newGif = gifImage.data[randomNum].images.original.url;

  return newGif;
}
/** removes gif from gif container */

function removeGifs(evt) {
  $gifContainer.empty();
}

$removeButton.on('click', removeGifs);
$searchButton.on('click', handleSearch);



