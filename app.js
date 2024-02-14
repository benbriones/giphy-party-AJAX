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
  let imageLink = await getGif(searchWord); // update to getGifURL
  addGif(imageLink);
}

/** adds gif to container */
function addGif(url) { // change link to URL, make img tag instead
  /* console.log(link); */
  let $newDiv = $('<div>');
  let $newImage = $("<img>")
    .attr('src', url)
    .css('object-fit', 'cover');

  $newDiv
    /* .css('background-image', `url(${url})`) */
    /*    .css('width', '200px')
       .css('height', '200px') */
    .css('display', 'inline-block')
    /* .css('background-size', 'cover') */;

  $newDiv.append($newImage);
  $gifContainer.append($newDiv);
}

async function getGif(gifText) {
  const params = new URLSearchParams({
    q: gifText,
    api_key: '75kHAOPE0Kfpdc6m3hqE4wFZMjbxFM4t'
  });

  /* console.log(params); */

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const gifImage = await response.json();
  // how to make random? - random index from how many gifs are given

  let dataLength = gifImage.data.length;
  let randomNum = Math.floor(Math.random() * dataLength);

  const newGif = gifImage.data[randomNum].images.original.url;
  /*   console.log('newGif: ', gifImage.data[1]); */
  // return await gifImage.data[0].url;
  return newGif;
}

function removeGifs() {

  $gifContainer.empty();
}

$searchButton.on('click', handleSearch);
$removeButton.on('click', removeGifs);