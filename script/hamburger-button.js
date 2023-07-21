const menuBtn = document.querySelector('.menu-btn');

function displayMenu() {
    menu = document.querySelectorAll('nav ul');    
    const styles = window.getComputedStyle(menu[0]);
    const display = styles.getPropertyValue("display");
    console.log(`${display}`);
    if( display == "none") {
        menu.forEach((item) => {
            item.style.display = "block";
          });
        
    } else {
        menu.forEach((item) => {
            item.style.display = "none";
        });
    }
}

menuBtn.addEventListener('click',displayMenu);
