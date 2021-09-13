import * as general from "./effects/general"

export const api = (() => {
  const baseUrl = 'https://api.com/v1'
  return {
    general
  }
})()
