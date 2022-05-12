/// ＜reference types="cypress" /＞

const URL_base = "https://fischer.cz"
//const URL_detail_late_departure = URL_base + "/spanelsko/mallorca/can-pastilla/ilusion-calma-a-spa?KEY=0xD0643603BDC4E4E35C5A35EB0EF348A4D66221BA&DS=1&GIATA=51639&D=1009|680|953|1108|592|611|610|612|1010|590|726|609|621|622|669|1086|1194|670|978|594|675|683&HID=131041&MT=5&DI=13&RT=15&NN=7&RD=2022-10-15&DD=2022-10-08&DP=4312&TO=4312|4305|2682|4308&MNN=7&TT=1&PID=MCMA&DPR=Fischer&TTM=1&TOM=4312|4305|2682|4308&DF=2022-10-07|2022-11-05&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0#"
//const URL_detail_late_departure = "https://www.eximtours.cz/recko/thassos/thassos-limenas/sentido-thassos-imperial?KEY=2185069594&DS=1024&GIATA=0&D=63220|63281|63373|63311|63314|63316|63319|63324|63333|63390|63402|63408|63409|63442|63471&HID=142477&MT=2&RT=15&NN=7&DF=2022-09-01|2022-09-19&RD=2022-09-19&DD=2022-09-12&AC1=2&KC1=0&IC1=0&DP=4312&TO=4312|4305|2682|4308&TOM=4312|4305|2682|4308&MNN=7&NNM=7|8|9|10|11|12|13&TT=1&TTM=1&PID=344198&DPR=EXIM%20TOURS"
//const URL_detail_late_departure ="https://exim.dev.dtweb.cz/egypt/hurghada/hurghada/hawaii-dream?DS=1024&GIATA=978047&D=64419|64420|64425&HID=8735&MT=5&RT=15&NN=7&RD=2022-07-26&DD=2022-07-19&DP=4312&MNN=7&TT=1&PID=335867&DPR=EXIM%20TOURS&TTM=1&DF=2022-07-19|2022-08-19&ERM=0&NNM=7|9|8&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure = "http://localhost:3000/Basket/#zakladni-udaje"
const URL_detail_late_departure	= "https://exim2.dev.dtweb.cz/egypt/hurghada/hurghada/mirage-bay-resort-a-aqua-park-hurghad?KEY=2223758683&DS=1024&GIATA=16351&D=64419|64420|64425&HID=8751&MT=5&RT=15&NN=7&RD=2022-08-17&DD=2022-08-10&DP=2682&MNN=7&TT=1&PID=33040&DPR=EXIM%20TOURS&TTM=1&DF=2022-08-10|2022-09-10&ERM=0&NNM=7|8|9&ac1=2&kc1=0&ic1=0"
const JmenoPrijmeniTest = "TEST"
const Email = "ondrej.kadoun@fischer.cz"
const PhoneNumber = "735599725"
const randomNumbers = "12345"


function createLocatorSexChoose(numberOfPassenger) {
	const elementLocator = ':nth-child('

	const elementLocator2 = ') > .f_form-item--salutation > [data-v-70c83e93=""] > .f_input > .f_input-item'
	const elementLocatorNumberOfPassenger = elementLocator + numberOfPassenger + elementLocator2
	console.log(elementLocatorNumberOfPassenger)
	return elementLocatorNumberOfPassenger

}

//*[@name="room.0.passenger.1.name.last"]
// roomNumber, passengerNumber, coVyplnjuu

//
function createLocator(numberOfRoom, numberOfPassenger, typeOfInput) {
	const elementLocator = '//*[@name="room.'

	const elementLocator2 = '.passenger.'


	const elementLocator3 = '.'
	const elementLocator4 = '"]'

	const finalLocator = elementLocator + numberOfRoom + elementLocator2 + numberOfPassenger + elementLocator3 + typeOfInput + elementLocator4

	console.log(finalLocator)
	return finalLocator

}

it("URL hp test", function () {

	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	cy.visit(URL_detail_late_departure)
	cy.get(':nth-child(3) > .order > .f_button-text').click()
	cy.get('[data-testid="tab-buyOnline"]', { timeout: 40000 }).should('be.visible')
	//detail zajezdu -> kosik -> vyplneni 4 zakladnich udaju



	cy.get(':nth-child(1) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(2) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(3) > .f_inputWrapper > .f_input > .f_input-item').type(Email)
	cy.get('.vti__input').type(PhoneNumber)
	cy.get('[data-testid="nextStep"]').click()

	//ulice, cislo popisne, mesto, psc
	cy.get('.f_listTab', { timeout: 80000 }).should('be.visible')
	cy.xpath(createLocator(0, 1, "name.last" )).type(JmenoPrijmeniTest)
	cy.get('.f_form > :nth-child(1) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get('.f_form > :nth-child(2) > .f_inputWrapper > .f_input > .f_input-item').type(randomNumbers)
	cy.get('.f_form > :nth-child(3) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(4) > .f_inputWrapper > .f_input > .f_input-item').type(randomNumbers)

	//cestujici 2 names
	cy.get(':nth-child(2) > .f_form-item--firstName > .f_input-wrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(2) > .f_form-item--lastName > .f_input-wrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)

	//cestujici 1 sex
	cy.get(createLocatorSexChoose(1)).click()
	cy.get('[data-v-d4e6e290=""][style=""] > .f_input-options > .f_input-options-content > .f_customScroll > :nth-child(1) > [data-testid="Pan"]').click()
	cy.get('[data-v-d4e6e290=""][style=""] > .f_input-options > .f_input-options-content > .f_input-footer > .f_button').click()


})