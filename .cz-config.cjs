module.exports = {
  types: [
    {
      value: "feat",
      name: "feat:     A new feature (adding new capability)",
    },
    {
      value: "fix",
      name: "fix:      A bug fix (resolving an issue or crash)",
    },
    {
      value: "docs",
      name: "docs:     Documentation updates (README, API guides, comments)",
    },
    {
      value: "style",
      name: "style:    Code styling changes (formatting, white-space, semi-colons)",
    },
    {
      value: "refactor",
      name: "refactor: Code restructuring (neither fixes a bug nor adds a feature)",
    },
    {
      value: "perf",
      name: "perf:     Performance improvements (making code faster or more efficient)",
    },
    {
      value: "test",
      name: "test:     Adding missing tests or correcting existing tests",
    },
    {
      value: "build",
      name: "build:    Build systems, dependencies, or packaging (e.g., Gradle, npm, Docker)",
    },
    {
      value: "ci",
      name: "ci:       Continuous Integration changes (e.g., GitHub Actions)",
    },
    {
      value: "chore",
      name: "chore:    Other changes that don't modify source or test files",
    },
    {
      value: "revert",
      name: "revert:   Reverting a previous commit",
    },
  ],

  messages: {
    type: "Select the type of change:",
    subject: "Write a SHORT, imperative tense description:\n",
    body: "Provide a LONGER description of the change (optional):\n",
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer: "List any ISSUES CLOSED by this change (e.g., #123) (optional):\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100,
};
