import rp from 'request-promise';

const getMarkdownStr = function (url) {
  return rp(url).then((markdownStr) => {
    return markdownStr;
  });
};

export default getMarkdownStr;
