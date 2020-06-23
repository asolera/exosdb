const keywords = [
  {
    name: 'Share Health',
    class: 'orange',
    tooltip: '30% of damage dealt to target is dealt to self instead.',
  },
  {
    name: 'Gain Mana',
    class: 'blue',
    tooltip: 'Grants the specified amount of mana.',
  },
  {
    name: 'Over Time Effect',
    class: 'light-yellow',
    tooltip: 'Effect is continuously active as long as the caster is alive and removed upon the caster\' death.',
  },
  {
    name: 'Revive',
    class: 'orange',
    tooltip: 'Dead target is revived with a certain percentage of health (the target is revived by consuming 50% of the caster\'s current health.',
  },
  {
    name: 'Reflect Damage',
    class: 'orange',
    tooltip: 'Reflects a portion of damage taken to the enemy who dealt the damage.',
  },
  {
    name: 'Penetration',
    class: 'orange',
    tooltip: 'Deals damage that ignores target\'s defense by a certain value.',
  },
  {
    name: 'Drain Mana',
    class: 'orange',
    tooltip: 'Removes target\'s mana and grants mana for self.',
  },
  {
    name: 'Drain',
    class: 'orange',
    tooltip: 'Heals self by 30% of damage dealt to enemy.',
  },
  {
    name: 'Barrier',
    class: 'orange',
    tooltip: 'Grants a barrier that is deducted before health for specified period of time.',
  },
  {
    name: 'Reset',
    class: 'orange',
    tooltip: 'Grants one more chance to attack if the condition is satisfied.',
  },
  {
    name: 'Instant Death',
    class: 'orange',
    tooltip: 'The afflicted target dies once the effect\'s duration ends.',
  },
  {
    name: 'Stealth',
    class: 'orange',
    tooltip: 'Target cannot be targeted during the duration and can only be targeted if the target is alone.',
  },
  {
    name: 'Chaos Element',
    class: 'orange',
    tooltip: 'Those who have the Chaos Element can break the Guardian Stones of all elements.',
  },
  {
    name: 'Invincibility',
    class: 'orange',
    tooltip: 'Grants immunity to all attacks while the effect lasts.',
  },
  {
    name: 'Physical Immunity',
    class: 'orange',
    tooltip: 'Grants immunity to physical attacks while the effect lasts.',
  },
  {
    name: 'Magical Immunity',
    class: 'orange',
    tooltip: 'Grants immunity to magical attacks while the effect lasts.',
  },
  {
    name: 'Status Effect Immunity',
    class: 'orange',
    tooltip: 'Grants immunity to status effects while the effect lasts.',
  },
  {
    name: 'Remove',
    class: 'orange',
    tooltip: 'Removes status effects from target.',
  },
  {
    name: 'Mana Burn',
    class: 'orange',
    tooltip: 'Removes the specified number of mana stacks from target.',
  },
  {
    name: 'Cleanse',
    class: 'orange',
    tooltip: 'Removes debuffs and damage over time effects from target.',
  },
  {
    name: 'Freeze',
    class: 'orange',
    tooltip: 'All actions are disabled while the effect lasts.',
  },
  {
    name: 'Stun',
    class: 'orange',
    tooltip: 'All actions are disabled while the effect lasts.',
  },
  {
    name: 'Confuse',
    class: 'orange',
    tooltip: 'All actions are disabled while the effect lasts.',
  },
  {
    name: 'Paralyze',
    class: 'orange',
    tooltip: 'All actions are disabled while the effect lasts.',
  },
  {
    name: 'Shock',
    class: 'orange',
    tooltip: 'All actions are disabled while the effect lasts.',
  },
  {
    name: 'Petrify',
    class: 'orange',
    tooltip: 'All actions are disabled while the effect lasts.',
  },
  {
    name: 'Silence',
    class: 'orange',
    tooltip: 'Skills are disabled while the effect lasts.',
  },
  {
    name: 'Blind',
    class: 'orange',
    tooltip: 'All attacks miss while the effect lasts.',
  },
  {
    name: 'Sleep',
    class: 'orange',
    tooltip: 'All actions are disabled while de effect lasts (effect ends when attacked).',
  },
  {
    name: 'Provoke',
    class: 'orange',
    tooltip: 'Target only attacks the caster while the effect lasts.',
  },
  {
    name: 'Instant Heal',
    class: 'orange',
    tooltip: 'Instantly heals the target\'s health.',
  },
  {
    name: 'Heal Over Time',
    class: 'orange',
    tooltip: 'Heals the target\'s health over the specified number of turns.',
  },
  {
    name: 'Poison',
    class: 'orange',
    tooltip: 'Characters take damage during turns while the effect lasts.',
  },
  {
    name: 'Bleed',
    class: 'orange',
    tooltip: 'Characters take damage during turns while the effect lasts.',
  },
  {
    name: 'Burn',
    class: 'orange',
    tooltip: 'Characters take damage during turns while the effect lasts.',
  },
  {
    name: 'Frostbite',
    class: 'orange',
    tooltip: 'Characters take damage during turns while the effect lasts.',
  },
  {
    name: 'Corrode',
    class: 'orange',
    tooltip: 'Characters take damage during turns while the effect lasts.',
  },
  {
    name: 'Curse',
    class: 'orange',
    tooltip: 'Characters take damage during turns while the effect lasts.',
  },
];

module.exports = keywords;