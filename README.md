<img height="50px" align="right" src="https://raw.githubusercontent.com/fchavonet/fchavonet/main/assets/images/logo-web.png" alt="Web logo">

# Holberton Staff API

## 🔖 Table of contents

<details>
    <summary>
        CLICK TO ENLARGE 😇
    </summary>
    📄 <a href="#description">Description</a>
    <br>
    🎓 <a href="#objectives">Objectives</a>
    <br>
    🔨 <a href="#tech-stack">Tech stack</a>
    <br>
    📂 <a href="#files-description">Files description</a>
    <br>
    💻 <a href="#installation_and_how_to_use">Installation and how to use</a>
    <br>
    🔧 <a href="#whats-next">What's next?</a>
    <br>
    ♥️ <a href="#thanks">Thanks</a>
    <br>
    👷 <a href="#authors">Authors</a>
</details>

## 📄 <span id="description">Description</span>

This project was developed as part of a live-coding session for a junior cohort at Holberton School Toulouse, presented live on campus with students and not recorded. Its purpose is to demonstrate the rapid setup and ease of use of Flask combined with Flask-RESTX for creating a RESTful API. Although not suitable for production, this example provides:

- An in-memory API to manage Holberton School staff members (create, read, update, delete).
- Swagger (OpenAPI) documentation accessible via a built-in UI.
- A simple web front-end to interact with the API.

## 🎓 <span id="objectives">Objectives</span>

- Showcase how quickly an API can be bootstrapped with Flask and Flask-RESTX.
- Introduce RESTful principles (endpoints, HTTP methods, status codes).
- Provide hands-on experience with Swagger documentation.
- Build a minimal front-end for testing and demonstration.

## 🔨 <span id="tech-stack">Tech stack</span>

<p align="left">
    <img src="https://img.shields.io/badge/PYTHON-3776ab?logo=python&logoColor=white&style=for-the-badge" alt="Python badge">
    <img src="https://img.shields.io/badge/FLASK-000000?logo=flask&logoColor=white&style=for-the-badge" alt="Flask badge">
    <img src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5 badge">
    <img src="https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3 badge">
    <img src="https://img.shields.io/badge/JAVASCRIPT-f7df1e?logo=javascript&logoColor=black&style=for-the-badge" alt="JavaScript badge">
    <img src="https://img.shields.io/badge/BOOTSTRAP-7952b3?logo=bootstrap&logoColor=white&style=for-the-badge" alt="Bootstrap badge">
    <img src="https://img.shields.io/badge/GIT-f05032?logo=git&logoColor=white&style=for-the-badge" alt="Git badge">
    <img src="https://img.shields.io/badge/GITHUB-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub badge">
    <img src="https://img.shields.io/badge/MARKDOWN-000000?logo=markdown&logoColor=white&style=for-the-badge" alt="Markdown badge">
    <img src="https://img.shields.io/badge/VS CODE-007acc?logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii0wLjUgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KDTxwYXRoIGQ9Im0xNy44NTggMjMuOTk4LTkuNzcxLTkuNDg0LTUuODY2IDQuNDY1LTIuMjIxLTEuMTE1di0xMS43MTlsMi4yMzQtMS4xMjEgNS44NyA0LjQ2OSA5Ljc0Ny05LjQ5MyA1LjU4NyAyLjIzOXYxOS41MzFsLTUuNTc5IDIuMjN6bS0uNTYzLTE2LjE4Ni01LjU3NyA0LjE3MyA1LjU4IDQuMjAyem0tMTQuNTA3IDEuNjg1djUuMDE2bDIuNzg3LTIuNTI1eiIvPgoNPC9nPgoNPC9zdmc+&logoColor=white&style=for-the-badge" alt="VS Code badge">
</p>

## 📂 <span id="files-description">File description</span>

| **FILE**          | **DESCRIPTION**                                                   |
| :---------------: | ----------------------------------------------------------------- |
| `assets`          | Contains the resources required for the repository.               |
| `app`             | Application package with factory (`__init__.py`) and API modules. |
| `run.py`          | Entry point to start the Flask development server.                |
| `requirements.txt`| List of dependencies required for the script.                     |
| `.gitignore`      | Specifies files and folders to be ignored by Git.                 |
| `README.md`       | The README file you are currently reading 😉.                     |

## 💻 <span id="installation_and_how_to_use">Installation and how to use</span>

**Installation:**

1. Clone this repository:
    - Open your preferred Terminal.
    - Navigate to the directory where you want to clone the repository.
    - Run the following command:

```bash
git clone https://github.com/fchavonet/live_coding-holberton_staff_api.git
```

2. Open the repository you've just cloned.

3. Create a virtual environment:

```bash
python3 -m venv venv
```

4. Activate the virtual environment:

```bash
source venv/bin/activate
```

5. Install dependencies:

```bash
pip install -r requirements.txt
```

**How to use:**

1. Run the `run.py` script to start the server:

```bash
python run.py
```

> 📌 The server will start in debug mode on port 3000 (you can change it in the `run.py` file).

2. You can interact with the API using the command-line tools:

- Create a staff member:

```bash
curl -X POST "http://127.0.0.1:3000/api/v1/staff/" \
     -H "Content-Type: application/json" \
     -d '{"id":6809,"first-name":"Fabien","last-name":"Chavonet","age":20,"job-title":"Software Engineer"}'
```

- List all staff members:

```bash
curl http://127.0.0.1:3000/api/v1/staff/
```

- Retrieve a specific staff member:

```bash
curl http://127.0.0.1:3000/api/v1/staff/6809
```

- Update a staff member:

```bash
curl -X PUT "http://127.0.0.1:3000/api/v1/staff/6809" \
     -H "Content-Type: application/json" \
     -d '{"id":6809,"first-name":"Fabien","last-name":"Chavonet","age":40,"job-title":"Software Engineer"}'
```

- Delete a staff member:

```bash
curl -X DELETE http://127.0.0.1:3000/api/v1/staff/6809
```

3. Alternatively, use the front-end interface or Swagger to test the API:

- Front-end: [http://127.0.0.1:3000](http://127.0.0.1:3000)

<p align="center">
    <img src="./assets/images/front-end.webp">
</p>

- Swagger UI (API docs): [http://127.0.0.1:3000/api/](http://127.0.0.1:3000/api/)

<p align="center">
    <img src="./assets/images/swagger_ui.webp">
</p>

- JSON (data) : [http://127.0.0.1:3000/api/v1/staff/](http://127.0.0.1:3000/api/v1/staff)

<p align="center">
    <img src="./assets/images/json.webp">
</p>

## 🔧 <span id="whats-next">What's next?</span>

- Persist data with a database (SQLAlchemy).
- Add authentication and authorization (JWT).
- Implement pagination and filtering at the API level.
- Improve the front-end with modern frameworks.
- Deploy to a production environment.

## ♥️ <span id="thanks">Thanks</span>

- Special thanks to the [Holberton School Toulouse](https://www.holbertonschool.fr/campus/toulouse) staff and students, especially the cohort #26, for their dedication and attention during the live-coding session.

## 👷 <span id="authors">Authors</span>

**Fabien CHAVONET**
- GitHub: [@fchavonet](https://github.com/fchavonet)
