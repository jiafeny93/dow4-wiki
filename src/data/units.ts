/**
 * Unit database — the single source of truth for the sortable stats table
 * and individual unit pages.
 *
 * Source: Gamewatcher's complete 64-unit roster (Nov 2026), cross-referenced
 * with official reveals. Cost values are from the official unit list; HP/armour/damage
 * remain null until measured in-game (Nov 30 early unlock).
 *
 * RED LINE: numeric stats beyond cost are `null` until verified from in-game data.
 * Update flow: fill values → bump `verified` → the table, roster page and unit
 * pages all read from here.
 */

export type Faction = 'Space Marines' | 'Orks' | 'Necrons' | 'Adeptus Mechanicus';

export interface UnitEntry {
  name: string;
  faction: Faction;
  role: string;
  kind?: 'hero' | 'ultimate';
  cost: number | null;
  hp: number | null;
  armor: number | null;
  damage: number | null;
  note: string;
}

export const UNITS: UnitEntry[] = [
  // ── Space Marines (16) ───────────────────────────────────────────
  { name: 'Infiltrator Squad', faction: 'Space Marines', role: 'Infantry', cost: 350, hp: null, armor: null, damage: null, note: 'Scout infantry for early vision and harassment.' },
  { name: 'Assault Intercessor Squad', faction: 'Space Marines', role: 'Melee Infantry', cost: 400, hp: null, armor: null, damage: null, note: 'Core close-combat line unit.' },
  { name: 'Intercessor Squad', faction: 'Space Marines', role: 'All-Purpose Infantry', cost: 400, hp: null, armor: null, damage: null, note: 'The backbone of any Space Marine force.' },
  { name: 'Eliminator Squad', faction: 'Space Marines', role: 'Sniper Infantry', cost: 450, hp: null, armor: null, damage: null, note: 'Sniper-style fire support; can target commanders.' },
  { name: 'Outrider Squad', faction: 'Space Marines', role: 'Melee Infantry', cost: 450, hp: null, armor: null, damage: null, note: 'Fast bike-mounted melee harassment.' },
  { name: 'Eradicator Squad', faction: 'Space Marines', role: 'Anti-Armour Infantry', cost: 450, hp: null, armor: null, damage: null, note: 'Melta-armed anti-tank specialists.' },
  { name: 'Invictor Tactical Warsuit', faction: 'Space Marines', role: 'Anti-Infantry Walker', cost: 470, hp: null, armor: null, damage: null, note: 'Dreadnought-scale walker for anti-infantry work.' },
  { name: 'Bladeguard Veteran Squad', faction: 'Space Marines', role: 'Heavy Infantry', cost: 500, hp: null, armor: null, damage: null, note: 'Heavy-armour shock assault veterans.' },
  { name: 'Terminator Squad', faction: 'Space Marines', role: 'Elite Infantry', cost: 550, hp: null, armor: null, damage: null, note: 'Iconic elite infantry in Tactical Dreadnought Armour.' },
  { name: 'Redemptor Dreadnought', faction: 'Space Marines', role: 'All-Purpose Walker', cost: 550, hp: null, armor: null, damage: null, note: 'The multi-role Dreadnought of the Primaris era.' },
  { name: 'Gladiator Reaper', faction: 'Space Marines', role: 'Heavy Vehicle', cost: 600, hp: null, armor: null, damage: null, note: 'Heavy tank with gatling firepower.' },
  { name: 'Repulsor Executioner', faction: 'Space Marines', role: 'Super-Heavy Vehicle', cost: 700, hp: null, armor: null, damage: null, note: 'Super-heavy grav-tank with Executioner cannon.' },
  { name: 'Captain', faction: 'Space Marines', role: 'Commander', kind: 'hero', cost: 350, hp: null, armor: null, damage: null, note: 'Field leader; Cyrus is the named sniper Captain in campaign.' },
  { name: 'Chief Librarian', faction: 'Space Marines', role: 'Commander', kind: 'hero', cost: 350, hp: null, armor: null, damage: null, note: 'Psychic commander; Jonah Orion in the campaign.' },
  { name: 'Company Master', faction: 'Space Marines', role: 'Commander', kind: 'hero', cost: 450, hp: null, armor: null, damage: null, note: 'Senior commander with aura buffs.' },
  { name: 'Chaplain', faction: 'Space Marines', role: 'Commander', kind: 'hero', cost: 550, hp: null, armor: null, damage: null, note: 'Zealot commander with combat buffs.' },
  // ── Orks (19) ─────────────────────────────────────────────────────
  { name: 'Gretchin', faction: 'Orks', role: 'Utility Infantry', cost: 50, hp: null, armor: null, damage: null, note: 'Cheapest unit in the game; cannon fodder and builders.' },
  { name: 'Bomb Squig Horde', faction: 'Orks', role: 'Explosive Beasts', cost: 50, hp: null, armor: null, damage: null, note: 'Living ordnance — explosive beast units.' },
  { name: 'Mekboy', faction: 'Orks', role: 'Utility Infantry', cost: 100, hp: null, armor: null, damage: null, note: 'Ork engineer for building and repair.' },
  { name: 'Slugga Boyz', faction: 'Orks', role: 'Melee Infantry', cost: 160, hp: null, armor: null, damage: null, note: 'Core melee infantry; the green tide\u2019s backbone.' },
  { name: 'Shoota Boyz', faction: 'Orks', role: 'Light Infantry', cost: 160, hp: null, armor: null, damage: null, note: 'Ranged Ork infantry for early pressure.' },
  { name: 'Beast Snagga Boyz', faction: 'Orks', role: 'Heavy Infantry', cost: 150, hp: null, armor: null, damage: null, note: 'Beast-hunting melee line, aggressive anti-monster.' },
  { name: 'Stormboyz', faction: 'Orks', role: 'Jump Infantry', cost: 210, hp: null, armor: null, damage: null, note: 'Rocket-pack jump infantry for fast disruption.' },
  { name: 'Squighog Boyz', faction: 'Orks', role: 'Melee Infantry', cost: 250, hp: null, armor: null, damage: null, note: 'Squig-mounted fast cavalry for shock harassment.' },
  { name: 'Flash Gitz', faction: 'Orks', role: 'Anti-Armour Infantry', cost: 250, hp: null, armor: null, damage: null, note: 'Wealthy Orks with massive sniper rifles.' },
  { name: 'Deffkoptas', faction: 'Orks', role: 'Flying Infantry', cost: 300, hp: null, armor: null, damage: null, note: 'Rotorcraft scouts with bombs and big shootas.' },
  { name: 'Meganobz', faction: 'Orks', role: 'Elite Infantry', cost: 350, hp: null, armor: null, damage: null, note: 'Heavily armoured elite Nobz in mega armour.' },
  { name: 'Deff Dread', faction: 'Orks', role: 'All-Purpose Walker', cost: 430, hp: null, armor: null, damage: null, note: 'Ork Dreadnought with klaws and more klaws.' },
  { name: 'Gunwagon', faction: 'Orks', role: 'All-Purpose Vehicle', cost: 500, hp: null, armor: null, damage: null, note: 'Ork battle wagon bristling with guns.' },
  { name: 'Gorkanaut', faction: 'Orks', role: 'Super-Heavy Walker', cost: 800, hp: null, armor: null, damage: null, note: 'Massive Ork super-walker; the ultimate manifestation of Mork (or possibly Gork).' },
  { name: 'Wurrboy', faction: 'Orks', role: 'Psyker Infantry', cost: 200, hp: null, armor: null, damage: null, note: 'Ork psyker with Waaagh! energy powers.' },
  { name: 'Beastboss', faction: 'Orks', role: 'Commander', kind: 'hero', cost: 375, hp: null, armor: null, damage: null, note: 'Beast Snagga commander for aggressive play.' },
  { name: 'Buzzsnap', faction: 'Orks', role: 'Psyker Infantry', cost: 400, hp: null, armor: null, damage: null, note: 'Named psyker unit with Waaagh! abilities.' },
  { name: 'Warboss', faction: 'Orks', role: 'Commander', kind: 'hero', cost: 400, hp: null, armor: null, damage: null, note: 'The classic Ork commander; Gorgutz is the fan-favourite.' },
  { name: 'Beastboss on Squigosaur', faction: 'Orks', role: 'Commander', kind: 'hero', cost: 550, hp: null, armor: null, damage: null, note: 'Mounted commander on a massive Squigosaur.' },
  // ── Necrons (15) ──────────────────────────────────────────────────
  { name: 'Canoptek Scarabs', faction: 'Necrons', role: 'Light Constructs', cost: 6, hp: null, armor: null, damage: null, note: 'Swarm of tiny constructs; the cheapest combat unit.' },
  { name: 'Necron Warriors', faction: 'Necrons', role: 'All-Purpose Infantry', cost: 12, hp: null, armor: null, damage: null, note: 'The undying backbone of any Necron army.' },
  { name: 'Immortals', faction: 'Necrons', role: 'All-Purpose Infantry', cost: 20, hp: null, armor: null, damage: null, note: 'Superior warriors with tesla or gauss weaponry.' },
  { name: 'Canoptek Spyder', faction: 'Necrons', role: 'Utility Construct', cost: 25, hp: null, armor: null, damage: null, note: 'Multi-legged construct for repair and swarm production.' },
  { name: 'Deathmarks', faction: 'Necrons', role: 'Sniper Infantry', cost: 30, hp: null, armor: null, damage: null, note: 'Dimensional snipers that mark targets for death.' },
  { name: 'Skorpekh Destroyers', faction: 'Necrons', role: 'Melee Infantry', cost: 40, hp: null, armor: null, damage: null, note: 'Hyper-aggressive melee constructs; Ahmnok\u2019s signature unit.' },
  { name: 'Triarch Stalker', faction: 'Necrons', role: 'All-Purpose Walker', cost: 45, hp: null, armor: null, damage: null, note: 'Walking war construct with targeting relay.' },
  { name: 'Lychguards', faction: 'Necrons', role: 'Elite Infantry', cost: 50, hp: null, armor: null, damage: null, note: 'Elite bodyguard infantry with warscythes.' },
  { name: 'Canoptek Wraiths', faction: 'Necrons', role: 'Heavy Constructs', cost: 55, hp: null, armor: null, damage: null, note: 'Phase-shifting heavy constructs for disruption.' },
  { name: 'Lokhust Heavy Destroyer', faction: 'Necrons', role: 'Heavy Infantry', cost: 60, hp: null, armor: null, damage: null, note: 'Heavy anti-armour hovering destroyer.' },
  { name: 'Canoptek Doomstalker', faction: 'Necrons', role: 'Anti-Armour Construct', cost: 110, hp: null, armor: null, damage: null, note: 'Tall Walker with a massive doomsday cannon.' },
  { name: 'Monolith', faction: 'Necrons', role: 'Super-Heavy Construct', cost: 120, hp: null, armor: null, damage: null, note: 'The Awakened Monolith: a floating fortress and the Necron ultimate unit.' },
  { name: "C'tan Shard of the Void Dragon", faction: 'Necrons', role: 'Flying Monster', cost: 150, hp: null, armor: null, damage: null, note: 'A shard of a star god. The most expensive and terrifying Necron unit.' },
  { name: 'Chronomancer', faction: 'Necrons', role: 'Commander', kind: 'hero', cost: 45, hp: null, armor: null, damage: null, note: 'Time-manipulating commander; Thothmek\u2019s unit type.' },
  { name: 'Skorpekh Lord', faction: 'Necrons', role: 'Commander', kind: 'hero', cost: 60, hp: null, armor: null, damage: null, note: 'Ahmnok the Skorpekh Lord\u2019s commander unit.' },
  // ── Adeptus Mechanicus (14) ───────────────────────────────────────
  { name: 'Cybernetica Datasmith', faction: 'Adeptus Mechanicus', role: 'Utility Infantry', cost: 90, hp: null, armor: null, damage: null, note: 'Tech-priest for robot control and repair.' },
  { name: 'Skitarii Vanguards', faction: 'Adeptus Mechanicus', role: 'Light Infantry', cost: 100, hp: null, armor: null, damage: null, note: 'Rad-trooper skirmish infantry.' },
  { name: 'Skitarii Rangers', faction: 'Adeptus Mechanicus', role: 'All-Purpose Infantry', cost: 100, hp: null, armor: null, damage: null, note: 'Long-ranged Mars-pattern infantry.' },
  { name: 'Kataphron Breachers', faction: 'Adeptus Mechanicus', role: 'Anti-Armour Infantry', cost: 190, hp: null, armor: null, damage: null, note: 'Heavy servitor combat units with breach gear.' },
  { name: 'Kataphron Destroyers', faction: 'Adeptus Mechanicus', role: 'Heavy Infantry', cost: 190, hp: null, armor: null, damage: null, note: 'Plasma cannon servitor destroyers.' },
  { name: 'Sicarian Ruststalkers', faction: 'Adeptus Mechanicus', role: 'Melee Infantry', cost: 240, hp: null, armor: null, damage: null, note: 'Transhuman assassins with blades and transonic weapons.' },
  { name: 'Corpuscarii Electro-priests', faction: 'Adeptus Mechanicus', role: 'All-Purpose Infantry', cost: 250, hp: null, armor: null, damage: null, note: 'Electricity-wielding priest infantry.' },
  { name: 'Ironstrider Ballistarius', faction: 'Adeptus Mechanicus', role: 'Anti-Infantry Walker', cost: 370, hp: null, armor: null, damage: null, note: 'Two-legged walker with a massive sniper cannon.' },
  { name: 'Kastelan Robot Maniple', faction: 'Adeptus Mechanicus', role: 'Elite Constructs', cost: 400, hp: null, armor: null, damage: null, note: 'Ancient war robots with devastating firepower.' },
  { name: 'Onager Dunecrawler', faction: 'Adeptus Mechanicus', role: 'Anti-Infantry Walker', cost: 550, hp: null, armor: null, damage: null, note: 'Six-legged walker with Eradication beamer.' },
  { name: 'Skorpius Disintegrator', faction: 'Adeptus Mechanicus', role: 'Heavy Vehicle', cost: 620, hp: null, armor: null, damage: null, note: 'Hover tank with disintegrator weaponry.' },
  { name: 'Knight Castellan', faction: 'Adeptus Mechanicus', role: 'Super-Heavy Walker', cost: 1000, hp: null, armor: null, damage: null, note: 'The most expensive unit in the game at 1000; the Mechanicus ultimate.' },
  { name: 'Skitarii Marshal', faction: 'Adeptus Mechanicus', role: 'Commander', kind: 'hero', cost: 370, hp: null, armor: null, damage: null, note: 'Skitarii field commander with aura buffs.' },
  { name: 'Technoarcheologist', faction: 'Adeptus Mechanicus', role: 'Commander', kind: 'hero', cost: 400, hp: null, armor: null, damage: null, note: 'Tech-priest commander with artefact abilities.' },
];

export const FACTIONS: Faction[] = ['Space Marines', 'Orks', 'Necrons', 'Adeptus Mechanicus'];
