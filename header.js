//Header//

const header = document.getElementById("container__header");
    header.innerHTML = `
    <div class="header__logo">
        <div class="header__logo-image">
            <i class="fa-solid fa-book-open"></i>
        </div>
        <div id="header__logo-name" class="header__logo-name">TRUYỆN VIP</div>
    </div>
    <div class= "header-category" id="header-category">
        <div class ="header__list dropdown-open">
            <span class="dropdown-text">Danh sách</span>
            <ul class="dropdown-menu">
                <li><a href="">Truyện Hot</a></li>
                <li><a href="">Truyện Full</a></li>
                <li><a href="">Truyện Yêu Thích</a></li>
            </ul>
        </div>

        <div class="header__category dropdown-open">
            <span class="dropdown-text">Thể loại</span>
            <ul class="dropdown-menu">
                <li><a href="filter.html?tag=tien-hiep">Tiên Hiệp</a></li>
                <li><a href="filter.html?tag=ngon-tinh">Ngôn Tình</a></li>
                <li><a href="filter.html?tag=hien-dai">Hiện Đại</a></li>
                <li><a href="filter.html?tag=manhua">Manhua</a></li>
                <li><a href="filter.html?tag=action">Action</a></li>
                <li><a href="filter.html?tag=anime">Anime</a></li>
            </ul>
        </div>


        <div class="header__filter dropdown-open">
            <span class="dropdown-text">Phân loại</span>
            <ul class="dropdown-menu">
                <li><a href="">Dưới 100 chương</a></li>
                <li><a href="">100 đến 500 chương</a></li>
                <li><a href="">500 đến 1000 chương</a></li>
                <li><a href="">Trên 1000 chương</a></li>
            </ul>
        </div>

    </div>

    <div class="search-account">
        <div class="header__search">
            <input class="txt-search" type="search">
            <button class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div class="header__account">
            <div class="account account-login"><a href="./login.html">Log In</a></div>
            <div class="account account-signup"><a href="./signup.html">Sign Up</a></div>
        </div>
    </div>

    <div class="header-bar" id="header-bar">
            <i class="fa-solid fa-bars"></i>
    </div>
    `

let bar = document.getElementById("header-bar");
bar.addEventListener("click", ()=>{
    let headerRes = document.getElementById("container__header");
    if(headerRes.className === "container__header"){
        headerRes.className += " responsive"
    }else{
        headerRes.className = "container__header"
    }
})

//Footer//

const footer = document.getElementById("container__footer");
footer.innerHTML = `
            <div class="footer_1">
                <strong> Truyện VIP </strong> 
                <p>Đọc truyện online, đọc truyện hot, truyện hay. 
                    Website luôn cập nhật những bộ truyện mới thuộc các thể loại đặc sắc như truyện tiên hiệp, 
                    truyện kiếm hiệp, hay truyện ngôn tình một cách nhanh nhất. 
                    Hỗ trợ mọi thiết bị như di động và máy tính bảng.</p>                  
            </div>
            <div class="footer_2">
                <div class="contact">
                    <a href="" class="Contact us">Contact us</a>
                    <a href="" class="Terms of service">Terms of service</a>
                </div>
                <div class="list">
                    <a href="">Truyện Conan</a>
                    <a href="">Ngôn tình</a>
                    <a href="" >Truyện kiếm hiệp</a>
                    <a href="">Truyện ngụ ngôn</a>
                    <a href="" >Truyện Doraemon</a>
                    <a href="">Truyện Naruto</a>
                    <a href="">Truyện One Piece</a>
                    <a href="">Truyện Teen hay</a>
                    <a href="">Truyện Attack on titan</a>
                    <a href="">Truyện ngôn tình hài </a>  
                    <a href="">Truyện hài</a>  
                    <a href="">Truyện tranh</a>  
                </div> 
            </div>
    </div>`

const mainpage = document.getElementById("header__logo-name")
mainpage.addEventListener("click", ()=>{
    location.href = "http://127.0.0.1:5500/mainpage.html"
})