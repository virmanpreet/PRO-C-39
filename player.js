class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
        
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getInfo() {
        var NameInfoRef1 = database.ref('players/player1/name');
        NameInfoRef1.on("value", (data) => {
        player1Name = data.val();
        })
        var NameInfoRef2 = database.ref('players/player2/name');
        NameInfoRef2.on("value", (data) => {
        player2Name = data.val();
        })

        var scoreInfoRef1 = database.ref('players/player1/score');
        scoreInfoRef1.on("value", (data) => {
        score1 = data.val();
        })

        var scoreInfoRef2 = database.ref('players/player2/score');
        scoreInfoRef2.on("value", (data) => {
        score2 = data.val();
        })
    }
}
