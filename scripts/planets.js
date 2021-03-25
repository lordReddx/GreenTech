const mino = new JavaAdapter(Planet, {}, "mino", Planets.serpulo, 1, 0.3);

    mino.generator = new SerpuloPlanetGenerator();
    mino.mesh = new HexMesh(mino, 5);
    mino.orbitRadius = 5;
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

const ekzo = new JavaAdapter(Planet, {}, "ekzo", Planets.sun, 0, 1.2);

  ekzo.orbitRadius = 35;
  ekzo.localizedName = "Ekzo";
  ekzo.accessible = false;
  ekzo.hasAtmosphere = true;
  ekzo.meshLoader = () => new SunMesh(ekzo, 4, 5, 0.3, 1.7, 1.2, 1, 1.5, Color.valueOf("000000"), Color.valueOf("ff9900"), Color.valueOf("323332"), Color.valueOf("939393"), Color.valueOf("837881"));