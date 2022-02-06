function validaArray(arr, num) {
	try {
		if(!arr && !num) 
			throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Array precisa ser do tipo object');

		if (typeof num !== 'number')
			throw new TypeError('Num precisa ser do tipo number');

		if (arr.length !== num) 
			throw new RangeError('Tamanho inválido!');

		return arr;
	} catch (e) {
		if (e instanceof ReferenceError) {
			console.log('Erro de ReferenceError!');
			console.log(e.message);
		} else if (e instanceof TypeError) {
			console.log('Erro de TypeError!');
			console.log(e.message);
		} else if (e instanceof RangeError) {
			console.log('Erro de RangeError!');
			console.log(e.message);
		} else {
			console.log('Erro nao esperado');
			console.log(e.message);
		}
	}
}


// console.log(validaArray()); erro de ReferenceError
// console.log(validaArray(5, 5)); TypeError Array precisa ser do tipo object
// console.log(validaArray([], 'a')); TypeError Num precisa ser do tipo number
// console.log(validaArray([], 5)); Erro de RangeError!, Tamanho inválido!
// console.log(validaArray([1,2,3,4,5], 5)); Sem Erro
console.log(validaArray([1,2,3,4,5], 5));