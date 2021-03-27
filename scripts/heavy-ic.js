const sHitEffect = newEffect(12, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("ff0000ff").shiftSaturation(Time.time() * 3.0));
	Lines.stroke(e.fout() * 1.5);
	
	const hl = new Floatc2({get: function(x, y){
		const ang = Mathf.angle(x, y);
		Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8 + 1.5);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 30.0, e.rotation, 70.0, hl);
	Draw.blend();
	Draw.reset();
});

//const effectS = require("effects");

/*const pcBullet = extend(LaserBulletType, {});
  pcBullet.damage = 2500;
  pcBullet.length = 560;
  pcBullet.width = 80;
  pcBullet.frontColor = Color.valueOf("EDC2B7");
  pcBullet.backColor = Color.valueOf("ED7455");
  pcBullet.status = effectS.overShocked;
  pcBullet.statusDuration = 240;
  statusChance = 0.1;*/

const heavyIC = extendContent(ItemTurret, "heavy-ic", {
  /*init(){
		heavyIC.ammo(
			Vars.content.getByName(ContentType.item, "gt-plastanium-composite"), pcBullet
		);
		this.super$init();
	},*/
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
    Draw.color(Color.valueOf("DD3636").shiftSaturation(Time.time() * 2.0));
    Draw.rect(this.blinkRegion, tile.drawx() + tr2.x, tile.drawy() + tr2.y, entity.rotation - 90);
    Draw.color();
  }
});
heavyIC.update = true;
