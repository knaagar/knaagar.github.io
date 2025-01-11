const cursor = document.querySelector('.cursor')
const cursor2 = document.querySelector('.cursor2')
const links = document.querySelectorAll('a')
const cards = document.querySelectorAll('.cards')

function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|iphone|ipad/.test(userAgent);
}

if (isMobileDevice()) {
    cursor.style.display = 'none';
    cursor2.style.display = 'none';
} else {
    document.addEventListener('mousemove', function(e){
        let x = e.clientX
        let y = e.clientY
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        cursor2.style.left = x + 'px'
        cursor2.style.top = y + 'px'
    })

    document.addEventListener('mousedown', function(){
        cursor.classList.add('hover')
    })

    document.addEventListener('mouseup', function(){
        cursor.classList.remove('hover')
    })

    links.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hover')
        })
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover')
        })
    })

    cards.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hover')
        })
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover')
        })
    })
}
