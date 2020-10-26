# Covid Tracker

## Requirements

- Git
- Node v12+ & NPM
- Angular CLI v10+

## Getting Started

### Clone the project

First step is you will to download the project to your computer.
Open your terminal and navigate to your directory of choice then run the following command.

```sh
git clone https://github.com/cool-dev-team-0/covid-tracker.git
```

### Install the Dependencies

Next you will need to install the node dependencies for this project.
You can do so with the following command.

```sh
npm install
```

### Test the project

To make sure everything is working run the following command to start the project.

```sh
npm run start
```

Then open up the following URL in your browser:
<http://localhost:4200>

### Create a branch

To start working on the project, you need to create a new branch by running the following command.

```sh
git checkout -b <your-branch-name>
```

Note: Your branch name should follow the same format as used in these examples:

```txt
feature/<feature-name>
fix/<fix-name>
refactor/<refactor-name>
docs/<doc-name>
test/<test-name>
```

Note: You should only create a new branch from the `master` branch. Please do not create branches from any other branch.
To ensure you are on the master branch run the following command prior to branching.

```sh
git checkout origin/master
```

### Committing

After you have created a branch you are free to start changing files and working on the project. Once you have completed a change you should make a commit for it. Commits should be small and only include the changes that you have made.

To start making a commit you will need to stage the files you want to add. Make sure everything is saved then run the following command.

```sh
git add <file-name>
# Example
git add src/app/app.component.html
```

You will need to repeat this for every file you wish to include in your commit. If you want to add all the files that have changed since the last commit you can run the following command.

```sh
git add -A
```

If you do add all the files you should be very certain that you have not mistakenly changed any files that are not related to your commit.

If you do stage any files you wish to unstage you can do so with the following command.

```sh
git reset <file-name>
```

Once you have all the files you wish to commit staged then you can commit with the following command.

```sh
git commit -m "<commit-message>"
```

Your commit message should be in the following format:

`<type>(<scope>): <subject>`

`<scope>` is optional

#### Example

```txt
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- <https://www.conventionalcommits.org/>
- <https://seesparkbox.com/foundry/semantic_commit_messages>
- <http://karma-runner.github.io/1.0/dev/git-commit-msg.html>

### Push your branch to master branch

Once you have committed work on your branch, you can push your branch to the master branch by running the following command.

```sh
git push origin <your-branch-name>
```

### Create a pull request

Once your branch is pushed to GitHub, you can create a pull request to be reviewed and merged into the master branch. To do this, go to the project GitHub page and click on ['Pull requests'](https://github.com/cool-dev-team-0/covid-tracker/pulls), then click on ['Create pull request'](https://github.com/cool-dev-team-0/covid-tracker/compare). Create a Pull Request including the following information:

- What you have changed
- Why this change is needed
- What [issues](https://github.com/cool-dev-team-0/covid-tracker/issues) is resolves
- Anything that breaks as a result of this change
- If the changes have been tested via Protractor or Jasmine

Once your Pull Request is created add a reviewer. The review will provide you feedback on your Pull Request for you to address update and push prior to being merged.

Note: You can freely update your Pull Request simply by making new commits this pushing to the same branch.

```sh
git push origin <your-branch-name>
```
