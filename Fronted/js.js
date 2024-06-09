setInterval(myTimer, 1000)
function myTimer() {
    const date = new Date();
    document.querySelector(".offtime").innerHTML = date.toLocaleTimeString('it-IT');
}
document.querySelector('.load').classList.add('style', 'display:none;')
var swiper = new Swiper('.swiper', {
    slidesPerView: getslidesPerView(),
    direction: 'horizontal',
    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    }
}
)
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: getslidesPerView(),
    direction: 'horizontal',
    navigation: {
        nextEl: '.right2',
        prevEl: '.left2',
    }
});
function getslidesPerView() {
    var direction = window.innerWidth <= 760 ? 1 : 3;
    return direction;
}
const page = 'data.xml'
fetch(page, {
    method: 'GET'
}
).then((response) => response.json()).then((data) => {
    for (let i = 0; i < data[0].length; i++) {
        const element = data[0][i]
        const div_append = 'col-xl-3 col-lg-4 col-md-6 col-sm-12 swiper-slide col3-add swip-add'
        const swiper_append = `<div class="imgd m-auto">
<img src="${element.image}"
    alt="">
<div class="img-hov">Out Of Stock</div>
</div>
<p>${element.name}</p>
<h1>${element.title}</h1>
<p><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.86544 2.25531L7.74544 4.01531C7.86544 4.26031 8.18544 4.49531 8.45544 4.54031L10.0504 4.80531C11.0704 4.97531 11.3104 5.71531 10.5754 6.44531L9.33544 7.68531C9.12544 7.89531 9.01044 8.30031 9.07544 8.59031L9.43044 10.1253C9.71044 11.3403 9.06544 11.8103 7.99044 11.1753L6.49544 10.2903C6.22544 10.1303 5.78044 10.1303 5.50544 10.2903L4.01044 11.1753C2.94044 11.8103 2.29044 11.3353 2.57044 10.1253L2.92544 8.59031C2.99044 8.30031 2.87544 7.89531 2.66544 7.68531L1.42544 6.44531C0.695443 5.71531 0.930443 4.97531 1.95044 4.80531L3.54544 4.54031C3.81044 4.49531 4.13044 4.26031 4.25044 4.01531L5.13044 2.25531C5.61044 1.30031 6.39044 1.30031 6.86544 2.25531Z"
        fill="#F2BC1B" stroke="#F2BC1B" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>
<span> 4.6/5 </span> <span> | </span><span> 135 </span><svg width="1" height="13"
    viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="0.5" x2="0.499999" y2="12.5" stroke="#C8C9CB" />
</svg>
<span>| Reviews </span>
</p>
<div class="pr">
<span>
    discount ${element.discount}
</span>
</div>
<div class="pric"> <span class="outprice">$${element.price} </span> <span>/ day</span></div>
<div class="statik">
</div>
<div class="butt">
<span>Booking</span>
</div>`
        let gan = document.createElement('div')
        let gan2 = document.createElement('div')
        gan.className = div_append
        gan.innerHTML = swiper_append
        gan2.className = div_append
        gan2.innerHTML = swiper_append
        document.querySelector('.gan').appendChild(gan)
        document.querySelector('.gan2').appendChild(gan2)
    }
    for (let i = 0; i < data[1].length; i++) {
        const element = data[1][i]
        const div_append = 'col-xl-3 col-lg-4 col-md-6 col-sm-12 swiper-slide col3-add swip-add'
        const swiper_append = `<div class="imgd m-auto">
<img src="${element.image}"
    alt="">
<div class="img-hov">Out Of Stock</div>
</div>
<p>${element.name}</p>
<h1>${element.title}</h1>
<p><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.86544 2.25531L7.74544 4.01531C7.86544 4.26031 8.18544 4.49531 8.45544 4.54031L10.0504 4.80531C11.0704 4.97531 11.3104 5.71531 10.5754 6.44531L9.33544 7.68531C9.12544 7.89531 9.01044 8.30031 9.07544 8.59031L9.43044 10.1253C9.71044 11.3403 9.06544 11.8103 7.99044 11.1753L6.49544 10.2903C6.22544 10.1303 5.78044 10.1303 5.50544 10.2903L4.01044 11.1753C2.94044 11.8103 2.29044 11.3353 2.57044 10.1253L2.92544 8.59031C2.99044 8.30031 2.87544 7.89531 2.66544 7.68531L1.42544 6.44531C0.695443 5.71531 0.930443 4.97531 1.95044 4.80531L3.54544 4.54031C3.81044 4.49531 4.13044 4.26031 4.25044 4.01531L5.13044 2.25531C5.61044 1.30031 6.39044 1.30031 6.86544 2.25531Z"
        fill="#F2BC1B" stroke="#F2BC1B" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>
<span> 4.6/5 </span> <span> | </span><span> 135 </span><svg width="1" height="13"
    viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="0.5" x2="0.499999" y2="12.5" stroke="#C8C9CB" />
</svg>
<span>| Reviews </span>
</p>
<div class="pr">
<span>
    discount ${element.discount}
</span>
</div>
<div class="pric"> <span class="outprice">$${element.price} </span> <span>/ day</span></div>
<div class="statik">
</div>
<div class="butt">
<span>Booking</span>
</div>`
        let mush = document.createElement('div')
        let mush2 = document.createElement('div')
        mush.className = div_append
        mush.innerHTML = swiper_append
        mush2.className = div_append
        mush2.innerHTML = swiper_append
        document.querySelector('.mush').appendChild(mush)
        document.querySelector('.mush2').appendChild(mush2)
    }
    for (let i = 0; i < data[2].length; i++) {
        const element = data[2][i]
        const div_append = 'col-xl-3 col-lg-4 col-md-6 col-sm-12 swiper-slide col3-add swip-add'
        const swiper_append = `<div class="imgd m-auto">
<img src="${element.image}"
    alt="">
<div class="img-hov">Out Of Stock</div>
</div>
<p>${element.name}</p>
<h1>${element.title}</h1>
<p><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M6.86544 2.25531L7.74544 4.01531C7.86544 4.26031 8.18544 4.49531 8.45544 4.54031L10.0504 4.80531C11.0704 4.97531 11.3104 5.71531 10.5754 6.44531L9.33544 7.68531C9.12544 7.89531 9.01044 8.30031 9.07544 8.59031L9.43044 10.1253C9.71044 11.3403 9.06544 11.8103 7.99044 11.1753L6.49544 10.2903C6.22544 10.1303 5.78044 10.1303 5.50544 10.2903L4.01044 11.1753C2.94044 11.8103 2.29044 11.3353 2.57044 10.1253L2.92544 8.59031C2.99044 8.30031 2.87544 7.89531 2.66544 7.68531L1.42544 6.44531C0.695443 5.71531 0.930443 4.97531 1.95044 4.80531L3.54544 4.54031C3.81044 4.49531 4.13044 4.26031 4.25044 4.01531L5.13044 2.25531C5.61044 1.30031 6.39044 1.30031 6.86544 2.25531Z"
        fill="#F2BC1B" stroke="#F2BC1B" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>
<span> 4.6/5 </span> <span> | </span><span> 135 </span><svg width="1" height="13"
    viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="0.5" x2="0.499999" y2="12.5" stroke="#C8C9CB" />
</svg>
<span>| Reviews </span>
</p>
<div class="pr">
<span>
    discount ${element.discount}
</span>
</div>
<div class="pric"> <span class="outprice">$${element.price} </span> <span>/ day</span></div>
<div class="statik">
</div>
<div class="butt">
<span>Booking</span>
</div>`
        let sas = document.createElement('div')
        let sas2 = document.createElement('div')
        sas.className = div_append
        sas.innerHTML = swiper_append
        sas2.className = div_append
        sas2.innerHTML = swiper_append
        document.querySelector('.sas').appendChild(sas)
        document.querySelector('.sas2').appendChild(sas2)
    }
    let allbutt = document.querySelectorAll('.butt span')
    let count = 0
    for (const x of allbutt) {
        x.addEventListener('click', function () {
            this.classList.toggle('active')
            this.innerText = this.innerText == "Booking" ? "Unbooking" : "Booking"
            document.querySelector('.count').innerHTML = this.innerText == "Booking" ? --count : ++count
        })
    }
    function price() {
        let array = document.querySelectorAll('.outprice')
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element.setAttribute("data-id", i);
            let span = document.createElement('span')
            let span1 = document.createElement('span')
            let span2 = document.createElement('span')
            span.textContent = '1 day'
            span1.textContent = '7 days'
            span2.textContent = '30 days'
            span.setAttribute("data-id", i);
            span1.setAttribute("data-id", i);
            span2.setAttribute("data-id", i);
            document.querySelectorAll('.statik')[i].appendChild(span)
            document.querySelectorAll('.statik')[i].appendChild(span1)
            document.querySelectorAll('.statik')[i].appendChild(span2)
            let span1m = localStorage.innerText = document.querySelectorAll('.outprice')[i].innerText.slice(1)
            span.addEventListener('click', function () {
                let out = document.querySelectorAll('.outprice')[i].innerText.slice(1)
                let meth = parseInt(this.innerText)
                out = span1m * meth
                document.querySelectorAll('.outprice')[i].innerText = `$${out}`
            })
            span1.addEventListener('click', function () {
                let out = document.querySelectorAll('.outprice')[i].innerText.slice(1)
                let meth = parseInt(this.innerText)
                out = span1m * meth
                document.querySelectorAll('.outprice')[i].innerText = `$${out}`
            })
            span2.addEventListener('click', function () {
                let out = document.querySelectorAll('.outprice')[i].innerText.slice(1)
                let meth = parseInt(this.innerText)
                out = span1m * meth
                document.querySelectorAll('.outprice')[i].innerText = `$${out}`
            })
        }
    }
    price()
}
)
    .catch((error) => {
        console.error("Error:", error);
    });

let image1 = document.querySelector('.mineimg1');
let image2 = document.querySelector('.mineimg2');
let image3 = document.querySelector('.mineimg3');

window.addEventListener('load', function () {
    let size = document.querySelector('.products').clientWidth
    if (size < 1280) {
        image1.width = (20 / 100 * size*2)
        image2.width = (20 / 100 * size*2)
        image3.width = (20 / 100 * size*2)
    }
})

document.querySelector('.calat').addEventListener('click' , function(){
    document.querySelector('.bag').classList.toggle('active')
    console.log(document.querySelector('.bag.active'));
})