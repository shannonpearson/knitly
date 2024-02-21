import { signIn } from 'supertokens-web-js/recipe/emailpassword'

async function logInClicked(email: string, password: string) {
  try {
    const loginParams = {
      formFields: [
        {
          id: 'email',
          value: email
        },
        {
          id: 'password',
          value: password
        }
      ]
    }

    let response = await signIn(loginParams)

    if (response.status === 'FIELD_ERROR') {
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error)
        }
      })
    } else if (response.status === 'WRONG_CREDENTIALS_ERROR') {
      window.alert('Email password combination is incorrect.')
    } else if (response.status === 'SIGN_IN_NOT_ALLOWED') {
      // this can happen due to automatic account linking. Tell the user that their
      // input credentials is wrong (so that they do through the password reset flow)
    } else {
      // sign in successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = '/'
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message)
    } else {
      window.alert('Oops! Something went wrong.')
    }
  }
}

export default logInClicked
