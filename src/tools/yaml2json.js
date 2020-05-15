import YAML from 'yamljs';
import rp from 'request-promise';

const getJsonData = function (url) {
  return rp(url).then((str) => {
    return YAML.parse(str);
  });
};

export { getJsonData };
