import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import Persona from 'material-ui/svg-icons/social/person';
import Carro from 'material-ui/svg-icons/action/shopping-cart';
import Codigo from 'material-ui/svg-icons/action/line-style';
import Lugar from 'material-ui/svg-icons/action/room';
import Casa from 'material-ui/svg-icons/action/home';
import Email from 'material-ui/svg-icons/communication/email';
import Fono from 'material-ui/svg-icons/communication/phone';
import {green500, red500, yellow900} from 'material-ui/styles/colors';

export default class CustomerDetail extends React.Component{


	render(){
		return(
			<div className="customerDetail">
				<h3 style={{margin:10}}><Carro color={green500}/> CUSTOMER </h3>
				<Persona color={yellow900} style={{marginLeft:10}}/><b >Name:</b>  {this.props.customer.name=="" ? "<Vacio>" : this.props.customer.name}
				<br></br>
				<Codigo color={yellow900} style={{marginLeft:10}}/><b>Code:</b>  {this.props.customer.code=="" ? "<Vacio>" : this.props.customer.code}
				<br></br>
				<Lugar color={yellow900} style={{marginLeft:10}}/><b>CIF:</b>  {this.props.customer.cif=="" ? "<Vacio>" : this.props.customer.cif}
				<br></br>
				<Email color={yellow900} style={{marginLeft:10}}/><b>Email:</b>  {this.props.customer.email1=="" ? "<Vacio>" : this.props.customer.email1}
				<br></br>
				<Casa  color={yellow900} style={{marginLeft:10}}/><b>Address:</b> {this.props.customer.address2}  {this.props.customer.address1}
				<br></br>
				<Fono color={yellow900} style={{marginLeft:10}}/><b>Phone:</b>  {this.props.customer.phone1=="" ? "<Vacio>" : this.props.customer.phone1}
				<br></br>




			</div>




			);
	}
}
