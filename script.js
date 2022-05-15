function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
openNav();
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
closeNav();

/* eslint-disable */

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('myNav');
  closeNav();
}

const cardcontainer = document.querySelector('.lang-sec');

const languages = (string1, string2, string3, string4) => `<li>${string1}</li>
  <li>${string2}</li>
  <li>${string3}</li>
  <li class="ruby">${string4}</li>`;

const cardsinfo = [
  { id:1,
    reverseCard: 'row',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    popupText: `Lorem Ipsum is simply dummy text of the printing and typesettingry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scramble.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',
    source: '#',
    live_project:'#',

  },
  { id:2,
    reverseCard: 'reverse-row',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy tex.`,
    popupText: `Lorem Ipsum is simply dummy text of the printing and typesettingry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scramble.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',
    source: '#',
    live_project:'#',

  },
  { id:3,
    reverseCard: 'row',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    popupText: `Lorem Ipsum is simply dummy text of the printing and typesettingry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scramble.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',
    source: '#',
    live_project:'#',

  },
  { id:4,
    reverseCard: 'reverse-row',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    popupText: `Lorem Ipsum is simply dummy text of the printing and typesettingry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scramble.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',
    source: '#',
    live_project:'#',
  },

];

function createCard(cardData) {
  cardcontainer.innerHTML = ' ';
  cardData.forEach((card, pos) => {
    const cardMaster = `
    <li class="card-sec ${card.reverseCard}">
          <div class="placeholder1">
            <img
              class="image1"
              src="${card.image}"
              alt="image placeholder"
            />
          </div>
          <div class="card1">
            <h2 class="post">${card.cardName}</h2>
            <p class="text">
              ${card.mainText}
            </p>
            <ul class="lang">
              ${card.cardLang}  
            </ul>
            <button class="button pop-${pos}"onclick="modal(${card.id})"  type="button">See Project</button>
          </div>
        </li>`;
    cardcontainer.insertAdjacentHTML('afterbegin', cardMaster);
  });
}

createCard(cardsinfo);

const openbtn = document.querySelectorAll('.button');
const closebtn = document.querySelector('.close-btn');
const openModal = document.getElementById('hidden')
const openButton = document.querySelectorAll(".button")

openButton.forEach((element) => {
element.addEventListener('click', () => {
  openModal.style.display = "block"
})
})

// const popUpCard = (card) => {
//   const temp = document.createElement('template')
//   temp.innerHTML= `
//   <div class="pop-up-box">
//   <div class="pop-up-header">
// <span onclick="closePopup()">X</span>
//     <div>

//       <h2 class="projectTitle">${card.cardName}</h2>
//     </div>
//     <div class="close-btn">&times;</div>
//   </div>
//   <div class="placeholder1">
//     <img
//       class="popImage"
//       src="${card.image}"
//       alt="image placeholder" />
//   </div>
//   <div >
//     <p class="popText">
//       ${card.popupText}
//     </p>
//   </div>
//   <ul class="plang">
//     ${card.cardLang} 
//         <li class="pop-li unique">Github</li>
//   </ul>

//   <ul class="plangmobile">
//    ${card.cardLang}
//         <li class="pop-li unique">css</li>
//   </ul>
//   <div class="buttonsPop">
//     <button type="button" class="seeProject1">
//       <a href="${card.live_project}">See Project</a>
//       <img
//         src="icons/live.png"
//         alt="live icon"
//         class="liveIcon"
//       />
//     </button>
//     <button type="button" class="seeProject1">
//      <a href="${card.source}"> See Source</a>
//       <img
//         src="icons/Vector.png"
//         alt="github link"
//         class="liveIcon"
//       />
//     </button>
//   </div>
// </div>
  
//   `
//   const box = document.getElementById('hidden')
//   box.appendChild(temp.content)
// }

function modal(id){
  cardsinfo.find((card) => {
    if(Number(id) === Number(card.id)){
      return popUpCard(card)
    }
  })
}

function closePopup(){
  const box = document.getElementById('hidden')
  box.style.display= 'none'
}

// listen for click

// // display popup
// function openModal() {
//   popUp.classList.add('active');
//   if (popUp.classList.contains('active')) {
//     document.querySelector('body').style.overflow = 'hidden';
//   }
// }

// // close popup
// function closeModal() {
//   popUp.classList.remove('active');
//   document.querySelector('body').style.overflow = 'visible';
// }

// openbtn.forEach((btn) => {
//   btn.addEventListener('click', openModal);
// });
// closebtn.addEventListener('click', closeModal);
        
           
            