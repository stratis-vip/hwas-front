import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
1, 36637, "himatsubushi", 0
2, 43002, "Bansh", 0
3, 39688, "Los conquistadores", 0
4, 39000, "Einfach so", 0
5, 36661, "Soul Reapers", 0
6, 38195, "Перун", 0
7, 38230, "1111", 0
8, 37329, "Belgique", 0
9, 38471, "Silver Wolf", 0
10, 37039, "Death or Glory", 0
11, 42541, "MUKAKIN-MUGON", 0
12, 36952, "CCCP", 0
13, 37058, "Wild Hunt", 0
14, 37690, "cherry", 0
15, 37194, "Talons of Power", 0
16, 36820, "тризуб", 0
17, 342096, "Melty", 0
18, 39786, "alone", 0
19, 38503, "Crab Club", 0
20, 37604, "Fighter", 0
21, 36745, "Pif Paf Pouf", 0
22, 326227, "BlackCoffeeCrew", 0
23, 37121, "NBC", 0
24, 74323, "Knights of Camelot", 0
25, 40533, "Die Hanse", 0
26, 342896, "Martha", 0
27, 39731, "HullaBullas", 0
28, 339340, "Wildcats", 0
29, 38213, "Дети Велеса", 0
30, 74976, "SUMAIRU", 0
`;


export const bronze = readData(program, "bronze");
