### Comparison Test
I use this tool to compare 2 sites,<br/>
typically when I rebuild a site,<br/>
I want it to look exactly like the original<br/>
TODO: Generate a side-by-side report
```
npm run cypress -- run --spec cypress/e2e/tools/comparison.cy.js --config video=false,viewportWidth=1920,viewportHeight=1080 && npm run cypress -- run --spec cypress/e2e/tools/comparison.cy.js --config video=false,viewportWidth=428,viewportHeight=900
open ./cypress/e2e/tools/comparison.html
```

### Manual Tests
* [ ] Fonts should be declared using font faces
  * [ ] Making use of font-weights where possible
  * [ ] No uses of font-xyz-light, font-xyz-bold in the font family names
* [ ] WordPress enqueued assets (styles and scripts) must have a version appended to the url
  * [ ] if its part of the theme, should use the theme version
  * [ ] if plugin, then plugin version
  * [ ] if third party, then version of that asset
* favicon should be no more than 32x32


### Post Release Actions 
* [ ] Submit site to Google Search Console
* [ ] Connect your website to Google Analytics

### SEO Checks
* should have the following icon sizes
  * [ ] see hirehattie.com
  * [ ] see craigiswayne.com