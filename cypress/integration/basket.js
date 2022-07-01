/// ＜reference types="cypress" /＞

const URL_base = "https://fischer.cz"
//const URL_detail_late_departure = URL_base + "/spanelsko/mallorca/can-pastilla/ilusion-calma-a-spa?KEY=0xD0643603BDC4E4E35C5A35EB0EF348A4D66221BA&DS=1&GIATA=51639&D=1009|680|953|1108|592|611|610|612|1010|590|726|609|621|622|669|1086|1194|670|978|594|675|683&HID=131041&MT=5&DI=13&RT=15&NN=7&RD=2022-10-15&DD=2022-10-08&DP=4312&TO=4312|4305|2682|4308&MNN=7&TT=1&PID=MCMA&DPR=Fischer&TTM=1&TOM=4312|4305|2682|4308&DF=2022-10-07|2022-11-05&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0#"
//const URL_detail_late_departure = "https://www.eximtours.cz/recko/thassos/thassos-limenas/sentido-thassos-imperial?KEY=2185069594&DS=1024&GIATA=0&D=63220|63281|63373|63311|63314|63316|63319|63324|63333|63390|63402|63408|63409|63442|63471&HID=142477&MT=2&RT=15&NN=7&DF=2022-09-01|2022-09-19&RD=2022-09-19&DD=2022-09-12&AC1=2&KC1=0&IC1=0&DP=4312&TO=4312|4305|2682|4308&TOM=4312|4305|2682|4308&MNN=7&NNM=7|8|9|10|11|12|13&TT=1&TTM=1&PID=344198&DPR=EXIM%20TOURS"
//const URL_detail_late_departure ="https://exim.dev.dtweb.cz/egypt/hurghada/hurghada/hawaii-dream?DS=1024&GIATA=978047&D=64419|64420|64425&HID=8735&MT=5&RT=15&NN=7&RD=2022-07-26&DD=2022-07-19&DP=4312&MNN=7&TT=1&PID=335867&DPR=EXIM%20TOURS&TTM=1&DF=2022-07-19|2022-08-19&ERM=0&NNM=7|9|8&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure = "http://localhost:3000/Basket/#zakladni-udaje"
//const URL_detail_late_departure	= "https://exim2.dev.dtweb.cz/egypt/hurghada/hurghada/mirage-bay-resort-a-aqua-park-hurghad?KEY=2223758683&DS=1024&GIATA=16351&D=64419|64420|64425&HID=8751&MT=5&RT=15&NN=7&RD=2022-08-17&DD=2022-08-10&DP=2682&MNN=7&TT=1&PID=33040&DPR=EXIM%20TOURS&TTM=1&DF=2022-08-10|2022-09-10&ERM=0&NNM=7|8|9&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure ="https://billa.dev.dtweb.cz/egypt/hurghada/hurghada/hawaii-caesar-palace-egypt-?ds=1024&giata=411448&hid=8755&nn=7&df=2022-08-06|2022-09-30&rd=2022-06-08&dd=2022-06-01&ac1=2&to=4312&tt=1&ms=1&pid=334962&key=2223761598&d=63484|63485|63483|63486|64421|64419|64422|64420|64425|64423|64426|64424|63232|63247|63249|63250|63251|63257|63280|63289|63325|63326|77802|63345|77803|63361|63381|63332|63401|63450|77804|63461|63528|63527|63526|63529|63470|63205|63212|63215|63229|63255|63265|63271|63287|63296|63298|63329|63330|63339|63436|63356|63376|63391|63404|63406|63410|63422|63425|63426|63429|63444|63453|63454|63456|63457|63459|63539|64427|63538|64428|63537|63720|63724|63723|63721|63719|63717|63722|63715|63718|63716|63582|63581|63580|64103|64125|64098|64105|64101|64100|64102|64124|64097|64123|64099|63208|63222|63343|63348|63395|63419|63466|63220|63219|63219|63209|63262|63281|63283|63285|63290|63297|63311|63314|63316|63319|63324|63383|63333|63336|63341|63352|63362|63364|63373|63384|63387|63388|63390|63402|63408|63409|63428|63430|63442|63471|64439|63399|63214|64435|63266|64433|64438|63327|63335|64442|63357|64441|64431|64437|63424|63427|64436|64432|63431|63437|63439|64440|64434|63685|63472|64087|64094|64095|64089|64090|64088|64091|64086|64092|64096|64093|63213|63216|63218|63349|63226|63227|63231|64429|63241|63242|63243|63244|63245|74462|63263|63267|74459|63272|74460|63284|63299|63334|63313|74461|78291|74463|63328|74464|63350|64430|63354|63360|63363|74465|63455|63252|63447|63260|63288|63448|64154|64152|64153|64157&mt=5&rt=15&dp=4312&tom=4312&mnn=7&nnm=7&dpr=EXIM%20TOURS&ilm=1&ifm=0&ttm=0&sortby=Price&sortorder=0"

//const URL_detail_late_departure ="https://billa.dev.dtweb.cz/recko/pelopones/agioi-theodoroi/siagas-beac?KEY=2167889938&DS=1024&GIATA=413301&D=63484|63485|63483|63486|64421|64419|64422|64420|64425|64423|64426|64424|63232|63247|63249|63250|63251|63257|63280|63289|63325|63326|77802|63345|77803|63361|63381|63332|63401|63450|77804|63461|63528|63527|63526|63529|63470|63205|63212|63215|63229|63255|63265|63271|63287|63296|63298|63329|63330|63339|63436|63356|63376|63391|63404|63406|63410|63422|63425|63426|63429|63444|63453|63454|63456|63457|63459|63539|64427|63538|64428|63537|63720|63724|63723|63721|63719|63717|63722|63715|63718|63716|63582|63581|63580|64103|64125|64098|64105|64101|64100|64102|64124|64097|64123|64099|63208|63222|63343|63348|63395|63419|63466|63220|63219|63219|63209|63262|63281|63283|63285|63290|63297|63311|63314|63316|63319|63324|63383|63333|63336|63341|63352|63362|63364|63373|63384|63387|63388|63390|63402|63408|63409|63428|63430|63442|63471|64439|63399|63214|64435|63266|64433|64438|63327|63335|64442|63357|64441|64431|64437|63424|63427|64436|64432|63431|63437|63439|64440|64434|63685|63472|64087|64094|64095|64089|64090|64088|64091|64086|64092|64096|64093|63213|63216|63218|63349|63226|63227|63231|64429|63241|63242|63243|63244|63245|74462|63263|63267|74459|63272|74460|63284|63299|63334|63313|74461|78291|74463|63328|74464|63350|64430|63354|63360|63363|74465|63455|63252|63447|63260|63288|63448|64154|64152|64153|64157&HID=7659&MT=2&RT=15&NN=7&DF=2022-05-31|2022-07-30&RD=2022-06-09&DD=2022-06-02&AC1=2&KC1=0&IC1=0&DP=4312&TO=4312&TOM=4312&MNN=7&NNM=7&TT=1&MS=1&PID=25148&DPR=EXIM%20TOURS&ILM=1&IFM=0"
//const URL_detail_late_departure ="https://exim2.dev.dtweb.cz/recko/kos/lambi/aeolos-beac?KEY=2144713080&DS=1024&GIATA=702&D=63220|63316|63319|63324|63333|63402|63409|63471&HID=8840&MT=2&RT=21&NN=7&RD=2022-07-17&DD=2022-07-09&DP=4312&MNN=7&TT=1&PID=2060&DPR=EXIM%20TOURS&TTM=1&DF=2022-07-09|2022-08-09&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=1"
//const URL_detail_late_departure	="https://billa.dev.dtweb.cz/spanelsko/mallorca/s-illot/mix-colomb?KEY=2295589881&DS=1024&GIATA=3561&D=63213%7C63216%7C63218%7C63349%7C63226%7C63227%7C63231%7C64429%7C63241%7C63242%7C63243%7C63244%7C63245%7C74462%7C63263%7C63267%7C74459%7C63272%7C74460%7C63284%7C63299%7C63334%7C63313%7C74461%7C78291%7C74463%7C63328%7C74464%7C63350%7C64430%7C63354%7C63360%7C63363%7C74465%7C63455&HID=9202&MT=5&RT=15&NN=7&DF=2022-06-02%7C2022-08-01&RD=2022-06-23&DD=2022-06-15&AC1=2&KC1=0&IC1=0&DP=2682&MNN=7&NNM=7&TT=1&MS=1&PID=19705&DPR=EXIM%20TOURS&ILM=0&IFM=0"
//const URL_detail_late_departure	= "https://billa.dev.dtweb.cz/spanelsko/mallorca/el-arenal/whala-beac?KEY=2212887445&DS=1024&GIATA=365367&D=63213|63216|63218|63349|63226|63227|63231|64429|63241|63242|63243|63244|63245|74462|63263|63267|74459|63272|74460|63284|63299|63334|63313|74461|78291|74463|63328|74464|63350|64430|63354|63360|63363|74465|63455&HID=9235&MT=2&RT=15&NN=7&DF=2022-06-15|2022-06-23&RD=2022-06-23&DD=2022-06-15&AC1=2&KC1=0&IC1=0&DP=2682&MNN=7&NNM=7&TT=1&TTM=1&PID=24865&DPR=EXIM%20TOURS"


  //EXIM DEV2 ATCOM KOSIKY, EW PRODUKT NA DEV2

//const URL_detail_late_departure = "https://exim2.dev.dtweb.cz/recko/lefkada/vassiliki/hotel-villa-maki?DS=8192&GIATA=0&D=63333|63284|63354&HID=9314&MT=6&NN=7&RD=2022-07-25&DD=2022-07-18&DP=4312&MNN=7&TT=1&PID=PVK90019&DPR=EXIM%20TOURS%20ATCOM&TTM=1&DF=2022-07-18|2022-08-18&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure =  "https://exim2.dev.dtweb.cz/recko/lefkada/agios-nikitas/odysse?DS=8192&GIATA=257247&D=63333|63284|63354&HID=9313&MT=1&NN=7&RD=2022-08-08&DD=2022-08-01&DP=4312&MNN=7&TT=1&PID=PVK90010&DPR=EXIM%20TOURS%20ATCOM&TTM=1&DF=2022-08-01|2022-09-01&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure = "https://exim2.dev.dtweb.cz/recko/lefkada/agios-nikitas/nefeli-agios-nikita?DS=8192&GIATA=81982&D=63333|63284|63354&HID=9304&MT=1&NN=7&RD=2022-08-10&DD=2022-08-03&DP=4312&MNN=7&TT=1&PID=PVK90009&DPR=EXIM%20TOURS%20ATCOM&TTM=1&DF=2022-08-03|2022-09-03&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure =  "https://exim2.dev.dtweb.cz/recko/lefkada/nidri/delfini-h?DS=8192&GIATA=538958&D=63333|63284|63354&HID=9309&MT=2&NN=7&RD=2022-07-14&DD=2022-07-07&DP=4305&MNN=7&TT=1&PID=PVK90004&DPR=EXIM%20TOURS%20ATCOM&TTM=1&DF=2022-07-07|2022-08-07&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0"
//const URL_detail_late_departure = "https://exim2.dev.dtweb.cz/recko/skyros/skyros/perigiali-beach-pensio?DS=8192&GIATA=413967&D=63333|63284|63354&HID=9326&MT=2&NN=7&RD=2022-08-08&DD=2022-08-01&DP=4312&MNN=7&TT=1&PID=PVK90013&DPR=EXIM%20TOURS%20ATCOM&TTM=1&DF=2022-08-01|2022-09-01&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0"
const URL_detail_late_departure = "https://exim2.dev.dtweb.cz/recko/lefkada/agios-nikitas/santa-marina-pvk?DS=8192&GIATA=21088&D=63333|63284|63354&HID=12262&MT=2&NN=7&RD=2022-07-14&DD=2022-07-07&DP=4305&MNN=7&TT=1&PID=PVK90017&DPR=EXIM%20TOURS%20ATCOM&TTM=1&DF=2022-07-07|2022-08-07&ERM=0&NNM=7|8|9|10|11|12|13&ac1=2&kc1=0&ic1=0"


const JmenoPrijmeniTest = "TEST"
const Email = "ondrej.kadoun@fischer.cz"
const PhoneNumber = "735599725"
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
		cy.get(':nth-child(10) > :nth-child(1) > span').scrollIntoView().click()
		console.log("date picker finished")
	}

	

	if (ageOfPassenger === "infant") {

		cy.xpath('//*[@class="vdatetime-popup"]', { timeout: 40000 }).should('be.visible')
		cy.get('.vdatetime-year-picker__item--current').click()
		cy.get('.vdatetime-month-picker__list > :nth-child(4)', { timeout: 40000 } ).scrollIntoView().click()
		cy.get(':nth-child(30) > :nth-child(1) > span').scrollIntoView().click()
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

		//cy.xpath(createLocator(numberOfRoom, numberOfPassenger, citizenshipConstLocator)).click()
		//cy.get('[data-testid="ESH"]').scrollIntoView().click()

		console.log("cestujici filler finished")

		}

	if (ageOfPassenger === "infant") {
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, lastNameConstLocator)).type(JmenoPrijmeniTest)
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, firstNameConstLocator)).type(JmenoPrijmeniTest)
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, datePickerConstLocator)).click()
		datePicker("infant")
		cy.xpath(createLocator(numberOfRoom, numberOfPassenger, citizenshipConstLocator)).click()
		cy.get('[data-testid="ESH"]').scrollIntoView().click()
		console.log("cestujici filler finished")
	
		}
	//cy.get('[data-testid="Žena"]').click()
	//
	//ne vsude maji nutne ctizenship, asi generalizovat do nejakeho parametru
	//


	
	console.log("cestujici filler finished")
}

it("Basket walkthrough", function () {

	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	cy.visit(URL_detail_late_departure)
	cy.get(':nth-child(3) > .order > .f_button-text').click()				   //ew2 dev
	//cy.xpath("//*[@class='c_btn block green mt-4 relative']").click()		 //billa a penny
	//cy.get('.flex-col > .relative > .c_btn').click() 						//billa a penny
	cy.get('[data-testid="tab-buyOnline"]', { timeout: 40000 }).should('be.visible')
	//detail zajezdu -> kosik -> vyplneni 4 zakladnich udaju

	cy.get(':nth-child(1) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(2) > .f_inputWrapper > .f_input > .f_input-item').type(JmenoPrijmeniTest)
	cy.get(':nth-child(3) > .f_inputWrapper > .f_input > .f_input-item').type(Email)
	cy.get('.vti__input').type(PhoneNumber)
	cy.get('[data-testid="nextStep"]').click()

	//ulice, cislo popisne, mesto, psc
	cy.get('.f_listTab', { timeout: 80000 }).should('be.visible')
	//KROK2

	objednavatelFiller()
	cestujiciFiller(0, 1)
	cestujiciFiller(0, 2)
	//cestujiciFiller(0, 3, "infant")		

	cy.get('[data-testid="nextStep"]').scrollIntoView().click()

	
	//KROK3
	cy.xpath('//*[@class="f_box f_set--active"]', { timeout: 400000 }).should('be.visible')
	cy.xpath('//*[@name="agreement.agree"]').click()
	
	cy.xpath('//*[@name="agreement.MTK_DEK"]').click()








})