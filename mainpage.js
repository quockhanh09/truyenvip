//-----------------> cmt: js phần truyện hot
const hotList = document.getElementById("main__hot-list");
const fullList = document.getElementById("main__full-list");
const favList = document.getElementById("main__fav-list");


let bookHotList = "";
let bookFullList = "";
let bookFavList = " ";

let countHotL = 0;
let countFull = 0;
let countFav = 0;


for(let i = 0 ;i < bookList.length; i++){
    if(bookList[i].view >= 1000000){
        countHotL ++
        bookHotList +=
        `<div class = "book">
            <a href = "sub-page.html?id=${bookList[i].id}">
                <img class="image"
                src="${bookList[i].img}"/>
                <div class="book-name">${bookList[i].name}</div>
            </a>
        </div>
     `
     if(countHotL === 9){
        break;
    }
    }
    hotList.innerHTML = bookHotList;
}
for(let i = 0 ;i < bookList.length; i++){

    if(bookList[i].status === "Full"){
        countFull ++
        bookFullList = bookFullList +
        `<div class = "book">
            <a href = "sub-page.html?id=${bookList[i].id}">
                <img class="image"
                src="${bookList[i].img}"/>
                <div class="book-name">${bookList[i].name}</div>
            </a>
        </div>
     `
     if(countFull === 9){
        break;
    }}
    fullList.innerHTML = bookFullList;
}
for(let i = 0 ;i < bookList.length; i++){
    if(bookList[i].rating >= 4){
        countFav ++
        bookFavList +=
        `<div class = "book">
            <a href = "sub-page.html?id=${bookList[i].id}">
                <img class="image"
                src="${bookList[i].img}"/>
                <div class="book-name">${bookList[i].name}</div>
            </a>
        </div>
     `
     if(countFav === 9){
        break;
    }}
    favList.innerHTML = bookFavList;
   
};






