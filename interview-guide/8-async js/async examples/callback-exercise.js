const users = getUsers((users) => {
  console.log('users are ', users);
  getRepos((repos) => {
    console.log('repos are ', repos);
  });
  getCommits((commits) => {
    console.log('commits are ', commits);
  });
});

function getUsers(cb) {
  setTimeout(() => {
    console.log('getting users');
    cb([
      { id: 1, name: 'Naruto' },
      { id: 2, name: 'Sasuke' },
    ]);
  }, 1000);
}

function getRepos(sb) {
  setTimeout(() => {
    console.log('getting repos');
    sb([
      { id: 1, name: 'Naruto repo1', userId: 1 },
      { id: 2, name: 'Naruto repo2', userId: 1 },
      { id: 3, name: 'Sasuke repo1', userId: 2 },
      { id: 4, name: 'Sasuke repo2', userId: 2 },
    ]);
  }, 1000);
}

function getCommits(cb) {
  setTimeout(() => {
    console.log('getting commits');
    cb([
      { id: 1, name: 'Naruto commit1', repoId: 1 },
      { id: 2, name: 'Naruto commit2', repoId: 1 },
      { id: 3, name: 'Sasuke commit1', repoId: 1 },
      { id: 4, name: 'Sasuke commit2', repoId: 1 },
    ]);
  }, 1000);
}
