import SuperTokens from 'supertokens-web-js'
import Session from 'supertokens-web-js/recipe/session'
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'

const initAuth = () =>
  SuperTokens.init({
    appInfo: {
      apiDomain: `http://localhost:${import.meta.env.VITE_API_PORT}/login`,
      apiBasePath: '/auth',
      appName: 'knitly'
    },
    recipeList: [Session.init(), EmailPassword.init()]
  })

export default initAuth
