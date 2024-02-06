import { NextApiRequest, NextApiResponse } from "next";

const inStates = [{
    label: "Punjab",
    value: "pun"
}, {
    label: "Karnataka",
    value: "kar"
}];

const afStates = [{
    label: "Northern Cape",
    value: "nc"
}, {
    label: "Western Cape",
    value: "wc"
}]

function getStates(req: NextApiRequest, res: NextApiResponse) {
    const country = req.query.country;
    if (country === "IN") {
        return res.json(inStates);
    } else if (country === "ZA") {
        return res.json(afStates);
    } else {
        return res.json([]);
    }
}

export default getStates;