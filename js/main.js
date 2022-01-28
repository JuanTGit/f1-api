//  Pull Data from API
const getErgastAPI = async function (series, season) {
    let response = await fetch(`https://ergast.com/api/f1/${series}/${season}/driverStandings.json`);
    let data = await response.json();
    return await data;
}

// Grabbing the form from the document
const f1Form = document.getElementById('f1Form');

// function to add list to html
function addToF1List(DriverStanding){
    let f1List = document.querySelector('#f1List');
    let liEl = document.createElement('li');
    liEl.innerText = `Driver name: ${DriverStanding.givenName} position: ${DriverStanding.position} Constructor: ${DriverStanding.ConstructorId}`
    f1List.append(liEl);
}
// Event listener for submit
f1Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let f1FormName = e.target.f1Name.value;
    let driverStandings = await addToF1List(f1FormName);
    addToF1List(driverStandings)
})
