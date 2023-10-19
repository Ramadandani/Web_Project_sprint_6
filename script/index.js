// root
const body = document.querySelector('.body');

// Popup Edit Name
const showPopupEditBtn = document.querySelector('.navigation__id-showPopupEditBtn');
const submitEditNameBtn = document.querySelector('.popup__ename-button-submit');
const closePopupEditBtn = document.querySelector('.popup__close-editBtn');
const open = document.querySelector('.popup__ename');


// Popup Add Picture
const showPopupAddBtn = document.querySelector('.navigation__id-showPopupAddPlaceBtn');
const apicture = document.querySelector('.popup__apicture');
const closeAddPictureBtn = document.querySelector('.popup__apicture-close-btn');
const submitAddPhoto = document.querySelector('.popup__apicture-button-submit');


//Modal
const userName = document.querySelector('.navigation__id-name');
const userJob = document.querySelector('.navigation__id-job');
const formName = document.querySelector('#nama');
const formJob = document.querySelector('#job');
const nilaiJudul = document.querySelector('#Judul');
const nilaiUrl = document.querySelector('#url');



// Template
const contentCollection = document.querySelector('.content');
const gallery = document.querySelector('.content--gallery');
const contents = document.getElementsByClassName('content__images-list');
const cName = document.getElementsByClassName('content__images-id-name');

const deletePicture = document.getElementsByClassName('content__images-delete-btn');
const popupShowPicture = document.querySelector('.popup__vpicture');
const pic = document.querySelector('.popup__vpicture-pic');
const place = document.querySelector('.popup__vpicture-place');
const closeShowPictureBtn = document.querySelector('.popup__vpicture-close-btn');




// Data Template
const initialCards = [
    {
      name: "Lembah Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Danau Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Pegunungan Gundul",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Gunung Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Taman Nasional Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
];




// Menampilkan Form tambah gambar
showPopupAddBtn.addEventListener('click', function(){
    apicture.classList.toggle('popup__none');
    body.style.opacity = '.5';
});



// Menutup Form tambah gambar
closeAddPictureBtn.addEventListener('click', function (){
    apicture.classList.toggle('popup__none');
    body.style.opacity = '1';
})




// Manipulasi EDIT FORM START
//Membuka Form Edit
showPopupEditBtn.addEventListener('click', function () {
    open.classList.toggle('popup__none');
    formName.value = userName.textContent;
    formJob.value = userJob.textContent;
    body.style.opacity = '.5';
});


// Menutup Form Edit
closePopupEditBtn.addEventListener('click', function () {
    open.classList.toggle('popup__none')
    body.style.opacity = '1';
});


// Fungsi menyimpan Nama dan Job
submitEditNameBtn.addEventListener('click', function () {
    const editName = formName.value;
    const editJob = formJob.value;

    userName.textContent = editName;
    userJob.textContent = editJob;
    open.classList.toggle('popup__none')
    body.style.opacity = '1';
});

// Manipulasi EDIT FORM FINISH


//Menutup Popup Gambar
closeShowPictureBtn.addEventListener('click', function(){
    popupShowPicture.classList.toggle('popup__none');
    body.style.opacity = '1'
});



  
// Fungsi Render Gambar dari data Template
function renderTemplate(data) {
    contentCollection.innerHTML ='';
    
    for (let i = 0; i < data.length; i++){
        const tempat = data[i].name;
        const url = data[i].link;

        const cardContent = gallery.content;
        const cloneContent = cardContent.cloneNode(true);

        const cardPlace = cloneContent.querySelector('.content__images-id-name');
        const cardImg = cloneContent.querySelector('.content__images-list');

        cardPlace.textContent = tempat;
        cardImg.src = url;
        

        // Event Popup Gambar
        cardImg.addEventListener('click', function(){
            popupShowPicture.classList.toggle('popup__none');
            pic.src = url;
            place.innerHTML = tempat;
            body.style.opacity ='.5';
            
        });

        const cardTrash = cloneContent.querySelector('.content__images-delete-btn');

        cardTrash.addEventListener('click', function(){
            initialCards.splice(i,1);
            renderTemplate(initialCards);
        });

        const cardLove = cloneContent.querySelector('.content__images-love-button');

        cardLove.addEventListener('click', function(){
            cardLove.classList.toggle('content__images-loved')
        });


        contentCollection.appendChild(cloneContent)
    }
}


  // Event Menambah Gambar
  submitAddPhoto.addEventListener('click', function(){
    namaTempat = nilaiJudul.value;
    urlGambar = nilaiUrl.value;

    initialCards.unshift({
        name: namaTempat,
        link: urlGambar
    })
    
    apicture.classList.toggle('popup__none');
    body.style.opacity = '1'

    nilaiJudul.value = '';
    nilaiUrl.value = '';



    renderTemplate(initialCards);
});




renderTemplate(initialCards);