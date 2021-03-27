const part = 20
const reload = 80;

const wall = extendContent(Wall, "pc-wall-m", {});

wall.buildType = () => extendContent(Wall.WallBuild, wall, {
  updateTile() {
    if (this.damaged() & this.timer.get(0, reload)) {
      this.heal(this.maxHealth / part);
      Fx.healBlockFull.at(this.x, this.y, wall.size, Pal.heal);
    }
  }
});