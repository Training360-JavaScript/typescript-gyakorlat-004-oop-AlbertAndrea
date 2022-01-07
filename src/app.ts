// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1, "Andi", "female", 33, 5),
    new HumanHero(2, "Bence", "male", 22, 4),
    new HumanHero(3, "Nara", "female", 7, 6),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(1, "Andi2", 10 , 11, "Albert"),
    new TransformerHero(2, "Bence2", 10 , 11, "Verdes"),
    new TransformerHero(3, "Nara2", 10 , 11, "Albert"),
];
