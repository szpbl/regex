// para definir uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
const regexComeSemAcento = /n[aã]/g
console.log(texto2.match(regexComeSemAcento))