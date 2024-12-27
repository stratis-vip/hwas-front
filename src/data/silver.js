import { readData } from "../lib";
const program = `
Position, Guild ID, "Guild Title", Points
1, 183303, "_Aliance_", 0
2, 37317, "tigerclaws", 0
3, 187932, "HERO 45", 0
4, 38806, "Mattari", 0
5, 37509, "Sax Clan", 0
6, 37149, "Knight of Knights", 0
7, 46347, "Clan  Destino", 0
8, 310231, "ВОИНЫ ВЕЛЕСА", 0
9, 37606, "_athena_", 0
10, 37032, "First Wave", 0
`

export const silver = readData(program, "silver");