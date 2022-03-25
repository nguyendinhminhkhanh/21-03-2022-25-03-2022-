const list = document.querySelectorAll('span')
var index = 0
setInterval((e) => {
    list.forEach((e) => {
        e.classList.remove('js-shadow')
    })
    list[index].classList.add('js-shadow')
    index++
    if(index == list.length){
        index = 0
    }
},300)