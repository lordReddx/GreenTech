const effects = require("effects");

const solarEclipse = extendContent(ParticleWeather, "se", {});
  solarEclipse.duration = 18000;
  solarEclipse.opacityMultiplier = 0.9;
  solarEclipse.attr.add(new light, -0.6);
  solarEclipse.status = Fx.sunSlowed;
  solarEclipse.statusDuration = 240;
  solarEclipse.color = "#757575";

const solarFlareUp = extendContent(Weather, "sfu", {});
  
  solarFlareUp.duration = 18000;
  solarFlareUp.opacityMultiplier = 1.2;
  solarFlareUp.attr.add(new light, 1.7);
  solarFlareUp.status = Fx.sunSpeeded;
  solarFlareUp.statusDuration = 240;
  solarFlareUp.color = "#FFF5BF";