let img = document.querySelector('.img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let lis = document.querySelectorAll('.banner-btn li')

let imgArr = ['11.jpeg','22.jpeg','33.jpeg','44.jpeg','55.jpeg'];
let count = 0;

function cutImg(){
    img.src = './images/' + imgArr[count];
    for(let i =0; i<lis.length; i++){
        lis[i].className ='';
    }
    lis[count].className = 'active';
}

// set up timer of slide interval is 3 seconds
let timer = setInterval(()=>{
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
},3000);

// click next botton
next.onclick = function(){
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
}

// click previous botton
prev.onclick = function(){
    count--;
    if(count<0){
        count=imgArr.length-1;
    }
    cutImg();
}

// mouse moves to the image area the timer should be paused
slide.onmouseover = function(){
    clearInterval(timer);

}

// mouse moves out
slide.onmouseout = function(){
    timer = setInterval(
        function(){
            count++;
            if(count> imgArr.length-1){
                count=0;
            }
            cutImg();
        }, 3000);
}

// li binds event
for (let i = 0; i <  lis.length; i++){
    lis[i].onclick = ()=>{
        count = i;
        cutImg();

    };
}

// fulfill elevator function

let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let search = document.querySelector('.search');
let searchM = document.querySelector('.search-m');
let form = document.querySelector('.form');
let searchL = document.querySelector('.search_logo');

document.onscroll = ()=>{
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    let headerHeight =  header.offsetHeight;
    let bannerHeight = banner.offsetHeight;

    if(top >= headerHeight + bannerHeight){

        search.className = 'search search-fix';
        searchM.computedStyleMap.height = '50px';
        form.style.top = '8px';
        searchL.style.display = 'block';

    }else{

        search.className = 'search';
        searchM.computedStyleMap.height = '60px';
        form.style.top = '25px';
        searchL.style.display = 'none';
    }
}