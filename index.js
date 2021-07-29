module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "end-with-jira-id": [2, "always"],
    },
    plugins: [
        {
            rules: {
                "end-with-jira-id": ({ subject }) => {
                    const pattern = / \[[A-Z]+-[0-9]+\]$/;
                    if (!subject || !subject.match(pattern)) {
                        return [
                            false,
                            "commit message must end with Jira task ID. e.g. [SBRT-1234]",
                        ];
                    }
                    return [true];
                },
            },
        },
    ],
};