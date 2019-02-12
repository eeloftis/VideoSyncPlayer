'use strict';


$(document).ready(function() {


  var $video = $('video');

  // Video 1 ~ 79.085791
  // Video 2 ~ 79.084458
  // Video 3 ~ 79.081854
  // Video 4 ~ 79.077791

  function syncVideos() {
    $video.get(0).currentTime = 0;
    $video.get(1).currentTime = 0;
    $video.get(2).currentTime = 0;
    $video.get(3).currentTime = 0;
  }

  function playVideos() {
    $video.get(0).play();
    $video.get(1).play();
    $video.get(2).play();
    $video.get(3).play();
  }

  function pauseVideos() {
    $video.get(0).pause();
    $video.get(1).pause();
    $video.get(2).pause();
    $video.get(3).pause();
  }


  $video.get(3).onended = function(e) {
    playVideos();
      syncVideos();
        pauseVideos();
      syncVideos();
    playVideos();
  };

  $('.button.sync').on('click', function() {
    syncVideos();
  });

  $('.button.play').on('click', function() {
    playVideos();
      syncVideos();
        pauseVideos();
      syncVideos();
    playVideos();
  });

  $('.button.stop').on('click', function() {
    pauseVideos();
  });
});
