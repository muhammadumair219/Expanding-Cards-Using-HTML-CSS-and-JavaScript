let panelsSelector = document.querySelectorAll('.panel');

panelsSelector.forEach( function (panel) {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
    })
})

function removeActiveClass() {
    panelsSelector.forEach( function (panel) {
        panel.classList.remove("active");
    })
}