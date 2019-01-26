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

	 /*--------------- Search User, we can search by first name or last name  --------------*/

    buildRegExp(searchText) {
     var words = searchText.trim().split(/[ \-\:]+/);
     var exps = _.map(words, function(word) {
        return "(?=.*" + word + ")";
     });

     var fullExp = exps.join('') + ".+";
     return new RegExp(fullExp, "i");
  }


	getSearchValue(searchVal){
		var value = this.buildRegExp(searchVal);
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
			    <div id="loader-wrapper">
				    <div id="loader"></div>
				 
				    <div className="loader-section section-left"></div>
				    <div className="loader-section section-right"></div>
				 
				</div>
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
