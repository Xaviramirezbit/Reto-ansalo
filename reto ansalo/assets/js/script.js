const dark = document.getElementById('dark')
const light = document.getElementById('light')

const container = document.getElementById('container')

dark.addEventListener('click', ()=>{

    container.classList.add('dark')
    localStorage.setItem('tema1', 'dark')
    
})

light.addEventListener('click', ()=>{

    container.classList.add('light')
    localStorage.setItem('tema', 'light')
    
})

const temaEnStorage = ()=>{
    const temaGuardado = localStorage.getItem('tema')
    if(temaGuardado == 'dark'){
        container.classList.add('dark')
    }else if (temaGuardado == 'light'){
            container.classList.remove('dark')
    }
}
temaEnStorage()