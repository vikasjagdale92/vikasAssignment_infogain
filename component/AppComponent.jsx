import React,{Component} from 'react';
import { render } from 'react-dom';
import ListComponent from './ListComponent.jsx';

export default class AppComponent extends Component{
	render(){
		return(
			<div className="col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-2">
				<ListComponent/>
			</div>
			);
	}
}