require('dotenv').config();

const Airtable = require('airtable');

const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

const investorNameImput = document.querySelector('#investor-name-input');
const investorNameButton = document.querySelector('#investor-name-btn');


investorNameButton.addEventListener('click', () => {
    console.log(investorNameImput.value)
    findInvestorDetails(investorNameImput.value)
})

function findInvestorDetails(investorName) {
    base(process.env.INVESTORS_TABLE).select({
        // Selecting the first 3 records in Main View:
        maxRecords: 100,
        view: "Investors Table View"
    })
}
