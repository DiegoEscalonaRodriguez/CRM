
import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./TargetDetail";
import CustomerDetail from "./CustomerDetail";
import SalesmanDetail from "./SalesmanDetail";
import SvgIcon from 'material-ui/SvgIcon';
import Info from 'material-ui/svg-icons/action/info';
import {green500, red500, deepOrange800} from 'material-ui/styles/colors';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


export default class Detail extends React.Component{
	

	render(){

	/*return("Detail");*/
		if(this.props.visit != null){
			return(
				<div>

					<h3 ><Info color={green500} style={{marginLeft:10}} /> INFO  </h3>
					
					<div> 	
						
						<VisitDetail className="visitDetail" plannedFor={this.props.visit.plannedFor} visit={this.props.visit} fulfilledAt={this.props.visit.fulfilledAt}/>
						<br></br>
						<Divider />
						<TargetDetail className="targetDetail" targets={this.props.visit.Targets}/>
						<br></br>
						<Divider />
						<CustomerDetail className="customerDetail" customer={this.props.visit.Customer}/>
						<br></br>
						<Divider />
						<SalesmanDetail className="salesmanDetail" salesman={this.props.visit.Salesman}/>
					
					</div>
				</div>
			);
		}else{
			return null;
		}
	}	
}


