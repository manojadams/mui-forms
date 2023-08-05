import { NextApiRequest, NextApiResponse } from "next";

const getPing = (req: NextApiRequest, res: NextApiResponse) => {
    return res.send("hello");
};

export default getPing;
