function selectTemp(){
let temporada = document.querySelector('#select').value
let containerEps = document.querySelector('.containerEps')
let containerEps2 = document.querySelector('.containerEps2')
let video = document.querySelector('.movie')

video.setAttribute('src', '')
video.style.display = "none"

    if (temporada == 'default') {
        containerEps.style.display = "none"
        containerEps2.style.display = "none"
        video.setAttribute('src', '')
        video.style.display = "none"
    }else if (temporada == 'Temporada 01') {
        containerEps.style.display = "flex"
        containerEps2.style.display = "none"
    }else if (temporada == 'Temporada 02') {
        containerEps2.style.display = "flex"
        containerEps.style.display = "none"
    }
}
//////////////////////////////////////////
// MUDAR A COR DO BOTÃO AO SER CLICADO //
////////////////////////////////////////

const paragrafo = document.querySelectorAll('p');

function changeColor() {
    this.classList.toggle('clickP')
}

paragrafo.forEach(item => {
    item.addEventListener('click', changeColor)
})

/////////////////////////
// PRIMEIRA TEMPORADA //
///////////////////////
function pri(){
    let video = document.querySelector('.movie')
    console.log()
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_cfac9986b8d24375969fdb80e8559fe3/720p/mp4/file.mp4')
}

function seg(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_7abf0a36c0e94fcf8e4f0cda519d0a3a/720p/mp4/file.mp4')
}

function ter(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_2f474b9df7714e7ab9de8d01de47b6e4/720p/mp4/file.mp4')
}

function qua(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/34d7c3_d03561f6931f47e48fba71100a040a62/720p/mp4/file.mp4')
}

function qui(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_9b9d0c34b4664f7193ce2387c52b1aaf/720p/mp4/file.mp4')
}

function sex(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_4e8a9b600a1c4a579c1791b376411414/720p/mp4/file.mp4')
}

function set(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_06c07297783d46f29ece19b70503b723/720p/mp4/file.mp4')
}

function oit(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_eddce08bbb5f48f6be519367cca72436/720p/mp4/file.mp4')
}

function non(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_608a89003ea741098660179c8f1fdfb1/720p/mp4/file.mp4')
}

function dec(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_808fcdc0a93241e1a4f3226063d4b362/720p/mp4/file.mp4')
}

function decp(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_ad4e6961807b4e0f86a47408e96da63b/720p/mp4/file.mp4')
}

function decs(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_fa965cce12794e5a9d2310080048c298/720p/mp4/file.mp4')
}

function dect(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_b44b159677ca4e3aad2cd7c25d5efe7c/720p/mp4/file.mp4')
}

function decqua(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_fead3c83145e49e98a1988fcd1b6871d/720p/mp4/file.mp4')
}

function decqui(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_51e33f12c2d34ae89476169314de8428/720p/mp4/file.mp4')
}

function decsex(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_6818c3dc61e2450e9484f963290f329b/720p/mp4/file.mp4')
}

function decset(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_1a1b81c782fe426695261d88cef3efde/720p/mp4/file.mp4')
}

////////////////////////
// SEGUNDA TEMPORADA //
//////////////////////
function pri2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_cf3c27234abf442dba1ad7d3d00ae9e6/720p/mp4/file.mp4')
}

function seg2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_c8abd0cf25274401b22682fb9ded26c5/720p/mp4/file.mp4')
}

function ter2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_d22565f0065048e3a30895b634402bdd/720p/mp4/file.mp4')
}

function qua2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_ba3efaf781ad4e0db3b641b51a754725/720p/mp4/file.mp4')
}

function qui2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_f831b424a4784c1fbf903de5cea6dec2/720p/mp4/file.mp4')
}

function sex2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_5d3abb9f932e4043995f5604d3feb4b1/720p/mp4/file.mp4')
}

function set2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_ea818ef103a349abb56baf1b538bb7a3/720p/mp4/file.mp4')
}

function oit2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_51d2c8e06d33402094d420009c47a061/720p/mp4/file.mp4')
}

function non2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_f4fbe4d36eec43f7930ec45fab345230/720p/mp4/file.mp4')
}

function dec2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_7a1bd7e245af4ee28a439fe84b5c926c/720p/mp4/file.mp4')
}

function decp2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_2cb3d59b4054415f9bf70f0a52f669f3/720p/mp4/file.mp4')
}

function decs2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_3e8234f03ef04f99aa779ece1bc27727/720p/mp4/file.mp4')
}

function dect2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_44158d49f61a48d18dcfbb6867cecdc1/720p/mp4/file.mp4')
}

function decqua2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_3a731417194f4186a0c0bc7114941c63/720p/mp4/file.mp4')
}

function decqui2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_561f65dc817c4e8b98f069357c1c5769/720p/mp4/file.mp4')
}

function decsex2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_95cebf499bd0495ab20fd4308664160a/720p/mp4/file.mp4')
}

function decset2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_f7ad82cc85044fa1958df9107df7691e/720p/mp4/file.mp4')
}

function decoit2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_9a80887817cc4272b2948700f7ba4684/720p/mp4/file.mp4')
}

function decnon2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_83aafab14d1a4063a0f8b8ea1816a58b/720p/mp4/file.mp4')
}

function vig2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_fa72ee23cdc1461ea5ac6eed1dcdd228/720p/mp4/file.mp4')
}

function vigpri2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_0033ec6805114fd4b3b6866a8a7059d4/720p/mp4/file.mp4')
}

function vigseg2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_78ec75a620ac4b138f8e53d754e9cc27/720p/mp4/file.mp4')
}

function vigter2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', 'https://video.wixstatic.com/video/28b166_5fe1a61773a74947b8e1748c6b6fc2a8/720p/mp4/file.mp4')
}