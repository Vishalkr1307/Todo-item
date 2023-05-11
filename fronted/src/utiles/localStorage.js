export const postLocalData=(user,data)=>{
    if(user && data){
        return localStorage.setItem(user, data)
    }
}
export const getLocalData=(user)=>{
    
    
        return localStorage.getItem(user)

    

}