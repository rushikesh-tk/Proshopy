import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("admin", 10),
		isAdmin: true,
	},
	{
		name: "Karan Singh",
		email: "karan@example.com",
		password: bcrypt.hashSync("karan", 10),
	},
	{
		name: "Harsh Titoria",
		email: "harsh@example.com",
		password: bcrypt.hashSync("harsh", 10),
	},
	{
		name: "Yashvant Gond",
		email: "yashvant@example.com",
		password: bcrypt.hashSync("yashvant", 10),
	},
];

export default users;
