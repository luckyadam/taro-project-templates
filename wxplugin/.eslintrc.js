<%if (['vue', 'vue3'].includes(framework)) {-%>
// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
<%}-%>
module.exports = {
  "extends": ["taro/<%= framework %>"]<% if (framework === 'react') {%>,
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }<%}%>
}
