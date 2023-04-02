import fs from "fs"
import path from "path"

export async function usePages() {
  const dir = path.join(process.cwd(), "src", "app")

  const files = fs.readdirSync(dir)

  const folders = files.filter(file => {
    return fs.lstatSync(`${dir}/${file}`).isDirectory()
  })

  const foldersWithPage = folders.filter(folder => {
    const folderFiles = fs.readdirSync(`${dir}/${folder}`)
    return folderFiles.includes("page.tsx")
  })

  const pages = foldersWithPage.map(folder => {
    const folderName = folder
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return {
      name: folderName,
      path: `/${folder}`
    }
  })

  return pages
}
