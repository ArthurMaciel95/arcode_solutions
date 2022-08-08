import { NextApiRequest, NextApiResponse } from "next";

const healthCheck = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ status: "OK" });
};

export default healthCheck;
