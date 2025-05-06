const { calculateBattle } = require('../../../battleMechanics');

// Test 1: Dengeli bir savaş
const attacker1 = { spear: 50, knight: 10 };
const defender1 = { wall: 1, archer: 30, spear: 20 };
console.log("Test 1 Sonucu:", calculateBattle(attacker1, defender1));

// Test 2: Güçlü saldırgan
const attacker2 = { heavyCavalry: 15, catapult: 5 };
const defender2 = { tower: 2, spear: 30 };
console.log("Test 2 Sonucu:", calculateBattle(attacker2, defender2));

// Test 3: Güçlü savunmacı
const attacker3 = { sword: 50, axe: 20 };
const defender3 = { wall: 3, tower: 5 };
console.log("Test 3 Sonucu:", calculateBattle(attacker3, defender3));