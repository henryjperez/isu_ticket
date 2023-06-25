import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";

export const useProtectedRoute = (isAuth: boolean) => {
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		const inAuthGroup = segments[0] === "(auth)";

		// If the user is not signed in and the initial segment is not anything in the auth group.
		if (!isAuth && !inAuthGroup) {

			// Redirect to the sign-in page.
			router.replace("/init");
		} else if (isAuth && inAuthGroup) {

			// Redirect away from the sign-in page.
			router.replace("/");
		}

	}, [isAuth, segments]);

};
