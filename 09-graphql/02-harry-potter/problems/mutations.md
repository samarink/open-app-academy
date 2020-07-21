```js
mutation {
  addWizard(name: "Tom Riddle", houseId:2, patronusId: 9) {
    id,
    name,
    house {
      name
    },
    patronus {
      form
    }
  }
}
```

```js
mutation {
  updateWizard(id: 1, name:"Totally Not Harry Potter") {
    id,
    name,
    house {
      name
    },
    patronus {
      form
    }
  }
}
```

```js
mutation {
  updateWizard(id: 1, houseId: 4, patronusId: 3) {
    id,
    name,
    house {
      name
    },
    patronus {
      form
    }
  }
}
```

```js
// wizard 1
mutation {
  deleteWizard(id:1){
  }
}
