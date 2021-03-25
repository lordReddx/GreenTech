for (var i = 0; i < 15; i++) {
  var h = new SectorPreset("unknown" + i, mino, i);
  h.localizedName = "Unknown" + i;
  h.alwaysUnlocked = false;
};

const plains = new SectorPreset("plains", mino, 1);
plains.captureWave = 45;
plains.localizedName = "Plains";
plains.difficulty = 8;
plains.alwaysUnlocked = false;

const oldRefinery = new SectorPreset("old-refinery", mino, 2);
oldRefinery.localizedName = "Old refinery";
oldRefinery.difficulty = 8;
oldRefinery.alwaysUnlocked = false;

const frozenMountains = new SectorPreset("frozen-mountains", mino, 3);
frozenMountains.localizedName = "Frozen mountains";
frozenMountains.difficulty = 5;
frozenMountains.alwaysUnlocked = false;

const spaceshipWorkshop = new SectorPreset("ss-workshop", mino, 4);
spaceshipRepairShop.captureWave = 30;
spaceshipRepairShop.localizedName = "Spaceship workshop";
spaceshipRepairShop.difficulty = 5;
spaceshipRepairShop.alwaysUnlocked = false;

const spaceAirport = new SectorPreset("space-airport", mino, 5);
spaceAirport.localizedName = "Space airport";
spaceAirport.difficulty = 9;
spaceAirport.alwaysUnlocked = false;

/*const mudCauldron = new SectorPreset("mud-cauldron", mino, 6);
mudCauldron.localizedName = "Mud cauldron";*/