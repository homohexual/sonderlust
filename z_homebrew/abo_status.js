module.exports = async (tp) => {
  const aboRoll = Math.floor(Math.random() * 100) + 1;
  let aboResult;
  if (aboRoll <= 5) {
    aboResult = "Alpha";
  } else if (aboRoll <= 95) {
    aboResult = "Beta";
  } else {
    aboResult = "Omega";
  }

  let firstLookResult = null;
  let firstLookRoll = null;

  if (aboResult === "Alpha" || aboResult === "Omega") {
    firstLookRoll = Math.floor(Math.random() * 100) + 1;

    if (firstLookRoll <= 10) {
      firstLookResult = "Compelling scent";
    } else if (firstLookRoll <= 25) {
      firstLookResult = "On suppressants";
    } else if (firstLookRoll <= 35) {
      firstLookResult = "Pair bonded";
    } else if (firstLookRoll <= 40) {
      firstLookResult = "In rut/heat";
    } else if (firstLookRoll <= 55) {
      firstLookResult = "Disagreeable scent";
    } else if (firstLookRoll <= 85) {
      firstLookResult = "Neutral scent";
    } else if (firstLookRoll <= 100) {
      firstLookResult = "Extraordinary sense(s)";
    } else if (firstLookRoll > 100) {
      firstLookResult = "Lying about status";
    }
  }

  let output = `\`\`\`iron-vault-mechanics
oracle name="[A/B/O Status](#)" result="${aboResult}" roll=${aboRoll}`;

  if (firstLookResult) {
    output += `
oracle name="[Omegaverse First Look](#)" result="${firstLookResult}" roll=${firstLookRoll}`;
  }

  output += `
\`\`\``;

  return output;
};
