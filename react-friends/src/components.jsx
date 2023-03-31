export const Card = ({ name, email, id }) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s tc">
			<img height='200px' width='200px' src={`https://api.dicebear.com/5.x/micah/svg?seed=${id}&?size=128`} alt="robot" />
			<div> <h2>{name}</h2> <p>{email}</p> </div>
		</div>
	)
}
export const CardList = ({ Robots }) => {
	return (
		<>
			{
				Robots.map((user, i) => {
					return <Card key={i} id={Robots[i].id} name={Robots[i].name} email={Robots[i].email} />
				})
			}
		</>
	)
}
export const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '1px solid black', height: '800px' }}>
			{props.children}
		</div>
	)
}
export const Searchbox = ({ searchChange, searchfield }) => {
	return (
		<div className="pa2">
			<input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder='search' onChange={searchChange} />
		</div>
	)
}
		//`https://robohash.org/${id}?200x200`