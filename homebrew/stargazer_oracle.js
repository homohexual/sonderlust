module.exports = async (tp) => {
  // Define the Oracle Name, Result, and Roll
  const oracleName = "[Sector Oracle](#)"; // Include a link placeholder for the oracle name
  const resultPlaceholder = "Insert your result here"; // Placeholder for the oracle result
  const rollPlaceholder = "10"; // Placeholder for the roll value

  // Create the Iron Vault mechanics block
  let output = `\`\`\`iron-vault-mechanics
oracle name="${oracleName}" result="${resultPlaceholder}" roll=${rollPlaceholder}
\`\`\``;

  return output;
};
