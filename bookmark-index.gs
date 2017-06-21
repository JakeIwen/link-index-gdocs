function makeBookmarks() {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  var paragraphs = doc.getBody().getParagraphs();

  for (var i = 0; i < paragraphs.length; i++) {
    var attrs = paragraphs[i].getAttributes();
    if (attrs.HORIZONTAL_ALIGNMENT == 'Center' && attrs.FONT_SIZE != 8 && paragraphs[i].getText().length > 0 ) {
      setBookmark(paragraphs[i]);
      i = i+2;
    }
  }

  function setBookmark(elem) {
    var bookmarkPosition = doc.newPosition(elem, 0);
    doc.addBookmark(bookmarkPosition);
  }

}

function makeLinks() {
  var doc = DocumentApp.getActiveDocument();
  var bookmarks = doc.getBookmarks();
  var paragraphs = doc.getBody().getParagraphs();

  for (i = 0; i < bookmarks.length; i++) {
    var url = 'https://docs.google.com/document/d/166XGphR-hwy_yMF6ny0JdmdhEQy8AiQWyfUG1hO6vBM/edit#bookmark=' + bookmarks[i].getId();
    var titleLine = bookmarks[i].getPosition().getElement().getText().split(" - ");
    var titleRange = doc.getBody().findText(titleLine[titleLine.length-1]);

    if (titleRange) {
      var start = titleRange.getStartOffset();
      var finish = titleRange.getEndOffsetInclusive();
      titleRange.getElement().asText().editAsText().setLinkUrl(start, finish, url);
    }

  }
}

function test() {
  var doc = DocumentApp.getActiveDocument();
  var bookmarks = doc.getBookmarks();
  var paragraphs = doc.getBody().getParagraphs();
  Logger.log(doc.getBody().findText("estgwergsery45w"));
}



//function clearBookmarks() {
//  var doc = DocumentApp.getActiveDocument();
//  var bookmarks = doc.getBookmarks();
//  Logger.log(bookmarks[0].getId());
//  for (i = 0; i < bookmarks.length; i++) {
//    Logger.log(bookmarks[i]);
//    bookmarks[i].remove();
//  }
//
//}

//  var rangeStart = cursor.getElement();
//  Logger.log(cursor.getElement().getAttributes());
//  Logger.log(cursor.getElement().asText().getText());
//  Logger.log(cursor.getElement().getNextSibling().asText().getText());
//  rangeBuilder.addElement();
//  doc.setSelection(rangeBuilder.build());
//makeBookmarks();
//clearBookmarks();
