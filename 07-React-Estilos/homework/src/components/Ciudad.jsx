import React from "react";

class Ciudad extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div className="ciudad">
                <div className="container">
                    <h2>{this.props.ciudad.name}</h2>
                    <div className="info">
                        <div>Temperatura: {this.props.ciudad.main.temp} ºC</div>
                        <div>Clima: {this.props.ciudad.weather[0].main}</div>
                        <div>Viento: {this.props.ciudad.wind.speed} km/h</div>
                        <div>Cantidad de nubes: {this.props.ciudad.clouds.all}</div>
                        <div>Latitud: {this.props.ciudad.coord.lat}º</div>
                        <div>Longitud: {this.props.ciudad.coord.lon}º</div> 
                </div>
                </div>
            </div>
        )
    }
}

export default Ciudad;
