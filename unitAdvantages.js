// Birlik Avantajları ve Zayıflıkları
const advantageMatrix = {
  spear: { strongAgainst: "cavalry", weakAgainst: "infantry" },
  sword: { strongAgainst: "infantry", weakAgainst: "archers" },
  axe: { strongAgainst: "archers", weakAgainst: "cavalry" }
};

function calculateCombat(unit, targetUnit) {
  if (advantageMatrix[unit].strongAgainst === targetUnit) {
    return "advantage";
  } else if (advantageMatrix[unit].weakAgainst === targetUnit) {
    return "disadvantage";
  } else {
    return "neutral";
  }
}