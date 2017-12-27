import React from 'react';
import TargetElement from "./TargetElement.jsx"
import SvgIcon from 'material-ui/SvgIcon';
import Dinero from 'material-ui/svg-icons/editor/attach-money';
import {greenA700, red500, amber500} from 'material-ui/styles/colors';

export default class TargetDetail extends React.Component{

	
	render(){
		var num = 0;

		console.log("Total Targets seleccionado:", this.props.targets);

		let targets = this.props.targets.map((target) => {
			let id = target.id;
			console.log("Target individual:", target);
			

			return( <TargetElement key={id} target={target}/> ); /* hace falta poner key={mykey} ???? */

		});

		console.log("Total Targets selecionado mapeado:", targets);
		


		return(

			<div className="targetDetail">
				<h3 style={{margin:10}} ><Dinero color={greenA700} /> TARGETS </h3>
				 {targets} 

			</div>

			);
	}
}
