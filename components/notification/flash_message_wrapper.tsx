import React from 'react';

import { FlashMessage } from "./flash_message";
import { useAppSelector, useAppDispatch } from "@hooks";
import { resetNotification } from "@actions";

export const FlashMessageWrapper = () => {
	const flashMessage = useAppSelector(state => state.notifications.flashMessages);
	const dispatch = useAppDispatch();

	function handleAnimationEnd() {
		dispatch(resetNotification());
	}

	if (flashMessage.active) {
		return (
			<React.Fragment>
				<FlashMessage {...flashMessage} onAnimationEnd={handleAnimationEnd} />
			</React.Fragment>
		);
	}

	return null;
}
