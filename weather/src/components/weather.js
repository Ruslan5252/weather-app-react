import React from 'react';


const Weather = (props) =>{
	return(<div className='infoWeath' >
        {props.city &&
        	<div>
        		<p>	Город : {props.city}, {props.country}</p>
        		<p>	Температура : {props.temp} °c</p>
        		<p>	Давление : {props.pressure} мм.рт.ст </p>
        		<p>	Скорость ветра  : {props.speed} м/с  </p>	
        	</div>
        }
        <p className="error" >	{props.error}</p>
         </div>);
}

export default Weather;