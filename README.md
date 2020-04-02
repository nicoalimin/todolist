# Todo List

## Hosted Version on EKS

http://aabf0ac224f514f39a27615f7bc63b0f-1494967828.us-east-1.elb.amazonaws.com/

## Running Locally

### Using Docker

Prerequisites:

- docker (recommended `v19.03.5` and above)
- docker-compose (recommended `v1.24.1` and above)

`docker-compose up`

open `localhost:8080`

### Using docker image published in DockerHub

`docker run -p 8080:80 niczter/todolist:latest`

open `localhost: 8080`

### Locally

Prerequisites:

- node (recommended `v10.19.0`. Testing doesn't work on node `v13`)
- yarn (recommended `1.22.4`)

Steps:

- `npm i -g yarn`
- `yarn install`
- `yarn start`

### Testing

- `yarn test`

## Notes

- This application uses cookies
