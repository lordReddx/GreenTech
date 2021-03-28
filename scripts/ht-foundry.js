const multiLib = require("multi-lib");

const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "ht-foundry", [
    {
      input: {
        items: ["titanium/3", "plastanium/4","thorium/3", "pyratite/2"],
        power: 7
      },
      output: {
        items: ["gt-plastanium-composite/1"]
      },
      craftTime: 150
    },
    {
          input: {
            items: ["lead/3", "plastanium/6"],
            liquids: ["water/5" ],
            power: 2.1
          },
          output: {
            items: ["gt-pc-plate/2"]
          },
          craftTime: 120
        },
], {
  },
  function Extra() {
    this.draw=function(){
      let region1 = Core.atlas.find("gt-ht-foundry-top")
      Draw.rect(region1, this.x, this.y);
      let region2 = Core.atlas.find("gt-ht-foundry")
      Draw.rect(region2, this.x, this.y)
};
});