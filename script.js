// console.log("Script running...");
// document.querySelector('.cross').style.display= 'none';
// document.querySelector('.Hamburger').addEventListener("click",()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.toggle('sidebarGo')){
//         document.querySelector('.ham').style.display= 'inline'
//          document.querySelector('.cross').style.display= 'none'
         
//     }
//     else{
//          document.querySelector('.ham').style.display= 'none'
//          setTimeout(()=>{
//             document.querySelector('.cross').style.display= 'inline'
//          },350);
          
//     }
// })
console.log("Script running...");

document.querySelector('.cross').style.display = 'none';

document.querySelector('.Hamburger').addEventListener("click", () => {
    let sidebar = document.querySelector('.sidebar');
    let ham = document.querySelector('.ham');
    let cross = document.querySelector('.cross');

    // Toggle the class once and store the result (true if class is present)
    let isClosed = sidebar.classList.toggle('sidebarGo');

    if (isClosed) {
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        ham.style.display = 'none';
        setTimeout(() => {
            cross.style.display = 'inline';
        }, 350);
    }
});
