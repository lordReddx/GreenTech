const heavyIC = extendContent(ItemTurret, "heavy-ic", {
  load() {
    this.super$load();

    this.region = Core.atlas.find(this.name);
    this.blinkRegion = Core.atlas.find(this.name + "-blink");
  },

  drawLayer: function(tile) {
    const tr2 = new Vec2();

    entity = tile.ent();

    tr2.trns(entity.rotation, -entity.recoil);

    Draw.rect(this.region, tile.drawx() + tr2.x, tile.drawy() + tr2.y, entity.rotation - 90);
    Draw.color(Color.valueOf("DD3636").shiftHue(Time.time() * 2.0));
    Draw.rect(this.blinkRegion, tile.drawx() + tr2.x, tile.drawy() + tr2.y, entity.rotation - 90);
    Draw.color();
  }
});
heavyIC.update = true;