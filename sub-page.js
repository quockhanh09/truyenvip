const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookId = urlParams.get('id');

let subPageHTML ="";
let chapterHTML = "";
for(let i =0; i <= (bookList.length - 1); i++){
    if(bookList[i].id == bookId){
        subPageHTML = `<div class="title">Thông tin truyện</div>
        <hr/>
        <div class ="main-top">
            <div class="book-info">
                        <!-- Phần bên phải -->
                <div>
                    <img 
                    src="${bookList[i].img}"
                    class="book-image">
                </div>
        
                <div class="details">
                        <!-- Tác giả -->
                    <div class=" detail">
                        <div class="type">Tác giả:</div>
                        <div>${bookList[i].author}</div>
                    </div>
                        <!-- Thể loại -->
                    <div class="detail">
                        <div class="type">Thể loại:</div>
                        <div>${bookList[i].tags}</div>
                    </div>
                        <!-- Status -->
                    <div class="detail">
                        <div class="type">Trạng thái:</div>
                        <div>${bookList[i].status}</div>    
                    </div>
                </div>
            </div>
                <!-- Phần bên trái -->
            <div class="book-review">
                <div class="book-name">${bookList[i].name}</div>
                <div class="review">${bookList[i].review}</div>
            </div>
        </div>
            <!-- Chapter -->
        
        <div class="chapters">
            <div class="title">Danh Sách Chương</div>
            <hr>
            <ul id="chap-list" class="chap-list">
            </ul>
        </div>
        `;
    }
    
}

document.getElementById("sub-page-main").innerHTML = subPageHTML

for(let i =0; i <= (bookList.length - 1); i++){
    if(bookList[i].id == bookId){
        for(let j = 0; j <= bookList[i].chapters.length - 1; j++){
            chapterHTML += `
            <li><a href="chapter.html?id=${bookList[i].id}&chapter=${bookList[i].chapters[j].chapter}">Chương ${bookList[i].chapters[j].chapter}</a></li>
            ` 
        }
    }
}

document.getElementById("chap-list").innerHTML = chapterHTML