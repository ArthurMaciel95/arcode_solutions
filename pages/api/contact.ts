import type { NextApiRequest, NextApiResponse } from 'next';

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message, phone } = req.body;
};

export default contact;
