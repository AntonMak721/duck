console.log('я родился!')

const popup = document.getElementById('popup')
const buttonPopup= document.getElementById('buttonPopup')
const popupClose = document.getElementById('popupClose')
const overlay = document.getElementById('overlay');
console.log(popup)
const bodyEl = document.body;


buttonPopup.addEventListener('click', function(){
    popup.classList.remove('none');
    console.log('click')
    overlay.style.display = 'flex';
    // bodyEl.classList.toggle("noscroll")
})

popupClose.addEventListener('click', function(){
    popup.classList.toggle('none');
    overlay.style.display = 'none';
})
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
    popup.classList.toggle('none');
});