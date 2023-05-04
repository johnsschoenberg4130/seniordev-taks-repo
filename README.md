
1. Create a project structure that includes directories for source code, tests, and configuration files.

2. Set up a REST endpoint on port 30000 using Node.

3. Define a ping endpoint that accepts an incoming parameter named "message" and returns a JSON object with the following parameters: 
  - "echo": a response from the Postman Echo service called with the "message" parameter value
  - "timestamp": the current Unix time
  - "env": the current environment from the configuration
  - "version": the current build version

4. Implement the logic to retrieve the current environment and build version from the configuration files.

5. Implement a Swagger endpoint for the REST service to provide documentation for the API.

6. Write unit tests for the service to ensure that it works as expected in isolation.

7. Write integration tests to ensure that the service works correctly when integrated with other systems and services.

8. Organize the code in a maintainable way by following best practices for code organization, such as separating the code into modules and using consistent naming conventions. 
