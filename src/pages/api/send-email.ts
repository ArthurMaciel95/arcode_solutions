import type { NextApiRequest, NextApiResponse } from "next";
import SES from "aws-sdk/clients/ses";

interface IMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: IMessage = req.body;
  const awsSES = new SES({
    region: "us-west-2",
    accessKeyId: process.env.AWS_ACESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

  const params = {
    Source: "no-reply@arcodesolucoes.com",
    Destination: {
      ToAddresses: ["arthurnmrocha@gmail.com"]
    },
    Template: "template-budget",
    TemplateData: JSON.stringify(body)
  };

  await awsSES.sendTemplatedEmail(params).promise();

  return res.json({
    ok: true
  });
};

export default sendEmail;
