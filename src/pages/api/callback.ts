import { NextApiRequest, NextApiResponse } from 'next'
import { create, renderBody } from './_lib/oauth2'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code as string
  const { host } = req.headers

  const oauth2 = create()

  try {
    const accessToken = await oauth2.authorizationCode.getToken({
      code,
      redirect_uri: `https://${host}/api/callback`,
    })
    const { token } = oauth2.accessToken.create(accessToken)

    res.status(200).send(
      renderBody('success', {
        token: token.access_token,
        provider: 'github',
      })
    )
  } catch (e) {
    res.status(200).send(renderBody('error', e))
  }
}
