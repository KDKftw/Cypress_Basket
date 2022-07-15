/// ＜reference types="cypress" /＞

const { URL_detail_late_departure } = require('./import_urls');
const JmenoPrijmeniTest = "necojineho"
const Email = "ondrej.kadoun@fischer.cz"
//const Email = "o.kadoun@gmail.com"
//const PhoneNumber = "735599725"
const PhoneNumber = "705958215"
const randomNumbers = "12345"

const datePickerConstLocator = "birthDate"
const lastNameConstLocator = "name.last"
const firstNameConstLocator = "name.first"
const salutationConstLocator = "salutation"
const citizenshipConstLocator = "citizenshipCode"

// roomNumber(starts from 0), passengerNumber(starts from 1), Typ inputu co Vyplnjuu
function createLocator(numberOfRoom, numberOfPassenger, typeOfInput) {
	const elementLocator = '//*[@name="room.'
	const elementLocator2 = '.passenger.'
	const elementLocator3 = '.'
	const elementLocator4 = '"]'
	const finalLocator = elementLocator + numberOfRoom + elementLocator2 + numberOfPassenger + elementLocator3 + typeOfInput + elementLocator4
	console.log(finalLocator)
	return finalLocator
}




function objednavatelFiller() {
	cy.xpath('//*[@testid="objednavatelInfo"] //*[@name="customer.address.street"]').type(JmenoPrijmeniTest)
	cy.xpath('//*[@testid="objednavatelInfo"] //*[@name="customer.address.streetNumber"]').type(JmenoPrijmeniTest)
	cy.xpath('//*[@testid="objednavatelInfo"] //*[@name="customer.address.city"]').type(JmenoPrijmeniTest)
	cy.xpath('//*[@testid="objednavatelInfo"] //*[@name="customer.address.zip"]').type(randomNumbers)
	cy.xpath('//*[@testid="objednavatelInfo"]//*[@class="vdatetime f_input f_input--datePicker"]').click()
	cy.xpath('//*[@class="vdatetime-popup"]', { timeout: 40000 }).should('be.visible')
	datePicker()

}

function datePicker(ageOfPassenger) {
	if (ageOfPassenger === undefined) {

		cy.xpath('//*[@class="vdatetime-popup"]', { timeout: 40000 }).should('be.visible')
		cy.get('.vdatetime-year-picker__list > :nth-child(66)').scrollIntoView().click()
		cy.get('.vdatetime-month-picker__list > :nth-child(4)').scrollIntoView().click()
		//cy.get(':nth-child(10) > :nth-child(1) > span', { timeout: 40000 }).scrollIntoView().click()
		cy.get(':nth-child(24) > :nth-child(1) > span', { timeout: 40000 }).scrollIntoView().click()
		console.log("date picker finished")
	}

	

	if (ageOfPassenger === "infant") {

		cy.xpath('//*[@class="vdatetime-popup"]', { timeout: 40000 }).should('be.visible')
		cy.get('.vdatetime-year-picker__item--current').click()
		cy.get('.vdatetime-month-picker__list > :nth-child(4)', { timeout: 40000 } ).scrollIntoView().click()
		cy.get(':nth-child(30) > :nth-child(1) > span', { timeout: 40000 }).scrollIntoView().click()
		console.log("date picker finished")
	}
}

function cestujiciFiller(numberOfRoom, numberOfPassenger, ageOfPassenger) {
	function cestujiciFillerAllInfoThatsAlwaysThere(numberOfRoom, numberOfPassenger) {
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, lastNameConstLocator)).type(JmenoPrijmeniTest)
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, firstNameConstLocator)).type(JmenoPrijmeniTest)
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, salutationConstLocator)).click()



	}
	if (ageOfPassenger === undefined) {
		cestujiciFillerAllInfoThatsAlwaysThere(numberOfRoom, numberOfPassenger)
		

		cy.get('[data-testid="Muž"]').click()
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, datePickerConstLocator)).click()
		datePicker()

		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, citizenshipConstLocator)).click()
		cy.get('[data-testid="ESH"]').scrollIntoView().click()

		console.log("cestujici filler finished")

		}

	if (ageOfPassenger === "infant") {
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, lastNameConstLocator)).type(JmenoPrijmeniTest)
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, firstNameConstLocator)).type(JmenoPrijmeniTest)
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, datePickerConstLocator)).click()
		datePicker("infant")
		//cy.xpath(createLocator(numberOfRoom, numberOfPassenger, citizenshipConstLocator)).click()
		//cy.get('[data-testid="ESH"]').scrollIntoView().click()
		console.log("cestujici filler finished")
	
		}
	//cy.get('[data-testid="Žena"]').click()
	//
	//ne vsude maji nutne ctizenship, asi generalizovat do nejakeho parametru
	//


	
	console.log("cestujici filler finished")
}

const totalPriceBoxXpath = "//*[@class='f_box f_box--price']//*[@class='f_price']//*[@class='f_price-value']"

it("Basket walkthrough", function () {

	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	cy.visit(URL_detail_late_departure)
	cy.get(':nth-child(3) > .order > .f_button-text').click()				   //ew2 dev
	//cy.xpath("//*[@class='c_btn block green mt-4 relative']").click()		 //billa a penny
	//cy.get('.flex-col > .relative > .c_btn').click() 						//billa a penny
	cy.get('[data-testid="tab-buyOnline"]', { timeout: 40000 }).should('be.visible')
	//cy.xpath(totalPriceBoxXpath).invoke('text').then('totalPriceStep1')
	//var totalPriceBoxStep1 = cy.xpath(totalPriceBoxXpath).invoke('text')

	cy.xpath(totalPriceBoxXpath).then(($totalPriceStep1)	=> {
		const totalPriceBoxStep1 = $totalPriceStep1.text()

		//detail zajezdu -> kosik -> vyplneni 4 zakladnich udaju

		cy.get(':nth-child(1) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
		cy.get(':nth-child(2) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
		cy.get(':nth-child(3) > .f_inputWrapper > .f_input > .f_input-item').type(Email)
		cy.get('.vti__input').type(PhoneNumber)
		cy.get('[data-testid="nextStep"]').click()

		//ulice, cislo popisne, mesto, psc
		cy.get('.f_listTab', { timeout: 80000 }).should('be.visible')
		//KROK2
		cy.xpath(totalPriceBoxXpath).invoke('text').should('be.eq', totalPriceBoxStep1)
		objednavatelFiller()
		cestujiciFiller(0, 1)
		cestujiciFiller(0, 2)
		//cestujiciFiller(0, 3, "infant")		

		cy.get('[data-testid="nextStep"]').scrollIntoView().click()


		//KROK3
		cy.xpath(totalPriceBoxXpath).invoke('text').should('be.eq', totalPriceBoxStep1)
		cy.xpath('//*[@class="f_box f_set--active"]', { timeout: 400000 }).should('be.visible')
		cy.xpath('//*[@name="agreement.agree"]').click()

		cy.xpath('//*[@name="agreement.MTK_DEK"]').click()

	})

	








})