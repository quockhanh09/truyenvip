let readingBook = document.getElementById("reading");
let selectChap = document.getElementById("select__chap");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const chapterID = urlParams.get('chapter');
const bookId = urlParams.get('id');

let readingDetailHTML = "";
let selectChaplHTML = "";


for(let book of bookList){
    if(bookId == book.id){
        for(let chapterList of book.chapters){
            selectChaplHTML+=`
            <option value="${chapterList.chapter}">Chương ${chapterList.chapter}</option>`
            if(chapterID == chapterList.chapter){
                for(let contentImg of chapterList.content){
                    readingDetailHTML +=`<div><img src="${contentImg}"></div>"`
                }
            }
        }
    }
}

readingBook.innerHTML = readingDetailHTML
selectChap.innerHTML = selectChaplHTML

// Option
selectChap.selectedIndex = Number(chapterID) - 1



        // Function next-chap

const nextChap = document.getElementById("next__chap")

function nextChapter(){
    let newURL;
    for(let i =0; i<bookList.length; i++){
        if(bookId == bookList[i].id){
            for(let j=0; j<bookList[i].chapters.length; j++){
                if(chapterID == bookList[i].chapters[j].chapter){
                    newURL = `chapter.html?id=${bookList[i].id}&chapter=${bookList[i].chapters[j+1].chapter}`;
                }
            }
        }
    }
    window.location.href = newURL;
}
nextChap.addEventListener("click",nextChapter);


        // Function back-chap

const preChap = document.getElementById("prev__chap")
function backChapter(){
    let newURL;
    for(let i = 0; i<bookList.length; i++){
        if(bookId == bookList[i].id){
            for(let j=0; j < bookList[i].chapters.length; j++){
                if((chapterID == bookList[i].chapters[j].chapter) &&(chapterID > 0)){
                    newURL = `chapter.html?id=${bookList[i].id}&chapter=${bookList[i].chapters[j-1].chapter}`
                }
            }
        }
    }
    window.location.href = newURL
}
preChap.addEventListener("click",backChapter)

            // JS for Footer

const footerNext = document.getElementById("ft-next__chap");
const footerBack = document.getElementById("ft-prev__chap");

footerNext.addEventListener("click",nextChapter);
footerBack.addEventListener("click",backChapter);


