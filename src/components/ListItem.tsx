import React, { useContext } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import { AppContext } from "@/pages/_app";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const ListItem: React.FC = () => {
	const { users, setUsers } = useContext(AppContext);

	return (
		<List
			className={styles.list}
			itemLayout="horizontal"
			dataSource={users}
			bordered
			style={{ marginTop: 32 }}
			renderItem={(item, index) => {
				const date = new Date(item.date).toLocaleDateString("en-GB");
				const time = new Date(item.time).toLocaleTimeString("en-GB");

				return (
					<List.Item
						style={{
							backgroundColor: "#F3F3F3",
							borderRadius: "7px",
							margin: "5px 0",
							border: "1px solid #E5E5E5",
						}}
					>
						<Skeleton
							avatar
							title={false}
							loading={item.loading}
							active
						>
							<List.Item.Meta
								style={{
									alignSelf: "flex-start",
								}}
								description={
									<div style={{ marginLeft: 16 }}>
										{item.injuries.map(
											(item: string, index: number) => {
												return (
													<div key={index}>
														{index + 1}. {item}
													</div>
												);
											}
										)}
									</div>
								}
								title={
									<a>
										{index + 1}.{item.name}
									</a>
								}
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									columnGap: 16,
									alignSelf: "start",
									justifyContent: "center",
									alignItems: "start",
								}}
							>
								<div>
									<div>
										<b>Date:</b> {date}
									</div>
									<div>
										<b>Time:</b> {time}
									</div>
									<Button
										onClick={() => {
											setUsers((prevUsers: any[]) =>
												prevUsers.filter(
													(user: any) => user !== item
												)
											);
										}}
										style={{
											backgroundColor: "#f57878",
											color: "#fff",
											margin: "5px 0px",
											alignSelf: "center",
										}}
									>
										Delete
									</Button>
									{/* <Button
										onClick={() => {}}
										style={{
											backgroundColor: "#1fdf64",
											margin: "5px 5px",
											color: "#fff",
										}}
									>
										Edit
									</Button> */}
								</div>
								<Image
									src={item.link}
									alt="skeleton image"
									width={200}
									height={200}
								/>
							</div>
						</Skeleton>
					</List.Item>
				);
			}}
		/>
	);
};

export default ListItem;
