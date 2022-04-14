const issue = {
    title: "05 Live 2 Semana 2 [Miércoles 13 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "open",
    numberOfComments: 18,
    labels: ["FINALIZADO", "LIVE 2", "Semana-2"],
    author: "carlogilmar",
    dateCreated: Date("2022-04-12:10:15:21-0600"),
    lastUpdated: Date("2022-04-12:10:15:21-0600"),
    getTitleAndAuthor: function() {
        return `Title: ${this.title}, by ${this.author}.`
    },
    getGeneralInfo: function() {
        return `${this.title.toUpperCase()} \n${(this.status).toLowerCase()} ${this.author} opened this issue ${this.dateCreated} - ${this.numberOfComments} comments`
    },
}

console.info("Object: \n" + issue)
console.info("\n getTitlegetTitleAndAuthor: \n" + issue.getTitleAndAuthor())
console.info("\n getGeneralInfo:\n" + issue.getGeneralInfo())