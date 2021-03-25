var arry = [
        [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.stone],
                [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.stone, Blocks.stone],
                [Blocks.water, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.stone, Blocks.stone],
                [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
                [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
                [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
                [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.snow, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.snow, Blocks.ice],
                [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.hotrock, Blocks.grass, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
                [Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.dirt, Blocks.snow, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
                [Blocks.grass, Blocks.grass, Blocks.grass, Blocks.dirt, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
                [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
                [Blocks.grass, Blocks.grass, Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
                [Blocks.grass, Blocks.grass, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    ];
    const minoGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arry;
            this.super$getBlock(p);
        }
    });
    minoGenerator.arr = arry;

const mino = new JavaAdapter(Planet, {}, "mino", Planets.serpulo, 1, 0.3);

    mino.generator = minoGenerator;
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