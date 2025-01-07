// Como a forja funciona:
// Adicionamos três itens na bigorna, cada item possui sua qualidade e influenciam na hora da forja.
// Funcionará assim: Taxa de sucesso = (Qualificadores + Facilitadores) - (Impedimentos)
//
// Qualificadores = Habilidade do personagem + (se)Habilidade arcana do personagem
// Facilitadores = Qualidade da forja + Qualidade do equipamento + Mentor + Dia de sorte
// Impedimentos = Dificuldade do material + Dificuldade do item + (se)Dificuldade arcana
//
// Se a taxa de sucessor for < RNG (Número de), então significa que foi uma
// forja bem sucedida.

const successRate = (forgeEnabler + forgeBooster) - forgeDisabler
const forgeEnabler = characterForgeSkill + characterMagicSkill
const forgeBooster = forgeQuality + forgeGearQuality + meister + luckyDay
const forgeDisabler = materialDifficulty + equipmentDifficulty + magicDifficulty

    
