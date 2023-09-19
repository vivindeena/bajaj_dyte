
const bfhlGet = (req, res) => {
    return res.status(200).json({
        "operation_code":1
    });

}

const bfhlPost = (req, res) => {
    const {data} = req.body;
    if(!data){
        return res.status(400).json({
            errorMessage: "Missing Params",
        });
    }
    let maxChar=["a"];
    let numbers = [];
    let alphabets = [];
    data.forEach(element => {
        const item = parseInt(element);
        if(item){
            numbers.push(item);
        } else {
            maxChar[0] = Math.max(maxChar[0].toLowerCase().charCodeAt(0),element.toLowerCase().charCodeAt(0))
            alphabets.push(element)
        }

    });
    return res.status(200).json({
        "is_success": false,
        "user_id": "vivin_d_08082002",
        "email": "vivin.d2020@vitstudent.ac.in",
        "roll_number": "20BCI0005",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": max
    });

}

module.exports = {
    bfhlGet,
    bfhlPost
}