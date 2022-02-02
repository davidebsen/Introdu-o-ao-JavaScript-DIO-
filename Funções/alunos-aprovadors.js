const alunos = [
	{
		nome: 'David',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'jucelia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Eduardo',
		nota: 4,
		turma: '2C',
	},
	{
		nome: 'Wilbert',
		nota: 8,
		turma: '2b',
	},
	{
		nome: 'Evelize',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(arr, media) {
	let aprovados = [];

	for (let i = 0; i < arr.length; i++) {
		let { nota, nome } = arr[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));
