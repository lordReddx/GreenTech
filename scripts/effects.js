const sunSlowed = extendContent(StatusEffect, "sun-slowed", {});
  sunSlowed.speedMultiplier = 0.8;

const sunSpeeded = extendContent(StatusEffect, "sun-speeded", {});
  sunSpeeded.speedMultiplier = 1.1;
  
const overShocked = extendContent(StatusEffect, "overshocked", {});
  overShocked.unmoving = true;
  overShocked.disarmed = true;
  overShocked.damage = 0.1;
  overShocked.damageMultiplier = 0.7;
  overShocked.healthMultiplier = 0.9;