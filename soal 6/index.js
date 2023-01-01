let kalimat="hello! wo!rld!"
let output= kalimat.split('')
let hasil= output.filter(output => output !== "!")

console.log(hasil.join(' '));