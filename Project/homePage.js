document.addEventListener('DOMContentLoaded', carousel);

var slide = 0;

function carousel()
{
	var i;
	var images = document.getElementsByClassName("images");
	for (i = 0; i < images.length; i++)
	{
		images[i].style.display = "none";
	}
	slide++;
	if (slide > images.length)
	{
		slide = 1
	}
	images[slide-1].style.display = "block";
	setTimeout(carousel,3000);
}
//Referenced https://www.w3schools.com/w3css/w3css_slideshow.asp