const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	company: {
		type: String,
	},
	website: {
		type: String,
	},
	location: {
		type: String,
	},
	status: {
		type: String,
		required: true,
	},
	skills: {
		type: [String],
		required: true,
	},
	bio: {
		type: String,
	},
	githubusername: {
		type: String,
	},
	experience: [
		{
			title: {
				type: String,
				required: true
			},
			company: {
				type: String,
				required: true
			},
			location: {
				type: String,
				required: true
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date,
				required: false
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String,
				required: false
			}
		}
	],
	education: [
		{
			school: {
				type: String,
				required: true
			},
			degree: {
				type: String,
			required: true
		},
		fieldofstudy: {
			type: String,
			required: true
		},
		from: {
			type: Date,
			required: true
		},
		to: {
			type: Date,
			required: false
		},
		current: {
			type: Boolean,
			default: false
		},
		description: {
			type: String,
			required: false
		}
	}],
	social: { 
		youtube: {
			type: String,
			required: false
		},
		twitter: {
			type: String,
			required: false
		},
		facebook: {
			type: String,
			required: false
		},
		linkedin: {
			type: String,
			required: false
		},
		instagram: {
			type: String,
			required: false
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
