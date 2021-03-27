const purifier = extendContent(ItemTurret, "purifier", {
  load() {
    this.super$load();

    this.region = Core.atlas.find(this.name);
    this.liquidRegion = Core.atlas.find(this.name + "-liquid");
  }
});