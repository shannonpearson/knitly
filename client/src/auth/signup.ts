import { signUp } from 'supertokens-web-js/recipe/emailpassword'

async function signUpClicked(email: string, password: string) {
  try {
    const signupParams = {
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
    const response = await signUp(signupParams)

    if (response.status === 'FIELD_ERROR') {
      // one of the input formFields failed validaiton
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          // Email validation failed (for example incorrect email syntax),
          // or the email is not unique.
          window.alert(formField.error)
        } else if (formField.id === 'password') {
          // Password validation failed.
          // Maybe it didn't match the password strength
          window.alert(formField.error)
        }
      })
    } else if (response.status === 'SIGN_UP_NOT_ALLOWED') {
      // this can happen during automatic account linking. Tell the user to use another
      // login method, or go through the password reset flow.
    } else {
      // sign up successful. The session tokens are automatically handled by
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

export default signUpClicked
