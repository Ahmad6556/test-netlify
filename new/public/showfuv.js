for (let i = 0; i < 100000; i++) {
    if (localStorage.getItem(`1${i}`) != null) {
        document.getElementById("nav").innerHTML += ` <button class="btn text-white my-1 mx-1" style="background-color: rgb(13, 110, 253)"
        id="${localStorage.getItem(`0${i}`)}" onclick="azzaihf('${localStorage.getItem(`0${i}`)}', '0${i}', '1${i}')">
        ${localStorage.getItem(`1${i}`)}
        </button> `
    }
}


function azzaihf(URL, U_s, N_s) {
    document.getElementById("section").innerHTML = `
    <button id="a${U_s}" class="btn text-white my-1 mx-1" style="background-color: rgb(255, 0, 0)" onclick="deleteOne(${U_s}, ${N_s})">
    حذف الكل
    </button>
    <br>
    <link rel="stylesheet" href="/iframe.css">
    <iframe id="yyy b${U_s}" src="${URL}" title="يا عباس | إصدار يا محرم | حسين فيصل | محرم 1438" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
}

function deleteOne(U_s, N_s) {
    danger = confirm(`هل تريد حذف ${localStorage.getItem(N_s)}`)
    if (danger == true) {
        localStorage.removeItem(N_s)
        localStorage.removeItem(U_s)
        document.getElementById(localStorage.getItem(U_s)).hidden = true;
        document.getElementById(localStorage.getItem(`a${U_s}`)).hidden = true;
        document.getElementById(localStorage.getItem(`b${U_s}`)).hidden = true;
    }
}

function deleteAll() {
    danger = confirm("هل أنت متأكد من حذف جميع المفضلة؟")
    if (danger == true) {
        localStorage.clear()
        document.getElementById("nav").innerHTML = `
    <a class="btn text-white my-1 mx-1" style="background-color: rgb(0, 145, 255)" href="/sfuv">
        تحديد عزاء
    </a>
    <button class="btn text-white my-1 mx-1" style="background-color: rgb(255, 0, 0)" onclick="deleteAll()">
        حذف الكل
    </button>
    `
    }

}