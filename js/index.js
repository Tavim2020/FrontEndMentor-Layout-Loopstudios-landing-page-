// var spanImages = document.querySelectorAll('.container-image');

// spanImages[0].addEventListener('mouseover', ()=>{
//     spanImages[0].children[0].style.opacity = '0.2';
//     spanImages[0].children[1].style.color = '#000';
// })

// spanImages[0].addEventListener('mouseout', ()=>{
//     spanImages[0].children[0].style.opacity = '1';
//     spanImages[0].children[1].style.color = '#fff';
// })



// spanImages[1].addEventListener('mouseover', ()=>{
//     spanImages[1].children[0].style.opacity = '0.2';
//     spanImages[1].children[1].style.color = '#000';
// })

// spanImages[1].addEventListener('mouseout', ()=>{
//     spanImages[1].children[0].style.opacity = '1';
//     spanImages[1].children[1].style.color = '#fff';
// })

// spanImages[2].addEventListener('mouseover', ()=>{
//     spanImages[2].children[0].style.opacity = '0.2';
//     spanImages[2].children[1].style.color = '#000';
// })

// spanImages[2].addEventListener('mouseout', ()=>{
//     spanImages[2].children[0].style.opacity = '1';
//     spanImages[2].children[1].style.color = '#fff';
// })
// spanImages[3].addEventListener('mouseover', ()=>{
//     spanImages[3].children[0].style.opacity = '0.2';
//     spanImages[3].children[1].style.color = '#000';
// })

// spanImages[3].addEventListener('mouseout', ()=>{
//     spanImages[3].children[0].style.opacity = '1';
//     spanImages[3].children[1].style.color = '#fff';
// })
// spanImages[4].addEventListener('mouseover', ()=>{
//     spanImages[4].children[0].style.opacity = '0.2';
//     spanImages[4].children[1].style.color = '#000';
// })

// spanImages[4].addEventListener('mouseout', ()=>{
//     spanImages[4].children[0].style.opacity = '1';
//     spanImages[4].children[1].style.color = '#fff';
// })
// spanImages[5].addEventListener('mouseover', ()=>{
//     spanImages[5].children[0].style.opacity = '0.2';
//     spanImages[5].children[1].style.color = '#000';
// })

// spanImages[5].addEventListener('mouseout', ()=>{
//     spanImages[5].children[0].style.opacity = '1';
//     spanImages[5].children[1].style.color = '#fff';
// })
// spanImages[6].addEventListener('mouseover', ()=>{
//     spanImages[6].children[0].style.opacity = '0.2';
//     spanImages[6].children[1].style.color = '#000';
// })

// spanImages[6].addEventListener('mouseout', ()=>{
//     spanImages[6].children[0].style.opacity = '1';
//     spanImages[6].children[1].style.color = '#fff';
// })
// spanImages[7].addEventListener('mouseover', ()=>{
//     spanImages[7].children[0].style.opacity = '0.2';
//     spanImages[7].children[1].style.color = '#000';
// })

// spanImages[7].addEventListener('mouseout', ()=>{
//     spanImages[7].children[0].style.opacity = '1';
//     spanImages[7].children[1].style.color = '#fff';
// })
    

// spanImages[8].addEventListener('mouseover', ()=>{
//     spanImages[8].children[0].style.opacity = '0.2';
//     spanImages[8].children[1].style.color = '#000';
// })

// spanImages[8].addEventListener('mouseout', ()=>{
//     spanImages[8].children[0].style.opacity = '1';
//     spanImages[8].children[1].style.color = '#fff';
// })



// spanImages[9].addEventListener('mouseover', ()=>{
//     spanImages[9].children[0].style.opacity = '0.2';
//     spanImages[9].children[1].style.color = '#000';
// })

// spanImages[9].addEventListener('mouseout', ()=>{
//     spanImages[9].children[0].style.opacity = '1';
//     spanImages[9].children[1].style.color = '#fff';
// })

// spanImages[10].addEventListener('mouseover', ()=>{
//     spanImages[10].children[0].style.opacity = '0.2';
//     spanImages[10].children[1].style.color = '#000';
// })

// spanImages[10].addEventListener('mouseout', ()=>{
//     spanImages[10].children[0].style.opacity = '1';
//     spanImages[10].children[1].style.color = '#fff';
// })
// spanImages[11].addEventListener('mouseover', ()=>{
//     spanImages[11].children[0].style.opacity = '0.2';
//     spanImages[11].children[1].style.color = '#000';
// })

// spanImages[11].addEventListener('mouseout', ()=>{
//     spanImages[11].children[0].style.opacity = '1';
//     spanImages[11].children[1].style.color = '#fff';
// })
// spanImages[12].addEventListener('mouseover', ()=>{
//     spanImages[12].children[0].style.opacity = '0.2';
//     spanImages[12].children[1].style.color = '#000';
// })

// spanImages[12].addEventListener('mouseout', ()=>{
//     spanImages[12].children[0].style.opacity = '1';
//     spanImages[12].children[1].style.color = '#fff';
// })
// spanImages[13].addEventListener('mouseover', ()=>{
//     spanImages[13].children[0].style.opacity = '0.2';
//     spanImages[13].children[1].style.color = '#000';
// })

// spanImages[13].addEventListener('mouseout', ()=>{
//     spanImages[13].children[0].style.opacity = '1';
//     spanImages[13].children[1].style.color = '#fff';
// })
// spanImages[14].addEventListener('mouseover', ()=>{
//     spanImages[14].children[0].style.opacity = '0.2';
//     spanImages[14].children[1].style.color = '#000';
// })

// spanImages[14].addEventListener('mouseout', ()=>{
//     spanImages[14].children[0].style.opacity = '1';
//     spanImages[14].children[1].style.color = '#fff';
// })
// spanImages[15].addEventListener('mouseover', ()=>{
//     spanImages[15].children[0].style.opacity = '0.2';
//     spanImages[15].children[1].style.color = '#000';
// })

// spanImages[15].addEventListener('mouseout', ()=>{
//     spanImages[15].children[0].style.opacity = '1';
//     spanImages[15].children[1].style.color = '#fff';
// })



// menu

var menuImg = document.querySelector(".menu-img");

 menuImg.addEventListener('click', ()=>{
     var menu = document.querySelector('.menu');
     menu.classList.remove('hidden');

     var closeMenu = document.querySelector('#close-menu');
     closeMenu.addEventListener('click', ()=>{
         menu.classList.add('hidden');
     })

     var containerLeader = document.querySelector('.container-leader');
     containerLeader.addEventListener('mouseover', ()=>{
         menu.classList.add('hidden');
        })
 })