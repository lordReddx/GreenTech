const purifier = extendContent(ItemTurret, "purifier", {
  draw(){
    Draw.rect(Core.atlas.find("gt-purifier-liquid"), this.x,this.y);
}});