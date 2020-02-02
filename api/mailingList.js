const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const {
    email,
  } = req.body

  const content = {
    to: 'dwm503@gmail.com',
    from: email,
    subject: `メーリングアドレス登録の依頼 From - ${email}`,
    text: `
        Email: ${email}
    `,
    html: `
        <p>Email: ${email}</p>
    `
  }

  try {
    await sgMail.send(content)
    res.status(200).send('登録しました')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send(`登録できませんでした: ${error}`)
  }
}