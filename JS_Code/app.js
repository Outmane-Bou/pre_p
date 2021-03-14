const prijs = document.querySelector(".w1");
const pre = document.querySelector(".w2");
const btn = document.querySelector(".btn");
const pa = document.querySelector(".pa");
btn.addEventListener("click", function(){
    const epr = (Number(prijs.value) / 100) * Number(pre.value);
    pa.textContent = `${Number(prijs.value) + epr}$`;
})
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        const epr = (Number(prijs.value) / 100) * Number(pre.value);
        pa.textContent = `${Number(prijs.value) + epr} $`;
    }
});

