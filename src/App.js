import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import Nav from'./Nav';
import { render } from 'react-dom';


class App extends Component {
  constructor(props){
    super(props);
this.state = {
  stats:[],
  selected:[],
 
}}

componentDidMount(){
  const url='https://corona.lmao.ninja/all';
  axios.get(url).then(response => response.data)
  .then((data)=>{
    this.setState({stats: data  })
    console.log( this.state.stats)})
    .catch(err => {
      console.log('Something goes wrong');
      console.log(err);
  });

}
showTunisia(){
  const url1='https://corona.lmao.ninja/countries/Tunisia';
  axios.get(url1).then(response => response.data)
  .then((data)=>{
    this.setState({selected: data  })
    console.log('tunisia data');
    console.log( this.state.selected)})
    .catch(err => {
      console.log('Something goes wrong');
      console.log(err);
  });
}
 render(
 
 )
 
 


 {
  const  general=[this.state.stats];
  const  selected=[this.state.selected];
  return (
    <div>
      <Nav/>
      {general.map(e=><h2>
        <p>World Total cases:{e.cases}</p>
        <p>Today Cases:{e.todayCases}</p>
        <p>Active Cases:{e.active}</p>
        <p>Deaths:{e.deaths}</p>
        <p>Recovred:{e.recovered}</p>
        <p>Critical:{e.critical}</p>
        <p>Cases per One Million:{e.casesPerOneMillion}</p>
        <p>Deaths per One Million:{e.deathsPerOneMillion}</p>
        <p>Infected Countries:{e.affectedCountries}</p>
      
      
      
      </h2>)}
    
    </div>
  );
}
}
export default App;
