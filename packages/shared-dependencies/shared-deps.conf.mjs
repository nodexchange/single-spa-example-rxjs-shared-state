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
      name: "prop-types",
      versions: ["15.7.2"],
      include: ["lib/**"],
    },
    {
      name: "rxjs",
      versions: ["7.2.0"],
      include: ["dist/**"],
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
