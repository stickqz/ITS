import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);

const injurySchema = new mongoose.Schema({
	name: String,
});

mongoose.Promise = global.Promise;

const patientSchema = new Schema({
	name: String,
	injuries: [injurySchema],
	link: String,
	date: Number,
	time: Number,
});

const Patient =
	mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;
