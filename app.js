let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouseleDom = document.querySelector('.carousel')
let listItemDom = document.querySelector('.carousel .list')
let thumbnailDom = document.querySelector('.carousel .thumbnail')

nextDom.onclick = function() {
    showSlider('next')
}

prevDom.onclick = function() {
    showSlider('prev')
}

let timeRunnig = 3000
let runTimeOut

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0])
        carouseleDom.classList.add('next')
    } else {
        let positionLastItem = itemSlider.length - 1
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouseleDom.classList.add('prev')
    }

    clearTimeout(runTimeOut)
    runTimeOut = setTimeout(() => {
        carouseleDom.classList.remove('next')
        carouseleDom.classList.remove('prev')
    }, timeRunnig)
}