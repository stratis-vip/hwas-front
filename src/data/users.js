import { DateTime } from "luxon";

export const allUsers = [
	{
		id: 20932801,
		name: "Stormy",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4246533,
		name: "Leo",
		active: true,
		isArchived: false,
		timeZone: "UTC+8",
		notes: null,
	},
	{
		id: 4163442,
		name: "Lucky",
		active: false,
		isArchived: true,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4178114,
		name: "Master",
		active: true,
		isArchived: false,
		timeZone: "UTC+2",
		notes: "",
	},
	{
		id: 4208957,
		name: "patlacoche",
		active: true,
		isArchived: false,
		timeZone: "UTC-4",
		notes: null,
	},
	{
		id: 4231757,
		name: "vulcans",
		active: false,
		isArchived: false,
		timeZone: "GMT",
		notes: "UK",
	},
	{
		id: 4236573,
		name: "Loom",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "",
	},
	{
		id: 4253738,
		name: "Kagale",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "",
	},
	{
		id: 4259896,
		name: "Smart Death",
		active: false,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	},
	{
		id: 4266277,
		name: "Dina",
		active: false,
		isArchived: false,
		timeZone: "UTC+1",
		notes: "",
	},
	{
		id: 4292333,
		name: "Ghost",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "",
	},
	{
		id: 4292840,
		name: "mangas",
		active: true,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	},
	{
		id: 4299517,
		name: "white walker",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "",
	},
	{
		id: 4330684,
		name: "Moppy",
		active: false,
		isArchived: false,
		timeZone: "EET",
		notes: "Athens",
	},
	{
		id: 4343605,
		name: "SirHow",
		active: true,
		isArchived: false,
		timeZone: "UTC-6",
		notes: "Springfield Misouri",
	},
	{
		id: 4348579,
		name: "franse",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "",
	},
	{
		id: 4361455,
		name: "Dragon Blue",
		active: false,
		isArchived: false,
		timeZone: "MST",
		notes: "",
	},
	{
		id: 4364346,
		name: "Team 563799",
		active: true,
		isArchived: false,
		timeZone: "UTC+9",
		notes: "",
	},
	{
		id: 4451506,
		name: "KinkaHeroes",
		active: false,
		isArchived: false,
		timeZone: "EET",
		notes: "Europe/Athens",
	},
	{
		id: 4491684,
		name: "Iku",
		active: false,
		isArchived: false,
		timeZone: "CET",
		notes: "Madrid",
	},
	{
		id: 4497684,
		name: "Happy педик",
		active: true,
		isArchived: false,
		timeZone: "UTC-5",
		notes: null,
	},
	{
		id: 4529620,
		name: "ManNerKill",
		active: false,
		isArchived: false,
		timeZone: "Asia/Seoul",
		notes: null,
		dates: {
			joined: null,
			left: "20240926"
		},
	},
	{
		id: 4529972,
		name: "Team ICE",
		active: true,
		isArchived: false,
		timeZone: "UTC+3",
		notes: null,
	},
	{
		id: 4559615,
		name: "effecascent oil",
		active: false,
		isArchived: false,
		timeZone: "UTC+8",
		notes: "",
	},
	{
		id: 4562073,
		name: "Taurisar",
		active: false,
		isArchived: false,
		timeZone: "EET",
		notes: "Bucharest",
	},
	{
		id: 4587443,
		name: "Momi",
		active: true,
		isArchived: false,
		timeZone: "UTC",
		notes: null,
	},
	{
		id: 4598126,
		name: "Aragorn",
		active: false,
		isArchived: false,
		timeZone: "MST",
		notes: "San Diego CA",
	},
	{
		id: 4609221,
		name: "Emperor",
		active: false,
		isArchived: false,
		timeZone: "Asia/Seoul",
		notes: "",
	},
	{
		id: 4643584,
		name: "Artikon",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4645138,
		name: "Sam1216",
		active: false,
		isArchived: false,
		timeZone: "UTC+8",
		notes: "",
	},
	{
		id: 4668830,
		name: "TrumpReturns",
		active: true,
		isArchived: false,
		timeZone: "UTC+8",
		notes: "",
	},
	{
		id: 4684732,
		name: "Team Diabolic",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4692544,
		name: "Team 4692544",
		active: false,
		isArchived: false,
		timeZone: "UTC+8",
		notes: "",
	},
	{
		id: 4703087,
		name: "B.D.",
		active: false,
		isArchived: false,
		timeZone: "UTC+9",
		notes: "",
	},
	{
		id: 4712527,
		name: "HRCAK",
		active: true,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	},
	{
		id: 4733797,
		name: "MoreFun4Me",
		active: false,
		isArchived: false,
		timeZone: "MST",
		notes: "old PraiseThelord account, managed by aragorn.",
	},
	{
		id: 4748294,
		name: "PapaFrankou",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4761947,
		name: "VegaRev",
		active: false,
		isArchived: false,
		timeZone: "CET",
		notes: "",
	},
	{
		id: 4771262,
		name: "Team 4771262",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "",
	},
	{
		id: 4806712,
		name: "Team HERO TOP",
		active: false,
		isArchived: false,
		timeZone: "UTC+9",
		notes: null,
	},
	{
		id: 4848703,
		name: "Team Mofos 2020",
		active: false,
		isArchived: false,
		timeZone: "CET",
		notes: "",
	},
	{
		id: 4861955,
		name: "Tyrael",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4868542,
		name: "stratis",
		active: true,
		isArchived: false,
		timeZone: "EET",
		notes: "Europe/Athens",
	},
	{
		id: 20923424,
		name: "Team.kaisaras",
		active: true,
		isArchived: false,
		timeZone: "EET",
		notes: "Europe/Athens",
	},
	{
		id: 4398188,
		name: "Das",
		active: true,
		isArchived: false,
		timeZone: "EET",
		notes: "Europe/Athens",
	},
	{
		id: 48387543,
		name: "Siarzaste",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4305819,
		name: "Victory",
		active: false,
		isArchived: false,
		timeZone: "EET",
		notes: "Vikings origin",
	},
	{
		id: 4536460,
		name: "ekaptan",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4798940,
		name: "simsim",
		active: false,
		isArchived: false,
		timeZone: "UTC+9",
		notes: null,
	},
	{
		id: 4699813,
		name: "FIFA78KJ",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4562810,
		name: "aki",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4365099,
		name: "june",
		active: false,
		isArchived: false,
		timeZone: "UTC-5",
		notes: null,
	},
	{
		id: 4826641,
		name: "wilson",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4326464,
		name: "Miquel CAT",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 9838807,
		name: "T_L Maxi Jazz",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 4464350,
		name: "Noobazzo",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: "Vikings origin",
	},
	{
		id: 436784,
		name: "JeanCZE",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4172989,
		name: "ahe",
		active: false,
		isArchived: false,
		timeZone: "UTC+3",
		dates: {
			joined: null,
			left: "20240706"
		},
		notes: null,
	},
	{
		id: 16652971,
		name: "л л",
		active: false,
		isArchived: false,
		timeZone: "UTC+3",
		notes: null,
	},
	{
		id: 4320180,
		name: "THE AVENGER HV",
		active: false,
		isArchived: false,
		timeZone: "UTC+1",
		notes: null,
	},
	{
		id: 4181489,
		name: "Dimuro",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 20930624,
		name: "nefeli",
		active: false,
		isArchived: false,
		timeZone: "EET",
		notes: "Europe/Athens",
	},
	{
		id: 4542929,
		name: "Astro",
		active: true,
		isArchived: false,
		timeZone: "EET",
		notes: "Europe/Athens",
	},
	{
		id: 8610312,
		name: "war baby",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4226586,
		name: "Moodyjay",
		active: false,
		isArchived: false,
		timeZone: "UTC",
		notes: null,
	},
	{
		id: 8965491,
		name: "hahaha",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 29528150,
		name: "zombieblood",
		active: false,
		isArchived: false,
		timeZone: "UTC",
		notes: null,
	},
	{
		id: 4454896,
		name: "team D",
		active: true,
		isArchived: false,
		timeZone: "Asia/Seoul",
		notes: null,
	},
	{
		id: 4765154,
		name: "ASALM",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4692391,
		name: "kofirt",
		active: false,
		isArchived: false,
		timeZone: "UTC+9",
		notes: null,
		dates: {
			joined: null,
			left: "20240930"
		},
	},
	{
		id: 4758441,
		name: "bobo2",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 23402789,
		name: "ragto",
		active: true,
		isArchived: false,
		timeZone: "UTC+9",
		notes: null,
	},
	{
		id: 4220289,
		name: "rumo",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4571690,
		name: "Kris",
		active: false,
		isArchived: false,
		timeZone: "UTC+1",
		notes: null,
	},
	{
		id: 4586024,
		name: "Designated",
		active: false,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	},
	{
		id: 4411696,
		name: "Feinripp",
		active: true,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	},
	{
		id: 15095779,
		name: "Saeftel",
		active: false,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	},
	{
		id: 4862343,
		name: "Thor",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 40613737,
		name: "Haruki",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	}, {
		id: 4750576,
		name: "NoCanDo",
		active: true,
		isArchived: false,
		timeZone: "UTC+8",
		notes: null,
	}, {
		id: 31611769,
		name: "HellBOy",
		active: false,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
	}, {
		id: 4411565,
		name: "СКАРАБЕЙ",
		active: true,
		isArchived: false,
		timeZone: "EET",
		notes: null,
	},
	{
		id: 4297793,
		name: "bart",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 449763,
		name: "Alex Ferguson",
		active: true,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 445617,
		name: "Malfurion",
		active: true,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 465779,
		name: "LenaPark",
		active: true,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4862250,
		name: "Leon",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 4463471,
		name: "Voja",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
	},
	{
		id: 8603965,
		name: "SabZiro",
		active: false,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
		dates: {
			joined: "2024O623",
			left: "20240706"
		},
	},
	{
		id: 6132436,
		name: "Birder",
		active: false,
		isArchived: false,
		timeZone: "EET",
		notes: null,
		dates: {
			joined: "2024O710",
			left: null
		},
	},
	{
		id: 4324662,
		name: "Dominik HD",
		active: false,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
		dates: {
			joined: "2024O711",
			left: "20240817"
		},
	},
	{
		id: 4775072,
		name: "xiedyxiedy",
		active: false,
		isArchived: false,
		timeZone: "UTC+8",
		notes: null,
		dates: {
			joined: "20241002",
			left: "20241201"
		},
	},
	{
		id: 4868542,
		name: "Zugami",
		active: true,
		isArchived: false,
		timeZone: "UTC-7",
		notes: null,
		dates: {
			joined: "20241202",
			left: null
		},
	},
	{
		id: 4420851,
		name: "Lucifer",
		active: false,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
		dates: {
			joined: "20241003",
			left: "20241006"
		},
	},
	{
		id: 4807406,
		name: "SaeeD",
		active: true,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
		dates: {
			joined: "20241004",
			left: null
		},
	},
	{
		id: 41718878,
		name: "Reuert",
		active: true,
		isArchived: false,
		timeZone: "UTC+2",
		notes: null,
		dates: {
			joined: "20241004",
			left: null
		},

	},
	{
		id: 4425955,
		name: "Tobi",
		active: true,
		isArchived: false,
		timeZone: "Etc/UTC",
		notes: null,
		dates: {
			joined: "20241212",
			left: null
		},
	},
	{
		id: 4552702,
		name: "Draco Auneum",
		active: true,
		isArchived: false,
		timeZone: "UTC",
		notes: null,
		dates: {
			joined: "20241214",
			left: null
		},
	},
];

const sortF = (a, b) => {
	return (
		Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"))
	);
};

export const users = allUsers.filter((user) => user.active && !user.isArchived);

const tUsers = users.map((user) => {
	return { ...user, dt: DateTime.utc().setZone(user.timeZone) };
});
const tt = tUsers.filter((user) => user.active && !user.archive).sort(sortF);
export const timeUsers = tt.filter((user) => user.timeZone !== "Etc/UTC");
export const noTimeUsers = tt.filter((user) => user.timeZone === "Etc/UTC");