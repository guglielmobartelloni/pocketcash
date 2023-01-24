migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zviecvou",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zviecvou",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
