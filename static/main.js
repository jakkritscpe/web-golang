console.log("JS loaded")

const url = "127.0.0.1:5555"

var inputForm = document.getElementById("inputForm")

inputForm.addEventListener("submit", (e) => {

    //prevent auto submission
    e.preventDefault()

    const fromdata = new FormData(inputForm)
    fetch(url, {
        method: "POST",
        body: fromdata,
    }).then(
        response => response.text()
    ).then(
        (data) => { console.log(data); document.getElementById("serverMessageBox").innerHTML = data }
    ).catch(
        error => console.error(error)
    )
})