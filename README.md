# SheetOnBG
 
Javascript/HTML templating tool for slapping Google Sheet data onto a background image.
Simple to change and adapt to basically any scenario where you want text on top of an image.

## Running
To get the example running against its provided test sheet:

1) Grab the latest copy of [GoogleSheetToJS.js](https://github.com/GrandyB/GoogleSheetToJS/blob/master/GoogleSheetToJS.js) and place alongside these files.

1) Go into `example.html` and update the `apiKey` variable to be your Google Sheets API key. This can be generated as part of the Google Developer Console, and how to do this can be found by searching for 'generate google sheets api key', e.g. [this](https://handsondataviz.org/google-sheets-api-key.html) article.

1) Load `example.html` in your browser and see the data being implanted from our [test Google Sheet](https://docs.google.com/spreadsheets/d/1qgS3X_KYOuY3sS0Wu_AV5FOyC02mTGGvKi-kR3sH_QI/edit?usp=sharing)!

## Customising
The `example.html` is quite well commented, but in general here's some tips:

- Update `apiKey`, `spreadsheetId` and `tabName` to match the Google Sheet you want to use; **remember to set the sheet's sharing options to be 'anyone with the link can view'**
- `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mate+SC" />` pulls down the 'Mate SC' font file from the [Google Fonts](https://fonts.google.com/) repository. Later, in the `<style>` tag, you'll see we're then informing all (`*`) elements on the page to use this as the `font-family`, along with its size and decoration
- Update the `<img id="background" src="background-example.png" />` to use a path to your own image in the `src` attribute
- Add your data in! Calls to createItem directly with the various parameters (cell, top, left, width, height, color), or create a helper function that wraps the call and provides default data
