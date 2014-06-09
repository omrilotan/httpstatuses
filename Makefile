REPORTER = spec

test: unit coverage clean

unit: node_modules
	@NODE_ENV=test ./node_modules/.bin/mocha test/*-test.js --reporter $(REPORTER)

coverage: node_modules
	@echo "Checking test coverage..."
	@node ./node_modules/.bin/istanbul cover _mocha &> /dev/null
	@node ./node_modules/.bin/istanbul check-coverage --statements 100 --branches 100 --functions 100 --lines 100 && echo "OK"

node_modules:
	npm install

clean:
	@rm -rf coverage

.PHONY: test unit coverage clean
