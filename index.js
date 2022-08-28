class Canvas {
  constructor(url) {
    this.can = document.createElement("canvas")
    this.ctx = this.can.getContext("2d")
    this.i = new Image();
    this.i.src = url;
    this.can.width = this.i.width;
    this.can.height = this.i.height;
  }
  
  grayscale() {
    let image = this.ctx.getImageData(0, 0, this.can.width, this.can.height)
    let data = image.data;
    
    for (let i = 0; i < data.length; i+=4) {
      const sum = data[i] + data[i + 1] + data[i + 2]
      data[i] = sum / 3
      data[i + 1] = sum / 3
      data[i + 2] = sum /3
    }
    image.data = data;
    ctx.putImageData(image.data, 0, 0)
  }
  
  export(mimetype="image/png") {
    return this.can.toDataURL(mimetype)
  }
}
