
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
        if(!isNaN(item)){
            numbers.push(item.toString());
        } else {
            let temp = Math.max(maxChar.toLowerCase().charCodeAt(0),element.toLowerCase().charCodeAt(0))
            temp = String.fromCharCode(temp);
            if( temp === element.toLowerCase()){
                maxChar = element
            }
            alphabets.push(element)
        }

    });
    if (alphabets.length === 0){
        return res.status(200).json({
            is_success: true,
            user_id: "vivin_d_08082002",
            email: "vivin.d2020@vitstudent.ac.in",
            roll_number: "20BCI0005",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: [],
        });
    } else {
        return res.status(200).json({
            is_success: true,
            user_id: "vivin_d_08082002",
            email: "vivin.d2020@vitstudent.ac.in",
            roll_number: "20BCI0005",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: [maxChar],
        });
    }
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