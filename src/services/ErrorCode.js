import errorCodeHandle from "./ErrorHandle"

export default function checkError(res){
    return errorCodeHandle(res) ? alert('success') : alert('nay')
}
