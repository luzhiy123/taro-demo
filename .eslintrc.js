module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
