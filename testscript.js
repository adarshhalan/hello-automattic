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

		    	// shelljs.exec('git add dist && git push origin \'git subtree split --prefix output gh-pages\':gh-pages --force');
		    	shelljs.exec('git add dist && git commit -am \'Auto builder\' && git subtree push --prefix dist origin testy && git remove dist');

		    	fs.rename('./.gitignore.publish', './.gitignore', function(err) {
				    if ( err ) {
				    	console.log('ERROR: ' + err)
				    } else {
				    	fs.rename('./.gitignore', './.gitignore.original', function(err) {
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