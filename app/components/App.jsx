import React from 'react';
import './../assets/scss/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal400} from 'material-ui/styles/colors';
import VisitList from "./VisitList";
import Detail from "./Detail";
import AppBar from 'material-ui/AppBar';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';


export default class App extends React.Component {
	

constructor(props){
	super(props);
	this.appHandleClick = this.appHandleClick.bind(this);
  this.state = {
  	data: [],
    visits: [],
    visita: null
  };
}
  


componentDidMount(){ //Esto es para cargar todo una vez se monta el componente, osea, donde descargamos el json
	
 fetch('https://dcrmt.herokuapp.com/api/visits/flattened?token=08036a3e067a91664128')
.then((response) => response.json())
.then((responseJson) => {
	console.log(responseJson);
	this.setState({ data : responseJson}); //data es el json de visitas

})
.catch((error) => {
        console.error(error);
      });
}



  appHandleClick(visit) {
    	
      this.setState({

    		visits: this.state.visits,
    		visita: visit
    	});

    	console.log("Se ha seleccionado la visita del:",visit.Customer.name);
      
  }


  render() {
  
     return (
     <MuiThemeProvider>
    	<div className="total">
    		
        <div  className="left"> 
      		    <AppBar  id="header1" style={{backgroundColor: teal400}} showMenuIconButton={false} title="Lista de Visitas"/>
      		  	<VisitList visits= {this.state.data} appHandleClick={this.appHandleClick}/>
      			  
      	</div>
      	<br></br>
       

         <Paper className="right">
              
      			  <AppBar  id="header2" style={{backgroundColor: teal400}} showMenuIconButton={false} title="Detalles de Visita"/>

              <Detail visit={this.state.visita}/>
      	</Paper>

      	</div>
      </MuiThemeProvider>
    );

  }

}

