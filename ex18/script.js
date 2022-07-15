let num = document.querySelector('input#arraytxt')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inList(num, list) {
    if(list.indexOf(Number(num)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        alert('ERRO, valor ja adicionado na lista ou não está no intervalo indicado')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if(valores.length == 0) {
        alert('Não é possivel continuar sem a lista de números')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let c = 0; c < valores.length; c++) {
            if(maior < valores[c]) {
                maior = valores[c]
            }

            if(menor > valores[c]) {
                menor = valores[c]
            }

            soma += valores[c]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `O vetor tem ${total} números`
        res.innerHTML += `<p>O maior valor é ${maior} e o menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma do vetor é ${soma}</p>`
        res.innerHTML += `<p>A média do vetor é ${media}</p>`
    }
}