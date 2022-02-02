import axios from "axios"

export const googleLogin = async(token)=>{
    return await axios({
        method:"POST",
        url:"http://localhost:8000/api/googlelogin",
        data:{tokenId:token}
    })
}