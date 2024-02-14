### Part 1: Building the Form
API Key: 75kHAOPE0Kfpdc6m3hqE4wFZMjbxFM4t

api.giphy.com/v1/gifs/search?q='inputstring'&api_key=75kHAOPE0Kfpdc6m3hqE4wFZMjbxFM4t

create a form in html
1 input "text"
form will have 2 buttons: search and remove gifs, give IDs to each
make a div area for gifs, gifs container

javascript
create a get request.
From response, extract the image, append image to container.
Then console.log the response data by parsing
create event listeners for search button and remove
on click of search button, pass function to get request as callback
on click of delete, remove all by emptying parent of div.
