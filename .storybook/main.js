module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     configureJSX: true,
    //   },
    // },
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
