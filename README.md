# Web Technologies: Full-Stack Coursework & Lab Archive 🌐

A curated, comprehensive repository of laboratory experiments, core concepts, and assignment submissions developed throughout the university **Web Technologies** curriculum.

This archive spans the full modern web stack — from semantic HTML5 and CSS3 styling to client-side JavaScript, React component architecture, Node.js core streams, Express middleware pipelines, Pug templating, Multer file handling, and native MongoDB CRUD operations.

All original code comments, dated classroom progression logs, and problem-solving notes are strictly preserved.

---

## 🏆 Capstone Course Project: MERN Task Manager
The full-scale production web application applying these technologies is hosted in its dedicated repository:
* [**MERN Task Manager**](https://github.com/Tanmayi-n14/webtech-mern-task-manager) — Production-ready Task Management web application built with React, Vite, Tailwind CSS, Node.js, Express, and MongoDB.

---

## 📂 Repository Structure

```
├── 01-frontend-fundamentals/          # HTML5 Semantics, CSS Box Model, DOM & Browser APIs
├── 02-async-js-and-apis/              # Promises, Async/Await, Axios REST, and XML/JSON
├── 03-react-deep-dive/                # Chronological React learning log (JSX, Props, State, Hooks)
├── 04-nodejs-core-and-streams/        # HTTP Server, FileSystem, Buffers, Streams, and URL Parsing
├── 05-express-and-templating/         # Express Routing, Middleware Pipelines, Pug Views, and Forms
├── 06-file-upload-multer/             # Multipart/form-data upload server with Multer
├── 07-mongodb-crud-operations/        # Native MongoDB Database & Collection CRUD Operations
├── 08-coursework-assignments/         # Banana Challenges & Coursework Submissions
│   ├── banana-problem-1/              # Samarpana Run Registration Form (HTML5 + CSS)
│   └── banana-problem-2/              # Employee Management Server with Pug (Includes Screenshots)
├── package.json                       # Unified project dependencies
└── README.md
```

---

## 📚 Curriculum Breakdown & Module Index

### 01. Frontend Fundamentals (`01-frontend-fundamentals/`)
* **`html-css-box-model-and-positioning.html`**: CSS Box Model, custom border stylings, positioning (`relative`, `absolute`, `fixed`, `sticky`), and element hierarchies.
* **`ex_css.css`**: External stylesheet supporting the styling lab.
* **`audio-video.html`**: HTML5 multimedia embedding using `<audio>` and `<video>` tags with fallback formats.
* **`sample-3s.mp3` & `sample-5s.mp4`**: Test media assets for playback verification.
* **`geoloc.html`**: Geolocation API integration to extract user coordinates.
* **`time.html`**: JavaScript timer functions (`setInterval`, `setTimeout`, and Web Workers).
* **`javascript1.html` & `java1.js`**: Core JavaScript fundamentals, variables, loops, and external script linking.
* **`dom1.html`**: DOM tree traversal, element selection (`getElementById`, `querySelector`), and node manipulation.
* **`AEL.html`**: Event-driven programming utilizing `addEventListener`.
* **`BC.html`**: Demonstration of Event Bubbling and Event Capturing phases.
* **`CP.html`**: Event propagation control using `stopPropagation()`.

### 02. Asynchronous JavaScript & APIs (`02-async-js-and-apis/`)
* **`async_await_promise.html`**: JavaScript asynchronous programming paradigms comparing Promises and `async`/`await`.
* **`axios_get.html`**: Fetching remote data through HTTP GET requests using the Axios library.
* **`axios_post.html`**: Sending serialized JSON payloads using Axios POST requests.
* **`xml_json.html`**: Parsing and serialization differences between XML and JSON data formats.

### 03. React Deep Dive (`03-react-deep-dive/`)
* **`webtechreact.tsx`**: A comprehensive, 779-line master learning log preserving the entire semester's chronological progression of React concepts:
  - **JSX Syntax & Expressions**: Variable interpolation and inline arithmetic.
  - **Component Architecture**: Functional components, TypeScript interfaces, and JSX returns.
  - **Props & State**: Component parameter passing and state re-renders.
  - **Hooks & Forms**: Controlled inputs and side-effect handling.
  - **Multi-Root Rendering**: Deep-dive experiments with `ReactDOM.createRoot()`.

### 04. Node.js Core & Streams (`04-nodejs-core-and-streams/`)
* **`http.js`**: Native HTTP server listening on custom ports without external dependencies.
* **`filesystem.js`**: Asynchronous and synchronous file reading/writing using the `fs` module.
* **`buffer.js`**: Raw memory buffer allocation, slicing, encoding conversions, and byte manipulation.
* **`streams_read.js`**: Handling high-throughput data using `Readable` streams and chunk event listeners.
* **`streams_write.js`**: Writing sequential data buffers using `Writable` streams.
* **`streams_pipe.js`**: Memory-efficient stream piping (`readStream.pipe(writeStream)`).
* **`url.js`**: URL parsing, search parameters extraction, and pathname decomposition.
* **`url_binding.js` & `url_building.js`**: Dynamic route parameter binding and URL construction.
* **`testfile.txt` & `test_file_2.txt`**: Fixture files used for file system and stream experiments.

### 05. Express & Templating (`05-express-and-templating/`)
* **`express_get.js`**: Basic Express web server setup with GET routing.
* **`middleware.js`**: Application-level and route-level custom middleware functions.
* **`middleware2.js`**: Request pre-processing pipelines, authentication logging, and next() flow control.
* **`chalk.js`**: Colored terminal logging integration for server monitoring.
* **`validator.js`**: Input sanitization and format validation using the `validator` library.
* **`form.pug`**: Server-side templating using the Pug engine.
* **`formdata.js`**: Express server integrating body-parser to extract and render POST form submissions.

### 06. File Uploads with Multer (`06-file-upload-multer/`)
* **`index.html`**: Client-side `multipart/form-data` upload form.
* **`file_upload.js`**: Express backend utilizing `multer` with disk storage configuration to safely receive and store uploads.
* **`uploads/`**: Upload storage destination with test fixture file.

### 07. MongoDB Database CRUD Operations (`07-mongodb-crud-operations/`)
Native Node.js scripts demonstrating database operations with the official MongoDB driver:
* **`create_db.js`**: Client connection and database instantiation.
* **`create_collection.js`**: Explicit collection creation.
* **`insert_one.js` & `insert_many.js`**: Single and batch document insertions.
* **`find.js`**: Querying documents with projection and filters.
* **`update_one.js` & `update_many.js`**: Modifying existing documents with `$set` operators.
* **`delete_one.js` & `delete_many.js`**: Targeted document deletions.
* **`drop.js`**: Dropping collections cleanly.

### 08. Coursework Assignments & Banana Challenges (`08-coursework-assignments/`)
* **`banana-problem-1/`**:
  - `index.html`: **Samarpana Run Registration Form** — Comprehensive HTML5 registration portal featuring tri-color patriotic header styling, radio/checkbox constraints, numeric validation, pricing logic, and clean CSS layout.
* **`banana-problem-2/`**:
  - `employee_form.pug`: Pug template for employee details registration.
  - `formdata_assignment.js`: Express server parsing form data and rendering formatted confirmation responses.
  - `screenshots/`: 5 execution screenshots verifying server startup, form validation, and successful POST payloads.

---

## 🛠️ Setup & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Coursework Servers

#### Run the Employee Management Form (Banana Problem 2):
```bash
npm run banana2
# Server starts at http://localhost:3000
```

#### Run the File Upload Server:
```bash
npm run multer
# Server starts at http://localhost:3000
```

#### Test Frontend HTML Files:
Open any HTML file in `01-frontend-fundamentals/`, `02-async-js-and-apis/`, or `08-coursework-assignments/banana-problem-1/` directly in your browser.

---

## 👤 Author

* **Tanmayi Nagabhairava** ([@Tanmayi-n14](https://github.com/Tanmayi-n14)) — `PES1UG24CS493`
* Department of Computer Science & Engineering, PES University
