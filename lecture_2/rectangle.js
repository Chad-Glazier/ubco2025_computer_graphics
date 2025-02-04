function main() {
	const canvas = document.getElementById("rectangle")

	if (canvas === null) {
		throw new Error("Failed to retrieve <canvas id=\"rectangle\"> element")
	}

	const ctx = canvas.getContext("2d")
	
	// Draw a rectangle
	ctx.fillStyle = "rgba(0,0,255,1.0)"
	ctx.fillRect(120, 10, 150, 150)
}

main()
