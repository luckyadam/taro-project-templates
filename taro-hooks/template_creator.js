function createWhenTs(params) {
  return !!params.typescript;
}

const handler = {
  "/global.d.ts": createWhenTs,
  "/tsconfig.json": createWhenTs,
  "/src/pages/index/index.jsx"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.jsx` };
  },
  "/src/pages/index/index.css"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.css` };
  },
  "/src/pages/index/index.config.js"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/${pageName}.config.js` };
  },
};

const basePageFiles = [
  "/src/pages/index/index.jsx",
  "/src/pages/index/index.css",
];

module.exports = {
  desc: "使用 taro-hooks 的模板",
  handler,
  basePageFiles,
  platforms: ["react"],
};
