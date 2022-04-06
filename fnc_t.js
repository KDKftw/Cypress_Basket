



function myFunc(numberOfPassenger) {
	const elementLocator = ":nth-child("

	const elementLocator2 = ") > .f_form-item--lastName > .f_input-wrapper > .f_input > .f_input-item"
	const elementLocatorNumberOfPassenger = elementLocator + numberOfPassenger + elementLocator2
	console.log(elementLocatorNumberOfPassenger)

}


myFunc(5)