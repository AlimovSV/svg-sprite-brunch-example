exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/src/assets". Files in this directory
    // will be copied to `paths.public`, which is "public" by default.
    assets: /^(src\/assets\/(?!svg))/
  },

  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "src"
    ],

    // Where to compile files to
    public: 'public'
  },

  // Configure your plugins
  plugins: {
    svgsprite: {
      shape: {
        transform: [{
          svgo: {
            plugins: [
              { sortAttrs: true },
              { convertColors: { shortname: false, currentColor: true } },
              { removeTitle: true },
              { removeRasterImages: true },
              { removeStyleElement: true },
              { removeAttrs: { attrs: '(class|fill-rule|stroke-miterlimit)' } }
            ],
            js2svg: { pretty: true, indent: 4 }
          }
        }]
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        precision: 3,
        transform: [
          function (svg) {
            return svg.replace(/<symbol/gi, '\n  <symbol').replace(/<\/symbol>/gi, '  </symbol>\n');
          }
        ]
      },
      mode: {
        symbol: { dest: './public', sprite: 'img/sprite.svg' }
      }
    }
  }
};
