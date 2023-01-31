

// import Picture from './picture.jpg';

// Add the image to an existing div
// const myPicture = new Image();
// myPicture.src = Picture;
// element.appendChild(myPicture)

function loadHome(){
  const pageHolder = document.getElementById('pageHolder');
  
  
  const page = document.createElement('div');
  page.setAttribute("class", "flexColumn homePage");
  page.setAttribute("id", "homePage");

  const welcome = document.createElement('div');
  welcome.setAttribute("class", "pageHeader");
  welcome.innerHTML = "Let us treat you to a fine-dining experience you'll never forget"
  page.appendChild(welcome);

  const list = document.createElement('ul');

  
  
  
  pageHolder.appendChild(page);
}

export default loadHome;