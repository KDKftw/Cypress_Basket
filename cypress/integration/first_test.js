/// ＜reference types="cypress" /＞

const URL_base = "https://fischer.cz"
const URL_detail_late_departure = URL_base + "/spanelsko/mallorca/can-pastilla/ilusion-calma-a-spa?KEY=0xD0643603BDC4E4E35C5A35EB0EF348A4D66221BA&DS=1&GIATA=51639&D=1009|680|953|1108|592|611|610|612|1010|590|726|609|621|622|669|1086|1194|670|978|594|675|683&HID=131041&MT=5&DI=13&RT=15&NN=7&RD=2022-10-15&DD=2022-10-08&DP=4312&TO=4312|4305|2682|4308&MNN=7&TT=1&PID=MCMA&DPR=Fischer&TTM=1&TOM=4312|4305|2682|4308&DF=2022-10-07|2022-11-05&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0#"
const JmenoPrijmeniTest = "TEST"
const Email = "ondrej.kadoun@fischer.cz"
const PhoneNumber = "735599725"
const randomNumbers = "12345"

it("URL hp test", function () {

	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	cy.visit(URL_detail_late_departure)
	cy.get('.order > .f_button-text').click()
	cy.get(':nth-child(1) > .f_input-wrapper > .f_input > .f_input-item', { timeout: 40000 }).should('be.visible')
//detail zajezdu -> kosik -> vyplneni 4 zakladnich udaju
	cy.get(':nth-child(1) > .f_input-wrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(2) > .f_input-wrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(3) > .f_input-wrapper > .f_input > .f_input-item').type(Email)
	cy.get('.vti__input').type(PhoneNumber)
	cy.get('[data-testid="nextStep"]').click()

	//
	cy.get('[data-testid="serviceGroup-recommended"] > [data-testid="serviceItem-2233"]', { timeout: 80000 }).should('be.visible')
	cy.get('.f_section-content-item > .f_form > :nth-child(1) > .f_input-wrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get('.f_form > :nth-child(2) > .f_input-wrapper > .f_input > .f_input-item').type(randomNumbers)
	cy.get('.f_form > :nth-child(3) > .f_input-wrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get('.f_form > :nth-child(4) > .f_input-wrapper > .f_input > .f_input-item').type(randomNumbers)



} )