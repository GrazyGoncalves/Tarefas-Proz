const produtos = [
  {
    nome: 'Dom Casmurro',
    valor: 11.66
  }
]

// capturar elementos do HTML

const addButton = document.getElementById('btn-adicionar-produto-01')
const input = document.getElementById('quantidade-produto-01')
const valorSubtotal = document.getElementById('valor-subtotal')
const quantidadeSubtotal = document.getElementById('quantidade-subtotal')

function updateSubtotal (quantidadeItens) {
  const sufixo = quantidadeItens === 1 ? 'item' : 'itens'
  const valorTotal = produtos[0]. valor * quantidadeItens

  valorSubtotal.innerText = valorTotal.toFixed(2)
  quantidadeSubtotal.innerText = quantidadeItens + ' itens '
}

// adicionar event listener ao elemento html

addButton.addEventListener('click', () => {
  input.value = Number(input.value) + 1
  updateSubtotal(Number(input.value))
})

// capturar elementos do HTML

const subButton = document.getElementById('btn-subtrair-produto-01')


// adicionar event listener ao elemento html

subButton.addEventListener('click', () => {
  if (input.value > 1){
    input.value = Number(input.value) - 1
    updateSubtotal(Number(input.value))
  }
 })

 updateSubtotal(input.value)

