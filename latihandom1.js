const merah = document.querySelector('input[name=merah]')
const hijau = document.querySelector('input[name=hijau]')
const biru = document.querySelector('input[name=biru]')
const hasil = document.querySelector('.kotak-hasil')

merah.addEventListener('input', function () {
    const r = merah.value 
    const g = hijau.value
    const b = biru.value

    hasil.style.backgroundColor = `rgb(${r},${g},${b})`
})

hijau.addEventListener('input', function () {
        const r = merah.value 
        const g = hijau.value
        const b = biru.value
    
        hasil.style.backgroundColor = `rgb(${r},${g},${b})`
})

biru.addEventListener('input', function () {
    const r = merah.value 
    const g = hijau.value
    const b = biru.value

    hasil.style.backgroundColor = `rgb(${r},${g},${b})`
})