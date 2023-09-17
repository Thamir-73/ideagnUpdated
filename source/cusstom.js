


window.addEventListener('DOMContentLoaded', function() {
  var postContent = document.querySelector('.post-content');
  postContent.style.opacity = 1;
});


window.addEventListener('DOMContentLoaded', function() {
  var indexCard = document.querySelector('.index-card');
  var cards = indexCard.children;

  // Loop through each card and apply a delay to the reveal animation
  Array.from(cards).forEach(function(card, index) {
    card.style.transitionDelay = (index + 1) + 's';
    card.style.opacity = 1;
  });
});