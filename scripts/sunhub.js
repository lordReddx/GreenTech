const prox = require("lib");

const sunHub = extendContent(ItemTurret, "sunhub", {
	init(){
		this.pcPanel = Vars.content.getByName(ContentType.block, "gt-pc-panel");
		this.super$init();
	},
	onDestroyed(tile){
		prox.eachLinkedBlock(tile, boolf(t => {
			e = t.ent();
			return t.block() == this.pcPanel && e.cons.valid();
		}), cons(t => t.ent().setWorking(false)));
		this.super$onDestroyed(tile);
	},
	removed(tile){
		prox.eachLinkedBlock(tile, boolf(t => {
			e = t.ent();
			return t.block() == this.pcPanel && e.cons.valid();
		}), cons(t => t.ent().setWorking(false)));
		this.super$removed(tile);
	},
	load(){
		this.super$load();
		this.topRegion = Core.atlas.find("gt-top");
		this.region = Core.atlas.find(this.name);
	},
	generateIcons(){
		return [
			Core.atlas.find("gt-top"),
			Core.atlas.find(this.name)
		];
	},
	draw(tile){
		Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
		Draw.color();
	},
	setBars(){
		this.super$setBars();
		this.bars.add(
			"pc-panel", func(entity => {
				return new Bar(
					prov(() => Core.bundle.get("bar.input")),
					prov(() => Pal.accent),
					floatp(() => {
						count = Mathf.clamp(
							prox.getLinkedBlock(
								entity.tile, this.pcPanel, boolf(tile => {
									return tile.block() == this.pcPanel && tile.ent().cons.valid();
								})
							), 0, this.minPcp
						) / this.minPcp;
						return count;
					})
				)
			})
		);
	}
});

sunHub.minPcp = 3;