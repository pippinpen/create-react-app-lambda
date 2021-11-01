import axios from "axios";

export async function handler(event, context) {
const API_KEY = e314bfeaf3b01a50f44e349007c58dc5

try {
  const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`, { headers: { Accept: "application/json" } })
  const data = response.data
  return {
    statusCode: 200,
    body: JSON.stringify({ data })
  }
} catch (err) {
  console.log(err)
  return {
    statusCode: 500,
    body: JSON.stringify({ msg: err.message })
  }
}
}


