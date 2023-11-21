

document.getElementById('sideBarBtn').addEventListener('click', function () {
    // Get a collection of elements with class 'item'
    const items = document.getElementsByClassName('item');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.contains('d-none') ? items[i].classList.remove('d-none') : items[i].classList.add('d-none');
    }
    

    // Get a collection of elements with class 'sidenav-mini-icon'
    const miniIcons = document.getElementsByClassName('sidenav-mini-icon');

    // Loop through the collection and show each element
    for (let i = 0; i < miniIcons.length; i++) {
        miniIcons[i].classList.remove('d-none');
    }
    // for (let i = 0; i < miniIcons.length; i++) {
    //     miniIcons[i].classList.contains('d-none') ? miniIcons[i].classList.remove('d-none'):miniIcons[i].classList.add('d-none');
    // }

    // document.getElementById('sidepannel').style.width="4rem";
    const sidepanel = document.getElementById('sidepannel');
    sidepanel.style.width = sidepanel.style.width === "15rem" ? "4rem" : "15rem";
    // sidepanel.classList.toggle('p-2');

    document.getElementById('sidepannel').className="p-2";
    const sideBarBtn = document.querySelector('#sideBarBtn');
    sideBarBtn.style.transform = sideBarBtn.style.transform === "translateX(8px)" ? "translateX(50px)" : "translateX(8px)";
    
    document.querySelector('.arrowbtn').classList.toggle('fa-arrow-left');
    document.querySelector('.arrowbtn').classList.toggle('fa-arrow-right');

    

});

