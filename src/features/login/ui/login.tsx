import {
	Alert,
	Box,
	Button,
	Card,
	PasswordInput,
	Space,
	Text,
	TextInput,
} from "@mantine/core";
import { useLogin } from "../app";

export function MockLogin() {
	const { form, isLoading, onSubmit } = useLogin();

	const errors = form.formState.errors;
	const rootErrorMessage = errors.root?.message;

	return (
		<Card mx="auto" maw="512" withBorder data-testid="login">
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Box ta="center" mb="md">
					<Text size="xl" fw="bold">
						Login
					</Text>
					<Text size="sm">Lorem ipsum dolor sit amet!</Text>
				</Box>
				<TextInput
					size="sm"
					label="Username"
					placeholder="Username"
					{...form.register("username")}
					error={errors.username?.message}
				/>
				<Space h="md" />
				<PasswordInput
					size="sm"
					label="Password"
					placeholder="Password"
					{...form.register("password")}
					error={errors.password?.message}
				/>
				{rootErrorMessage && (
					<>
						<Space h="xl" />
						<Alert color="red" title={rootErrorMessage} />
					</>
				)}
				<Space h="xl" />
				<Button fullWidth loading={isLoading} type="submit">
					Login
				</Button>
			</form>
		</Card>
	);
}
