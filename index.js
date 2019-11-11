const tracksTemplateSource = document.getElementById('tracks-template').innerHTML;
const tracksTemplate = Handlebars.compile(tracksTemplateSource);

const $tracks = $('#tracks-container');

const getTopTracks = $.get('https://api.napster.com/v2.1/tracks/top?apikey=ZWE2YjY4MGItZGFlMi00NGIxLTgzOGYtZTU2YzZjODdjMWNi');

getTopTracks
  .then((response) => {
    $tracks.html(tracksTemplate(response));
  });