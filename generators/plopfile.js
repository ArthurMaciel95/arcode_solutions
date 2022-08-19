module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{name}}/index.tsx",
        templateFile: "template/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{name}}/index.test.tsx",
        templateFile: "template/test.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{name}}/styles.ts",
        templateFile: "template/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{name}}/index.stories.tsx",
        templateFile: "template/stories.tsx.hbs",
      },
    ],
  });
};
