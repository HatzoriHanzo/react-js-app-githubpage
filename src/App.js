import React from 'react';


// import Cards from './Components/Cards';
// import Charts from './Components/Charts';
// import CountryPicker from './Components/CountryPicker';

import { Cards, Charts, CountryPicker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaThumbNail from './images/image.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (

      <div className={styles.container}>
        <img className={styles.image} src={coronaThumbNail} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    )
  }

}

export default App;