import React from 'react'
import { useSelector } from "react-redux";
import { Redirect } from "expo-router";

import { useProtectedRoute } from "@hooks";
import { State } from "@interfaces";

export interface ProviderProps {
	children: React.ReactNode;
}
export const Auth = (props: ProviderProps) => {
	const isAuth = useSelector((state: State) => state.auth.isAuth);

	useProtectedRoute(isAuth);

	return (
		<React.Fragment>
			{props.children}
		</React.Fragment>
	);
}