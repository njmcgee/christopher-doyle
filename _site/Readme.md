# RE Marketing

This is the repository that powers the Reading Eggs marketing site at http://readingeggs.com

The preview can be found at http://re-marketing.blakedev.com/

## Editing Content

To update content for the site, 

1. Go to [this page](https://github.com/blake-education/re-marketing/tree/gh-pages/pages/_posts)
2. Click on the file you want to edit
3. Click on the `EDIT` button on the top right corner of the screen
4. Once you are done editing click on the `COMMIT CHANGES` button on the bottom right corner of the screen

Changes should appear within minutes of saving.

## Development

To get the site working on a development machine,

1. `git checkout gh-pages`
2. `bundle install`
3. `bundle exec foreman start`
4. The site should now be running on http://localhost:4000

### A special note about CSS

Be sure to only edit .scss files in 'scss' directory. Any edits to .css files will be overwritten the next time someone else makes a change.