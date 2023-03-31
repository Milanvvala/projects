import React, { Component } from 'react';
import { CardList, Searchbox, Scroll } from './components'

class App extends Component {
	constructor() {
		super()
		this.state = { Robots: [], searchfield: '' }
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ Robots: users }));
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value }); // console.log(filterRobo); console.log(searchfield);
	}
	render() {
		const { Robots, searchfield } = this.state;
		const filterRobo = Robots.filter(robot => { return robot.name.toLowerCase().includes(searchfield.toLowerCase()) })
		return !Robots.length ?
			<h1 style={{ fontFamily: 'Open Sans' }}>Loading</h1> :
			(
			<div className="tc">
				<h1 style={{ color: 'white' }}>Friends</h1>
				<Searchbox searchChange={this.onSearchChange} />
				<Scroll><CardList Robots={filterRobo} /></Scroll>
			</div>
			)
	}
}
export default App;