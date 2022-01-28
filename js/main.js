//  Pull Data from API
const getRaceAPI = async function (series, season) {
    let response = await fetch(`https://ergast.com/api/f1/${series}/${season}/driverStandings.json`);
    let data = await response.json();
    return await data;
}

const f1Form = document.getElementById('f1Form');


function addToTable(DriverStanding){
    let f1List = document.querySelector('#f1List');
    standings = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    let liEl = document.createElement('li');
    liEl.innerText = `Driver: ${DriverStanding.givenName} Position: ${DriverStanding.position} Constructor: ${DriverStanding.ConstructorId} wins: ${driver.wins}`
    f1List.append(liEl);
}

f1Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let series = e.target.series.value;
    let season = e.target.season.value;
    let data = await getRaceAPI(series, season);
    addToTable(data)
})
