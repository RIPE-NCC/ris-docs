const path = require("path");

const getConfig = require("vuepress-bar");


const { nav, sidebar } = getConfig({addReadMeToFirstGroup: false, mixDirectoriesAndFilesAlphabetically: true, multipleSideBar: false});

const apiServer = process.env.API_SERVER || "ris.ripe.net";

sidebar.forEach((item) => { 
if (typeof item.title !== 'undefined') { 
if (item !=='' && item.title.includes("Api")) { item.title = item.title.replace("Api", "API"); }
}
})
sidebar.forEach((item) => { 
if (typeof item.title !== 'undefined') { 
if (item !=='' && item.title.includes("Ui")) { item.title = item.title.replace("Ui", "UI"); }
}
})
sidebar.forEach((item) => { 
if (typeof item.title !== 'undefined') { 
if (item !=='' && item.title.includes("Ris")) { item.title = item.title.replace("Ris", "RIS"); }
}
})
sidebar.forEach((item) => { 
if (typeof item.title !== 'undefined') { 
if (item !=='' && item.title.includes("UI-")) { item.title = item.title.replace("UI-", "UI "); }
}
})

module.exports = {
  title: "Docs",
  description: "The RIS Docs Center",
  dest: process.env.BETA ? 'builds/docsbeta' : 'builds/docs',
  base: process.env.BETA ? '/docsbeta/' : '/docs/',
  themeConfig: {
    nav:[],
    sidebar,
    // setting activeHeaderLinks to true automagically
    // opens the sidebar if it's closed when scrolling along
    // a new anchor.
    activeHeaderLinks: true,
    displayAllHeaders: false,
    collapsable: true,
    sidebarDepth: 1,
    searchMaxSuggestions: 20,
    breadcrumbIcon: false,
    breadcrumb: false,
    iconPrefix: false,
    lastUpdated: 'Last Updated'
  },
  plugins: [['@xiaopanda/vuepress-plugin-code-copy', {
        buttonStaticIcon: true,
        buttonIconTitle: 'Copy',
        buttonAlign: 'bottom',
        buttonColor: 'grey'
       }],
       ['@mr-hope/vuepress-plugin-components'],
       // ['vuepress-plugin-global-variables', { variables: { asn: '3333', ip: '193.0.0.0', prefix: '140.78/16', starttime: '2020-12-21T07:00', endtime: '2020-12-21T12:00' } }],
       ['full-searchbar', { encode: 'icase', tokenize: 'full' }]
    // require('vuepress-plugin-full-searchbar')
		],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'), {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false,
          attributes: {
			  'audio': 'width="740px" controls class="audioplayer"',
			  'video': 'width="740px" height="auto !important" class="audioplayer" controls'
			}
        }
      })
    }
  },
  define: {
    __API_SERVER__: apiServer,
  },
};
