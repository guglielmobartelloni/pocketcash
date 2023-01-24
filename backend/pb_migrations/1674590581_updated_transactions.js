migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "moo5bn3i",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "expense",
        "income"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // remove
  collection.schema.removeField("moo5bn3i")

  return dao.saveCollection(collection)
})
