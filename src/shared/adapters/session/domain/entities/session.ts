export type ISession =
	| {
			type: "unauthenticated";
	  }
	| {
			type: "authenticated";
			token: string;
	  };
