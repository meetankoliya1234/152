AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clickcounter: {type: "number", default: 0}
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update: function(){
    window.addEventListener("click", e => {
      this.data.clickcounter = this.data.clickcounter + 1;

      if(this.data.clickcounter === 1){
        const rotation = {x: 0, y: 20, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      else if(this.data.clickcounter === 2){
        const rotation = {x: 0,  y: 100, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      else if(this.data.clickcounter === 3){
        const rotation = {x: 0, y: -200, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      else if(this.data.clickcounter === 4){
        const rotation = {x: 0, y: -100, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      else if(this.data.clickcounter === 4){
        const rotation = {x: 0, y: 195, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      else if(this.data.clickcounter === 4){
        const rotation = {x: 0, y: -100, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      else if(this.data.clickcounter === 4){
        const rotation = {x: 0, y: 50, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
    })
  }
});
