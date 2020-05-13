let countries = [
  'Italy',
  'France',
  'Canada',
  'Turkey',
  'South Africa',
  'Finland',
  'Ghana',
  'New Zealand',
  'India',
  'Afganistan',
  'Indonesia',
];

function newCountry() {
  let randomCountry = Math.floor(Math.random() * countries.length);
  document.getElementById('randomCountry').innerHTML = countries[randomCountry];
}
