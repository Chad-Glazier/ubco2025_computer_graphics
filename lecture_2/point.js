const VSHADER_SOURCE = `void main() {
	gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
	gl_PointSize = 10.0;
}
`
const FSHADER_SOURCE = `void main() {
	gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`

function main() {
	const canvas = document.getElementById("webgl")
	if (canvas === null) {
		throw new Error("Failed to retrieve <canvas> element")
	}

	const gl = getWebGLContext(canvas)
	if (gl === null) {
		throw new Error("Failed to get WebGL context for the <canvas> element.")
	}

	if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
		throw new Error("Failed to initialize shaders.")
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0)
	gl.clear(gl.COLOR_BUFFER_BIT)
	gl.drawArrays(gl.POINTS, 0, 1)
}

main()