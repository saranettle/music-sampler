$(document).ready(function() {

  $('#halfaxaP').hide();
  $('#darkbloomP').hide();
  $('#visionsP').hide();
  $('#artAngelsP').hide();

  $('#halfaxa img').click(function() {
      $('#soundtrack').attr('src', 'audio/halfaxa-world-princess.mp3');
      $('#soundtrack').attr('src', 'audio/halfaxa-world-princess.ogg');
      $('#darkbloomP').hide();
      $('#visionsP').hide();
      $('#artAngelsP').hide();
      $('#halfaxaP').slideToggle();
  });

  $('#darkbloom img').click(function() {
      $('#soundtrack').attr('src', 'audio/darkbloom-vanessa.mp3');
      $('#soundtrack').attr('src', 'audio/darkbloom-vanessa.ogg');
      $('#halfaxaP').hide();
      $('#visionsP').hide();
      $('#artAngelsP').hide();
      $('#darkbloomP').slideToggle();
  });


  $('#visions img').click(function() {
      $('#soundtrack').attr('src', 'audio/visions-be-a-body.mp3');
      $('#soundtrack').attr('src', 'audio/visions-be-a-body.ogg');
      $('#halfaxaP').hide();
      $('#darkbloomP').hide();
      $('#artAngelsP').hide();
      $('#visionsP').slideToggle();
  });

  $('#artAngels img').click(function() {
      $('#soundtrack').attr('src', 'audio/art-angels-kill-v-maim.mp3');
      $('#soundtrack').attr('src', 'audio/art-angels-kill-v-maim.ogg');
      $('#halfaxaP').hide();
      $('#darkbloomP').hide();
      $('#visionsP').hide();
      $('#artAngelsP').slideToggle();
  });





  });
