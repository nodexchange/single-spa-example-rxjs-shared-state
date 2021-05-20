import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const data = {
  props: {
    bottomlineProp: "helloWorld",
    authToken: "fds789dsfyuiosodusfd",
    loggedInUser: fetch("/api/logged-in-user").then((r) => r.json()),
  },
};
const routes = constructRoutes(
  document.querySelector("#single-spa-layout"),
  data
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
