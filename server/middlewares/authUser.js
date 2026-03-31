import jwt from 'jsonwebtoken'


const authUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.json({ success: false, message: "not authorizwd" })
    
    

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
    console.log("Decoded token:", tokenDecode);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      console.log('userid:',req.userId)
     

    }
  
    else {
      return res.json({ success: false, message: "NOT AUTHOREDized" })
    }
    next()

  } catch (error) {
    res.json({ success: false, message: error.message })

  }
}


export default authUser