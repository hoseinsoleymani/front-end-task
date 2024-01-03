import { regex } from "@/helpers/regex";
import {http, HttpResponse} from "msw"

const tasks = {
    "tasks": [
        {
          "title": "Test Title",
          "description": "Test Desc",
          "id": 2
        },
        {
          "title": "title 2",
          "description": "description 2",
          "id": 6
        },
        {
          "title": "Test 5",
          "description": "Fooo",
          "id": 7
        },
        {
          "title": "Test 6",
          "description": "Fooo",
          "id": 8
        },
        {
          "title": "red",
          "description": "description",
          "id": 9
        },
        {
          "title": "Test 8",
          "description": "Fooo",
          "id": 10
        },
        {
          "title": "Test 9",
          "description": "Fooo",
          "id": 11
        },
        {
          "title": "Test 10",
          "description": "Fooo",
          "id": 12
        },
        {
          "title": "Test 11",
          "description": "Fooo",
          "id": 13
        }
      ]
}

type RequestBody = {
  password: string;
  email: string;
};

export const handlers = [
    http.get('/api/tasks', (resolver) => {
        return HttpResponse.json(tasks)
    }),
    http.post('/api/login', async ({request, cookies}) => {
        const requestBody = await request.json() as RequestBody;
        // const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        if(requestBody.email.match(regex.email) && requestBody.password.length > 8) {
          HttpResponse.json({
            ...requestBody
          }) 
        }
    }),
    http.put('/api/tasks', async ({request, cookies}) => {
        const requestBody = await request.json() as string

        console.log(cookies.authToken)
    })
]