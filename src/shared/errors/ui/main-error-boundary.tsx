import { Component, type ErrorInfo, type PropsWithChildren } from "react";

// Error Boundary State with types for error handling
interface MainErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
	errorInfo: ErrorInfo | null;
}

export class MainErrorBoundary extends Component<
	PropsWithChildren,
	MainErrorBoundaryState
> {
	state: MainErrorBoundaryState = {
		hasError: false,
		error: null,
		errorInfo: null,
	};

	static getDerivedStateFromError(error: Error): MainErrorBoundaryState {
		return { hasError: true, error, errorInfo: null };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Error caught by Error Boundary:", error);
		console.error("Error info:", errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Fallback UI in case of an error
			return <MainErrorBoundaryRender />;
		}

		// Default render - return children components if no error
		return this.props.children;
	}
}

// Fallback UI for when an error is caught
function MainErrorBoundaryRender() {
	const resetHref = "/"; // Reset link to navigate back to home

	return (
		<div style={{ textAlign: "center", padding: "50px" }}>
			<h2>Oops! There's an error</h2>
			<h1 style={{ fontSize: "40px" }}>❌</h1>
			<p>Please either refresh the page or return home to try again.</p>
			<button style={{ padding: "10px 20px", fontSize: "16px" }} type="button">
				<a href={resetHref} style={{ textDecoration: "none", color: "white" }}>
					Back To Home
				</a>
			</button>
		</div>
	);
}
