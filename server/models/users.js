const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, required: true}
})

userSchema.pre("save", async function (next) {
    if (this.modifiedPaths().includes("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const User = mongoose.model("User", userSchema)

const createUser = async (user) => {
    return await User.create(user)
}

module.exports = { createUser }