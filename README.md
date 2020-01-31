# Products storage Service

This Crud Api built with node.js and MySql aims to organize products of some store. 

### Execution
* Download the dependencies of package.json: `npm install`
* Run with: `npm run dev`


## Usage

All responses will have the form

```json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```

Subsequent response definitions will only detail the expected value of the `data field`

### List all products

**Definition**

`GET /api/products`

**Response**

- `200 OK` on success

```json
[
    {
        "id": "1",
        "name": "Headphone",
        "description": "Sony Black Headplhone with microphones",
        "price": "130",
        "quantity": "10",
        "created_at": "date",
        "updated_at": "date
    }
]
```

### Regiter new product

**Definition**

`POST /api/products`

**Arguments**

- `"name":string` name of the product
- `"description":string` description about the product's specifications
- `"price":int` price of the product
- `"quantity":int` Amount of the product available

**Response**

- `200 OK` on success

```json
[
    {
        "Message": "Prodcut {name} registered"
    }
]
```

### Delete Product

**Definition**

`DELETE /api/products/:id`

**Response**

- `200 OK` on success

```json
[
    {
        "Message": "Prodcut {name} deleted"
    }
]
```