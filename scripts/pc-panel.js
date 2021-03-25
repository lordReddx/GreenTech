//yes, this code from mechanical warfare, why not
const pcPanel = extendContent(SolarGenerator, "pc-panel", {
  load() {
    this.super$load();
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  update(tile) {
    entity = tile.ent();
    if (entity.isWorking()) {
      this.super$update(tile);
      entity.setBoltChance(Mathf.lerpDelta(entity.getBoltChance(), 0.5, 0.02));
    } else {
      entity.setBoltChance(Mathf.lerpDelta(entity.getBoltChance(), 0, 0.02));
    }
    if (!entity.cons.valid()) {
      entity.setBoltChance(Mathf.lerpDelta(entity.getBoltChance(), 0, 0.02));
      entity.setWorking(false);
    }
  },
  generateIcons() {
    return [
			Core.atlas.find(this.name),
			Core.atlas.find(this.name + "-top")
		];
  },
  draw(tile) {
    entity = tile.ent();
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    Draw.blend(Blending.additive);
    for (var i = 0; i < this.boltCount; i++) {
      if (Mathf.randomSeed(Mathf.round(Time.time() + entity.id + i)) > entity.getBoltChance()) { continue; }
      var rawrot = Time.time() * this.boltRotSpeed[i] * this.boltRotDir[i];
      var truerot = rawrot > 0 ? (rawrot % 360) : (360 + (rawrot % 360));
      Draw.mixcol(Color.white, Mathf.absin(Time.time(), this.boltRotSpeed[i] * 0.1, 0.5));
      Draw.alpha(0.9 + Mathf.absin(Time.time(), this.boltRotSpeed[i] * 0.1, 0.1));
      Draw.rect(Core.atlas.find(this.name + "-particle" + i), tile.drawx(), tile.drawy(), truerot);
      Draw.mixcol();
      Draw.color();
    }
    Draw.blend();
    Draw.reset();
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
  }
});
pcPanel.boltCount = 6;
pcPanel.boltRotSpeed = [12, 9, 27];
pcPanel.boltRotDir = [1, -1, -1];
pcPanel.entityType = prov(() => {
  const entity = extend(GenericCrafter.GenericCrafterEntity, {
    setWorking(bool) {
      this._working = bool;
    },
    isWorking() {
      return this._working;
    },
    getBoltChance() {
      return this._chance;
    },
    setBoltChance(val) {
      this._chance = val;
    }
  });
  entity.setWorking(false);
  entity.setBoltChance(0);
  return entity;
});