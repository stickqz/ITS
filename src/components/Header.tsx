import React from "react";
import styles from "../styles/Home.module.css";

import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const items = ["Home", "Add"];

const NavBar = () => {
	return (
		<Header
			style={{
				display: "flex",
				alignItems: "center",
				backgroundColor: "white",
				// marginBottom: "black 1px solid",
			}}
		>
			<div className={styles.logo}>
				<h1 className={styles.heading}>Injury Tracking System</h1>
			</div>
			<Menu
				theme="light"
				mode="horizontal"
				inlineIndent={16}
				inlineCollapsed={false}
				style={{
					width: "18%",
					justifyContent: "space-around",
				}}
			>
				{items.map((item, index) => {
					return (
						<Menu.Item key={item}>
							<Link href={"/" + item.toLocaleLowerCase()}>
								<span className={styles.opt}>{item}</span>
							</Link>
						</Menu.Item>
					);
				})}
			</Menu>
		</Header>
	);
};

export default NavBar;
