// change number
let reduce = document.querySelector('.reduce');
let add = document.querySelector('.add');
let personnum = document.querySelector('.person-num');
let pieceNum = document.getElementById('piece');
let hasselnotterNum = document.getElementById('hasselnotter');
let smorNum = document.getElementById('smor');
let kakaoNum = document.getElementById('kakao');
let aggNum = document.getElementById('agg');
let sockerNum = document.getElementById('socker');
let saltNum = document.getElementById('salt');
let vaniljpulverNum = document.getElementById('vaniljpulver');
let mjolNum = document.getElementById('mjol');
let bakpulverNum = document.getElementById('bakpulver');

add.onclick = ()=>{
    personnum.value++;
    pieceNum.textContent = personnum.value * 24;
    hasselnotterNum.textContent = personnum.value * 100;
    smorNum.textContent = personnum.value * 250;
    kakaoNum.textContent = personnum.value * 2;
    aggNum.textContent = personnum.value * 4;
    sockerNum.textContent = personnum.value * 4.5;
    saltNum.textContent = personnum.value * 0.5;
    vaniljpulverNum.textContent = personnum.value * 2;
    mjolNum.textContent = personnum.value * 3;
    bakpulverNum.textContent = personnum.value * 0.5;
    if(personnum.value > 1){
        reduce.className = 'reduce';
    }
}

reduce.onclick = ()=>{
    personnum.value--;
    pieceNum.textContent = personnum.value * 24;
    hasselnotterNum.textContent = personnum.value * 100;
    smorNum.textContent = personnum.value * 250;
    kakaoNum.textContent = personnum.value * 2;
    aggNum.textContent = personnum.value * 4;
    sockerNum.textContent = personnum.value * 4.5;
    saltNum.textContent = personnum.value * 0.5;
    vaniljpulverNum.textContent = personnum.value * 2;
    mjolNum.textContent = personnum.value * 3;
    bakpulverNum.textContent = personnum.value * 0.5;
    if(personnum.value <= 1){
        personnum = 1;
        reduce.className = 'reduce disabled';
    }
}

function toggleDisplay(emptyId, fullId) {
    let empty = document.getElementById(emptyId);
    let full = document.getElementById(fullId);

    if (empty.style.display === "none") {
      empty.style.display = "inline-block";
      full.style.display = "none";
    } else {
      empty.style.display = "none";
      full.style.display = "inline-block";
    }
  }

  // fulfill elevator function

let header = document.querySelector('.header');
// let banner = document.querySelector('.banner');
let search = document.querySelector('.search');
let searchM = document.querySelector('.search-m');
let form = document.querySelector('.form');
let searchL = document.querySelector('.search_logo');

document.onscroll = ()=>{
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    let headerHeight =  header.offsetHeight;
    // let bannerHeight = banner.offsetHeight;

    if(top >= headerHeight ){

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