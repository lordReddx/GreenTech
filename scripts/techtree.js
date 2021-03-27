//thanks TheSlaylord for the code
function newNode(content, parentName, req, objectives) {
  
  var parent = TechTree.all.find(t => t.content.name.equals(parentName));
  var node = new TechTree.TechNode(parent, content, req);
  node.objectives.add(objectives);
  parent.children.add(node);
}

const plains = Vars.content.getByName(ContentType.sector, "sector1");

newNode(plains, frozenMountains, null, Seq.with(new Objectives.SectorComplete(SectorPresets.frozenMountains)));

const oldRefinery = Vars.content.getByName(ContentType.sector, "sector2");

newNode(oldRefinery, plains, null, Seq.with(new Objectives.SectorComplete(SectorPresets.plains)));

const frozenMountains = Vars.content.getByName(ContentType.sector, "sector3");

newNode(frozenMountains, nuclearComplex, null, Seq.with(new Objectives.SectorComplete(SectorPresets.nuclearComplex), new Objectives.Research(Blocks.plastanium-compressor)));

const spaceshipWorkshop = Vars.content.getByName(ContentType.sector, "sector4");

newNode(spaceshipWorkshop, plains, null, Seq.with(new Objectives.SectorComplete(SectorPresets.plains)));

const spaceAirport = Vars.content.getByName(ContentType.sector, "sector5");

newNode(spaceAirport, oldRefinery, null, Seq.with(new Objectives.SectorComplete(SectorPresets.spaceshipWorkshop), new Objectives.SectorComplete(SectorPresets.oldRefinery), new Objectives.Research(Blocks.htFoundry)));

newNode(htFoundry, "ht-foundry", htFoundry.researchRequirements(), Seq.with(new Objectives.SectorComplete(oldRefinery)));