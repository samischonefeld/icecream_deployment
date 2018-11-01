import React, { Component } from 'react';
import axios from 'axios';
import IceCream from './IceCream';

class IceCreamList extends Component {
	state = {
		apiDataLoaded: false,
		apiData: null
	}

	componentDidMount() {
		axios.get('/icecream')
			.then( res => {
				this.setState(prevState => ({
					apiDataLoaded: true,
					apiData: res.data.data
				}))
			})
	}

	renderIceCreams() {
		if(this.state.apiDataLoaded) {
			return this.state.apiData.map(d => {
				return (
					<IceCream key={d.id} icecream={d} />
				)
			})
		} else return <p>Loading...</p>
	}

	render() {
		return (
			<div className='icecream-list'>
				{this.renderIceCreams()}
			</div>
		)
	}



}

export default IceCreamList;