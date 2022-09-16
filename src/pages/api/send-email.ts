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

  await awsSES
    .sendEmail({
      Source: "no-reply@arcodesolucoes.com",
      Destination: {
        ToAddresses: ["arthurnmrocha@gmail.com"]
      },
      Message: {
        Subject: {
          Data: `Pedido de Orçamento feito do cliente ${body.name}`,
          Charset: "utf-8"
        },
        Body: {
          Text: {
            Data: body.message
          },
          Html: {
            Data: `
            Nome:${body.name}<br/>
            Telefone:${body.phone}<br/>
            Email:${body.email}<br/>
            Message:${body.message}
            `
          }
        }
      }
    })
    .promise();

  return res.json({
    ok: true
  });
};

export default sendEmail;
