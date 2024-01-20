curl -X POST -H 'content-type: application/json' \
  -d '{ "query": "{ users { id first_name } }" }' \
  localhost:3001/graphql | jq
{
  "data": {
    "users": [
      {
        "id": "1",
        "first_name": "John"
      }
    ]
  }
}

curl -X POST -H 'content-type: application/json' \
  -d '{ "query": "{ tasks { id, title, description, user_id } }" }' \
  localhost:3001/graphql | jq
{
  "data": {
    "tasks": [
      {
        "id": "1",
        "title": "Task 1",
        "description": "Task 1 description",
        "user_id": "1"
      },
      {
        "id": "2",
        "title": "Task 2",
        "description": "Task 2 description",
        "user_id": "1"
      }
    ]
  }
}
