const contentList = require("../templates/content_list.json")
const nunjucks = require("nunjucks")
const fs = require("fs")
const path = require("path")

nunjucks.configure((path.join(__dirname, "../templates")), {
  autoescape: true,
})

for (let content of contentList) {
  const contentPath = `${content.url}.njk`
  const fileContent = (nunjucks.render(contentPath))
  const filePath = `./${content.url}.html`
  fs.writeFile(filePath, fileContent, (err) => {if (err) throw err})
  console.log(fileContent)
}
