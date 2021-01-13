const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>Your Recent order for ${total}</h2>
    <p>Please start walking over</p>
    <ul>
    ${order
      .map(
        (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}">
        ${item.size} ${item.name} = ${item.price}
    </li>`
      )
      .join('')}
    <p>Your total is $${total}</p>
    </ul>
</div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIl_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  // await wait(5000);
  const body = JSON.parse(event.body);

  if (body.uberField) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'You are bot' }),
    };
  }

  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    console.log(`Checking ${field}`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: `You are missing ${field}` }),
      };
    }
  }

  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: `You order nothing` }),
    };
  }

  const info = await transporter.sendMail({
    from: 'Slick`s slices <slick@example.com>',
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'New order!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success!' }),
  };
};
