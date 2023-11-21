"use client";
import React, { useContext } from "react";
import { Button, DatePicker, Form, Input, TimePicker } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { AppContext } from "@/pages/_app";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.css";

type SizeType = Parameters<typeof Form>[0]["size"];

interface Props {
	injuryData: any[];
	setInjuryData: Function;
}

const EntryForm = ({ injuryData, setInjuryData }: Props) => {
	const [name, setName] = React.useState("");
	const [date, setDate] = React.useState<any>();
	const [time, setTime] = React.useState<any>();
	const scrollRef = React.useRef<any>();
	const router = useRouter();

	const { users, setUsers } = useContext(AppContext);

	const [componentSize, setComponentSize] = React.useState<
		SizeType | "default"
	>("default");

	const onFormLayoutChange = ({ size }: { size: SizeType }) => {
		setComponentSize(size);
	};

	const onSubmit = async () => {
		if (name.length <= 0) return;
		if (injuryData.length <= 0) return;
		if (isNaN(new Date(time).valueOf())) return;
		if (injuryData.length <= 0) return;

		const injuries = [];

		for (let i = 0; i < injuryData.length; i++) {
			const injuryItem = document.getElementById(
				`injury-${i}`
			) as HTMLInputElement;
			const injury = injuryItem?.value;
			injuries.push(injury);
		}

		const canvas1 = document.getElementById("canvas") as HTMLCanvasElement;
		const canvas2 = document.getElementById(
			"injuryCanvas"
		) as HTMLCanvasElement;

		const mergedCanvas = document.createElement("canvas");
		mergedCanvas.width = canvas1?.width;
		mergedCanvas.height = canvas1?.height;
		const mergedCtx = mergedCanvas.getContext("2d");
		mergedCtx?.drawImage(canvas1, 0, 0);
		mergedCtx?.drawImage(canvas2, 0, 0);

		const link = mergedCanvas?.toDataURL("image/png");

		setUsers([...users, { name, injuries, link, date, time }]);

		// const res = await fetch("/api", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		name,
		// 		injuries,
		// 		link,
		// 		date,
		// 		time,
		// 	}),
		// });
		// if (res.status !== 200) return;

		router.push("/home");
	};

	const removeItem = (deleteIdx: number) => {
		const newData = injuryData.filter((_, index) => {
			return index != deleteIdx;
		});
		setInjuryData(newData);
	};

	React.useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [injuryData]);

	return (
		<Form
			wrapperCol={{ span: 14 }}
			layout="horizontal"
			initialValues={{ size: componentSize }}
			onValuesChange={onFormLayoutChange}
			size={componentSize as SizeType}
			style={{ flex: 1 }}
		>
			<Form.Item label="Name">
				<Input value={name} onChange={(e) => setName(e.target.value)} />
			</Form.Item>
			<Form.Item label="Date">
				<DatePicker onChange={(e) => setDate(e?.valueOf())} />
			</Form.Item>
			<Form.Item label="Time">
				<TimePicker onChange={(e) => setTime(e?.valueOf())} />
			</Form.Item>
			<Form.Item label="Injuries" />
			<div
				style={{
					overflow: "auto",
					maxHeight: "40vh",
				}}
			>
				{injuryData.map((_, index) => {
					return (
						<Form.Item key={index} label={index + 1}>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "35vw",
									justifyContent: "space-between",
								}}
							>
								<Input
									id={`injury-${index}`}
									style={{ width: "30vw" }}
								/>
								<Button
									onClick={() => removeItem(index)}
									type="primary"
									icon={<DeleteOutlined />}
									size={"middle"}
								/>
							</div>
						</Form.Item>
					);
				})}
				<div ref={scrollRef} />
			</div>
			<Button className={styles.save} onClick={onSubmit}>
				Save
			</Button>
			<Button
				className={styles.cancel}
				onClick={() => router.push("/home")}
			>
				Cancel
			</Button>
			<Button className={styles.clear} onClick={() => setInjuryData([])}>
				Clear All
			</Button>
		</Form>
	);
};

export default EntryForm;
