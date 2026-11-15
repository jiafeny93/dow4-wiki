/**
 * Unit database — the single source of truth for the sortable stats table
 * and (post-launch) individual unit pages.
 *
 * RED LINE: numeric stats (cost/hp/armor/damage) are `null` until verified
 * from in-game data or official patch notes on Nov 30 (Commander Edition
 * early unlock). Never guess numbers — the table renders "—" for null.
 *
 * Update flow after unlock: fill values → bump `verified` → the table,
 * roster page and unit pages all read from here.
 */

export type Faction = 'Space Marines' | 'Orks' | 'Necrons' | 'Adeptus Mechanicus';

export interface UnitEntry {
  /** In-game unit name (exact spelling). */
  name: string;
  faction: Faction;
  /** Battlefield role shown in the table (melee infantry, cavalry, …). */
  role: string;
  /** Hero / ultimate flag — drives row highlighting. */
  kind?: 'hero' | 'ultimate';
  /** Verified numeric stats — null until measured in-game (Nov 30+). */
  cost: number | null;
  hp: number | null;
  armor: number | null;
  damage: number | null;
  /** One-line note from official reveals. */
  note: string;
}

export const UNITS: UnitEntry[] = [
  // ── Space Marines ────────────────────────────────────────────────
  { name: 'Assault Intercessors', faction: 'Space Marines', role: 'Melee infantry', cost: null, hp: null, armor: null, damage: null, note: 'Core close-combat line unit.' },
  { name: 'Bladeguard Veterans', faction: 'Space Marines', role: 'Elite melee', cost: null, hp: null, armor: null, damage: null, note: 'Heavy-armour shock assault.' },
  { name: 'Captains', faction: 'Space Marines', role: 'Hero / commander', kind: 'hero', cost: null, hp: null, armor: null, damage: null, note: 'Field leader with abilities; Cyrus is the named sniper Captain.' },
  { name: 'Eliminators', faction: 'Space Marines', role: 'Ranged marksmen', cost: null, hp: null, armor: null, damage: null, note: 'Sniper-style fire support.' },
  { name: 'Imperial Knights', faction: 'Space Marines', role: 'Ultimate unit', kind: 'ultimate', cost: null, hp: null, armor: null, damage: null, note: 'Faction-defining super-heavy walker.' },
  // ── Orks ──────────────────────────────────────────────────────────
  { name: 'Boyz', faction: 'Orks', role: 'Melee infantry', cost: null, hp: null, armor: null, damage: null, note: 'The green tide\u2019s backbone.' },
  { name: 'Beast Snagga Boyz', faction: 'Orks', role: 'Beast-hunting melee', cost: null, hp: null, armor: null, damage: null, note: 'Aggressive anti-monster line.' },
  { name: 'Bomb Squigs', faction: 'Orks', role: 'Living ordnance', cost: null, hp: null, armor: null, damage: null, note: 'Explosive beast units.' },
  { name: 'Squig-Hog Riders', faction: 'Orks', role: 'Fast cavalry', cost: null, hp: null, armor: null, damage: null, note: 'Mobile shock harassment.' },
  { name: 'Stompa', faction: 'Orks', role: 'Ultimate unit', kind: 'ultimate', cost: null, hp: null, armor: null, damage: null, note: 'Rolling green fortress of guns and teeth.' },
  // ── Necrons ───────────────────────────────────────────────────────
  { name: 'Awakened Monolith', faction: 'Necrons', role: 'Ultimate unit', kind: 'ultimate', cost: null, hp: null, armor: null, damage: null, note: 'Ancient citadel that wakes up; rest of the roster awaits reveal.' },
];

export const FACTIONS: Faction[] = ['Space Marines', 'Orks', 'Necrons', 'Adeptus Mechanicus'];
