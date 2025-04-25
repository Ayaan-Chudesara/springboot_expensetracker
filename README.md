Project Name: Expense Tracker

Description: creating an expense tracker using Spingboot and mysql as backend technologies
the backend components consists of,

-Expense Controller: Here, we'll handle all APIs related to expenses, including CRUD operations and APIs for fetching all expenses.

-Income Controller: This controller will manage all APIs related to incomes, such as CRUD operations and APIs for fetching all incomes.

-Stats Controller: In this controller, we'll have APIs for retrieving various statistics, including balance, total expenses, total income, highest and lowest 
 expenses, 
 highest and lowest incomes, and more. Additionally, we'll delve into creating an API for generating graph data to visualize income and expense trends.

 The Frontend of the Finance Tracker is built using Angular, providing a modern, responsive, and user-friendly interface for managing personal finances. Users can 
 seamlessly navigate through components to add, update, or delete income and expense records, categorize transactions, and view detailed summaries. The UI integrates 
 dynamic visualizations like pie charts and bar graphs using chart libraries to offer insightful financial overviews. It communicates with the backend via RESTful 
 APIs to fetch and update data in real-time. Designed with clean architecture and modular components, the frontend ensures scalability and maintainability. 

 The Backend of the Finance Tracker is developed using Spring Boot, providing a robust and scalable RESTful API for handling user data, income and expense entries, 
 categories, and dashboard summaries. It follows a layered architecture with controllers, services, repositories, and entities, ensuring clean separation of concerns 
 and easy maintainability.
 
 The application connects to a MySQL database using Spring Data JPA, enabling efficient data persistence and retrieval. Features like user registration, 
 authentication (JWT-based), input validation, and error handling are implemented to deliver a secure and stable backend.



--> How to Run the Project:
 - move to project folder using  cd path/to/your/project
 - git clone https://github.com/Ayaan-Chudesara/springboot_expensetracker.git
 - open the back-end springboot application in intellij / vscode (intellij preferred)
 - create a database named expense_tracker in mysql workbench
 - open the frontend folder in vscode
 - run npm install
 - run npm install -g @angular/cli@16
 - check version using ng version
 - open the angular file in an integrated terminal
 - run ng serve
 - open the hosted application in a browser
 - Login Credentials are : user= admin  and password: 1234
