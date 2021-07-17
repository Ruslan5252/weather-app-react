import React from 'react';
import Form from './components/form'
import Weather from './components/weather'
import Info from './components/Info'


const api_key = "bc3e62293cb831488ebd6acffa6ccddb";

class App extends React.Component{

	state = {
		temp : undefined,
		city : undefined,
		country : undefined,
		pressure : undefined,
		speed : undefined,
		error : undefined,
	}

  gettingWeather = async (e) =>{
  	e.preventDefault();
  	var city = e.target.elements.city.value


  	if (city && temp!=undefined) {
  		const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
  		const data = await api_url.json();
  		console.log(data); 
  		var temp = data.main.temp/12
  		temp = temp.toFixed(2)
  		var pressure = data.main.pressure/1.5
  		pressure = pressure.toFixed(0)
  		this.setState({
  			temp : temp,
			city : data.name,
			country : data.sys.country,
			pressure : pressure,
			speed : data.wind.speed,
			error : undefined,
  		});
  	}else {
  		this.setState({
  			temp:undefined,
  			city:undefined,
  			country:undefined,
  			pressure:undefined,
  			sunset: undefined,
  			error: "Название города введено не корректно "
  		});
  	}
  }
  render(){
    return(
      <div className="wrapper" >
      <div className="main" >
      	<div className="container" >
      		<div className="row" >
      			<div className="col-sm-5 info" >
      				<Info/>

      			</div>
      			<div className="col-sm-7 form " >
      				<Form weatherMethod={this.gettingWeather} />
        			<Weather
        					temp={this.state.temp}
        					city={this.state.city}
        					country={this.state.country}
        					pressure={this.state.pressure}
        					speed={this.state.speed}
        					error={this.state.error}/>
				</div>
      		</div>
      		</div>
      	</div>

        
      </div>


      );
  }



}

export default App;