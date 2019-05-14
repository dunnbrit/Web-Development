document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons()
{
  document.getElementById('yelp').addEventListener('click', function(event)
  {
    event.preventDefault();
    window.location.href = 'https://www.yelp.com/';
  });
};