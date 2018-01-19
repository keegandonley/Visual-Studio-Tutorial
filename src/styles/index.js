const excerpt = {
	fontSize: 11,
	marginTop: 5,
	paddingTop: 5,
	paddingLeft: 5,
	paddingRight: 5
}

export const styles = {
	page: {
		backgroundColor: 'white'
	},
	section: {
		width: '100%',
		textAlign: 'center'
	},
	link: {
		color: 'blue',
		textDecoration: 'none',
		fontSize: 11
	},
	body: {
		fontSize: 11
	},
	hint: {
		small: {
			backgroundColor: '#ADD8E6',
			...excerpt
		},
		wide: {
			backgroundColor: '#ADD8E6',
			...excerpt,
			marginLeft: '4%',
			marginRight: '4%',
		}
	}
}