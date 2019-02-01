class Github {
  constructor() {
    this.client_id = "642eb276eb442b56dfd8";
    this.client_secret = "937112c79153a38afae10e0ed03c81ddc1664196";
  }

  async getuser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profileReposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profileRepos = await profileReposResponse.json();
    const profile = await profileResponse.json();

    return { profile, profileRepos };
  }
}
