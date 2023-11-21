import React from "react";
import Body from "./Body";
import { adjustCanvas } from "@/utils/helper";

interface Props {
	injuryData: any[];
	setInjuryData: Function;
}

const BodyMap = ({ injuryData, setInjuryData }: Props) => {
	const injuryCanvas = React.useRef<any>();

	React.useEffect(() => {
		if (!injuryCanvas.current) return;
		adjustCanvas(injuryCanvas?.current);
	}, []);

	React.useEffect(() => {
		drawMark();
	}, [injuryData]);

	const addMark = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		let rect = injuryCanvas.current?.getBoundingClientRect();
		if (!rect) return;

		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;

		const oldInjuryData = injuryData;
		const newInjuryData = [...oldInjuryData, { x, y }];

		setInjuryData(newInjuryData);
	};

	const drawMark = () => {
		if (!injuryCanvas.current) return;

		const ctx = injuryCanvas?.current?.getContext(
			"2d"
		) as CanvasRenderingContext2D;

		ctx.clearRect(
			0,
			0,
			injuryCanvas.current.width,
			injuryCanvas.current.height
		);

		injuryData.forEach((item, index) => {
			const { x, y } = item;
			ctx.beginPath();
			ctx.arc(x, y, 16, 0, 2 * Math.PI);
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.font = "20px Helvetica";
			ctx.fillText((index + 1).toString(), x, y);
		});
	};

	return (
		<div
			style={{
				width: "50%",
				height: "100%",
				position: "relative",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Body />
			<canvas
				id="injuryCanvas"
				ref={injuryCanvas}
				onClick={addMark}
				style={{
					position: "absolute",
					zIndex: 1,
					top: 0,
					left: 0,
					width: "560px",
					height: "560px",
					objectFit: "contain",
				}}
			/>
		</div>
	);
};

export default React.memo(BodyMap);
