# Nisje JavaScript Style Guide

*A mostly reasonable approach to JavaScript*

Other Style Guides

  - [React](react/)

## Table of Contents

  1. [Strings](#strings)
  1. [References](#references)
  1. [Commas](#commas)
  1. [Whitespace](#whitespace)

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

## References

  <a name="references--prefer-const"></a><a name="2.1"></a>
  - [2.1](#references--prefer-const) Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

    > Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

    ```javascript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  <a name="references--disallow-var"></a><a name="2.2"></a>
  - [2.2](#references--disallow-var) If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](https://eslint.org/docs/rules/no-var)

    > Why? `let` is block-scoped rather than function-scoped like `var`.

    ```javascript
    // bad
    var count = 1;
    if ( true ) {
      count += 1;
    }

    // good, use the let.
    let count = 1;
    if ( true ) {
      count += 1;
    }
    ```

  <a name="references--block-scope"></a><a name="2.3"></a>
  - [2.3](#references--block-scope) Note that both `let` and `const` are block-scoped.

    ```javascript
    // const and let only exist in the blocks they are defined in.
    {
      let a = 1;
      const b = 1;
    }
    console.log( a ); // ReferenceError
    console.log( b ); // ReferenceError
    ```

**[⬆ back to top](#table-of-contents)**

## Commas

  <a name="commas--leading-trailing"></a><a name="3.1"></a>
  - [3.1](#commas--leading-trailing) Leading commas: **Nope.** eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html)

    ```javascript
    // bad
    const story = [
        once
      , upon
      , aTime
    ];

    // good
    const story = [
      once,
      upon,
      aTime,
    ];

    // bad
    const hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // good
    const hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

  <a name="commas--dangling"></a><a name="3.2"></a>
  - [3.2](#commas--dangling) Additional trailing comma: **Yup.** eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html)

    > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

    ```diff
    // bad - git diff without trailing comma
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: [ 'coxcomb chart', 'modern nursing' ]
    };

    // good - git diff with trailing comma
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: [ 'coxcomb chart', 'modern nursing' ],
    };
    ```

    ```javascript
    // bad
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    const heroes = [
      'Batman',
      'Superman'
    ];

    // good
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    const heroes = [
      'Batman',
      'Superman',
    ];

    // bad
    function createHero(
      firstName,
      lastName,
      inventorOf
    ) {
      // does nothing
    }

    // good
    function createHero(
      firstName,
      lastName,
      inventorOf,
    ) {
      // does nothing
    }

    // good (note that a comma must not appear after a "rest" element)
    function createHero(
      firstName,
      lastName,
      inventorOf,
      ...heroArgs
    ) {
      // does nothing
    }

    // bad
    createHero(
      firstName,
      lastName,
      inventorOf
    );

    // good
    createHero(
      firstName,
      lastName,
      inventorOf,
    );

    // good (note that a comma must not appear after a "rest" element)
    createHero(
      firstName,
      lastName,
      inventorOf,
      ...heroArgs
    );
    ```

**[⬆ back to top](#table-of-contents)**

## Whitespace

  <a name="whitespace--spaces"></a><a name="4.1"></a>
  - [4.1](#whitespace--spaces) Use tabs. eslint: [`indent`](https://eslint.org/docs/rules/indent)

    ```javascript
    // bad
    function foo() {
    ∙∙∙∙let name;
    }

    // good
    function foo() {
    »   let name;
    }
    ```

  <a name="whitespace--before-blocks"></a><a name="4.2"></a>
  - [4.2](#whitespace--before-blocks) Place 1 space before the leading brace. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

    ```javascript
    // bad
    function test(){
      console.log( 'test' );
    }

    // good
    function test() {
      console.log( 'test' );
    }

    // bad
    dog.set( 'attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    } );

    // good
    dog.set( 'attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    } );
    ```
    
<a name="whitespace--around-keywords"></a><a name="4.3"></a>
  - [4.3](#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)

    ```javascript
    // bad
    if( isJedi ) {
      fight ();
    }

    // good
    if ( isJedi ) {
      fight();
    }

    // bad
    function fight () {
      console.log ( 'Swooosh!' );
    }

    // good
    function fight() {
      console.log( 'Swooosh!' );
    }
    ```

  <a name="whitespace--infix-ops"></a><a name="4.4"></a>
  - [4.4](#whitespace--infix-ops) Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)

    ```javascript
    // bad
    const x=y+5;

    // good
    const x = y + 5;
    ```

  <a name="whitespace--newline-at-end"></a><a name="4.5"></a>
  - [4.5](#whitespace--newline-at-end) End files with a single newline character. eslint: [`eol-last`](https://eslint.org/docs/rules/eol-last)

    ```javascript
    // bad
    import { es6 } from './styleguide';
      // ...
    export default es6;
    ```

    ```javascript
    // bad
    import { es6 } from './styleguide';
      // ...
    export default es6;↵
    ↵
    ```

    ```javascript
    // good
    import { es6 } from './styleguide';
      // ...
    export default es6;↵
    ```

  <a name="whitespace--comma-spacing"></a><a name="4.6"></a>
  - [4.6](#whitespace--comma-spacing) Avoid spaces before commas and require a space after commas. eslint: [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

    ```javascript
    // bad
    const foo = 1,bar = 2;
    const arr = [ 1 , 2 ];

    // good
    const foo = 1, bar = 2;
    const arr = [ 1, 2 ];
    ```

**[⬆ back to top](#table-of-contents)**
