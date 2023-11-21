const size = 280 * 2;

export const adjustCanvas = (oldCanvas: HTMLCanvasElement) => {
	const ctx = oldCanvas.getContext("2d") as CanvasRenderingContext2D;
	var scale = window.devicePixelRatio;
	oldCanvas.width = size * scale;
	oldCanvas.height = size * scale;
	ctx.scale(scale, scale);
};
