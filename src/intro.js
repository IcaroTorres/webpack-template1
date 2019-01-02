const intro = document.querySelector('#intro') || (() => {
  let div = document.createElement("div")
  div.id = 'intro'
  document.body.appendChild(div)
  return div
})()

const introData = {
  heading: 'This is a webpack template',
  author: {
    name: 'Ícaro Torres', github:'https://github.com/IcaroTorres'
  },
  items: [
    `Modern ES6 syntax coverage with babel-loader`,
    `Development and Production configuration files, to improve development productivity and enhance production's build performance`,
    `sass-loader css-loader and style-loader <small>(for development mode)</small>`,
    `file-loader <small>(to handle file loading like images and fonts)</small>`,
    `CleanWebpackPlugin and HtmlWebpackPlugin to controll production folder`,
    `extract-text-webpack-plugin to dinamically include pre-processed link stylesheet tags and webpack.HotModuleReplacementPlugin() plugin to add dynamic changes to script tags`,
    `Fonticons <i class="fab fa-fonticons"></i>
    Fontawesome 5 <i class="fab fa-font-awesome"></i>
    and @fortawesome/fontawesome-free npm package <i class="fab fa-fort-awesome-alt"></i>`,
    `Ready to use with your projects`
  ]
}
intro.innerHTML = setIntro(introData)

function setIntro({ heading, author, items }) {
  return `<h1>${heading}</h1>
    <blockquote>by<em><a href="${author.github}" target="_blank">${author.name}</a></em></blockquote>
    <h2>including the following features:</h2>
    <ul>${items.map((item, i) => `<li><p>${item}${i === items.length - 1 ? '.' : ';'}</p></li>`).join(' ')}</ul>
    <h5>Below are a sample of a response from an API get request, and few buttons to mes with the results.</h5>`;
}
