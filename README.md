# Nisje JavaScript Style Guide

*A mostly reasonable approach to JavaScript*

Other Style Guides

  - [React](react/)

## Table of Contents

  1. [Strings](#strings)

## Strings

  <a name="strings--quotes"></a><a name="1.1"></a>
  - [1.1](#strings--quotes) Use single quotes `''` for strings. eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html)

    ```javascript
    // bad
    const name = "Capt. Kirk";

    // bad - template literals should contain interpolation or newlines
    const name = `Capt. Kirk`;

    // good
    const name = 'Capt. Kirk';
    ```

  <a name="strings--line-length"></a><a name="1.2"></a>
  - [1.2](#strings--line-length) Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

    > Why? Broken strings are painful to work with and make code less searchable.

    ```javascript
    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // bad
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
    ```

  <a name="es6-template-literals"></a><a name="1.3"></a>
  - [1.3](#es6-template-literals) When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```javascript
    // bad
    function sayHi( name ) {
      return 'How are you, ' + name + '?';
    }

    // bad
    function sayHi( name ) {
      return [ 'How are you, ', name, '?' ].join();
    }

    // bad
    function sayHi( name ) {
      return `How are you, ${name}?`;
    }

    // good
    function sayHi( name ) {
      return `How are you, ${ name }?`;
    }
    ```

  <a name="strings--eval"></a><a name="1.4"></a>
  - [1.4](#strings--eval) Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

  <a name="strings--escaping"></a><a name="1.5"></a>
  - [1.5](#strings--escaping) Do not unnecessarily escape characters in strings. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

    > Why? Backslashes harm readability, thus they should only be present when necessary.

    ```javascript
    // bad
    const foo = '\'this\' \i\s \"quoted\"';

    // good
    const foo = '\'this\' is "quoted"';
    const foo = `my name is '${ name }'`;
    ```

**[⬆ back to top](#table-of-contents)**
