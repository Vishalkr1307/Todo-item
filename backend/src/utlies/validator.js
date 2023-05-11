module.exports=(formatOferror)=>{
    return formatOferror.map((err)=>{
        return err.msg
    })
}