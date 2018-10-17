# @nisje/eslint-plugin
Nisje's ESLint plugin, following our styleguide.

## Installation
You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install [`@nisje/eslint-plugin`](https://github.com/DekodeInteraktiv/nisje/styleguide-javascript/tree/master/packages/@nisje/eslint-plugin):

```
$ npm install @nisje/eslint-plugin --save-dev
```

## Usage
This plugin exports a [`recommended` config](index.js) that enforces best practices.

Create your own `.eslintrc.js` configuration file:

```js
{
	"extends": "plugin:@nisje/recommended",
	"plugins": [
		"@nisje"
	]
}
```

Or see the [ESLint docs](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats) for more information about configuration file formats.

You can also stack any of the extra shared configs on top of the "recommended" config by extending an array of linting configs. For example, this package provides a React linting config, which can be added to the recommended config with the following configuration file:

```js
{
	"extends": [
		"plugin:@nisje/recommended",
		"plugin:@nisje/react"
	]
}
```

## Available rulesets
The following rulesets are available:

*   **react**: Enforces best React.js practices
*   **recommended**: Enforces best practices and possible errors
