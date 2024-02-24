for (let i = 0; i < 100000; i++) {
    if (localStorage.getItem(`${i}`) != null) {
        document.getElementById("isfuv").innerHTML += ` <button class="btn my-1 mx-1" style="background-color: rgb(0, 208, 255)">
        ${localStorage.getItem(i)}
        </button> `
    }
}

function sellect_fuv(num, name, url) {
    if (document.getElementById(url).id != "NO" && localStorage.getItem(`1${num}`) != name) {
        document.getElementById("isNfuv").innerHTML += ` <button class="btn my-1 mx-1" style="background-color: rgb(0, 208, 255)">
        ${name}
        </button> `;
        JSON.parse(
            localStorage.setItem(`0${num}`, `${url}`),
            localStorage.setItem(`1${num}`, `${name}`)
        )
    }
    document.getElementById(url).id = "NO";
}