export interface Pokemon {
  id?: number,
  number: number,
  name: string,
  body: string,
  primaryType: string,
  secondaryType: string,
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number,
 // subForm?: Pokemon,
  description: string
}
