# my-file-server

## Table of Contents

1. [Getting Started](#getting-started)
    1. [Development Mode](#1-development-mode)
        1. [Install dependencies and development dependencies](#11-install-dependencies-and-development-dependencies)
        2. [Start Next.js server](#12-start-nextjs-server)
        3. [Now visit _http://localhost:3000/_ to see the React application](#13-now-visit-httplocalhost3000-to-see-the-react-application)
    2. [Production Mode](#2-production-mode)
        1. [Install dependencies and development dependencies](#21-install-dependencies-and-development-dependencies)
        2. [Transpile/Transform JSX to JS](#22-transpiletransform-jsx-to-js)
        3. [Start Next.js server](#23-start-nextjs-server)

---

## Getting Started

### 1. Development Mode

#### &ensp;&ensp;&ensp;&ensp;1.1. Install dependencies and development dependencies

```sh
        npm install
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./node_modules/_ directory is now added and _./package-lock.json_ is now compiled__.

```text
                    .
                    ├── node_modules
                    └── package-lock.json
```

#### &ensp;&ensp;&ensp;&ensp;1.2. Start Next.js server

```sh
        npm run dev
```

#### &ensp;&ensp;&ensp;&ensp;1.3. Now visit _[http://localhost:3000/](http://localhost:3000/)_ to see the React application

### 2. Production Mode

#### &ensp;&ensp;&ensp;&ensp;2.1. Install dependencies and development dependencies

```sh
        npm install
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./node_modules/_ directory is now added and _./package-lock.json_ is now compiled__.

```text
                    .
                    ├── node_modules
                    └── package-lock.json
```

#### &ensp;&ensp;&ensp;&ensp;2.2. Transpile/Transform JSX to JS

```sh
        npm run build
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./.next/_ is now compiled__.

```text
                    .
                    └── .next/
```

#### &ensp;&ensp;&ensp;&ensp;2.3. Start Next.js server

```sh
        npm run start
```
