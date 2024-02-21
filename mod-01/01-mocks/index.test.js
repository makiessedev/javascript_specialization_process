const { rejects, deepStrictEqual } = require('assert')
const { error } = require('./src/constants')
const File = require('./src/file')
  ;
(async () => {
  {
    const filePath = './mocks/empty-file-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/four-items-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/invalid-header.csv'
    const result = File.csvToJson(filePath)
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    await rejects(result, rejection)
  }

  {
    const filePath = './mocks/three-item.valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "id": 123,
        "name": "Makiesse Morais",
        "profession": "Javascript Especialist",
        "birthday": 2003
      },
      {
        "id": 321,
        "name": "Morais Makiesse",
        "profession": "Front end",
        "birthday": 2004
      },
      {
        "id": 231,
        "name": "Ambrósio Morais",
        "profession": "Back end",
        "birthday": 2006
      }
    ]

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()