import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		background:
			"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		height: "100%",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		padding: "0 30px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		height: "100%",
		textAlign: "center",
	},
});

const renderer = ({
	total,
	days,
	hours,
	minutes,
	seconds,
}) => {
	return (
		<div
			style={{
				color: "red",
				fontSize: "2rem",
			}}
		>
			<span>
				{days}d :{hours}h :{minutes}m :{seconds}s
			</span>
		</div>
	);
};

export default function Timer() {
	const classes = useStyles();
	const endTime = new Date(2021, 8, 7);

	return (
		<div className={classes.root}>
			<h1>Time left to become a Developer 😰 </h1>
			<Countdown date={endTime} renderer={renderer} />
		</div>
	);
}
