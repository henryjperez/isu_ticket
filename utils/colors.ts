const primaryLight = "#F25287";
const primaryDark = "#F25287";

export interface ColorsTheme {
	colors: AppColorsTheme;
	body: BodyTheme;
	icons: IconTheme;
	texts: TextTheme;
	buttons: ButtonsTheme;
}
interface TextTheme {
	title: string;
	body: string;
}
interface IconTheme {
	dark_contrast: string;
	light_contrast: string;
}
interface BodyTheme {
	background: string;
	contrast: string;
}
interface AppColorsTheme {
	primary: string;
	secondary: string;
}
interface ButtonsTheme {
	background: string;
	text: string;
}

const dark: ColorsTheme = {
	body: {
		background: "red",
		contrast: "blue",
	},
	colors: {
		primary: "blue",
		secondary: "red",
	},
	icons: {
		dark_contrast: "black",
		light_contrast: "white",
	},
	texts: {
		body: "red",
		title: "blue",
	},
	buttons: {
		background: primaryDark,
		text: "#fff",
	},
}

const light: ColorsTheme = {
	body: {
		background: "#DAF5FF",
		contrast: "#DDDDDD",
	},
	colors: {
		primary: primaryLight,
		secondary: "#F999B7",
	},
	icons: {
		dark_contrast: "black",
		light_contrast: "white",
	},
	texts: {
		body: "#000",
		title: primaryLight,
	},
	buttons: {
		background: primaryLight,
		text: "#fff",
	},
}

export const colors = { dark, light };