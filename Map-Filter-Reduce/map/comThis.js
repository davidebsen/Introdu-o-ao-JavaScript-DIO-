const maca = {
	price: 2,
};
const laranja = {
	price: 3,
};

function mapComThis(arr, thisArg) {
	return arr.map(function (item) {
		return item * this.value;
	}, thisArg);
}

const nums = [1, 2];

console.log('this -> maça', mapComThis(nums, maca));
console.log ('this -> laranja', mapComThis(nums, laranja));
