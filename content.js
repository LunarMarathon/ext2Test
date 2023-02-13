let paraArray = []

setInterval(() => {
    document.getElementById('btn_submit_generator').click()
    paraArray.unshift(document.getElementsByClassName("support-paragraph")[0].textContent)
    console.log(paraArray)
}, 1000 * 3);