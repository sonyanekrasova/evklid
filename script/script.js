let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});



const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot')

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const dotsLength = dots.length;

        dots.forEach((dot, index) => {
            dot.classList.remove('white')
        })

        dot.classList.add('white')
        slider.style.transform = `translateX(-${(index * 100) / dotsLength}%)`
    })
})