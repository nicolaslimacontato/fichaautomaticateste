interface Trinket {
    description: string;
  }
  
const trinkets: Trinket[] = [
  { description: 'A mummified goblin hand' },
  { description: 'A crystal that faintly glows in moonlight' },
  { description: 'A gold coin minted in an unknown land' },
  { description: 'A diary written in a language you don\'t know' },
  { description: 'A brass ring that never tarnishes' },
  { description: 'An old chess piece made from glass' },
  { description: 'A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips' },
  { description: 'A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it' },
  { description: 'A lock of someone\'s hair' },
  { description: 'The deed for a parcel of land in a realm unknown to you' },
  { description: 'A 1-ounce block made from an unknown material' },
  { description: 'A small cloth doll skewered with needles' },
  { description: 'A tooth from an unknown beast' },
  { description: 'An enormous scale, perhaps from a dragon' },
  { description: 'A bright-green feather' },
  { description: 'An old divination card bearing your likeness' },
  { description: 'A glass orb filled with moving smoke' },
  { description: 'A 1-pound egg with a bright-red shell' },
  { description: 'A pipe that blows bubbles' },
  { description: 'A glass jar containing a bit of flesh floating in a pickling fluid' },
  { description: 'A gnome-crafted music box that plays a song you dimly remember from your childhood' },
  { description: 'A wooden statuette of a smug halfling' },
  { description: 'A brass orb etched with strange runes' },
  { description: 'A multiclolored stone disk' },
  { description: 'A silver icon of a raven' },
  { description: 'A bag containing forty-seven teeth, one of which is rotten' },
  { description: 'A shard of obsidian that always feels warm to the touch' },
  { description: 'A dragon\'s talon strung on a leather necklace' },
  { description: 'A pair of old socks' },
  { description: 'A blank book whose pages refuse to hold ink, chalk, grapohite, or any other marking' },
  { description: 'A silver badge that is a five.pointed stat' },
  { description: 'A knife that belonged to a relative' },
  { description: 'A glass vial filled with nail clippings' },
  { description: 'A rectangular metal device with two tiny metal cups on one end that throws sparks when wet' },
  { description: 'A white, sequined glove sized for a human' },
  { description: 'A vest with one hundred tiny pockets' },
  { description: 'A weightless stone' },
  { description: 'A sketch of a goblin' },
  { description: 'An empty glass vial that smells of perfume' },
  { description: 'A gemstone that looks like a lump of coal when examined by anyone but you' },
  { description: 'A scrap of cloth from an old banner' },
  { description: 'A rank insignia from a lost legionnaire' },
  { description: 'A silver bell without a clapper' },
  { description: 'A mechanical canary inside a lamp' },
  { description: 'A miniature chest carved to look like it has numerous feet on the bottom' },
  { description: 'A dead sprite inside a clear glass bottle' },
  { description: 'A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)' },
  { description: 'A glass orb filled with water, in which swims a clockwork goldfish' },
  { description: 'A silver spoon with an M engraved on the handle' },
  { description: 'A whistle made from gold-colored wood' },
  { description: 'A dead scarab beetle the size of your hand' },
  { description: 'Two toy soldiers, one missing a head' },
  { description: 'A small box filled with different-sized buttons' },
  { description: 'A candle that can\'t be lit' },
  { description: 'A miniature cage with no door' },
  { description: 'An old key' },
  { description: 'An indecipherable treasure map' },
  { description: 'A hilt from a broken sword' },
  { description: 'A rabbit’s foot' },
  { description: 'A glass eye' },
  { description: 'A cameo of a hideous person' },
  { description: 'A silver skull the size of a coin' },
  { description: 'An alabaster mask' },
  { description: 'A cone of sticky black incense that stinks' },
  { description: 'A nightcap that gives you pleasant dreams when you wear it' },
  { description: 'A single caltrop made from bone' },
  { description: 'A gold monocle frame without the lens' },
  { description: 'A 1-inch cube, each side a different color' },
  { description: 'A crystal doorknob' },
  { description: 'A packet filled with pink dust' },
  { description: 'A fragment of a beautiful song, written as musical notes on two pieces of parchment' },
  { description: 'A silver teardrop earring containing a real teardrop' },
  { description: 'An eggshell painted with scenes of misery in disturbing detail' },
  { description: 'A fan that, when unfolded, shows a sleepy cat' },
  { description: 'A set of bone pipes' },
  { description: 'A four-leaf clover pressed inside a book discussing manners and etiquette' },
  { description: 'A sheet of parchment upon which is drawn a mechanical contraption' },
  { description: 'An ornate scabbard that fits no blade you have found' },
  { description: 'An invitation to a party where a murder happened' },
  { description: 'A bronze pentacle with an etching of a rat\'s head in its center' },
  { description: 'A purple handkerchief embroidered with the name of an archmage' },
  { description: 'Half a floor plan for a temple, a castle, or another structure' },
  { description: 'A bit of folded cloth that, when unfolded, turns into a stylish cap' },
  { description: 'A receipt of deposit at a bank in a far-off city' },
  { description: 'A diary with seven missing pages' },
  { description: 'An empty silver snuffbox bearing the inscription “dreams” on its lid' },
  { description: 'An iron holy symbol devoted to an unknown god' },
  { description: 'A book about a legendary hero\'s rise and fall, with the last chapter missing' },
  { description: 'A vial of dragon blood' },
  { description: 'An ancient arrow of elven design' },
  { description: 'A needle that never bends' },
  { description: 'An ornate brooch of dwarven design' },
  { description: 'An empty wine bottle bearing a pretty label that says, “The Wizard of Wines Winery, Red Dragon Crush, 331422-W"' },
  { description: 'A mosaic tile with a multicolored, glazed surface' },
  { description: 'A petrified mouse' },
  { description: 'A black pirate flag adorned with a dragon\'s skull and crossbones' },
  { description: 'A tiny mechanical crab or spider that moves about when it\'s not being observed' },
  { description: 'A glass jar containing lard with a label that reads, “Griffon Grease”' },
  { description: 'A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body' },
  { description: 'A metal urn containing the ashes of a hero' },
];