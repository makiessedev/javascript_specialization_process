import fs from 'fs/promises'

export const save = async (data) => {
  const { pathname: databaseFile } = new URL('./../database.json', import.meta.url)
  const currentData = JSON.parse(await fs.readFile(databaseFile))
  currentData.push(data)
  await fs.writeFile(databaseFile, JSON.stringify(currentData))


  console.log('currentData', currentData)
}

// 03 Carro 2000000 2020-02-02 2021-02-02