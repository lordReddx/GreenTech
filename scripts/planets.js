  Events.on(ClientLoadEvent, () => {
    const mino = new Planet("mino", Planets.sun, 1, 3);
    mino.generator = new SerpuloPlanetGenerator();
    mino.mesh = new HexMesh(mino, 5);
    mino.orbitRadius = 7;
    mino.orbitTime = 1.5 * 30;
    mino.rotateTime = 15;
    mino.bloom = true;
    mino.accessible = true;
    mino.startSector = 3;
    mino.hasAtmosphere = true;
    mino.atmosphereColor = Liquids.cryofluid.color;
    mino.atmosphereRadIn = 0.1;
    mino.atmosphereRadOut = 0.3;
    mino.alwaysUnlocked = true;
    mino.localizedName = "Mino";

    
const plains = new SectorPreset("sector1", mino, 1);
plains.captureWave = 45;
plains.localizedName = "Plains";
plains.difficulty = 8;
plains.alwaysUnlocked = false;

const oldRefinery = new SectorPreset("sector2", mino, 2);
oldRefinery.localizedName = "Old refinery";
oldRefinery.difficulty = 8;
oldRefinery.alwaysUnlocked = false;

const frozenMountains = new SectorPreset("sector3", mino, 3);
frozenMountains.localizedName = "Frozen mountains";
frozenMountains.difficulty = 5;
frozenMountains.alwaysUnlocked = true;

const spaceshipWorkshop = new SectorPreset("sector4", mino, 4);
spaceshipWorkshop.captureWave = 30;
spaceshipWorkshop.localizedName = "Spaceship workshop";
spaceshipWorkshop.difficulty = 5;
spaceshipWorkshop.alwaysUnlocked = false;

const spaceAirport = new SectorPreset("sector5", mino, 5);
spaceAirport.localizedName = "Space airport";
spaceAirport.difficulty = 9;
spaceAirport.alwaysUnlocked = false;
});

/*const mudCauldron = new SectorPreset("mud-cauldron", mino, 6);
mudCauldron.localizedName = "Mud cauldron";*/

const ekzo = new JavaAdapter(Planet, {}, "ekzo", Planets.sun, 0, 1.2);

  ekzo.orbitRadius = 10;
  ekzo.localizedName = "Ekzo";
  ekzo.accessible = false;
  ekzo.hasAtmosphere = true;
  ekzo.meshLoader = () => new SunMesh(ekzo, 4, 5, 0.3, 1.7, 1.2, 1, 1.5, Color.valueOf("000000"), Color.valueOf("ff9900"), Color.valueOf("323332"), Color.valueOf("939393"), Color.valueOf("837881"));