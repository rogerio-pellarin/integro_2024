var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {

	// Apple index
	let appleId = 0;

	// Number of apples per box
	const applesByBox = 4;

	// Number of boxes per package
	const boxByPackages = 2;

	// Number of apples
	const apples = input.length;

	// Number of friends
	const friends = Math.floor(apples / (applesByBox * boxByPackages));

	// Number of packages per person
	const packagesByFriend = 2;

	// Calculate how many apples should be in each box
	const applesByBoxTotal = applesByBox * boxByPackages * packagesByFriend;

	if (apples < applesByBoxTotal) {

		console.log("No hay suficientes manzanas para distribuir según las reglas dadas.");

	} else {

		// Initialize the data structure to store the apples in the packages
		let packages = Array.from({ length: friends }, () =>
			Array.from({ length: packagesByFriend }, () =>
				Array.from({ length: boxByPackages }, () => [])
			)
		);

		let remainingApples = apples;

		// Distribute the apples in the packages
		for (let i = 0; i < friends; i++) {
			for (let j = 0; j < packagesByFriend; j++) {
				for (let k = 0; k < boxByPackages; k++) {
					if (remainingApples > 0) {
						let caja = [];
						const applesPerBox = Math.min(applesByBox, remainingApples);

						for (let m = 0; m < applesPerBox; m++) {
							caja.push(input[appleId]);
							appleId++;
						}

						packages[i][j][k] = caja;
						remainingApples -= applesPerBox;
					}
				}
			}
		}

		return packages;
	}
}

console.log(apples(input))
