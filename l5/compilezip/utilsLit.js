function convertTagToFileName(tag) {
  const regex = /(.+)-(\d+)/;
  const match = tag.match(regex);
  if (match) {
    const [, rest, number] = match;
    const convertedSrc = rest.replace(/-(.)/g, (_, letter) => letter.toUpperCase());
    tag = `_${number}_${convertedSrc}`;
  }
  return tag;
}
function convertFileNameToTag(widget) {
  const regex = /_([0-9]+)_?(.*)/;
  const match = widget.match(regex);
  if (match) {
    const [, number, rest] = match;
    const convertedSrc = rest.replace(/([A-Z])/g, "-$1").toLowerCase();
    widget = `${convertedSrc}-${number}`;
  }
  if (widget.startsWith("-")) widget = widget.substring(1);
  return widget;
}
export {
  convertFileNameToTag,
  convertTagToFileName
};
