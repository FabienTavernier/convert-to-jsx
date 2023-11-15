const myReactElement = createElement(
  'div',
  { className: 'app' },
  createElement(
    'header',
    { className: 'header' },
    createElement(
      'h1',
      { className: 'greeting' },
      'I am ',
      createElement('span', null, 'Dave Lopper'),
    ),
  ),
  createElement(
    'main',
    { className: 'main' },
    createElement('aside', null, 'sidebar'),
    createElement('p', null, 'Lorem ipsum dolor sit amet.'),
  ),
  createElement(
    'footer',
    { className: 'footer' },
    createElement('p', null, '© O’clock'),
  ),
);