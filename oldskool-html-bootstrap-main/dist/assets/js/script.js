
  // Initialize Vimeo Players
  var player1 = new Vimeo.Player('video1', { id: '1c4d78c517' });
  var player2 = new Vimeo.Player('video2', { id: 'fc949ecb30' });
  // Add more players as needed

  // Play the videos simultaneously
  function playVideos() {
    player1.play();
    player2.play();
    // Play more videos here if needed
  }

  window.addEventListener('load', playVideos);
