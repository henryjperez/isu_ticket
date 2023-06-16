const primaryLight = "#F25287";
const primaryDark = "#0E2954";

export interface ColorsTheme {
	colors: AppColorsTheme;
	body: BodyTheme;
	icons: IconTheme;
	texts: TextTheme;
	buttons: ButtonsTheme;
	notifications: NotificationsTheme;
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
interface NotificationsTheme {
	success: string;
	alert: string;
	info: string;
	error: string;
}

const dark: ColorsTheme = {
	body: {
		background: "#27374D",
		contrast: "#6E85B2",
	},
	colors: {
		primary: primaryDark,
		secondary: "#1F6E8C",
	},
	icons: {
		dark_contrast: "white",
		light_contrast: "black",
	},
	texts: {
		body: "#EEEEEE",
		title: primaryDark,
	},
	buttons: {
		background: primaryDark,
		text: "#fff",
	},
	notifications: {
		success: "#00DFA2",
		alert: "#FFE569",
		info: "#9DB2BF",
		error: "#CD1818",
	}
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
	notifications: {
		success: "#00DFA2",
		alert: "#FFE569",
		info: "#9DB2BF",
		error: "#CD1818",
	}
}

export const colors = { dark, light };