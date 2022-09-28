export function catchErrorFunction ({ error: responseError }: any) {
  const body = responseError.body ?? responseError.error

  const errorMessages: string[] = []

  if (Array.isArray(body)) {
    for (const error of body) {
      for (const errorMessage of error.messages) {
        errorMessages.push(errorMessage)
      }
    }
  } else {
    errorMessages.push(body)
  }

  for (const errorMessage of errorMessages) {
    alert(errorMessage)
  }
}
