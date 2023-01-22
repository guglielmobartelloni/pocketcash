migrate((db) => {
  const collection = new Collection({
    "id": "ckp97jsqpj6hon7",
    "created": "2023-01-22 16:55:37.124Z",
    "updated": "2023-01-22 16:55:37.124Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uaqlaih3",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ckp97jsqpj6hon7");

  return dao.deleteCollection(collection);
})
