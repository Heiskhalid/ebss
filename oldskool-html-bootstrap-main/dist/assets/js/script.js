<script src="https://player.vimeo.com/api/player.js"></script>
<script>
  // Initialize Vimeo Players
  var player1 = new Vimeo.Player('video1', { id: '862981686' });
  var player2 = new Vimeo.Player('video2', { id: '863368485' });
  // Add more players as needed

// Function to play all videos
function playVideos() {
  Promise.all([
    player1.play(),
    player2.play()
    // Add more videos to play here if needed
  ]).then(function() {
    // All videos have started playing
  }).catch(function(error) {
    // Handle any errors
    console.error('Error playing videos:', error);
  });
}
  window.addEventListener('load', playVideos);
</script>