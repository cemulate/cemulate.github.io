FROM jekyll/jekyll:4

COPY . /srv/jekyll

WORKDIR /srv/jekyll

RUN bundle update && \
    bundle install

ENTRYPOINT bundle exec jekyll build --watch