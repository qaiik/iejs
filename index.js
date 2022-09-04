function MAN(canvas, callbackfn) {
    const ctx = canvas.getContext("2d")
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scanned = imageData.data;

    for (let i = 0; i < scanned.length; i += 4) {
        const r = scanned[i]
        const g = scanned[i + 1]
        const b = scanned[i + 2]
        const output = callbackfn(r,g,b);
        scanned[i] = output[0]
        scanned[i + 1] = output[1]
        scanned[i + 2] = output[2]
    }

    imageData.data = scanned;
    ctx.putImageData(imageData, 0, 0);
};

function load(url) {
  const i = new Image(url);
  
  return new Promise((resolve,reject) => {
    i.addEventListener('load', () => {
      resolve(i)
    })
  })
}

function can(image, style="fit") {
  const c = document.createElement("canvas");
  c.width = image.width
  c.height = image.height
  if (style == "stretch") {
    
    c.drawImage(image, 0, 0)
  } else {
    c.drawImage(image, 0, 0, c.width, c.height)
  }
  
  return c.getContext("2d")
}

function download(context) {
  const c = context.canvas;
  const iu = c.toDataURL("image/png")
  const a = document.createElement("a")
  a.download = "dl.png"
  a.href = iu
  a.click()
}
