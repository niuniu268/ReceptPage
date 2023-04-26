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
