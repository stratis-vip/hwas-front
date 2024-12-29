import { readData } from "../lib";

const program = `
Position, Guild ID, "Guild Title", Points
1, 36637, "himatsubushi", 5043
12, 36661, "Soul Reapers", 2618
15, 36745, "Pif Paf Pouf", 1593
14, 36820, "тризуб", 1694
4, 36952, "CCCP", 3988
10, 37039, "Death or Glory", 2969
5, 37058, "Wild Hunt", 3661
23, 37121, "NBC", 418
16, 37194, "Talons of Power", 1580
13, 37329, "Belgique", 2200
19, 37604, "Fighter", 1513
25, 37690, "cherry", 0
2, 38195, "Перун", 4700
29, 38213, "Дети Велеса", 0
9, 38230, "1111", 3134
11, 38471, "Silver Wolf", 2892
18, 38503, "Crab Club", 1516
3, 39000, "Einfach so", 4590
8, 39688, "Los conquistadores", 3160
27, 39731, "HullaBullas", 0
6, 39786, "alone", 3404
24, 40533, "Die Hanse", 300
17, 42541, "MUKAKIN-MUGON", 1518
7, 43002, "Bansh", 3169
21, 74323, "Knights of Camelot", 1360
30, 74976, "SUMAIRU", 0
20, 326227, "BlackCoffeeCrew", 1447
28, 339340, "Wildcats", 0
22, 342096, "Melty", 500
26, 342896, "Martha", 0
`;


export const bronze = readData(program, "bronze");
