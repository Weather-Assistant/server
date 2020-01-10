# Server Wheater App

Ini adalah server-side untuk weather app kami. Berikut ini routingnya

| Method | URI                              | Body                     | Header | Description                                                                                                                           |
|--------|----------------------------------|--------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| POST   | `/signin`                          | `id_token:string`          | `none`   | User login menggunakan Google Account                                                                                                 |
| POST   | `/pixabay`                         | `key:string`<br> `keyword:string`<br>`image_type:string` | `none`   | Untuk mendapatkan gambar                                                                                                              |
| GET    | `/airvisual/country`               | `none`                     | `none`   | Untuk mendapatkan daftar negara                                                                                                       |
| GET    | `/airvisual/:country/state`        | `none`                     | `none`   | Untuk mendapatkan daftar provinsi di suatu negara                                                                                     |
| GET    | `/airvisual/:country/:state/city`  | `none`                     | `none`   | Untuk mendapatkan daftar kota di suatu provinsi di suatu negara                                                                       |
| GET    | `/airvisual/:country/:state/:city` | `none`                     | `none`   | Untuk mendapatkan cuaca di suatu kota di suatu pronvisi di suatu negara                                                               |
| GET    | `/calendarific/calendar`           | `none`                     | `none`   | Untuk mendapatkan tanggal hari ini, jika hari ini kebetulan tanggal merah, maka akan menampilkan nama hari raya pada tanggal tersebut |


# Weather Assistant
## **Get Picture**
Returns json data from pixabay.
- **URL**
  /pixabay
- **Method:**
  `POST`
- **Data Params**
  keyword: STRING
- **Success Response:**
  - **Code:** 200 <br />
    **Content:**
    ```javascript
      {
    "totalHits": 3,
    "hits": [
        {
            "largeImageURL": "https://pixabay.com     /get/54e1d3474b52b108f5d08460962933761038d8ed534c704c72277dd09045c650_1280.jpg",
            "webformatHeight": 426,
            "webformatWidth": 640,
            "likes": 13,
            "imageWidth": 5184,
            "id": 216410,
            "user_id": 97706,
            "views": 7336,
            "comments": 7,
            "pageURL": "https://pixabay.com/photos/jakarta-smog-architecture-skyline-216410/",
            "imageHeight": 3456,
            "webformatURL": "https://pixabay.com/get/54e1d3474b52b108f5d08460962933761038d8ed534c704c72277dd09045c650_640.jpg",
            "type": "photo",
            "previewHeight": 99,
            "tags": "jakarta, smog, architecture",
            "downloads": 2559,
            "user": "Fuzz",
            "favorites": 12,
            "imageSize": 2876676,
            "previewWidth": 150,
            "userImageURL": "",
            "previewURL": "https://cdn.pixabay.com/photo/2013/11/23/16/23/jakarta-216410_150.jpg"
        }
    ```
- **Error Response:**
  - **Code:** 500 Server Error <br />
    **Content:**
    ```javascript
    {
        "error": "Internal Server Error",
    }
    ```
## **Get Calendar Data**
Returns json data from calendarific.
- **URL**
  /calendar/calender
- **Method:**
  `POST`
- **Data Params**
  country: STRING,
  year: STRING
- **Success Response:**
  - **Code:** 201 <br />
    ```javascript
          {
      "meta": {
          "code": 200
      },
      "response": {
          "holidays": [
              {
                  "name": "New Year's Day",
                  "description": "New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.",
                  "date": {
                      "iso": "2020-01-01",
                      "datetime": {
                          "year": 2020,
                          "month": 1,
                          "day": 1
                      }
                  },
                  "type": [
                      "National holiday"
                  ],
                  "locations": "All",
                  "states": "All"
              },
              {
                  "name": "Chinese Lunar New Year's Day",
                  "description": "Chinese New Year is the first day of the Chinese calendar, which is a lunisolar calendar mainly used for traditional celebrations.",
                  "date": {
                      "iso": "2020-01-25",
                      "datetime": {
                          "year": 2020,
                          "month": 1,
                          "day": 25
                      }
                  },
                  "type": [
                      "National holiday"
                  ],
                  "locations": "All",
                  "states": "All"
              }
          ]
      }
  }
  }
    ```
- **Error Response:**
  - **Code:** 500 Server Error <br />
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```
## **Get Countries**
Returns json data of countries from airVisual.
- **URL**
  /airvisual/country
- **Method:**
  `GET`
- **Success Response:**
  - **Code:** 200 <br />
    **Content:**
    ```javascript
    [
        {
            "_id": "5df4c4d3b52904513284e669",
            "name": "baju",
            "price": 10000,
            "stock": 15,
            "image": "https://d2h2vnfmmg5sct.cloudfront.net/catalog/product/large_image/00_414443.jpg",
            "__v": 0
        },
        {
            "_id": "5df4c524b52904513284e66a",
            "name": "celana",
            "price": 5000,
            "stock": 9,
            "image": "https://www.lafuma.com/media/catalog/product/cache/18/image/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11318-6730-access-cargo-pants-bleu_1.jpg",
            "__v": 0
        }
    ]
    ```
- **Error Response:**
  - **Code:** 500 Server Error <br />
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

## **Get States**
Returns json data of states from airVisual.
- **URL**
  /:country/state
- **Method:**
  `GET`
- **Success Response:**
  - **Code:** 200 <br />
    **Content:**
    ```javascript
    {
        "status": "success",
        "data": [
            {
                "state": "Bali"
            },
            {
                "state": "East Java"
            },
            {
                "state": "Jakarta"
            },
            {
                "state": "Riau"
            },
            {
                "state": "West Kalimantan"
            }
        ]
    }
    ```
- **Error Response:**
  - **Code:** 500 Server Error <br />
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

## **Get Cities**
Returns json data of cities from airVisual.
- **URL**
  /:country/:state/city
- **Method:**
  `GET`
- **Success Response:**
  - **Code:** 200 <br />
    **Content:**
    ```javascript
    {
        "status": "success",
        "data": [
            {
                "city": "Jakarta"
            }
        ]
    }
    ```
- **Error Response:**
  - **Code:** 500 Server Error <br />
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```