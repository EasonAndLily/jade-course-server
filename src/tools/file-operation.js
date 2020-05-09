import rp from 'request-promise';

const getMarkdownStr = function (url) {
  return rp(url).then((markdownStr) => {
    // console.log(markdownStr);
    return markdownStr;
  });
};

export default getMarkdownStr;
