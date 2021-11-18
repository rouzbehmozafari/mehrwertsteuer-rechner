let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')

let nzub = document.getElementById('nzub')
let bzun = document.getElementById('bzun')

let more = document.getElementById('more')
let less = document.getElementById('less')

let but = document.getElementById('but')
let betrag = document.getElementById('betrag')

let born = document.getElementById('born')

let process = () => {
    let morev = Number(more.value)
    let lessv = Number(less.value)
    let betragv = Number(betrag.value)

    let mwsbM1 = (Number(morev) / 100 )* betragv
    let mwsbL1 = (Number(lessv) / 100 )* betragv

    let mwsbM2 = (Number(morev -3) / 100 )* betragv
    let mwsbL2 = (Number(lessv -3) / 100 )* betragv

    if (nzub.checked) {
        born.innerHTML = 'Bruttobetrag (Endpreis)'
        if (more.checked) {
            res1.innerHTML = mwsbM1 + '€'
            res2.innerHTML = mwsbM1 + betragv + '€'
        }
        else {
            res1.innerHTML = mwsbL1 + '€'
            res2.innerHTML = mwsbL1 + betragv + '€'
        }
    }
    else {
        born.innerHTML = 'Netto Betrag'
        if (more.checked) {
            res1.innerHTML = mwsbM2 + '€'
            res2.innerHTML = betragv - mwsbM2   + '€'
        }
        else {
            res1.innerHTML = mwsbL2 + '€'
            res2.innerHTML = betragv - mwsbL2 + '€'
        }
    }
}
