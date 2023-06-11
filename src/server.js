import { createServer } from "miragejs"

createServer({
    routes() {
      this.get("/api/feedback", () => ({
        "feedback": [
          {
            "id": 1,
            "comment": "The program provided me with access to improved seeds, fertilizers, and other inputs, resulting in healthier crops and increased yields.",
            "name": "Kimani Karaba",
            "city": "Nairobi"
          },
          {
            "id": 2,
            "comment": "Thanks to the program, I've been able to implement advanced irrigation techniques, leading to better water management and improved crop growth.",
            "name": "Amina Wanjiru",
            "city": "Mombasa"
          },
          {
            "id": 3,
            "comment": "Through the program, I've gained knowledge about organic farming practices, which has allowed me to produce healthier and more sustainable crops.",
            "name": "David Kimani",
            "city": "Kisumu"
          }
        ]
      }
      ))
    },
  })