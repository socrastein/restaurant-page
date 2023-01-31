import knife from './pics/knife.jpg';

// import Picture from './picture.jpg';

// Add the image to an existing div
// const myPicture = new Image();
// myPicture.src = Picture;
// element.appendChild(myPicture)

function loadHome(){
  const root = document.getElementById('root');
  const knifePic = new Image();
  knifePic.src = knife;

  const page = document.createElement('div');
  page.setAttribute("class", "flexColumn");

  root.appendChild(page);



}

export default loadHome;