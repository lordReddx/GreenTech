const partb = 20
const reloadb = 120;

const bioWall = extendContent(Wall, "pc-wall-b", {});

bioWall.buildType = () => extendContent(Wall.WallBuild, bioWall, {
  updateTile() {
    if (this.damaged() & this.timer.get(0, reloadb)) {
      this.heal(this.maxHealth / partb);
      Fx.healBlockFull.at(this.x, this.y, bioWall.size, Pal.heal);
    }
  }
});

const partm = 20
const reloadm = 120;

const bioWall = extendContent(Wall, "pc-wall-m", {});

bioWall.buildType = () => extendContent(Wall.WallBuild, bioWall, {
  updateTile() {
    if (this.damaged() & this.timer.get(0, reloadm)) {
      this.heal(this.maxHealth / partm);
      Fx.healBlockFull.at(this.x, this.y, bioWall.size, Pal.heal);
    }
  }
});

const parts = 20
const reloads = 120;

const bioWall = extendContent(Wall, "pc-wall-s", {});

bioWall.buildType = () => extendContent(Wall.WallBuild, bioWall, {
  updateTile() {
    if (this.damaged() & this.timer.get(0, reloads)) {
      this.heal(this.maxHealth / parts);
      Fx.healBlockFull.at(this.x, this.y, bioWall.size, Pal.heal);
    }
  }
});
