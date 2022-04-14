// Haciendo referencia al fork del playbook de la mision
const repo = {

    name: "PLAYBOOK",
    author: "visualpartnership",
    lenguages: {
        JS: 100.0,
    },
    numberOfCommits: 22,
    stars: 0,
    forks: 633,
    issues_open: 10,
    issues_close: 5,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `Repo: ${this.name} was created by ${this.author}`
    }

}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())