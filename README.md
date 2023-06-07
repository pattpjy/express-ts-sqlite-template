# Express TypeScript Boilerplate with SQLite and Knex

This repository contains a boilerplate for an Express server with TypeScript. It utilizes SQLite as the local database and Knex as the query builder, specifically designed for the development environment.

## Features

- Express server with TypeScript for type-safe development
- SQLite for local database storage
- Knex as a query builder for easy and efficient database interactions

## ⚠️ Limitations

- Limited Database Support: The current version of the template includes SQLite as the local database option. If your project requires a different database system, you will need to modify the configuration and dependencies accordingly.
- Development Environment Only: The template is designed to support development environments. If you plan to deploy your application to a production environment, additional configuration and setup will be required.
- Basic CORS Configuration: The CORS middleware included in the template provides a basic configuration for handling cross-origin requests. Depending on your specific requirements, you may need to customize the CORS settings further.
- Minimal Error Handling: The template provides a basic error handling mechanism. For production-ready applications, it is recommended to enhance error handling and implement appropriate error logging and reporting.
- Limited Authentication and Authorization: The template does not include built-in authentication or authorization mechanisms. If your project requires user authentication or role-based access control, you will need to incorporate and customize additional libraries or modules.

## Prerequisites

Before you can start using this boilerplate, make sure you have the following software installed on your machine:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

To get started with this boilerplate, follow these steps:

1. Clone the repository to your local machine:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd express-typescript-boilerplate
```

3. Install the dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your web browser and visit `http://localhost:3001` to see the running server.

## Project Structure

The project structure is organized as follows:

```
.
├── dist/
│   └── ...
├── database/
├── index.ts
├── knex.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- The `/database/` directory contains the SQLite database configuration and migration files.
- The `index.ts` file is the entry point of the server application.
- The `knex.ts` This knex file contains configuration that using SQLite as your local database and the migration and seed files will be stored in the `database/migrations` and `database/seeds` directories respectively.
- The `.gitignore` file specifies which files and directories should be ignored by Git.
- The `package.json` file lists the project dependencies and scripts.
- The `tsconfig.json` file configures the TypeScript compiler.

Here are the instructions to perform the initial Knex migration and seed data for your project using the command line:

1. Create a new migration file for your table. Run the following command to generate a new migration file using the Knex CLI:

   ```
   knex migrate:make your_table_name -x ts
   ```

   Replace `your_table_name` with the name you want to give to your table. This command will create a new migration file with a timestamped filename in the `database/migrations` directory.

2. Open the newly created migration file (located in the `database/migrations` directory) using your preferred code editor. In the `up` function, define the schema for your table. For example:

   ```typescript
   import { Knex } from "knex";

   export const up = (knex: Knex): Knex.SchemaBuilder => {
     return knex.schema.createTable("your_table_name", (table) => {
       table.increments("id").primary();
       table.string("column1").notNullable();
       table.string("column2").notNullable();
       // Add more columns as needed
     });
   };

   export const down = (knex: Knex): Knex.SchemaBuilder => {
     return knex.schema.dropTableIfExists("your_table_name");
   };
   ```

   Modify the table name and column definitions as per your requirements.

3. Run the migration to create the table. Execute the following command to run the migration and create the table in the database:

   ```
   knex migrate:latest --env development
   ```

   This command will execute the migration files in the `database/migrations` directory and create the table in the database according to the defined schema.

4. Create a new seed file. Run the following command to generate a new seed file using the Knex CLI:

   ```
   knex seed:make your_seed_name -x ts
   ```

   Replace `your_seed_name` with the name you want to give to your seed file. This command will create a new seed file with a timestamped filename in the `database/seeds` directory.

5. Open the newly created seed file (located in the `database/seeds` directory) using your preferred code editor. In the `seed` function, write the code

## Contributing

If you want to contribute to this boilerplate, please follow the guidelines in [CONTRIBUTING.md](link-to-contributing-file).

## Acknowledgements

- [Express.js](https://expressjs.com)
- [TypeScript](https://www.typescriptlang.org)
- [SQLite](https://www.sqlite.org)
- [Knex.js](http://knexjs.org)

If you have any questions or issues, please don't hesitate to open an issue or reach out to me.

You can support me by [buy me donuts 🍩 ](https://bmc.link/pattsookmark)
Happy coding!

 ~ PattPJY ~


