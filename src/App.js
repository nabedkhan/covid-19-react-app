import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../src/components/Header/Header'
import InfoBox from './components/InfoBox/InfoBox';
import TableData from './components/TableData/TableData';
import ChartData from './components/ChartData/ChartData';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => {
          const details = {
            name: country.country,
            value: country.countryInfo.iso3,
            id: country.countryInfo._id
          }
          return details;
        });
        setCountries(countries);

        const sortData = () => {
          const sorted = [...data];
          sorted.sort((a, b) => b.cases - a.cases);
          return sorted;
        }
        setTableData(sortData);
      });
  }, []);

  const handleChange = (event) => {
    const countryCode = event.target.value;
    const url = countryCode === 'Worldwide' ? 'https://disease.sh/v3/covid-19/all' :
      `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
      })
  }

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => setCountryInfo(data))
  }, [])

  return (
    <div className="App mt-5">
      <Header
        countries={countries}
        country={country}
        handleChange={handleChange}
      ></Header>

      <div className="infobox mt-5">
        <div className="container">
          <div className="row">
            <InfoBox id='one' title='Corona Cases'
              cases={countryInfo.todayCases}
              total={countryInfo.cases}></InfoBox>

            <InfoBox id='two' title='Recovered'
              cases={countryInfo.todayRecovered}
              total={countryInfo.recovered}></InfoBox>

            <InfoBox id='three' title='Deaths'
              cases={countryInfo.todayDeaths}
              total={countryInfo.deaths}></InfoBox>
          </div>
        </div>
      </div>

      <div className="table-chart mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <TableData countries={tableData}></TableData>
            </div>
            <div className="col-lg-6 col-md-12">
              <ChartData></ChartData>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-dark p-3 text-center mb-0">Made With ❤️ Nabed Khan</h6>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
