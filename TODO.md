# TODO

# Refactor

- [ ] Lalu: Fix song display for artist page
- [ ] Check all projects and their link-backs, to point to new url.
  - [ ] Fake Store API
- [ ] BioRastro: Use HTML or in-game UI (one or the other, not both), to fix viewport issues.
- [ ] Add short description to images.
- [ ] Move iframe rendering into separate component that receives the url, and also the configuration for the rendering of the iframe, i.e. url, height, etc. This way it can be used in other non-default project pages.
- [ ] Use small and normal-sized images for projects.
- [ ] Move project pagination to re-usable component
- [ ] Fix Scroll for games
  - It is fixed by adding a `e.preventDefault` on the document of each game.

# Testing

- [ ] Write unit tests for... everything
