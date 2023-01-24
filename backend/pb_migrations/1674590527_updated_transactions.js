migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p4g3atuh",
    "name": "amount",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p4g3atuh",
    "name": "amount",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
