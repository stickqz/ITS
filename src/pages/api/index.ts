// import Patient from "../../models/schema";
// import { NextResponse } from "next/server";

// export default async function POST(req: any) {
// 	console.log("POST object");
// 	try {
// 		const body = await req.body.json();
// 		const patientInfo = new Patient(body);
// 		console.log("POST object");

// 		await Patient.create(body);
// 	} catch (error) {
// 		return NextResponse.json({ message: "Error", error }, { status: 500 });
// 	}
// }

// Import necessary modules
import Patient from "../../models/schema";
import { NextResponse } from "next/server";

// Export the API route function
export default async function POST(req: any) {
	console.log("POST object");
	try {
		// Parse the JSON from the request body
		const body = await req.body.json();

		// Create a new Patient instance with the parsed body
		const patientInfo = new Patient(body);

		// Save the patient information to the database
		await Patient.create(body);

		// Return a success response
		return NextResponse.json({ message: "Success" }, { status: 200 });
	} catch (error) {
		// Return an error response with a 500 status code
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
