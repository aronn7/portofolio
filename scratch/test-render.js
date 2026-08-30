require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': './src'
      }
    }]
  ]
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');

try {
  const HomePage = require('./src/app/page.js').default;
  const html = ReactDOMServer.renderToString(React.createElement(HomePage));
  console.log('SUCCESS! Rendered length:', html.length);
} catch (err) {
  console.error('RENDER ERROR:', err);
}

