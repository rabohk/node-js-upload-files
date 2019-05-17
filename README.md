# node js upload file API

### 1. Initialize

Install node packages

```javascript
npm install
```

Start server

```javascript
node app.js
```

### 2. Upload file

Use postman to test the API at

```
http://localhost:3000/api/upload
```

+ Perform a POST request with body->form-data->
+ Set key as "uploadFile" and browse a file.

JSON response

For success
```javascript
{
    "success": true,
    "filename": "uploadFile-1558076147541.mp4",
    "message": "successfully uploaded"
}
```

For failure
```javascript
{
    "success": false,
    "filename": "",
    "message": "LIMIT_UNEXPECTED_FILE"
}
```
