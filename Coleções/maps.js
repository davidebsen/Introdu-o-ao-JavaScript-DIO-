const getAdmins = (map) => {
	let admins = [];
	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
}

const usuarios = new Map();

usuarios.set('David', 'SUDO');
usuarios.set('Jucelia', 'ADMIN');
usuarios.set('Evelize', 'ADMIN');
usuarios.set('Eduardo', 'USER');
usuarios.set('Wilbert', 'ADMIN');

console.log(getAdmins(usuarios));