var gn = require('gracenode');
var assert = require('assert');
var prefix = require('./prefix');

describe('view module ->', function () {

	console.log('***Notice: This test requires gracenode installed in the same directory as this module.');

	it('Can load a view file', function (done) {

		gn.setConfigPath(prefix + 'gracenode-view/test/configs/');
		gn.setConfigFiles(['index.json']);

		gn.use('gracenode-view');

		gn.setup(function (error) {
			assert.equal(error, undefined);
			var view = gn.view.create();
			view.assign('test', 'test');
			view.load(prefix + 'gracenode-view/test/test.html', function (error, content) {
				console.log(content);
				assert.equal(error, null);
				done();
			});
		});

	});

});
