function selectTemp(){
let temporada = document.querySelector('#select').value
let containerEps = document.querySelector('.containerEps')
let containerEps2 = document.querySelector('.containerEps2')
let containerEps3 = document.querySelector('.containerEps3')
let containerEps4 = document.querySelector('.containerEps4')
let video = document.querySelector('.movie')

video.setAttribute('src', '')
video.style.display = "none"

if (temporada == 'default') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    video.setAttribute('src', '')
    video.style.display = "none"
}else if (temporada == 'Temporada 01') {
    containerEps.style.display = "flex"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
}else if (temporada == 'Temporada 02') {
    containerEps2.style.display = "flex"
    containerEps.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
}else if (temporada == 'Temporada 03') {
    containerEps3.style.display = "flex"
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps4.style.display = "none"
}else if (temporada == 'Temporada 04') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "flex"
}
}

const primeiraTemporada = [

    'https://video.wixstatic.com/video/28b166_cfac9986b8d24375969fdb80e8559fe3/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_7abf0a36c0e94fcf8e4f0cda519d0a3a/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_2f474b9df7714e7ab9de8d01de47b6e4/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/34d7c3_d03561f6931f47e48fba71100a040a62/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_9b9d0c34b4664f7193ce2387c52b1aaf/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_4e8a9b600a1c4a579c1791b376411414/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_06c07297783d46f29ece19b70503b723/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_eddce08bbb5f48f6be519367cca72436/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_608a89003ea741098660179c8f1fdfb1/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_808fcdc0a93241e1a4f3226063d4b362/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ad4e6961807b4e0f86a47408e96da63b/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_fa965cce12794e5a9d2310080048c298/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_b44b159677ca4e3aad2cd7c25d5efe7c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_fead3c83145e49e98a1988fcd1b6871d/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_51e33f12c2d34ae89476169314de8428/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_6818c3dc61e2450e9484f963290f329b/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_1a1b81c782fe426695261d88cef3efde/720p/mp4/file.mp4'
];

const segundaTemporada = [

    'https://video.wixstatic.com/video/28b166_cf3c27234abf442dba1ad7d3d00ae9e6/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c8abd0cf25274401b22682fb9ded26c5/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_d22565f0065048e3a30895b634402bdd/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ba3efaf781ad4e0db3b641b51a754725/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_f831b424a4784c1fbf903de5cea6dec2/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_5d3abb9f932e4043995f5604d3feb4b1/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ea818ef103a349abb56baf1b538bb7a3/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_51d2c8e06d33402094d420009c47a061/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_f4fbe4d36eec43f7930ec45fab345230/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_7a1bd7e245af4ee28a439fe84b5c926c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_2cb3d59b4054415f9bf70f0a52f669f3/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_3e8234f03ef04f99aa779ece1bc27727/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_44158d49f61a48d18dcfbb6867cecdc1/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_3a731417194f4186a0c0bc7114941c63/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_561f65dc817c4e8b98f069357c1c5769/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_95cebf499bd0495ab20fd4308664160a/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_f7ad82cc85044fa1958df9107df7691e/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_9a80887817cc4272b2948700f7ba4684/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_83aafab14d1a4063a0f8b8ea1816a58b/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_fa72ee23cdc1461ea5ac6eed1dcdd228/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_0033ec6805114fd4b3b6866a8a7059d4/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_78ec75a620ac4b138f8e53d754e9cc27/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_5fe1a61773a74947b8e1748c6b6fc2a8/720p/mp4/file.mp4'
];

const terceiraTemporada = [

    'https://video.wixstatic.com/video/28b166_cba9f5cc4e8c4c4899b84414ca70eeab/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_d0c0b33a70264c6fa040845c9cdcdd3f/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c53616c78f174ae6ad4333fb595301f0/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_5029afd376964d2fa0fe42b1576a8ebd/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_9052542380f34bcea1bf97151c3230da/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_2680f6093bf740ee8124f0a7c55210f8/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_195a5f53bc6e48cca43e6abbdf5a16a2/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ae1a23d05f7e4b5e8a7cd921a7084fbf/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_59fbf71032b44cf19f1c61100a08aa95/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_64903c677086499fa186cd171d1760af/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_51012fc176c94cd4bc5f9ecb5ed40464/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_430f4deb16394eac9f127a1bb4a5fb50/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_2a27a62975d946e38bbeb225ed457c2d/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_eb15f445c44041ce8df89214f5056547/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_22d6d0d4052e43c79952994cf2bf58d4/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_50a20f55a340465b9f4127bacebc6c7b/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_831d54e608744c61bd4e05bdecdaf812/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_e38efa3cff5e42ada5056616bff4f4c7/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_b9518f6ba8174ca9b93e95e4b3736910/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_a62d2945af044759b3c545bca075e31e/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_886c617b7c704a07a40ae47bcfb0be72/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_70533fcf757a4e14bc9fd8b2e3ea409c/720p/mp4/file.mp4'
]

const quartaTemporada = [
    'https://video.wixstatic.com/video/28b166_2a98cc52b4c242d2b6a76cc9210f3e5e/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_74d46dd7a75c4a01a2db26102805b148/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_d925c2f139ef4495adc9fb0af49308ff/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_25fc27cc091b42e39ec3a34149617e5c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_8b16770ec57449d7afbac60743e6ab16/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_fbf614237ab845ce985a8a8369e02b2c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c5520152e828437bbee06bf21e438c49/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_95cdb22c85c2431eae37faae237b8c86/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_e76ea1ec6ca443b1864175756f516f40/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c9e9bb960fbf4e19a27333085ab87601/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_9722fc3504654a578b166bdcfae170bc/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_3db2037452a5433e8a66c25964844963/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c136e7c3a89e44dfa8b64dbd63aa85f6/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_f68c632c98534386a0394f34f2c73561/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_30c16c6e8610462d9db65a4fcbb65e03/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ad41e84f5c3944969350794bb1ee078c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ee7b79ed998f47f4be4b5cfae3f925d4/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_e3c19f19759d44ccb9d8a0271e3082c2/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_dadc4255ee554f78bef005799dd38389/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_edbad62aec9d49b6b507f4b499b37c4f/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_21bc18f8eb0d4a2d977b561b01b7add8/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_452b02da62a3486b93369d8e72a22c54/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_748216c89bbd43338cc08ae5695383c5/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_3d613cb007da42a483c3c05a4d415ffd/720p/mp4/file.mp4'
]

//////////////////////////////////////////////////
// FUNÇÃO DE FECHAR O VIDEO AO CLICAR NA TELA //
////////////////////////////////////////////////

function buttonCloseVideo() {
    let video = document.querySelector('.movie')
    const closeButton = document.querySelector('.closeButton')
    closeButton.style.display = "none"
    video.setAttribute('src', '')
    video.style.display = "none"
    console.log(video)
}

//////////////////////////////////////////
// MUDAR A COR DO BOTÃO AO SER CLICADO //
////////////////////////////////////////

const paragrafo = document.querySelectorAll('p');

function changeColor() {
    const closeButton = document.querySelector('.closeButton')
    this.classList.toggle('clickP')
    closeButton.style.display = "flex"
}

paragrafo.forEach(item => {
    item.addEventListener('click', changeColor)
})

/////////////////////////
// PRIMEIRA TEMPORADA //
///////////////////////

function pri(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[0])
}

function seg(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[1])
}

function ter(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[2])
}

function qua(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[3])
}

function qui(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[4])
}

function sex(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[5])
}

function set(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[6])
}

function oit(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[7])
}

function non(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[8])
}

function dec(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[9])
}

function decp(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[10])
}

function decs(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[11])
}

function dect(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[12])
}

function decqua(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[13])
}

function decqui(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[14])
}

function decsex(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[15])
}

function decset(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', primeiraTemporada[16])
}

////////////////////////
// SEGUNDA TEMPORADA //
//////////////////////

function pri2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[0])
}

function seg2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[1])
}

function ter2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[2])
}

function qua2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[3])
}

function qui2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[4])
}

function sex2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[5])
}

function set2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[6])
}

function oit2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[7])
}

function non2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[8])
}

function dec2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[9])
}

function decp2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[10])
}

function decs2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[11])
}

function dect2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[12])
}

function decqua2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[13])
}

function decqui2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[14])
}

function decsex2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[15])
}

function decset2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[16])
}

function decoit2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[17])
}

function decnon2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[18])
}

function vig2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[19])
}

function vigpri2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[20])
}

function vigseg2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[21])
}

function vigter2(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', segundaTemporada[22])
}

/////////////////////////
// TERCEIRA TEMPORADA //
///////////////////////

function pri3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[0])
}

function seg3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[1])
}

function ter3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[2])
}

function qua3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[3])
}

function qui3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[4])
}

function sex3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[5])
}

function set3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[6])
}

function oit3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[7])
}

function non3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[8])
}

function dec3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[9])
}

function decp3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[10])
}

function decs3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[11])
}

function dect3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[12])
}

function decqua3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[13])
}

function decqui3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[14])
}

function decsex3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[15])
}

function decset3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[16])
}

function decoit3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[17])
}

function decnon3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[18])
}

function vig3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[19])
}

function vigpri3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[20])
}

function vigseg3(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', terceiraTemporada[21])
}

///////////////////////
// QUARTA TEMPORADA //
/////////////////////

function pri4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[0])
}

function seg4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[1])
}

function ter4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[2])
}

function qua4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[3])
}

function qui4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[4])
}

function sex4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[5])
}

function set4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[6])
}

function oit4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[7])
}

function non4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[8])
}

function dec4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[9])
}

function decp4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[10])
}

function decs4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[11])
}

function dect4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[12])
}

function decqua4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[13])
}

function decqui4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[14])
}

function decsex4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[15])
}

function decset4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[16])
}

function decoit4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[17])
}

function decnon4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[18])
}

function vig4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[19])
}

function vigpri4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[20])
}

function vigseg4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[21])
}

function vigter4(){
    let video = document.querySelector('.movie')
    video.style.display = "flex"
    video.setAttribute('src', quartaTemporada[22])
}
