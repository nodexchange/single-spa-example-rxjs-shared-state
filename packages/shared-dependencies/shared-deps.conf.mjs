/**
 * @type {import('self-hosted-shared-dependencies').BuildOpts}
 */
const config = {
  packages: [
    {
      name: "single-spa",
      versions: ["^5.9.3"],
      include: ["lib/system/**"],
    },
    {
      name: "react",
      versions: ["17.0.1"],
      include: ["umd/**"],
    },
    {
      name: "react-dom",
      versions: ["17.0.1"],
      include: ["umd/**"],
    },
    {
      name: "vue",
      versions: ["2.6.14"],
      include: ["dist/vue.js", "dist/vue.min.js"],
    },
    {
      name: "vue-router",
      versions: ["3.5.2"],
      include: ["dist/vue-router.js", "dist/vue-router.min.js"],
    },
    {
      name: "single-spa-angularjs",
      versions: ["4.3.0"],
      include: ["lib/**"],
    },
    {
      name: "prop-types",
      versions: ["15.7.2"],
      include: ["lib/**"],
    },
    {
      name: "memoize-one",
      versions: ["5.2.1"],
      include: ["dist/**"],
    }
  ],
  logLevel: "debug",
  clean: true,
  // skipPackagesAtUrl:
  //   "https://storage.googleapis.com/polyglot.microfrontends.app/npm/",
};

export default config;
