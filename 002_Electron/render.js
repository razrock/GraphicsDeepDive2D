function drawTriangle() {
    const canvas = document.getElementById("guiContext");
    const ctx = canvas.getContext("2d");

    canvas.width = 256;
    canvas.height = 256;

    // height is 208px, with 8px padding (240px side)
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(128, 24);
    ctx.lineTo(248, 232);
    ctx.lineTo(8, 232);
    ctx.fill();
}

drawTriangle();