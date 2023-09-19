
const bfhlGet = (req, res) => {
    return res.status(200).json({
        "operation_code":1
    });

}

const bfhlPost = (req, res) => {
    let maxChar="a";
    let numbers = [];
    let alphabets = [];
    const {data} = req.body;
    if(!data){
        return res.status(400).json({
            is_success: false,
            user_id: "vivin_d_08082002",
            email: "vivin.d2020@vitstudent.ac.in",
            roll_number: "20BCI0005",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: [],
        });
    }
    data.forEach(element => {
        const item = parseInt(element);
        if(item){
            numbers.push(item);
        } else {
            maxChar = Math.max(maxChar.toLowerCase().charCodeAt(0),element.toLowerCase().charCodeAt(0))
            maxChar = String.fromCharCode(maxChar);
            alphabets.push(element)
        }

    });
    return res.status(200).json({
        "is_success": true,
        "user_id": "vivin_d_08082002",
        "email": "vivin.d2020@vitstudent.ac.in",
        "roll_number": "20BCI0005",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": [maxChar]
    });

}

module.exports = {
    bfhlGet,
    bfhlPost
}