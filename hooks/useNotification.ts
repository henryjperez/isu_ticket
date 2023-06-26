import { useDispatch } from "react-redux";

import { showNotification } from "@actions";
import { FlashMessageState } from "@interfaces";

export const useNotification = () => {
	const dispatch = useDispatch();
	return (notification: FlashMessageState) => dispatch(showNotification(notification));
};