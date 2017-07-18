.PHONY: build
build:
	bundle exec jekyll build

.PHONY: serve
serve:
	bundle exec jekyll serve --host 0.0.0.0 --port 8080

.PHONY: clean
clean:
	bundle exec jekyll clean

.PHONY: install
install:
	bundle install
