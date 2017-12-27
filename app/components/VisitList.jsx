import React from 'react';
import ListElement from "./ListElement";


import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Paper from 'material-ui/Paper';



export default class VisitList extends React.Component{

	constructor(props){
		super(props);
		this.visitListHandleClick = this.visitListHandleClick.bind(this);

	}

	visitListHandleClick(visit){
		console.log("Llega a List");
		this.props.appHandleClick(visit);
	}

	render(){
		console.log("Todas las Visits",this.props.visits);
		console.log("Length del array visitas",this.props.visits.length)

		var numero =0
				
				let result = this.props.visits.map ((visita) => {

					let mykey = visita.id;

					numero = numero+1; /* se va aumentando 1 por cada visita */
				
					return ( <ListElement visit={visita} key={mykey} numero={numero} visitListHandleClick={this.visitListHandleClick}/> ) ;
				})
		
				

		return (
				<Paper  style={{maxHeight: 900, overflow: 'auto', zDepth:3}} >
					<List>
							{result} 

					</List>
				</Paper>


				);

	

}
}