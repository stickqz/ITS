import BodyMap from "@/components/BodyMap";
import EntryForm from "@/components/EntryForm";
import NavBar from "@/components/Header";
import { Layout } from "antd";
import React, { useState } from "react";

const { Content } = Layout;

const New = () => {
	const [injuryData, setInjuryData] = useState([]);

	return (
		<>
			<NavBar />
			<Content
				style={{
					padding: "16px 50px 0 50px",
					display: "flex",
					width: "100%",
					gap: " 1 rem",
					flexDirection: "row",
					justifyContent: "stretch",
				}}
			>
				<div
					style={{
						flex: "5",
					}}
				>
					<EntryForm
						injuryData={injuryData}
						setInjuryData={setInjuryData}
					/>
				</div>
				<div
					style={{
						flex: "5",
					}}
				>
					<BodyMap
						injuryData={injuryData}
						setInjuryData={setInjuryData}
					/>
				</div>
			</Content>
		</>
	);
};

export default New;
