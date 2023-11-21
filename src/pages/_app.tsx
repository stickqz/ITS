import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
// import { data } from "../../temp";

export const AppContext = React.createContext<{
	users: any[];
	setUsers: Function;
}>({
	users: [],
	setUsers: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
	const [users, setUsers] = useState([]);

	React.useEffect(() => {}, [users]);

	return (
		<AppContext.Provider value={{ users, setUsers }}>
			<Component {...pageProps} />
		</AppContext.Provider>
	);
}
