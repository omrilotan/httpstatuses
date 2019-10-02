test: unit_coverage clean

unit_coverage: node_modules
	@NODE_ENV=test nyc mocha test/*-test.js --reporter spec

node_modules:
	npm install

clean:
	@rm -rf .nyc_output

.PHONY: test unit_coverage clean