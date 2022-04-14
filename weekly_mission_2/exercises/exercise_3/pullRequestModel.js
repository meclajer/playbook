const pullRequest = {

    title: "Aporte personal",
    autor: "meclajer",
    branchName: "main",
    dateCreated: Date("2022-04-07:13:55:21-0600"),
    status: "1 workflow awaiting approval",
    repositoryNameAssociated: "visualpartnership:main",
    getStatus: function() {
        return `Status: ${this.status}`
    },
    getTitleAndAutor: function() {
        return `${this.title.toLocaleUpperCase()} \n ${this.autor.toLocaleLowerCase()} commented ${this.dateCreated}`
    },

}


console.info("Object: \n" + pullRequest)
console.info("\n getStatus: \n" + pullRequest.getStatus())
console.info("\n getGeneralInfo:\n" + pullRequest.getTitleAndAutor())