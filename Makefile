.DEFAULT_GOAL := help
.PHONY: help clean deploy-staging deploy-prod build-image

help:
	@echo "== superscript.xyz makefile reference =="
	@echo ""
	@echo "          build: build final artifacts into ./public/"
	@echo "    build-image: build docker image"
	@echo " deploy-staging: push build artifact to staging env https://staging.superscript.xyz"
	@echo "    deploy-prod: push build artifact to prod env https://www.superscript.xyz"
	@echo "          clean: delete build artifact"
	@echo ""

build:
	./node_modules/gatsby/cli.js build

build-image:
	docker build -t superscript/site .

deploy-staging: build
	aws s3 sync public s3://staging.superscript.xyz/

deploy-prod: build
	aws s3 sync public s3://www.superscript.xyz/

clean:
	./node_modules/gatsby/cli.js clean
