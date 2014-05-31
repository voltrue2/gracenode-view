# View Module

View module for gracenode framework.

View module is a very basic templating module for gracenode framework.


## How to include it in my project

To add this package as your gracenode module, add the following to your package.json:

```
"dependencies": {
        "gracenode": "",
        "gracenode-view": ""
}
```

To use this module in your application, add the following to your gracenode bootstrap code:

```
var gracenode = require('gracenode');
// this tells gracenode to load the module
gracenode.use('gracenode-view');
```

To access the module:

```
// the prefix gracenode- will be removed automatically
gracenode.view
```

Access
<pre>
gracenode.view
</pre>

Configurations
```javascript
"modules": {
	"view": {
		"preload": ["file path"...], // optional
		"minify": true or false // default is true > minify css and js files
	}
}
```

#####API: *assign*

<pre>
void assign(String name, mixed value)
</pre>
> Assigns a variable to be embeded to view file(s)
>> Exmple:
<pre>
// controller
gracenode.view.assign('foo', 'hello world');
// view file
(:= foo :)
// output
hello world
</pre>

#####API: *load*

<pre>
void load(String vilewFilePath, Function callback)
</pre>

Loads a view file.

```javascript
// controller file
module.exports.index = function (req, res) {
	gracenode.view.assign('foo', 'hello world');
	gracenode.view.load('/foo/index.html', function (error, contentData) {
		if (error) {
			return cb(error);
		}
		res.html(contentData);
	});
};
// this will output "hello world"
```

###### How to include view files
```html
<!-- include header HTML file -->
<div class="header">
(:include common/header.html :)
</div>
<!-- include CSS file -->
<style type="text/css">
(:include css/main.css :)
</style>
<!-- include Javascript file -->
<script type="text/javascript">
(:include js/main.js :)
</script>
<!-- include ALL files in the directory -->
<div class="content">
(:include content/ :)
</div>
```

All included files have access to the variables assigned by **assign** function.

All assigned variables are also available as Javascript variables in the client under window.gracenode object

##### .tpl files

When including files with .tpl, view module will remove tabs and line breaks. This is useful when you need to inject HTML in to javascript code etc.

Example:

File to be included:

```
<div>Test</div>
<div>Test2</div>
```

Javascript code to include the file above:

```
var htmlTpl = '(:include view/test/test.html.tpl :)';
// this will be:
// var htmlTpl = '<div>Test</div><div>Test2</div>';
```

###### Notes

There is no **if** nor **for-loop** in view module because view template files are just template files and should not contain any sort of logic.

If you need to generate a list of items or change the display depending on certain conditions, please use *Javascript* to do so. After all we are using Nodejs.
