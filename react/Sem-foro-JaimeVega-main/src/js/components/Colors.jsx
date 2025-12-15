export function Color(props) {
	let show = (props.show)? "flex" : "none";
	return (
		<div 
		className={`color ${props.selected} ${props.color}`}
		style={{backgroundColor: props.color, display: show}}
		onClick={props.onClick}>
		</div>
	);
};