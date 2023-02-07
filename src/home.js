// import Picture from './picture.jpg';

// Add the image to an existing div
// const myPicture = new Image();
// myPicture.src = Picture;
// element.appendChild(myPicture)

function loadHome(){
  const pageHolder = document.getElementById('pageHolder');
  pageHolder.style.backgroundImage = "";
  
  const page = document.createElement('div');
  page.setAttribute("class", "flexColumn homePage");
  page.setAttribute("id", "homePage");

  const welcome = document.createElement('div');
  welcome.setAttribute("class", "pageHeader");
  welcome.innerHTML = "Let us treat you to a fine-dining experience you'll never forget"
  page.appendChild(welcome);

  const list = document.createElement('ul');
  page.appendChild(list);

  const list1 = document.createElement('li');
  list1.innerHTML = 'Only the freshest, delicious ingredients'
  list.appendChild(list1);
  const list2 = document.createElement('li');
  list2.innerHTML = 'Exceptional food safety standards'
  list.appendChild(list2);
  const list3 = document.createElement('li');
  list3.innerHTML = 'Only the freshest ingredients'
  list.appendChild(list3);
  const list4 = document.createElement('li');
  list4.innerHTML = 'Only the freshest ingredients'
  list.appendChild(list4);
  const list5 = document.createElement('li');
  list5.innerHTML = 'Only the freshest ingredients'
  list.appendChild(list5);

 

  
  
  
  pageHolder.appendChild(page);
}

export default loadHome;