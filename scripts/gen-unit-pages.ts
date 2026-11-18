/**
 * gen-unit-pages — generate unit detail pages from src/data/units.ts.
 *
 * The 11/30 pipeline: fill verified stats into units.ts → run this script →
 * unit pages regenerate with live data and auto-publish (draft flips false
 * only when ALL numeric stats are present — a page with any `—` stays draft).
 *
 * Idempotent: an existing page is NEVER overwritten (edit by hand if needed);
 * delete a file to regenerate it. Stats table renders from the same data
 * source as the sortable roster table — one source of truth.
 *
 * Usage: tsx scripts/gen-unit-pages.ts [--dry-run]
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { UNITS, type UnitEntry } from '../src/data/units';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'src/content/wiki/en/units');
const DRY = process.argv.includes('--dry-run');

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const FACTION_SLUG: Record<string, string> = {
  'Space Marines': 'space-marines',
  Orks: 'orks',
  Necrons: 'necrons',
  'Adeptus Mechanicus': 'adeptus-mechanicus',
};

const v = (x: number | null) => (x === null ? '—' : String(x));

function page(u: UnitEntry, draft: boolean): string {
  const s = slugify(u.name);
  const kind = u.kind === 'ultimate' ? ' Ultimate Unit' : u.kind === 'hero' ? ' Hero' : '';
  return `---
title: "Dawn of War IV ${u.name}: Stats, Cost & Guide"
description: "${u.name} in Dawn of War IV — verified cost, HP, armour and damage stats with role analysis and counters, part of the ${u.faction} roster."
category: "units"
date: 2026-11-30
lastModified: 2026-11-30
tags: ["units", "${FACTION_SLUG[u.faction] ?? 'factions'}"]
draft: ${draft}
summary: "${u.name} is a ${u.role.toLowerCase()}${kind ? ' — the ' + u.faction + "'" + 's' : ' in the ' + u.faction + ' roster'}. Verified stats: cost ${v(u.cost)}, ${v(u.hp)} HP, ${v(u.armor)} armour, ${v(u.damage)} damage — measured in-game and updated per balance patch."
---

import UnitTable from '~/components/wiki/UnitTable.astro';

## What is ${u.name} in Dawn of War IV?

${u.name} is a **${u.role.toLowerCase()}** in the [${u.faction}](/factions/${FACTION_SLUG[u.faction]}/) roster${kind ? ' — one of its headline entries' : ''}. ${u.note}

## ${u.name} stats

| Stat | Value |
|---|---|
| Faction | ${u.faction} |
| Role | ${u.role} |
| Cost | ${v(u.cost)} |
| HP | ${v(u.hp)} |
| Armour | ${v(u.armor)} |
| Damage | ${v(u.damage)} |

> Stats show **—** until measured in-game. Every value on this wiki is verified before publication and updated per balance patch ([roadmap](/guides/roadmap/)).

## How does ${u.name} play?

Role analysis lands with verified launch data${kind ? ' — ultimate units are match-swinging by design (see [ultimate units compared](/guides/ultimate-units/))' : ''}. Counter notes will follow the first weeks of live play.

## Where does ${u.name} fit in the meta?

See the full [sortable unit table](/guides/unit-roster/) for faction-wide context and the [faction tier list](/guides/faction-tier-list/) for launch-week rankings. ${u.faction} strategy basics: [${u.faction} faction guide](/factions/${FACTION_SLUG[u.faction]}/).
`;
}

let created = 0;
let skipped = 0;
fs.mkdirSync(OUT_DIR, { recursive: true });
for (const u of UNITS) {
  const file = path.join(OUT_DIR, `${slugify(u.name)}.mdx`);
  if (fs.existsSync(file)) {
    skipped++;
    continue;
  }
  // Publish only when the full stat block is verified.
  const complete = [u.cost, u.hp, u.armor, u.damage].every((x) => x !== null);
  const body = page(u, !complete);
  if (!DRY) fs.writeFileSync(file, body);
  console.log(`${DRY ? '[dry] ' : ''}${complete ? '🟢 publish' : '📦 draft '}  ${slugify(u.name)}`);
  created++;
}
console.log(`\nDone: ${created} generated, ${skipped} existing skipped.`);
console.log('11/30 flow: fill units.ts stats → rerun (drafts stay until complete) → delete drafts to regenerate as published.');
