import SuperTokens from 'supertokens-web-js'
import Session from 'supertokens-web-js/recipe/session'
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'

const initAuth = () =>
  SuperTokens.init({
    // enableDebugLogs: true,
    appInfo: {
      apiDomain: `http://localhost:${import.meta.env.VITE_API_PORT}`,
      apiBasePath: '/auth',
      appName: 'knitly'
    },
    recipeList: [
      Session.init({
        sessionTokenBackendDomain: 'localhost'
      }),
      EmailPassword.init()
    ]
  })

export default initAuth
