import adv11small from "./Adventure11small.jpg";
import adv11 from "./Adventure11.jpg";
import adv10small from "./Adventure10small.jpg";
import adv10 from "./Adventure10.jpg";
import adv12small from "./Adventure12small.jpg";
import adv12 from "./Adventure12.jpg";
import adv09small from "./adv09small.jpg";
import adv09 from "./adv09.jpg";

export const adventures = [
	{
		id: 900,

		name: "Adventure 09 - Valley of the Elements",
		images: {
			thumb: adv09small,
			solution: adv09,
		},
		paths: [
			{
				colour: "blue",
				numbers: "02-06-10-15-20-14-24-29-25-36-39-42-44-Boss(x2)",
			},
			{
				colour: "orange",
				numbers: "03-08-12-11-07-16-21-26-30-31-32-35-37-40-Boss",
			},
			{
				colour: "green",
				numbers: "03-04-13-19-18-23-17-22-38-41-43-46-Boss(x3)",
			},
		],
	},
	{
		id: 1090,
		name: "Adventure 10 - Valley of the Elements",
		images: {
			thumb: adv10small,
			solution: adv10,
		},
		paths: [
			{
				colour: "blue",
				numbers: "03-02-06-11-17-25-30-35-29-34-33-38-43-44-Boss",
			},
			{
				colour: "orange",
				numbers: "04-08-13-18-22-26-31-36-40-46-45-39-33-28-20",
			},
			{
				colour: "green",
				numbers: "05-09-14-19-23-27-32-37-42-48-51-50-49-47-41",
			},
		],
	},
	{
		id: 11,
		name: "Adventure 11 - Ghirwil City Depths",
		images: {
			thumb: adv11small,
			solution: adv11,
		},
		paths: [
			{
				colour: "blue",
				numbers: "02-03-06-07-12-11-15-21-27-36-39-40-41-Boss(x2)",
			},
			{
				colour: "orange",
				numbers: "02-04-06-08-12-17-16-22-28-29-30-31-25-19-18",
			},
			{
				colour: "green",
				numbers: "02-05-06-09-13-14-20-26-32-38-35-33-34-Boss(x2)",
			},
		],
	},
	{
		id: 12,
		name: "Adventure 12 - Fall of the Celestial City",
		description: "null",

		images: {
			thumb: adv12small,
			solution: adv12,
		},
		paths: [
			{
				colour: "blue",
				numbers: "05-01-09-03-06-10-22-31-36-35-29-30-21-13",
			},
			{
				colour: "alternate blue",
				numbers: "05-01-09-03-06-10-22-31-36-35-29-34-29-30-21",
			},
			{
				colour: "red",
				numbers: "08-11-17-24-14-12-15-28-20-19-18-27",
			},
			{
				colour: "orange",
				numbers:
					"02-04-07-16-23-32-33-25-34-25-26-18-27",
			},
			{
				colour: "alternate orange",
				numbers:
					"02-04-07-16-23-32-33-25-26-18-27",
			},
		],
		notes: [
			{
				id: 1,
				description: "Orange path, is better suited to mage teams.",
			},
			{
				id: 2, description: " Blue path can go to 34 (avoiding 13)"
			}
		],
	},
	{
		id: 9,

		name: "Adventure 13 on 09 map - Maelstrom of Chaos",
		images: {
			thumb: adv09small,
			solution: adv09,
		},
		notes: [{
			id: 1,
			description: "blue path is for mage teams."
		}],
		paths: [
			{
				colour: "blue",
				numbers: "02-06-12-15-20-14-24-29-25-35-38-41-43-44",
			},
			{
				colour: "orange",
				numbers: "03-08-09-13-07-16-21-26-30-31-42-34-36-39-44",
			},
			{
				colour: "green",
				numbers: "03-04-10-19-18-23-17-22-37-40-32-45-44",
			},
		],

	},
	{
		id: 10,
		name: "Adventure 13 on 10 map - Maelstrom of Chaos",
		images: {
			thumb: adv10small,
			solution: adv10,
		},
		paths: [
			{
				colour: "blue",
				numbers: "03-02-06-11-17-25-30-35-29-34-33-38-43-44-52",
			},
			{
				colour: "orange",
				numbers: "04-08-13-18-22-26-31-36-40-46-45-39-33-28-20",
			},
			{
				colour: "green",
				numbers: "05-09-14-19-23-27-32-37-42-48-51-50-49-47-41",
			},
		],
	},
	{
		id: 13,
		name: "Adventure 13 on 11 map - Maelstrom of Chaos",
		description: "null",

		images: {
			thumb: adv11small,
			solution: adv11,
		},
		paths: [
			{
				colour: "blue",
				numbers: "02-03-06-07-12-11-15-21-27-36-39-40-41-37",
			},
			{
				colour: "orange",
				numbers: "02-04-06-08-12-17-16-22-28-29-30-31-25-19-18",
			},
			{
				colour: "green",
				numbers:
					"02-05-06-09-13-14-20-26-32-38-35-33-34-37 ",
			},
		],
	},
	{
		id: 14,
		name: "Adventure 13 on 12 map - Maelstrom of Chaos",
		description: "null",

		images: {
			thumb: adv12small,
			solution: adv12,
		},
		paths: [
			{
				colour: "blue",
				numbers: "08-01-09-03-05-10-22-31-36-35-29-30-21-13",
			},
			{
				colour: "red",
				numbers: "07-11-17-24-14-12-15-28-20-19-18-27",
			},
			{
				colour: "orange",
				numbers:
					"07-02-04-06-16-23-33-34-25-32-25-26-18-27",
			},
		],
		notes: [
			{
				id: 1,
				description: "Only map of adventure 12 is recommended!",
			},
			{
				id: 2,
				description: "Yellow path, is better suited to mage teams.",
			},
			{
				id: 3,
				description:
					"#24 is red path's responsibility but if it create problem yellow path can help",
			},
			{
				id: 4,
				description: "Blue path starts with #8, but red path can clear it too (it can start with 09-01-08-01-07…) .",
			},
		],
	}

];
