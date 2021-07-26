/**
 * @type {import('self-hosted-shared-dependencies').BuildOpts}
 */
const config = {
  packages: [
    {
      name: "@glu/accordion-react",
      versions: ["2.0.4"],
      include: ["**"],
    },
    {
      name: "@glu/alerts-react",
      versions: ["1.0.4"],
      include: ["**"],
    },
    {
      name: "@glu/buttons-react",
      versions: ["1.3.4"],
      include: ["**"],
    },
    {
      name: "@glu/data-components",
      versions: ["4.3.0"],
      include: ["**"],
    },
    {
      name: "@glu/datepicker-react",
      versions: ["3.3.1"],
      include: ["**"],
    },
    {
      name: "@glu/dropdown-react",
      versions: ["3.0.0"],
      include: ["**"],
    },
    {
      name: "@glu/form-components",
      versions: ["2.3.0"],
      include: ["**"],
    },
    {
      name: "@glu/icons-react",
      versions: ["1.6.9"],
      include: ["**"],
    },
    {
      name: "@glu/indicators-react",
      versions: ["1.0.7"],
      include: ["**"],
    },
    {
      name: "@glu/grid-react",
      versions: ["4.7.8"],
      include: ["**"],
    },
    {
      name: "@glu/layout-react",
      versions: ["1.0.3"],
      include: ["**"],
    },
    {
      name: "@glu/list-builder",
      versions: ["3.0.0"],
      include: ["**"],
    },
    {
      name: "@glu/locale",
      versions: ["0.6.8"],
      include: ["**"],
    },
    {
      name: "@glu/modal-react",
      versions: ["2.0.5"],
      include: ["**"],
    },
    {
      name: "@glu/polling",
      versions: ["2.0.1"],
      include: ["**"],
    },
    {
      name: "@glu/popover-react",
      versions: ["4.0.2"],
      include: ["**"],
    },
    {
      name: "@glu/side-nav",
      versions: ["0.9.2"],
      include: ["**"],
    },
    {
      name: "@glu/store",
      versions: ["2.0.0"],
      include: ["**"],
    },
    {
      name: "@glu/switch-react",
      versions: ["2.0.2"],
      include: ["**"],
    },
    {
      name: "@glu/tabs-react",
      versions: ["2.1.0"],
      include: ["**"],
    },
    {
      name: "@glu/theming",
      versions: ["3.0.5"],
      include: ["**"],
    },
    {
      name: "@glu/transitions-react",
      versions: ["0.3.1"],
      include: ["**"],
    },
    {
      name: "@glu/type-ahead-react",
      versions: ["3.1.3"],
      include: ["**"],
    },
    {
      name: "@glu/url-manager",
      versions: ["2.0.0"],
      include: ["**"],
    },
    {
      name: "@glu/utilities-react",
      versions: ["0.5.2"],
      include: ["**"],
    },
    {
      name: "@glu/validation-react",
      versions: ["1.3.7"],
      include: ["**"],
    },
    
  ],
  logLevel: "debug",
  clean: true,
  npmRegistry: "http://ux-nexus.saas-n.com/repository/ux-npm-group/",
};

export default config;
