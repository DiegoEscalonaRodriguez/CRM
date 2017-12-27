import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {amber400, red600, green500} from 'material-ui/styles/colors';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import EstrellaVacia from 'material-ui/svg-icons/toggle/star-border';
import EstrellaLlena from 'material-ui/svg-icons/toggle/star';

export default class ListElement extends React.Component{
	
	constructor(props){
		super(props);
		this.elementHandleClick = this.elementHandleClick.bind(this);
	} 

	elementHandleClick(){
		console.log("Pulsado ListElement");
		this.props.visitListHandleClick(this.props.visit);
	}

	render(){
		
		//console.log("Visita individual",this.props.visit);

		return(
				

			<ListItem
				leftAvatar={<Avatar icon={<ShoppingBasket />} backgroundColor= {this.props.visit.fulfilledAt == null ? red600 : green500} />}
		        primaryText={"Visita " + this.props.numero + "   |   " + (this.props.visit.fulfilledAt == null ? "Pendiente"  : "Completado")}
		        secondaryText={
			        <li>
			        	<b> Customer: </b>{this.props.visit.Customer.name} 
						<br></br>
						<b> Salesman: </b> {this.props.visit.Salesman.fullname}
						<br></br>
						
					</li>
		        }
		        secondaryTextLines={2}
		        onClick={this.elementHandleClick}
		        rightIcon= {this.props.visit.favourite== false ? <EstrellaVacia style={{marginRight:50}} color={amber400}/> : <EstrellaLlena style={{marginRight:50}} color={amber400}/>}
		    />


		    
	);



	}
}
