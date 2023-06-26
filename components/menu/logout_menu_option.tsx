import { useDispatch } from "react-redux";

import { MenuOption } from "./menu_option";
import { logout } from "@store/actions";

export const LogoutMenuOption = () => {
	const dispatch = useDispatch();

	return (
		<MenuOption onPress={() => dispatch(logout())}>
			Logout
		</MenuOption>
	)
}
