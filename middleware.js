const authPage = (permission) =>{
    return (req,res,next) =>{
        const userRole = req.body.role
        if(permission.includes(userRole)){
            next();
        }else{
            return res.status(401).json('You Do not have an Access')
        }
    }

}

const authStudent = (req,res,next) =>{
    const studentNum = parseInt(req.params.number)
    if(req.body.ID.includes(studentNum)){
        next();
    }else{
        return res.status(401).json('You Do not have an Access')
    }

}

module.exports= {
    authPage,
    authStudent
}