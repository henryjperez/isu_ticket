export interface ColorsTheme {
	colors: AppColorsTheme;
	body: BodyTheme;
	icons: IconTheme;
	texts: TextTheme;
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
}

const light: ColorsTheme = {
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
}

export const colors = { dark, light };