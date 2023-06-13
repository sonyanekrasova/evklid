
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const mobileNav = document.querySelector('.mobileNav');
    const accordion = document.querySelector(".custom-accordion");
    const rows = [...accordion.querySelectorAll("tr")];
    
    burger.addEventListener("click", function(e) {
        e.stopPropagation();
        document.querySelector("header").classList.toggle("open")
        mobileNav.classList.toggle('mobileNavOpened')
    });

    document.addEventListener("click", (e) => {
        if (e.target !== mobileNav) {
            document.querySelector("header").classList.remove("open")
            mobileNav.classList.remove('mobileNavOpened')
        }
    });

    // ======================= ACCORDION ============================
    // ==============================================================


    rows.forEach((item) => {
        const h3 = item.querySelector("h3");

        h3.insertAdjacentHTML("beforeend", `
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z" fill="#666666"/>
            </svg>
        `)
        
        h3.addEventListener("click", () => {
            item.classList.toggle("expanded");
        });
    })
})