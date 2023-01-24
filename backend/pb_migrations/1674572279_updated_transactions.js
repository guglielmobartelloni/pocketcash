migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "76rqtelx",
    "name": "categories",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "ckp97jsqpj6hon7",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jhw80cads6ehf34")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "76rqtelx",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "ckp97jsqpj6hon7",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
