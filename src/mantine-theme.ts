export const theme = {
	primaryColor: "indigo",
	components: {
		Modal: {
			defaultProps: {
				closeButtonProps: {
					"data-testid": "modal-close-button",
				},
				"data-testid": "modal",
			},
		},
	},
};
