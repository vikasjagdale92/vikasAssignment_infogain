import React,{Component} from 'react';
import { render } from 'react-dom';

export default class SearchComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			serchValue : '',
		}
	}

	getSearchValue=(e)=>{
		e.preventDefault();
		var value = $('#getValue').val();
		// console.log(value);
		this.setState({
			serchValue : value,
		})
		// console.log(this.state.serchValue);

		this.props.getAttribute(value);
	}
	
	render(){
		return(
			<div className="col-lg-12 assSearch ">
				<div className="pull-right ">
					<input type="text" name="search" id="getValue" placeholder="Search.."/>&nbsp;&nbsp;
					<button type="button" className="btn btn-primary" onClick={this.getSearchValue}>Serach</button>
				</div>
			</div>
			);
	}
}