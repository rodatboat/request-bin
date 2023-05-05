<h1 align="center">
  <br>
  <a href="https://rez.ronaldosuarez.dev/"><img src="https://raw.githubusercontent.com/rodatboat/request-bin/master/public/rez_logo.png" alt="REZ" width="150"></a>
  <br>
  <b align="center">REZ. 
  <br>
  <a href="https://rez.ronaldosuarez.dev/">Demo</a>
  </b>
    <br>
</h1>
<br>

<p align="center">
       REZ is a request bin which allows you to easily send HTTP requests to a custom endpoint and analyze various data. It was designed to help developers debug and test APIs. 
    <br/>
    <br>
    <br>
    <br>
</p>

## 🛠 Installation & Set Up

1. Clone repo

   ```sh
   git clone https://github.com/rodatboat/request-bin.git
   ```

2. Install dependencies

   ```sh
   cd ./
   npm install
   ```

   ```sh
   cd ./server
   npm install
   ```

3. Set up environment variables
    <br/>
    DB_URI = API URL
    <br/>
    APP_URI = Client URL
   ```sh
   cd ./
   VITE_DB_URI=http://localhost:5000
   VITE_APP_URI=http://localhost:3000
   ```

    MONGO_URL = Mongo connection
    <br/>
   ```sh
   cd ./
   MONGO_URL=mongodb://localhost:27017/rez_db
   ```

4. Start the development server

   ```sh
   cd ./
   npm run dev
   ```

   ```sh
   cd ./server
   npm run start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run vercel-build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run preview
   ```

3. When deploying to vercel, set Client Output Directory to

   ```
   dist/client
   ```

4. When deploying to vercel, set API Root Directory to

   ```
   server/
   ```