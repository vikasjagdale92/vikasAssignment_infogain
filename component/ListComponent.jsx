import React,{Component} from 'react';
import { render } from 'react-dom';
import 	SearchComponent from './SearchComponent.jsx';


export default class ListComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			InformationArr : [],

		}
	}

	componentWillMount(){
		Meteor.call("getAllRecord",(err,res)=>{
			if(err){

			}else{
				this.setState({
					InformationArr : res,
				});
			}
		});
		
	}


	getSearchValue(value){

		Meteor.call("findResult",value,(err,res)=>{
			if(err){
				alert("No match found");
			}else{
				this.setState({
					InformationArr : res,
				});
			}
		});

	}

	render(){
		return(
			<div className="col-lg-12">
			    <SearchComponent getAttribute={this.getSearchValue.bind(this)}/>
				<table className="table table-striped table-hover myTable table-bordered">
				    <thead>
				      <tr className="tableHeader">
				      	<th>Sr. No</th>
				        <th>Name</th>
				        <th>Gender</th>
				      </tr>
				    </thead>
				    {this.state.InformationArr.length!=0 ?
					    <tbody>
						    {this.state.InformationArr.map((values,index)=>{
						    	return  <tr key={index}>
									      	<td>{index +1 }</td>
									        <td>{values.name}</td>
									        <td>{values.gender}</td>
									      </tr>
						    })} 
				    	</tbody>
				    :
					    <tbody>
					    	<tr>
					    		<td colSpan="3">Nothing to display</td>
					    	</tr>
					    </tbody>
					}
				  </table>
			</div>
			);
	
	}
}