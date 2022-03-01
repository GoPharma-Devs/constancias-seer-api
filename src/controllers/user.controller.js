const User = require('../models/model.user')

const SignUp = async (req, res) => {
  try {

    //obtener data user
    const { name, email } = req.body;
    //verificar usuario
    let user = await User.findOne({ email }) || null;
    if (user !== null) {
      return res.json({
        success: false,
        msg: "Usuario ya existe"

      })
    }



  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al regisrtrar"
    })
  }

}