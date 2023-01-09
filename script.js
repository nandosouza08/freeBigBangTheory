function selectTemp(){
const closeButton = document.querySelector('.closeButton')
closeButton.style.display = "none"
let temporada = document.querySelector('#select').value
let containerEps = document.querySelector('.containerEps')
let containerEps2 = document.querySelector('.containerEps2')
let containerEps3 = document.querySelector('.containerEps3')
let containerEps4 = document.querySelector('.containerEps4')
let containerEps5 = document.querySelector('.containerEps5')
let containerEps6 = document.querySelector('.containerEps6')
let containerEps7 = document.querySelector('.containerEps7')
let containerEps8 = document.querySelector('.containerEps8')
let containerEps9 = document.querySelector('.containerEps9')
let containerEps10 = document.querySelector('.containerEps10')
let containerEps11 = document.querySelector('.containerEps11')
let containerEps12 = document.querySelector('.containerEps12')
let video = document.querySelector('.movie')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
video.setAttribute('src', '')
video.style.display = "none"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (temporada == 'default') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
    video.setAttribute('src', '')
    video.style.display = "none"
}else if (temporada == 'Temporada 01') {
    containerEps.style.display = "flex"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 02') {
    containerEps2.style.display = "flex"
    containerEps.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 03') {
    containerEps3.style.display = "flex"
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 04') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "flex"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 05') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "flex"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 06') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "flex"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 07') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "flex"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 08') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "flex"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 09') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "flex"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 10') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "flex"
    containerEps11.style.display = "none"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 11') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "flex"
    containerEps12.style.display = "none"
}else if (temporada == 'Temporada 12') {
    containerEps.style.display = "none"
    containerEps2.style.display = "none"
    containerEps3.style.display = "none"
    containerEps4.style.display = "none"
    containerEps5.style.display = "none"
    containerEps6.style.display = "none"
    containerEps7.style.display = "none"
    containerEps8.style.display = "none"
    containerEps9.style.display = "none"
    containerEps10.style.display = "none"
    containerEps11.style.display = "none"
    containerEps12.style.display = "flex"
}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const quintaTemporada = [
    'https://video.wixstatic.com/video/28b166_8f83e56bf11f4c56b1e6e29d5c910d94/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_f67048316e5741e1a83f3bcce91ebf4b/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_a61fc19294bb413ab10a8ce444606bf3/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_e7518a6476814516b51c9475cda2f16c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_4c1c5b8e65664e938d9cd8c25ffb0dd1/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_3fa9932c557c417cb7d74e439c0bf8b6/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_b9095aa74a164f478ddd3239d7cf1600/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_faa4cc163844410dbb86d74330f1bcf8/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_87b3561d6b3c4637b195d9422cb61a75/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_e5d7d5ae05264b07b5c083a81a9bd6e3/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_f190e1ea7446487cb94185d717791293/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ae2a197451a34f0e8ab64160cbb27b52/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_7805097e8eda492abac86c76d51a956f/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c582acee4ff94ca183bc2d86f86a8d84/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_46093a88e7e64a4ea2253f636e7531bc/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_c673f9e58dc64c34a985813d9ccf6007/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_ba8325cab5134ddcafa1c95bbc9ec49c/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_0b0b3548c4d64a6b9e910bd1f639400d/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_e85df395517a442686d5d3b7cf7ddc58/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_a5c926d1c89c404bb5a06285c6283b7f/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_45b59e0398ad4469911fa9284c04f874/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_6279e25b56f2497eac668ba7ce0594d1/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_2f8a4b1d6c2e4511a5ac525c0ff29a0f/720p/mp4/file.mp4',
    'https://video.wixstatic.com/video/28b166_4d46453acce74208b0f4e752f9b104ec/720p/mp4/file.mp4'
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sextaTemporada = [
    'https://drive.google.com/file/d/17RavD-xKsd6wE9EUv8t3rQVTZXBE_Hz9/preview',
    'https://drive.google.com/file/d/1q9hABKqtg4-snD_T9XuvHTDh2CH3PlBO/preview',
    'https://drive.google.com/file/d/1-FIN2yeM6rhSwYaFKNumOk4aKLt87BZZ/preview',
    'https://drive.google.com/file/d/1_GlZ9Azh13WEe-FunGKw-X4UCLnhhwBk/preview',
    'https://drive.google.com/file/d/1jG-q9KLrZh3WFvBXAayRlwv_Db3by98R/preview',
    'https://drive.google.com/file/d/1Ohief178efmdNkL1cImthANu_g6Ht2sa/preview',
    'https://drive.google.com/file/d/1bXXjnRCMeYB5eCVAnniWjCv6vWChl7IT/preview',
    'https://drive.google.com/file/d/1oF0T2pR7zn2jruQPQKaigZkn_IoyJ7Es/preview',
    'https://drive.google.com/file/d/1mVQBsYe-KIBLugHqwRnJf0cRA8b-2IuW/preview',
    'https://drive.google.com/file/d/13PQ9l_4VAwNOvN7qko0cn_lrdFIRrDCU/preview',
    'https://drive.google.com/file/d/1zFgPjAq4hG0rb2WNQ2XaZfMma0lFtgWg/preview',
    'https://drive.google.com/file/d/1cKK2K44ni_5e95Looouad1_WjSunzrkb/preview',
    'https://drive.google.com/file/d/1ExUXRcnqTYU17Yk5EBF2G-LbHAHQ8jZu/preview',
    'https://drive.google.com/file/d/1rmZo1b0MMvtPUv5sznstOir8ywy_op1K/preview',
    'https://drive.google.com/file/d/1YXCUFjT0RtZD_uAXEMVG-hU0u4K3SJDA/preview',
    'https://drive.google.com/file/d/1BiUq8Lc4VZS9g93QZTB7q1kr4lwMKOBc/preview',
    'https://drive.google.com/file/d/1kDkFJwOGEQ6RtxSYoGkhv7xmsQtcx32Y/preview',
    'https://drive.google.com/file/d/1vxApn86z0JsVFwc-0hn0rro39H2BSHmk/preview',
    'https://drive.google.com/file/d/1hcUcXDbSjPbIowJuNiTylKlB-67uWMf_/preview',
    'https://drive.google.com/file/d/1uH-U5cPd4MwfOQI9XJsbS-vX17NzpXT_/preview',
    'https://drive.google.com/file/d/1WvVp8mBMPN5qhjMyKsH3E6QxyZUCzOHk/preview',
    'https://drive.google.com/file/d/1m5KPPA1X2vd2Q1ahNGbqNHrV9BZae9cd/preview',
    'https://drive.google.com/file/d/1Bl3dHey22ou3Cq9CiMQzQynJUGkGCMed/preview',
    'https://drive.google.com/file/d/1fXOrCwHc4qsq7xFcDoYNc7jrvlC9wVGl/preview'
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const setimaTemporada = [
    'https://drive.google.com/file/d/1TMiRqOg5_uPiFlnvzQif3OPiRxQqq4Ro/preview',
    'https://drive.google.com/file/d/1CvuUwNr2pBuoFn7ZZQwzVVZxB-Z0DwtL/preview',
    'https://drive.google.com/file/d/1PZgWhY9A_9KAEKQ2mfeIrfAxZCZrjH-l/preview',
    'https://drive.google.com/file/d/1bJoA63A9NP-ZU-fv_DHvHfYOQvhjeRkF/preview',
    'https://drive.google.com/file/d/12L2c00DEV07B4xYzq89irpEQQno-iHpf/preview',
    'https://drive.google.com/file/d/1jxlO6ftSsPMHrLa3G5sDVblXoTugSvX_/preview',
    'https://drive.google.com/file/d/1o1cbYbyfWOBNSrgqJikppVbyV3JpC192/preview',
    'https://drive.google.com/file/d/13IMrHL6Ale3l1vnNgwPfuwnK9LO2rXyg/preview',
    'https://drive.google.com/file/d/1FLqBIiXHuPcX-6u0Kcbj-SrA-YZrQRQh/preview',
    'https://drive.google.com/file/d/1dzkSvBWiDfOPIU_e3fE8whJsn2b9JBPZ/preview',
    'https://drive.google.com/file/d/1dGVrKSaglrdwshXkRDMbUyUPnF01O1XB/preview',
    'https://drive.google.com/file/d/11TsF6o62RMgAEAifm106-x27rudQ4cki/preview',
    'https://drive.google.com/file/d/1VQnSlMgB-sfO6SS9uYVP0EZm_dTFg4jP/preview',
    'https://drive.google.com/file/d/1lo1UYDjmN2mmJtZFHMwkso6Ql14FzHG8/preview',
    'https://drive.google.com/file/d/1FJTrRzvy87TSg5e5OITG-g6WZJQaGPw2/preview',
    'https://drive.google.com/file/d/1MlD5vrJwP8e0rYD1XuP-FnYXWHVyM8-z/preview',
    'https://drive.google.com/file/d/1vOXuD3AembJY8oWrv9Mv7QqiQt40ivG-/preview',
    'https://drive.google.com/file/d/12XJxkAJvi6UBmDweOOXE7tlJn4Vc48E2/preview',
    'https://drive.google.com/file/d/1ksro6VJvnP_SiQsE8pEhdSMxvjW-JEyI/preview',
    'https://drive.google.com/file/d/1mauGWvo82lIKDV5SCner5Bz3uUjS3Xcd/preview',
    'https://drive.google.com/file/d/1GEp6TmMoz_udjR7biC-VLWXyHD2yZ2ki/preview',
    'https://drive.google.com/file/d/1vwTN-5rVWL_UmpbwiHEnSKd5v2PYVNAV/preview',
    'https://drive.google.com/file/d/1szRFviiSYIiMebpLrW9ASwrCEbJpeZGu/preview',
    'https://drive.google.com/file/d/1rd7LW5Z7f_cPIOoEM1LOfvFVIba9auBC/preview'  
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const oitavaTemporada = [
    'https://drive.google.com/file/d/1gPCk_QTIF3Liu7LRbsm1n1DzEUrmTOq7/preview',
    'https://drive.google.com/file/d/1e7YVo89AUkdA1ZzcASWyRwzd-BEy0zHO/preview',
    'https://drive.google.com/file/d/1ln6hOpGhcB-XBJkmafbTUJSM32HfBYnF/preview',
    'https://drive.google.com/file/d/1p3wGzOkbLvM69kPIqdSCWKGBI-Ig5UzY/preview',
    'https://drive.google.com/file/d/1XePGWGmmL2X8JQbCv9VcSBiO206Uk60v/preview',
    'https://drive.google.com/file/d/1XwAmbllyDOhSpXOtQIkVBDpwOIsNJDDA/preview',
    'https://drive.google.com/file/d/1CgUaSmzKxeoHw23kcmxR-pn9EKeDQV5j/preview',
    'https://drive.google.com/file/d/1JHYBAVtY-5Ma_YU6oxk3CdFxyIq4nYJY/preview',
    'https://drive.google.com/file/d/1D8z8xdk_DXv0V4AxscIuPJkbUWkxolbA/preview',
    'https://drive.google.com/file/d/16HWqBlJxngQcskIIJhNGAGFp_ukHL5-x/preview',
    'https://drive.google.com/file/d/1DjjBJvVojbm6-WW69Ya68W9XAUrAhhcf/preview',
    'https://drive.google.com/file/d/1s0fZd2VUwudalNb-K6wDFAo2E54B0Nvx/preview',
    'https://drive.google.com/file/d/1F3kJg4MHkQhjWCXBHCXsnpGQRc5mSDuw/preview',
    'https://drive.google.com/file/d/1TF6C2K9iYzYVpgwnpxXjpODdIzA8QCRq/preview',
    'https://drive.google.com/file/d/1x3u3sE0P_f_jx083UeWsJSCrC9jaurXp/preview',
    'https://drive.google.com/file/d/1uBAj8025VCkqApn_yuTCaOB4GPnKmjA_/preview',
    'https://drive.google.com/file/d/1QsoNvg-CpiOdsxQaktGPt1jrevLWqa7N/preview',
    'https://drive.google.com/file/d/1a0SVniLrrAypQXdtyjP_A8_u5b0cVtR4/preview',
    'https://drive.google.com/file/d/1EatlXx_GQ-kagWldje41je54FquPJGra/preview',
    'https://drive.google.com/file/d/1cPSlIlgidWU-Gf1NQ8OKjeuo8gvdxU88/preview',
    'https://drive.google.com/file/d/1kXT2kcoc0wbYf0WgAwoGhzH6QcekwSOJ/preview',
    'https://drive.google.com/file/d/1KMt5xhJ221OZgHd0f6iHhwXo4W1Ybn2C/preview',
    'https://drive.google.com/file/d/1s1d0Kty_uBzREKL_HTfk1SILsz8v9Duo/preview',
    'https://drive.google.com/file/d/1ryezk8YU1JlzlT21CwuRD7ajnjpGLBrz/preview'
    ]
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const nonaTemporada = [
    'https://drive.google.com/file/d/19T0uMvfZu9zWm4HE0SvDqbmYDPJsmR4v/preview',
    'https://drive.google.com/file/d/1yzKTVyufioJmPvJgfNxctn0UldOLc7-r/preview',
    'https://drive.google.com/file/d/1hGLZVbFXFNWfU_OV9ol40uuvLRvpBIfb/preview',
    'https://drive.google.com/file/d/1xwBCVktDeuPC82VS4UrceTUybhUssabR/preview',
    'https://drive.google.com/file/d/1X029z8gqrvf4R03GNOTxgHXLp8ZmwRy-/preview',
    'https://drive.google.com/file/d/1G_fjSzlsKIk3Vw9iNrDBH3L8T4f8Wgt-/preview',
    'https://drive.google.com/file/d/1YZHn_bgMjBoED1tqi4NhbtXmPzWdxg8b/preview',
    'https://drive.google.com/file/d/1jhOfEgq1Jc2S05uSzuT5rKARR1d7MKWK/preview',
    'https://drive.google.com/file/d/1QJGtlT2KzoWxHLVGZ2z76yV9R79jbhlO/preview',
    'https://drive.google.com/file/d/1gjNDXNFYwUk_ws4f05Z9gD1T0adc4m3p/preview',
    'https://drive.google.com/file/d/1X0w3zLhT1ZEAE2exJVbRxmHRqZA7URZV/preview',
    'https://drive.google.com/file/d/15x09Yfd30pGcKZN6y5RR6dRHw0ObduF6/preview',
    'https://drive.google.com/file/d/1NY7f88_9mnadojEKvyfc2cBqa0xja1sa/preview',
    'https://drive.google.com/file/d/1Kss7EXKtrm3Oyu-Xs8_5Vnsa-hFadK5h/preview',
    'https://drive.google.com/file/d/1V8wb6x4vz-GW-FFzlFlplJAHOZh42WTU/preview',
    'https://drive.google.com/file/d/1PdMzRQmMUEbgFOCYszfa72NapPPx_hnD/preview',
    'https://drive.google.com/file/d/1zGoD__Cx9tyWttIkHcWEoeiQd3UscQBY/preview',
    'https://drive.google.com/file/d/1Yt00VNoRVXGcmSW7Bwg-7pptxpyhxPbv/preview',
    'https://drive.google.com/file/d/1tUR6o8QMXoeMhLnBbrH04hZ4sPX8-2Rm/preview',
    'https://drive.google.com/file/d/1sgGIIPXuMR9ZGomD71gML3m_HG2WB5yc/preview',
    'https://drive.google.com/file/d/1afJOazyd9MUW-K70Kk-u8vaa0bCHxOD6/preview',
    'https://drive.google.com/file/d/1IJe6HU0Qz433TT-7Rwwtqs3J917qoz0a/preview',
    'https://drive.google.com/file/d/1NgIkgE-QBaV_lUk6Ub4CWI5qFfkXWE4a/preview',
    'https://drive.google.com/file/d/1A078ZWX-ddPCrO4wIjnp4PSOGhUKFtt0/preview'
    ]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const decimaTemporada = [
    'https://drive.google.com/file/d/1qBR928QXjuxywIPhb8CDza5R99FKQv6U/preview',
    'https://drive.google.com/file/d/1GLMR37e-SjY4LUuQN8mZme9ag9WT51tl/preview',
    'https://drive.google.com/file/d/1pmvMdv_xkxRk1LaKihko9Zg2yY2Kz2j3/preview',
    'https://drive.google.com/file/d/1cJT7QSOod8HJ55NH2EccX3Xfu4ymXpHa/preview',
    'https://drive.google.com/file/d/1cO39xm4zqRvmxS8kNKM74Dh0ySKzx07L/preview',
    'https://drive.google.com/file/d/1roZn7NnVTNZ7PlxmppU4PaK3zZu2kYOf/preview',
    'https://drive.google.com/file/d/1hvKLE3RTR1JA5vtNtCaB3cIp2zzsYAZ9/preview',
    'https://drive.google.com/file/d/1nPpsrityjrgvkifmSRdXCXf37CQYHwmj/preview',
    'https://drive.google.com/file/d/1TYXyHAVpQETErTLofJdK0mq4mSptTyNA/preview',
    'https://drive.google.com/file/d/1Wrcij729i7Ta-J6K9vh64rAJi1XZo6di/preview',
    'https://drive.google.com/file/d/1lMMFwDdyEfZNsWBS9-fYbNh2Yrr_8kUp/preview',
    'https://drive.google.com/file/d/18ruc2_Z2kMFPaTTzFO5JF1ESKy6VZ8xV/preview',
    'https://drive.google.com/file/d/15o62y2Tg2dBI_oc10miDL9Ok7m4J841w/preview',
    'https://drive.google.com/file/d/1C3vh2jnMn7jrTIYrh7gdSdj6TlDm85ol/preview',
    'https://drive.google.com/file/d/1x6OS752gcEQfCR96yvANuqmL7KxQFI1r/preview',
    'https://drive.google.com/file/d/1qgjZqBsBzo-ARaqIEZR5xgPuydgTTBvS/preview',
    'https://drive.google.com/file/d/1GP5rfDkYuqTKNfZTRC9D8jlhDMK3NRVp/preview',
    'https://drive.google.com/file/d/1r8UVcW4q-aUWai363EKd6q5F_vJzCdxu/preview',
    'https://drive.google.com/file/d/1rjNcFWGvWKKaZJMklIxR8-Wl0yfLquGm/preview',
    'https://drive.google.com/file/d/1FlE3eMsmqAd62mMTJg0UhLYJ8FLEIomV/preview',
    'https://drive.google.com/file/d/1D3PisFdjfo4Li0x26tCVFM_2eHnXao2D/preview',
    'https://drive.google.com/file/d/1EqBoI1iTV2QaYGevizdq9DoLSCjqjqzc/preview',
    'https://drive.google.com/file/d/11QDYkAET3wVE1Sp5ZRoggIcrkV8ra9lv/preview',
    'https://drive.google.com/file/d/1XSCjm0MtJaHkKnXwtZ_MsW1UYUSB-i_X/preview'
    ]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const decimaPrimeiraTemporada = [
    'https://drive.google.com/file/d/1jesqYkcrpkP3uTR1zpzVj0JpqY2hBfGk/preview',
    'https://drive.google.com/file/d/1TG88zmcpYEj5O19eUR6MshL1faMaTmpM/preview',
    'https://drive.google.com/file/d/1KWG7PvMFe8ym1vpPq6jriD8qnhunlVp3/preview',
    'https://drive.google.com/file/d/1sDn-MFa7btRs84UxJi1T_mIWUAiXTj0O/preview',
    'https://drive.google.com/file/d/1zsIVg0uQAe-LajONco5ZwJVRgteFnOFl/preview',
    'https://drive.google.com/file/d/1kQ91aOB80ee0CX0D9Vrfz5bPoXHMm-pa/preview',
    'https://drive.google.com/file/d/1dG8hvPRVPUsvc3q4d2xg6EeMbQyAeYaE/preview',
    'https://drive.google.com/file/d/1TE-KCCcQAxHblKxAv_cQxSTArlf7mL1U/preview',
    'https://drive.google.com/file/d/1z_loAokKTbVB-SHqIdbstpmybdm832fJ/preview',
    'https://drive.google.com/file/d/1GBGVJPWNq7izSm_ZyduTgaiwR9P4pyfV/preview',
    'https://drive.google.com/file/d/1VLEuXwXofQUpAlcs8RgcmA6Mg7P2r6KM/preview',
    'https://drive.google.com/file/d/1G0Zda1WT9a2ffRfslRksBayjH5Mtqllq/preview',
    'https://drive.google.com/file/d/1fQKIQVmhzuTXmdIzn319ziO2_f7EBG30/preview',
    'https://drive.google.com/file/d/13dpir9Hr2uzCqikzWx69wqsAJrT0UoSb/preview',
    'https://drive.google.com/file/d/1iDtvsPbrbOGzK8R7T51AelhAeN2txsQi/preview',
    'https://drive.google.com/file/d/1izKeKYGJ-ysO8wTBfiZa1tXuT5wY21ee/preview',
    'https://drive.google.com/file/d/1Nc81dcRAmXFuJaUflkCnGDo_zHOlg-pu/preview',
    'https://drive.google.com/file/d/1-PlMDdfE2b2qMcJEs5SbDBkYn0l9-I37/preview',
    'https://drive.google.com/file/d/1iDua0HCiR9STkw53rsMTg32ymRHfXZv7/preview',
    'https://drive.google.com/file/d/1Nzr5FeoM8PyR-qsLUuZsjjgqLwJZofNr/preview',
    'https://drive.google.com/file/d/1Ju-fKnDuMZ4PvWMkgUQ28MYP-LO39Slr/preview',
    'https://drive.google.com/file/d/1Kr3EZ_tLInWcDe-1tmlzBG5cmamXvV_p/preview',
    'https://drive.google.com/file/d/1kBfIzJ1nOW6xznSbpSZ0u6grXbSXGKkM/preview',
    'https://drive.google.com/file/d/1Uomm6Zx_Y90YG7-epURXth-bOaLNEhm4/preview'
    ]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const decimaSegundaTemporada = [
    'https://drive.google.com/file/d/1weLH8dTzV-MkcV2CDcVJ8Ikq-WVZoWtX/preview',
    'https://drive.google.com/file/d/1Nfs1dnBxXk561ModraxNi9AHRSrQpVWL/preview',
    'https://drive.google.com/file/d/1fFdMQ50KkrgZ14XIE19ekE-N0c4dTHSr/preview',
    'https://drive.google.com/file/d/1lhEvkVchZ5w2RRrgfOS_6sQ2fQ3AV8aR/preview',
    'https://drive.google.com/file/d/1Z5A9MguU7LqTZpP2lgxIqvLBS6OsBBzj/preview',
    'https://drive.google.com/file/d/1v1EIIGIsnxtkrX0qO8h99gb1DJMVx7Zr/preview',
    'https://drive.google.com/file/d/1fiZZ7xVP3fzN9-yryzaJFt_nGzlWJtp3/preview',
    'https://drive.google.com/file/d/1Zypq2oT6VhzvzkTNIhLi4hhZoBAWGv5a/preview',
    'https://drive.google.com/file/d/1_RVpgZqkuwetpJqQ4jzQ8fIEty0guZkP/preview',
    'https://drive.google.com/file/d/1yRIQap6NNiijjpB3OGZT3htxURqRM98V/preview',
    'https://drive.google.com/file/d/1LEuLCCFpMZQs0qOSsikaYgsVk_6tAaje/preview',
    'https://drive.google.com/file/d/18U4frRS7_qa-5cmINAKuaoczB3aXzNV7/preview',
    'https://drive.google.com/file/d/1-Q65LVuT9R_bYcIKR9GffmOFLOdmGI79/preview',
    'https://drive.google.com/file/d/1pAHhZZVx1oHDCUvAr64dAQLc2p7PgDk-/preview',
    'https://drive.google.com/file/d/1SQA1ilKZYrVd1Df0zLwQlRrMOGruSTWa/preview',
    'https://drive.google.com/file/d/1z2RJSyQJIvdZfobY3HiDOlvez9JkbOvA/preview',
    'https://drive.google.com/file/d/1Ryur4pDd2jOMEiMy4qXMU1GBhtPnGjT4/preview',
    'https://drive.google.com/file/d/1OEOzsBCKEieisEWN3kd-DnNy--uFuAdO/preview',
    'https://drive.google.com/file/d/1ssUVZ4gPiX4qzjgMstcdlrSkOP_QaVRF/preview',
    'https://drive.google.com/file/d/1obKT9mQONnAxpqBUNL-aai5X2ZM5AD7N/preview',
    'https://drive.google.com/file/d/1KGgxG5_sOSFG8ZfMfoSHOW5AgPp8bj4N/preview',
    'https://drive.google.com/file/d/15WDWLH5MPbsP5rdSISa2l4vdvLCGT_hB/preview',
    'https://drive.google.com/file/d/1yzEYY46BhHHLwnBFXqAUHXiaXRM3-yxJ/preview'
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
    /* closeButton.style.display = "flex" */
}

paragrafo.forEach(item => {
    item.addEventListener('click', changeColor)
})

/////////////////////////
// PRIMEIRA TEMPORADA //
///////////////////////

function pri(){
    window.open(primeiraTemporada[0], "_blank")   
}

function seg(){
    window.open(primeiraTemporada[1], "_blank")
}

function ter(){
    window.open(primeiraTemporada[2], "_blank")
}

function qua(){
    window.open(primeiraTemporada[3], "_blank")
}

function qui(){
    window.open(primeiraTemporada[4], "_blank")
}

function sex(){
    window.open(primeiraTemporada[5], "_blank")
}

function set(){
    window.open(primeiraTemporada[6], "_blank")
}

function oit(){
    window.open(primeiraTemporada[7], "_blank")
}

function non(){
    window.open(primeiraTemporada[8], "_blank")
}

function dec(){
    window.open(primeiraTemporada[9], "_blank")
}

function decp(){
    window.open(primeiraTemporada[10], "_blank")
}

function decs(){
    window.open(primeiraTemporada[11], "_blank")
}

function dect(){
    window.open(primeiraTemporada[12], "_blank")
}

function decqua(){
    window.open(primeiraTemporada[13], "_blank")
}

function decqui(){
    window.open(primeiraTemporada[14], "_blank")
}

function decsex(){
    window.open(primeiraTemporada[15], "_blank")
}

function decset(){
    window.open(primeiraTemporada[16], "_blank")
}

////////////////////////
// SEGUNDA TEMPORADA //
//////////////////////

function pri2(){
    window.open(segundaTemporada[0], "_blank")   
}

function seg2(){
    window.open(segundaTemporada[1], "_blank")
}

function ter2(){
    window.open(segundaTemporada[2], "_blank")
}

function qua2(){
    window.open(segundaTemporada[3], "_blank")
}

function qui2(){
    window.open(segundaTemporada[4], "_blank")
}

function sex2(){
    window.open(segundaTemporada[5], "_blank")
}

function set2(){
    window.open(segundaTemporada[6], "_blank")
}

function oit2(){
    window.open(segundaTemporada[7], "_blank")
}

function non2(){
    window.open(segundaTemporada[8], "_blank")
}

function dec2(){
    window.open(segundaTemporada[9], "_blank")
}

function decp2(){
    window.open(segundaTemporada[10], "_blank")
}

function decs2(){
    window.open(segundaTemporada[11], "_blank")
}

function dect2(){
    window.open(segundaTemporada[12], "_blank")
}

function decqua2(){
    window.open(segundaTemporada[13], "_blank")
}

function decqui2(){
    window.open(segundaTemporada[14], "_blank")
}

function decsex2(){
    window.open(segundaTemporada[15], "_blank")
}

function decset2(){
    window.open(segundaTemporada[16], "_blank")
}

function decoit2(){
    window.open(segundaTemporada[17], "_blank")
}

function decnon2(){
    window.open(segundaTemporada[18], "_blank")
}

function vig2(){
    window.open(segundaTemporada[19], "_blank")
}

function vigpri2(){
    window.open(segundaTemporada[20], "_blank")
}

function vigseg2(){
    window.open(segundaTemporada[21], "_blank")
}

function vigter2(){
    window.open(segundaTemporada[22], "_blank")
}

/////////////////////////
// TERCEIRA TEMPORADA //
///////////////////////

function pri3(){
    window.open(terceiraTemporada[0], "_blank")   
}

function seg3(){
    window.open(terceiraTemporada[1], "_blank")
}

function ter3(){
    window.open(terceiraTemporada[2], "_blank")
}

function qua3(){
    window.open(terceiraTemporada[3], "_blank")
}

function qui3(){
    window.open(terceiraTemporada[4], "_blank")
}

function sex3(){
    window.open(terceiraTemporada[5], "_blank")
}

function set3(){
    window.open(terceiraTemporada[6], "_blank")
}

function oit3(){
    window.open(terceiraTemporada[7], "_blank")
}

function non3(){
    window.open(terceiraTemporada[8], "_blank")
}

function dec3(){
    window.open(terceiraTemporada[9], "_blank")
}

function decp3(){
    window.open(terceiraTemporada[10], "_blank")
}

function decs3(){
    window.open(terceiraTemporada[11], "_blank")
}

function dect3(){
    window.open(terceiraTemporada[12], "_blank")
}

function decqua3(){
    window.open(terceiraTemporada[13], "_blank")
}

function decqui3(){
    window.open(terceiraTemporada[14], "_blank")
}

function decsex3(){
    window.open(terceiraTemporada[15], "_blank")
}

function decset3(){
    window.open(terceiraTemporada[16], "_blank")
}

function decoit3(){
    window.open(terceiraTemporada[17], "_blank")
}

function decnon3(){
    window.open(terceiraTemporada[18], "_blank")
}

function vig3(){
    window.open(terceiraTemporada[19], "_blank")
}

function vigpri3(){
    window.open(terceiraTemporada[20], "_blank")
}

function vigseg3(){
    window.open(terceiraTemporada[21], "_blank")
}

function vigter3(){
    window.open(terceiraTemporada[22], "_blank")
}

///////////////////////
// QUARTA TEMPORADA //
/////////////////////

function pri4(){
    window.open(quartaTemporada[0], "_blank")   
}

function seg4(){
    window.open(quartaTemporada[1], "_blank")
}

function ter4(){
    window.open(quartaTemporada[2], "_blank")
}

function qua4(){
    window.open(quartaTemporada[3], "_blank")
}

function qui4(){
    window.open(quartaTemporada[4], "_blank")
}

function sex4(){
    window.open(quartaTemporada[5], "_blank")
}

function set4(){
    window.open(quartaTemporada[6], "_blank")
}

function oit4(){
    window.open(quartaTemporada[7], "_blank")
}

function non4(){
    window.open(quartaTemporada[8], "_blank")
}

function dec4(){
    window.open(quartaTemporada[9], "_blank")
}

function decp4(){
    window.open(quartaTemporada[10], "_blank")
}

function decs4(){
    window.open(quartaTemporada[11], "_blank")
}

function dect4(){
    window.open(quartaTemporada[12], "_blank")
}

function decqua4(){
    window.open(quartaTemporada[13], "_blank")
}

function decqui4(){
    window.open(quartaTemporada[14], "_blank")
}

function decsex4(){
    window.open(quartaTemporada[15], "_blank")
}

function decset4(){
    window.open(quartaTemporada[16], "_blank")
}

function decoit4(){
    window.open(quartaTemporada[17], "_blank")
}

function decnon4(){
    window.open(quartaTemporada[18], "_blank")
}

function vig4(){
    window.open(quartaTemporada[19], "_blank")
}

function vigpri4(){
    window.open(quartaTemporada[20], "_blank")
}

function vigseg4(){
    window.open(quartaTemporada[21], "_blank")
}

function vigter4(){
    window.open(quartaTemporada[22], "_blank")
}

function vigqua4(){
    window.open(quartaTemporada[23], "_blank")
}

///////////////////////
// QUINTA TEMPORADA //
/////////////////////

function pri5(){
    window.open(quintaTemporada[0], "_blank")
}

function seg5(){
    window.open(quintaTemporada[1], "_blank")
}

function ter5(){
    window.open(quintaTemporada[2], "_blank")
}

function qua5(){
    window.open(quintaTemporada[3], "_blank")
}

function qui5(){
    window.open(quintaTemporada[4], "_blank")
}

function sex5(){
    window.open(quintaTemporada[5], "_blank")
}

function set5(){
    window.open(quintaTemporada[6], "_blank")
}

function oit5(){
    window.open(quintaTemporada[7], "_blank")
}

function non5(){
    window.open(quintaTemporada[8], "_blank")
}

function dec5(){
    window.open(quintaTemporada[9], "_blank")
}

function decp5(){
    window.open(quintaTemporada[10], "_blank")
}

function decs5(){
    window.open(quintaTemporada[11], "_blank")
}

function dect5(){
    window.open(quintaTemporada[12], "_blank")
}

function decqua5(){
    window.open(quintaTemporada[13], "_blank")
}

function decqui5(){
    window.open(quintaTemporada[14], "_blank")
}

function decsex5(){
    window.open(quintaTemporada[15], "_blank")
}

function decset5(){
    window.open(quintaTemporada[16], "_blank")
}

function decoit5(){
    window.open(quintaTemporada[17], "_blank")
}

function decnon5(){
    window.open(quintaTemporada[18], "_blank")
}

function vig5(){
    window.open(quintaTemporada[19], "_blank")
}

function vigpri5(){
    window.open(quintaTemporada[20], "_blank")
}

function vigseg5(){
    window.open(quintaTemporada[21], "_blank")
}

function vigter5(){
    window.open(quintaTemporada[22], "_blank")
}

function vigqua5(){
    window.open(quintaTemporada[23], "_blank")
}
////////////////////
//SEXTA TEMPORADA//
//////////////////

function pri6(){
    window.open(sextaTemporada[0], "_blank")
}

function seg6(){
    window.open(sextaTemporada[1], "_blank")
}

function ter6(){
    window.open(sextaTemporada[2], "_blank")
}

function qua6(){
    window.open(sextaTemporada[3], "_blank")
}

function qui6(){
    window.open(sextaTemporada[4], "_blank")
}

function sex6(){
    window.open(sextaTemporada[5], "_blank")
}

function set6(){
    window.open(sextaTemporada[6], "_blank")
}

function oit6(){
    window.open(sextaTemporada[7], "_blank")
}

function non6(){
    window.open(sextaTemporada[8], "_blank")
}

function dec6(){
    window.open(sextaTemporada[9], "_blank")
}

function decp6(){
    window.open(sextaTemporada[10], "_blank")
}

function decs6(){
    window.open(sextaTemporada[11], "_blank")
}

function dect6(){
    window.open(sextaTemporada[12], "_blank")
}

function decqua6(){
    window.open(sextaTemporada[13], "_blank")
}

function decqui6(){
    window.open(sextaTemporada[14], "_blank")
}

function decsex6(){
    window.open(sextaTemporada[15], "_blank")
}

function decset6(){
    window.open(sextaTemporada[16], "_blank")
}

function decoit6(){
    window.open(sextaTemporada[17], "_blank")
}

function decnon6(){
    window.open(sextaTemporada[18], "_blank")
}

function vig6(){
    window.open(sextaTemporada[19], "_blank")
}

function vigpri6(){
    window.open(sextaTemporada[20], "_blank")
}

function vigseg6(){
    window.open(sextaTemporada[21], "_blank")
}

function vigter6(){
    window.open(sextaTemporada[22], "_blank")
}

function vigqua6(){
    window.open(sextaTemporada[23], "_blank")
}

////////////////////
//SETIMA TEMPORADA//
//////////////////

function pri7(){
    window.open(setimaTemporada[0], "_blank")
}

function seg7(){
    window.open(setimaTemporada[1], "_blank")
}

function ter7(){
    window.open(setimaTemporada[2], "_blank")
}

function qua7(){
    window.open(setimaTemporada[3], "_blank")
}

function qui7(){
    window.open(setimaTemporada[4], "_blank")
}

function sex7(){
    window.open(setimaTemporada[5], "_blank")
}

function set7(){
    window.open(setimaTemporada[7], "_blank")
}

function oit7(){
    window.open(setimaTemporada[7], "_blank")
}

function non7(){
    window.open(setimaTemporada[8], "_blank")
}

function dec7(){
    window.open(setimaTemporada[9], "_blank")
}

function decp7(){
    window.open(setimaTemporada[10], "_blank")
}

function decs7(){
    window.open(setimaTemporada[11], "_blank")
}

function dect7(){
    window.open(setimaTemporada[12], "_blank")
}

function decqua7(){
    window.open(setimaTemporada[13], "_blank")
}

function decqui7(){
    window.open(setimaTemporada[14], "_blank")
}

function decsex7(){
    window.open(setimaTemporada[15], "_blank")
}

function decset7(){
    window.open(setimaTemporada[16], "_blank")
}

function decoit7(){
    window.open(setimaTemporada[17], "_blank")
}

function decnon7(){
    window.open(setimaTemporada[18], "_blank")
}

function vig7(){
    window.open(setimaTemporada[19], "_blank")
}

function vigpri7(){
    window.open(setimaTemporada[20], "_blank")
}

function vigseg7(){
    window.open(setimaTemporada[21], "_blank")
}

function vigter7(){
    window.open(setimaTemporada[22], "_blank")
}

function vigqua7(){
    window.open(setimaTemporada[23], "_blank")
}

///////////////////////
// OITAVA TEMPORADA //
/////////////////////

function pri8(){
    window.open(oitavaTemporada[0], "_blank")
}

function seg8(){
    window.open(oitavaTemporada[1], "_blank")
}

function ter8(){
    window.open(oitavaTemporada[2], "_blank")
}

function qua8(){
    window.open(oitavaTemporada[3], "_blank")
}

function qui8(){
    window.open(oitavaTemporada[4], "_blank")
}

function sex8(){
    window.open(oitavaTemporada[5], "_blank")
}

function set8(){
    window.open(oitavaTemporada[6], "_blank")
}

function oit8(){
    window.open(oitavaTemporada[7], "_blank")
}

function non8(){
    window.open(oitavaTemporada[8], "_blank")
}

function dec8(){
    window.open(oitavaTemporada[9], "_blank")
}

function decp8(){
    window.open(oitavaTemporada[10], "_blank")
}

function decs8(){
    window.open(oitavaTemporada[11], "_blank")
}

function dect8(){
    window.open(oitavaTemporada[12], "_blank")
}

function decqua8(){
    window.open(oitavaTemporada[13], "_blank")
}

function decqui8(){
    window.open(oitavaTemporada[14], "_blank")
}

function decsex8(){
    window.open(oitavaTemporada[15], "_blank")
}

function decset8(){
    window.open(oitavaTemporada[16], "_blank")
}

function decoit8(){
    window.open(oitavaTemporada[17], "_blank")
}

function decnon8(){
    window.open(oitavaTemporada[18], "_blank")
}

function vig8(){
    window.open(oitavaTemporada[19], "_blank")
}

function vigpri8(){
    window.open(oitavaTemporada[20], "_blank")
}

function vigseg8(){
    window.open(oitavaTemporada[21], "_blank")
}

function vigter8(){
    window.open(oitavaTemporada[22], "_blank")
}

function vigqua8(){
    window.open(oitavaTemporada[23], "_blank")
}

/////////////////////
// NONA TEMPORADA //
///////////////////

function pri9(){
    window.open(nonaTemporada[0], "_blank")
}

function seg9(){
    window.open(nonaTemporada[1], "_blank")
}

function ter9(){
    window.open(nonaTemporada[2], "_blank")
}

function qua9(){
    window.open(nonaTemporada[3], "_blank")
}

function qui9(){
    window.open(nonaTemporada[4], "_blank")
}

function sex9(){
    window.open(nonaTemporada[5], "_blank")
}

function set9(){
    window.open(nonaTemporada[6], "_blank")
}

function oit9(){
    window.open(nonaTemporada[7], "_blank")
}

function non9(){
    window.open(nonaTemporada[8], "_blank")
}

function dec9(){
    window.open(nonaTemporada[9], "_blank")
}

function decp9(){
    window.open(nonaTemporada[10], "_blank")
}

function decs9(){
    window.open(nonaTemporada[11], "_blank")
}

function dect9(){
    window.open(nonaTemporada[12], "_blank")
}

function decqua9(){
    window.open(nonaTemporada[13], "_blank")
}

function decqui9(){
    window.open(nonaTemporada[14], "_blank")
}

function decsex9(){
    window.open(nonaTemporada[15], "_blank")
}

function decset9(){
    window.open(nonaTemporada[16], "_blank")
}

function decoit9(){
    window.open(nonaTemporada[17], "_blank")
}

function decnon9(){
    window.open(nonaTemporada[18], "_blank")
}

function vig9(){
    window.open(nonaTemporada[19], "_blank")
}

function vigpri9(){
    window.open(nonaTemporada[20], "_blank")
}

function vigseg9(){
    window.open(nonaTemporada[21], "_blank")
}

function vigter9(){
    window.open(nonaTemporada[22], "_blank")
}

function vigqua9(){
    window.open(nonaTemporada[23], "_blank")
}

///////////////////////
// DECIMA TEMPORADA //
/////////////////////

function pri10(){
    window.open(decimaTemporada[0], "_blank")
}

function seg10(){
    window.open(decimaTemporada[1], "_blank")
}

function ter10(){
    window.open(decimaTemporada[2], "_blank")
}

function qua10(){
    window.open(decimaTemporada[3], "_blank")
}

function qui10(){
    window.open(decimaTemporada[4], "_blank")
}

function sex10(){
    window.open(decimaTemporada[5], "_blank")
}

function set10(){
    window.open(decimaTemporada[6], "_blank")
}

function oit10(){
    window.open(decimaTemporada[7], "_blank")
}

function non10(){
    window.open(decimaTemporada[8], "_blank")
}

function dec10(){
    window.open(decimaTemporada[9], "_blank")
}

function decp10(){
    window.open(decimaTemporada[10], "_blank")
}

function decs10(){
    window.open(decimaTemporada[11], "_blank")
}

function dect10(){
    window.open(decimaTemporada[12], "_blank")
}

function decqua10(){
    window.open(decimaTemporada[13], "_blank")
}

function decqui10(){
    window.open(decimaTemporada[14], "_blank")
}

function decsex10(){
    window.open(decimaTemporada[15], "_blank")
}

function decset10(){
    window.open(decimaTemporada[16], "_blank")
}

function decoit10(){
    window.open(decimaTemporada[17], "_blank")
}

function decnon10(){
    window.open(decimaTemporada[18], "_blank")
}

function vig10(){
    window.open(decimaTemporada[19], "_blank")
}

function vigpri10(){
    window.open(decimaTemporada[20], "_blank")
}

function vigseg10(){
    window.open(decimaTemporada[21], "_blank")
}

function vigter10(){
    window.open(decimaTemporada[22], "_blank")
}

function vigqua10(){
    window.open(decimaTemporada[23], "_blank")
}

////////////////////////////////
// DECIMA PRIMEIRA TEMPORADA //
//////////////////////////////

function pri11(){
    window.open(decimaPrimeiraTemporada[0], "_blank")
}

function seg11(){
    window.open(decimaPrimeiraTemporada[1], "_blank")
}

function ter11(){
    window.open(decimaPrimeiraTemporada[2], "_blank")
}

function qua11(){
    window.open(decimaPrimeiraTemporada[3], "_blank")
}

function qui11(){
    window.open(decimaPrimeiraTemporada[4], "_blank")
}

function sex11(){
    window.open(decimaPrimeiraTemporada[5], "_blank")
}

function set11(){
    window.open(decimaPrimeiraTemporada[6], "_blank")
}

function oit11(){
    window.open(decimaPrimeiraTemporada[7], "_blank")
}

function non11(){
    window.open(decimaPrimeiraTemporada[8], "_blank")
}

function dec11(){
    window.open(decimaPrimeiraTemporada[9], "_blank")
}

function decp11(){
    window.open(decimaPrimeiraTemporada[10], "_blank")
}

function decs11(){
    window.open(decimaPrimeiraTemporada[11], "_blank")
}

function dect11(){
    window.open(decimaPrimeiraTemporada[12], "_blank")
}

function decqua11(){
    window.open(decimaPrimeiraTemporada[13], "_blank")
}

function decqui11(){
    window.open(decimaPrimeiraTemporada[14], "_blank")
}

function decsex11(){
    window.open(decimaPrimeiraTemporada[15], "_blank")
}

function decset11(){
    window.open(decimaPrimeiraTemporada[16], "_blank")
}

function decoit11(){
    window.open(decimaPrimeiraTemporada[17], "_blank")
}

function decnon11(){
    window.open(decimaPrimeiraTemporada[18], "_blank")
}

function vig11(){
    window.open(decimaPrimeiraTemporada[19], "_blank")
}

function vigpri11(){
    window.open(decimaPrimeiraTemporada[20], "_blank")
}

function vigseg11(){
    window.open(decimaPrimeiraTemporada[21], "_blank")
}

function vigter11(){
    window.open(decimaPrimeiraTemporada[22], "_blank")
}

function vigqua11(){
    window.open(decimaPrimeiraTemporada[23], "_blank")
}

///////////////////////////////
// DECIMA SEGUNDA TEMPORADA //
/////////////////////////////

function pri12(){
    window.open(decimaSegundaTemporada[0], "_blank")
}

function seg12(){
    window.open(decimaSegundaTemporada[1], "_blank")
}

function ter12(){
    window.open(decimaSegundaTemporada[2], "_blank")
}

function qua12(){
    window.open(decimaSegundaTemporada[3], "_blank")
}

function qui12(){
    window.open(decimaSegundaTemporada[4], "_blank")
}

function sex12(){
    window.open(decimaSegundaTemporada[5], "_blank")
}

function set12(){
    window.open(decimaSegundaTemporada[6], "_blank")
}

function oit12(){
    window.open(decimaSegundaTemporada[7], "_blank")
}

function non12(){
    window.open(decimaSegundaTemporada[8], "_blank")
}

function dec12(){
    window.open(decimaSegundaTemporada[9], "_blank")
}

function decp12(){
    window.open(decimaSegundaTemporada[10], "_blank")
}

function decs12(){
    window.open(decimaSegundaTemporada[11], "_blank")
}

function dect12(){
    window.open(decimaSegundaTemporada[12], "_blank")
}

function decqua12(){
    window.open(decimaSegundaTemporada[13], "_blank")
}

function decqui12(){
    window.open(decimaSegundaTemporada[14], "_blank")
}

function decsex12(){
    window.open(decimaSegundaTemporada[15], "_blank")
}

function decset12(){
    window.open(decimaSegundaTemporada[16], "_blank")
}

function decoit12(){
    window.open(decimaSegundaTemporada[17], "_blank")
}

function decnon12(){
    window.open(decimaSegundaTemporada[18], "_blank")
}

function vig12(){
    window.open(decimaSegundaTemporada[19], "_blank")
}

function vigpri12(){
    window.open(decimaSegundaTemporada[20], "_blank")
}

function vigseg12(){
    window.open(decimaSegundaTemporada[21], "_blank")
}

function vigter12(){
    window.open(decimaSegundaTemporada[22], "_blank")
}

//////////////////////////////
// FEITO POR LUIZ FERNANDO //
////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////