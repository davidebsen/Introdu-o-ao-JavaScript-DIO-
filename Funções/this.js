function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "David",
    idade: 35,
}
const pessoa2 = {
    nome: "Jucelia",
    idade: 30,
}
const pessoa3 = {
    nome: "Evelize",
    idade: 65,
}
const animal = {
    nome: "Guty",
    idade: 3,
    raca:'Pug',
}

console.log(calculaIdade.call(pessoa1, 30)); // call

console.log(calculaIdade.apply(animal, [3])); // apply