const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');
const menuButton = document.querySelector('.mdc-icon-button');

const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

menuButton.addEventListener('click', (event) => {
  drawer.open = true;
  console.log("active");
})

//appi call
async function fetchItemData() {
  const response = await fetch('https://prices.runescape.wiki/api/v1/osrs/mapping');
  const data = await response.json();
  return data;
}

async function fetchItemData() {
  const response = await fetch('https://prices.runescape.wiki/api/v1/osrs/mapping');
  const data = await response.json();
  return data;
}

async function displayItems() {
  const items = await fetchItemData();
  const container = document.getElementById('itemContainer');


  // Create a document fragment to batch DOM updates
  const fragment = document.createDocumentFragment();

  items.slice(0, 50).forEach(item => { // Limiting to 100 items for better performance
      const listItem = document.createElement('li');
      listItem.classList.add("mdc-image-list__item");
    console.log(item);
      const image = document.createElement('img');
      
      image.style.width = '85px'; // Set the width
      image.style.height = '75px'; // Set the height correctly with 'px'
      image.classList.add('mdc-image-list__image');
      image.src = `https://services.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=${item.id}`;
      image.setAttribute("itemname", item.name);
      image.setAttribute("itemexamine", item.examine);
      image.setAttribute("itemid", item.id);
      image.setAttribute("itemlimit", item.limit);
      image.setAttribute("itemhighalch", item.highalch);
      image.setAttribute("itemlowalch", item.lowalch);
      image.setAttribute("itemmembers", item.members);
      image.setAttribute("itemvalue", item.value);
      image.setAttribute("itemlike", false);
      image.setAttribute("itemdislike", false);
      
      

      const supporting = document.createElement('div');
      supporting.classList.add('mdc-image-list__supporting');


      // You can add more supporting content here if needed

      listItem.appendChild(image);
      listItem.appendChild(supporting);

      fragment.appendChild(listItem);
  });

  // Append the fragment to the container
  container.appendChild(fragment);

  // Initialize Material Design Components
  const MDCImageList = mdc.imageList.MDCImageList;
  const imageList = new MDCImageList(document.querySelector('.mdc-image-list'));
  imageList.layout();
}

displayItems();

      window.addEventListener("load", () => {
if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
}); 



// end appi cal



// Instantiate MDCTabBar and MDCTabIndicator
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const home = document.querySelector('.home');

home.addEventListener('click', (event) => {
  // Remove active state from all tabs
  const tabs = document.querySelectorAll('.mdc-tab');
  tabs.forEach(tab => {
    tab.setAttribute('aria-selected', 'false');
    tab.classList.remove('mdc-tab--active');
  });

  const tabindicators = document.querySelectorAll('.mdc-tab-indicator');
  tabindicators.forEach(indicator => {
    indicator.classList.remove('mdc-tab-indicator--active');
  });

});

function filterItems(className) {
  var items = document.querySelectorAll('.mdc-image-list__item');
  items.forEach(function(item) {
      if (item.classList.contains(className)) {
          item.style.display = 'inline-block';
      } else {
          item.style.display = 'none';
      }
  });
}

function showAll() {
  var items = document.querySelectorAll('.mdc-image-list__item');
  items.forEach(function(item) {
      item.style.display = 'inline-block';
  });
}

// sheet met informatie via de ul atributes

document.querySelectorAll('#itemContainer').forEach(item => {
  console.log(item);
  item.addEventListener('click', function(event) {
    document.querySelectorAll('.sheet-out-of-view').forEach(sheet => {
      sheet.classList.remove('sheet-out-of-view');
      var path = window.location.pathname;
      console.log(path);
      history.pushState(null, '', path + 'meme-detail-page');
    });
    document.querySelector('.mdc-top-app-bar').classList.add('hidden');


    var imgageUrl = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('src');
    document.getElementById('detailedImg').setAttribute('src', imgageUrl);

    var imagename = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemname');
    document.getElementById('title').textContent = imagename;

    var imageaxamine = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemexamine');
    document.getElementById('examine').textContent = imageaxamine;
    
    var imagevalue = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemvalue');
    document.getElementById('value').textContent = imagevalue;

    var imagelowalch = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemlowalch');
    document.getElementById('lowalch').textContent = imagelowalch;

    var imagehighalch = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemhighalch');
    document.getElementById('highalch').textContent = imagehighalch;

    var imagemember = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemmembers');
    document.getElementById('members').textContent = imagemember;
     
      var dislikeString = '';
      var dislike = event.target.closest('.mdc-image-list__item').querySelector('img').setAttribute('itemdislike', 'true');
 
  });
});


//push state

document.getElementById('closeBtn').addEventListener('click', function(event) {
  history.pushState(null, '', "/MaterialDesignTemplate.html");
  document.querySelector('.sheet').classList.add('sheet-out-of-view');
  document.querySelector('.mdc-top-app-bar').classList.remove('hidden');
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: for smooth scrolling
  });
});
  
window.addEventListener('popstate', function(event) {
  history.pushState(null, '', "MaterialDesignTemplate.html");
  document.querySelector('.sheet').classList.add('sheet-out-of-view');
  document.querySelector('.mdc-top-app-bar').classList.remove('hidden');
  console.log('Back/Forward button clicked');
});


function likebuttonstate() {
  
  var whatlike = document.querySelector('img').getAttribute('itemlike');
  console.log(whatlike);
  if(whatlike == "true") {
    var whatlike = document.querySelector('img').setAttribute('itemlike', 'false');
//kleurtje aanpassen thump
document.getElementById('thumpup').style.color = 'red';
console.log(whatlike);
} else {
  var whatlike = document.querySelector('img').setAttribute('itemlike', 'true');
  document.getElementById('thumpup').style.color = 'green';
  console.log(whatlike);
}



}
//like button


//dislike button
// var like = event.target.closest('.mdc-image-list__item').querySelector('img').getAttribute('itemlikecounter');
// setAttribute('itemlikecounter', like);
// var likecount = parseInt(like);
// likecount++;
// console.log(likecount);
// like = likecount;
// console.log(like)