const rejectAll = ['@googlemaps/js-api-loader'];
const rejectMajor = [];

module.exports = {
  upgrade: true,
  reject: (dependencyName) => rejectAll.includes(dependencyName),
  target: (dependencyName) => (rejectMajor.includes(dependencyName) ? 'minor' : 'latest'),
};
