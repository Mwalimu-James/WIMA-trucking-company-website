function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.style.display === "none") {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  }
function showGreeting(){
  // Creating a pop-up div
  const popup = document.createElement('div')
  popup.classList.add('popup');
  // Creating greeting message and image
  const message = document.createElement('p');
  message.textContent = 'Welcome to our website!';

  const handImage = document.createElement('img');
  handImage.src = 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/waving-hand.png';

  //Appending elements to the popup
  popup.appendChild(message);
  popup.appendChild(handImage);

  //Appending the popup to the body
  document.body.appendChild(popup);
  // Setting a timeout
  setTimeout(() => {
    popup.remove();
  }, 3000)
}
//Displaying the greeting when the window opens.
window.onload = showGreeting;
