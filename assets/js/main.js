const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const content = acordeon.querySelector('.content')
        const isOpen = content.classList.contains('hide')
        if(isOpen){
            content.classList.remove('hide')
        }else{
            content.classList.add('hide')
        }
    })
})