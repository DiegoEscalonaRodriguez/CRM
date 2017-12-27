import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import Calendar from 'material-ui/svg-icons/action/date-range';
import Dia from 'material-ui/svg-icons/action/today';
import {lightGreenA400, amber400, yellow900} from 'material-ui/styles/colors';
import EstrellaVacia from 'material-ui/svg-icons/toggle/star-border';
import EstrellaLlena from 'material-ui/svg-icons/toggle/star';

export default class VisitDetail extends React.Component{




	render(){



		return( 

			<div className = "visitDetail"> 
			
				<Calendar  color={yellow900} style={{marginLeft:10}}/><b>   Planeada para: </b> <i >{this.props.plannedFor}</i>
				<br></br>

				<Dia color={yellow900} style={{marginLeft:10}}/><b> Finalizada:  </b> {this.props.fulfilledAt == null ? <i> Pending</i> : <i>{this.props.fulfilledAt}</i>}
				<br></br>

				 {this.props.visit.favourite== false ? <EstrellaVacia style={{marginLeft:10}} color={amber400}/> : <EstrellaLlena style={{marginLeft:10}} color={amber400}/>} <b>Favorita: </b> {this.props.visit.favourite== false ? "No" : "Si"}

			</div>


			);
	}
}
