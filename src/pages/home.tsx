import React from "react";

import { Layout } from "antd";
import ListItem from "@/components/ListItem";
import NavBar from "@/components/Header";

const { Content, Footer } = Layout;

const App: React.FC = () => {
	return (
		<Layout>
			<NavBar />
			<Content style={{ padding: "0 50px", backgroundColor: "white" }}>
				<ListItem />
			</Content>
		</Layout>
	);
};

export default App;
