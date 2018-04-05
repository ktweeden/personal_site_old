const contentList = require("../templates/content_list.json")
const navList = require("../templates/navigation.json")
const nunjucks = require("nunjucks")
const fs = require("fs")
const path = require("path")

nunjucks.configure((path.join(__dirname, "../templates")), {
  autoescape: false,
})

function renderBlog() {
  for (let content of contentList) {
    const contentPath = `${content.url}.njk`
    const fileContent = (nunjucks.render(contentPath, {navList: navList, contentList: contentList}))
    const filePath = `./${content.url}.html`
    fs.writeFileSync(filePath, fileContent)
  }
}

function renderIndex() {
  const fileContent = (nunjucks.render("index.njk", {navList: navList, contentList: contentList}))
  const filePath = ("./index.html")
  fs.writeFile(filePath, fileContent, (err) => {if (err) throw err})
}

function renderAboutMe() {
  const fileContent = (nunjucks.render("about_me.njk", {navList: navList}))
  const filePath = ("./about_me.html")
  fs.writeFile(filePath, fileContent, (err) => {if (err) throw err})
}

renderBlog()
renderIndex()
renderAboutMe()
