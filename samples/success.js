const myReactElement = React.createElement(
  'div',
  { className: 'app' },
  React.createElement(
    'header',
    { className: 'header' },
    React.createElement(
      'h1',
      { className: 'greeting' },
      'I am ',
      React.createElement('span', null, 'Dave Lopper'),
    ),
  ),
  React.createElement(
    'main',
    { className: 'main' },
    React.createElement('aside', null, 'sidebar'),
    React.createElement('p', null, 'Lorem ipsum dolor sit amet.'),
  ),
  React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement('p', null, '© O’clock'),
  ),
);