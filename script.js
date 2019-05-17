'use strict'

$(function() {
$(".welcome").show(); 
$(".search").hide(); 
$(".results").hide();
 
console.log('App loaded! Waiting for submit!');

});

$("#start").click(function(){
    $(".welcome").hide(); 
    $(".search").show();  
    watchForm(); 
})

$("#restart-button").click(function() {
    $(".welcome").show(); 
    $(".search").hide(); 
    $(".results").hide();  
})

    function getImage(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
    })
    .then(responseJson => generateImage(responseJson))
    .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message} I want the error message to go here`);
    });

    };



function generateImage(responseJson) {
    $(".search").hide();  
    $(".results").show(); 
  console.log(responseJson);
  $(".dog-images").html("");
  $('.dog-images').append(`<img src="${responseJson.message}" class="dog-images" alt="Your Dog Breed">`)
};
  


function watchForm(event) {
  $('.dogs-form').submit(event => {
    event.preventDefault();
    let dogBreed = $(".dogs-form-input").val();
    if(dogBreed == ""){
      return dogBreed;
    } 
    getImage(dogBreed);
    console.log("input sent");
  });
}

