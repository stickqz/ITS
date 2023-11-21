import { adjustCanvas } from "@/utils/helper";
import React from "react";

const Body = () => {
	const canvas = React.useRef<any>();

	React.useEffect(() => {
		const ctx = canvas?.current?.getContext(
			"2d"
		) as CanvasRenderingContext2D;
		if (!ctx) return;
		if (!canvas.current) return;
		adjustCanvas(canvas?.current);
		const img1 = new Image();
		img1.src = "/body.png";
		img1.onload = function () {
			ctx.drawImage(img1, 0, 0, 280 * 2, 280 * 2);
		};
	});

	return (
		<canvas
			id="canvas"
			ref={canvas}
			style={{
				border: "1px solid black",
				width: "560px",
				height: "560px",
				objectFit: "contain",
			}}
		/>
	);
};

export default React.memo(Body);
