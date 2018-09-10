# Hdash
![CircleCI](https://circleci.com/gh/Hkh12/hdash.svg?style=svg)
![Dependencies](https://david-dm.org/Hkh12/hdash.svg)

A new front-end tool to bind UI with app state.
## Explanation
Hdash is not a framework, and it's not concerned with rendering things. No template parsers, virtual dom, files, loaders, etc. Its API is inspired by [Rivets.js](http://rivetsjs.com), [Stimulus](https://stimulusjs.org) and [Vue](https://vuejs.org). Rivets is no longer maintained, and Stimulus has some limitations.

It's simple to work with Hdash. you create an **instance**, define state, actions and everything else you need, add some atributes to your HTML code (some special attributes called **directives**), and you're done.

## Getting started
> The module is not published yet, and it's work in progress.

imagine this is your HTML document:
```html
<body>
	<div id="app">
		<input type="text" placeholder='Type your name...'>
		<button>Clear input</button>
		<button>Log name</button>
		<hr>
		<h1>Hello</h1>
	</div>
</body>
```
we want to create a simple greeter app. Now, it's time to add the scripts:
```html
<script src="hdash.js"></script>
<script src="app.js"></script>
```
and, in your `app.js`:
```js
new Hdash('#app', {
	state: {
		name: ''
	},
	actions: {
		log(){
			console.log(this.state.name)
		}
	}
})
```
now, we should add the directives. update the HTML to this: 
```html
<div id="app">
	<input type="text" placeholder='Type your name...' h-model='name'>
	<button h-on:click='name = ""'>clear</button>
	<button h-on:click='log'>log</button>
	<hr>
	<h1>Hello { name }</h1>
</div>
```
Refresh the page and, boom! 
- as you type in the input, content of `h1` will be updated
- when you click on "clear" button, input will become empty
- when you click on "log" button, input's value will be logged into console