import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";

export interface ProviderProps {
	children: React.ReactNode;
}
export const Provider = (props: ProviderProps) => {

	return (
		<ReduxProvider store={store}>
			{props.children}
		</ReduxProvider>
	);
}