/**
 * @type {import('self-hosted-shared-dependencies').BuildOpts}
 */
const config = {
  packages: [
    {
      name: "@glu/theming",
      versions: ["3.0.5"],
      include: ["**"],
    },
    {
      name: "@glu/buttons-react",
      versions: ["1.3.4"],
      include: ["umd/**"],
    },
    {
      name: "@glu/locale",
      versions: ["0.6.8"],
      include: ["umd/**"],
    },
    {
      name: "@glu/utilities-react",
      versions: ["0.5.2"],
      include: ["umd/**"],
    },
    {
      name: "@glu/icons-react",
      versions: ["1.6.4"],
      include: ["umd/**"],
    }
  ],
  logLevel: "debug",
  clean: true,
  npmRegistry: "http://ux-nexus.saas-n.com/repository/ux-npm-group/",
};

export default config;
