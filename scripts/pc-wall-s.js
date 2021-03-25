const part = 20
const reload = 120;

const bioWall = extendContent(Wall, "pc-wall-s", {});

bioWall.buildType = () => extendContent(Wall.WallBuild, bioWall, {
  updateTile() {
    if (this.damaged() & this.timer.get(0, reload)) {
      this.heal(this.maxHealth / part);
      Fx.healBlockFull.at(this.x, this.y, bioWall.size, Pal.heal);
    }
  }
});