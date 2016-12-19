const fs = require('fs');
const shelljs = require('shelljs');

fs.rename('./.gitignore', './.gitignore.original', function(err) {
    if ( err ) {
    	console.log('ERROR: ' + err)
    } else {
		fs.rename('./.gitignore.publish', './.gitignore', function(err) {
		    if ( err ) {
		    	console.log('ERROR: ' + err)
		    } else {

		    	shelljs.exec('git checkout testy && git add dist && git commit -am \'Auto builder\' && git subtree push --prefix dist origin testy && git rm -r --cached dist && git add .');
		    	// shelljs.exec('git add dist && git commit -am \'Autoo\' && git push origin \'git subtree split --prefix dist \':testy --force');

		    	fs.rename('./.gitignore', './.gitignore.publish', function(err) {
				    if ( err ) {
				    	console.log('ERROR: ' + err)
				    } else {
				    	fs.rename('./.gitignore.original', './.gitignore', function(err) {
						    if ( err ) {
						    	console.log('ERROR: ' + err)
						    }
						});
				    }
				});
		    };
		});
    };
});



// return 'cd ../spenuk.github.io && git add . && git commit -am "Auto build update @ '+ new Date().toLocaleString() +'" && git push -u origin master';
//           } else {
//             return 'cd ../spenuk.github.io && git add . && git commit -am "Auto build update: ' + message + '" && git push -u origin master';



//             git push origin \'git subtree split --prefix output gh-pages\':gh-pages --force