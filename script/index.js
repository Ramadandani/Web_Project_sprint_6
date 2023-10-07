// root
const body = document.querySelector('.body');

// Popup Edit Name
const showPopupEditBtn = document.querySelector('.show_popup_edit-btn');
const submitEditNameBtn = document.querySelector('.popup__ename-button-submit');
const closePopupEditBtn = document.querySelector('.close_popup_edit-btn');
const open = document.querySelector('.popup__ename');


// Popup Add Picture
const showPopupAddBtn = document.querySelector('.show_popup_add-btn');
const apicture = document.querySelector('.popup__apicture');
const closeAddPictureBtn = document.querySelector('.popup_apicture_close-btn');
const submitAddPhoto = document.querySelector('.popup__apicture-button-submit');


//Modal
const userName = document.querySelector('.navigation__id-name');
const userJob = document.querySelector('.navigation__id-job');
const formName = document.querySelector('#nama');
const formJob = document.querySelector('#job');






const like = document.getElementsByClassName('content__images-id-button');


const contentCollection = document.querySelector('.content');
const contents = document.getElementsByClassName('content__images-list');
const cName = document.getElementsByClassName('content__images-id-name');

const deletePicture = document.getElementsByClassName('content__images-delete');
const popupShowPicture = document.querySelector('.popup__vpicture');
const pic = document.querySelector('.popup__vpicture-pic');
const place = document.querySelector('.popup__vpicture-place');
const closeShowPictureBtn = document.querySelector('.popup_vpicture_close-btn');



const gallery = document.querySelector('.content--gallery');

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





showPopupAddBtn.addEventListener('click', function(){
    apicture.style.opacity = '1';
    apicture.style.top = '50%';
    body.style.opacity = '.5';
});



closeAddPictureBtn.addEventListener('click', function (){
    apicture.style.opacity = '.5';
    apicture.style.top = '-50%';
    body.style.opacity = '1';
})


//Membuka Form Edit
showPopupEditBtn.addEventListener('click', function () {
    open.classList.toggle('popup__ename-open');
    formName.value = userName.textContent;
    formJob.value = userJob.textContent;
    body.style.opacity = '.5';
});


// Menutup Form Edit
closePopupEditBtn.addEventListener('click', function () {
    open.classList.remove('popup__ename-open')
    body.style.opacity = '1';
});


// Fungsi menyimpan Nama dan Job
submitEditNameBtn.addEventListener('click', function () {
    const editName = formName.value;
    const editJob = formJob.value;

    userName.textContent = editName;
    userJob.textContent = editJob;
    open.classList.remove('popup__ename-open')
    body.style.opacity = '1';
});


//Menutup Popup Gambar
closeShowPictureBtn.addEventListener('click', function(){
    popupShowPicture.style.display ='none';
    body.style.opacity = '1'
});


// Fungsi Menambah Gambar
// function addPhoto(titleValue, urlValue){

//     const photoContainer = document.createElement('div');
//     photoContainer.classList.add('content__images');

//     const imgPhoto = document.createElement('img');
//     imgPhoto.classList.add('content__images-list');
//     imgPhoto.src = urlValue;

//     const deleteElement = document.createElement('button');
//     deleteElement.classList.add('content__images-delete');
//     deleteElement.setAttribute("type", "button");

//     const imagesId = document.createElement('div');
//     imagesId.classList.add('content__images-id');
 
//     const imagesIdName = document.createElement('p');
//     imagesIdName.classList.add('content__images-id-name');
//     imagesIdName.textContent = titleValue;
 
//     const buttonLove = document.createElement('button');
//     buttonLove.classList.add('content__images-id-button');
 

//     photoContainer.append(imgPhoto, deleteElement, imagesId);
//     imagesId.append(imagesIdName, buttonLove);
//     contentCollection.prepend(photoContainer);

//     }



    // Event Menambah Gambar
submitAddPhoto.addEventListener('click', function(e){
    e.preventDefault();

    const nilaiJudul = document.querySelector('#Judul');
    const nilaiUrl = document.querySelector('#url');

    const newCard = {
        name: nilaiJudul.value,
        link: nilaiUrl.value
    };

    initialCards.unshift(newCard);
    
    apicture.style.opacity = '0';
    apicture.style.top = '-50%'
    body.style.opacity = '1'

    renderTemplate(initialCards);
});

function renderTemplate(data) {
    contentCollection.innerHTML ='';
    
    for (let i = 0; i < data.length; i++){
        const cardContent = gallery.content;
        const cloneContent = cardContent.cloneNode(true);

        const cardPlace = cloneContent.querySelector('.content__images-id-name');
        const cardImg = cloneContent.querySelector('.content__images-list');

        cardPlace.textContent = data[i].name;
        cardImg.src = data[i].link;

        contentCollection.appendChild(cloneContent)
    }
}



// Popup Gambar

function ShowPictureOnBigScreen (data){
    for (let i = 1; i < data.length; i++) {    
        data[i].addEventListener('click', function(){
            pic.src = data[i].src;
            place.innerHTML = cName[i].textContent;
            popupShowPicture.style.display = 'block';
            body.style.opacity ='.5'
        })
    };
};

renderTemplate(initialCards);
ShowPictureOnBigScreen(contents);

for (let i = 0; i < contents.length; i++) {
    
    contents[i].addEventListener('click', function(){
        pic.src = contents[i].src;
        place.innerHTML = cName[i].textContent;
        popupShowPicture.style.display = 'block';
        body.style.opacity ='.5'
    })
};


// Hapus Gambar
for (let i = 0; i < deletePicture.length; i++ ) {
    deletePicture[i].addEventListener('click', function(){
        deletePicture[i].parentElement.style.display = 'none';
    });
};


// Menyukai Gambar
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function(){
        like[i].classList.toggle('content__images-id-liked');
    });
};

