const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  },

  password: {
    type: 'string',
    required: true,
  }
})

userSchema.methods.generate = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWTPRIVATEKEY, { expiresIn: "1d" })
  return token
}



const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label('name'),
    email: Joi.string().email().label('email'),
    password: passwordComplexity().required().label('password'),
  })
  return schema.validate(data)

}

module.exports = mongoose.model('User', userSchema)
