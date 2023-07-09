import { env } from "../utils"
import wretch from "wretch"

// Instantiate and configure wretch
const api = wretch("https://wakatime.com")
  .errorType("json")
  .resolve((r) => r.json())

// Fetch stats from wakatime
export const getCodingStats = () => {
  return api
    .headers({
      Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
        "base64"
      )}`,
    })
    .get("/api/v1/users/current/stats")
}
