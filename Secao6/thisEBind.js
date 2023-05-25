const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar  = pessoa.falar
falar()  //conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa) //bind = metodo que quando referenciar a função o this será o objeto que passou para função bind
falarDePessoa()