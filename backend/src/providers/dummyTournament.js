const TournamentProvider = [

    {
        game: "Valorant",

        tournaments: [
            {

                id: 1,

                name: "VCT Masters Toronto",

                status: "Live",

                prizePool: 1000000,

                venue: "Toronto",

                teams: 16,

                currentStage: "Playoffs",

                mvp: "jonathan",

                podium: [
                    "s8ul",
                    "sentinels",
                    "global esports"
                ],

                PointsTable: [
                    {
                        id: 1,
                        rank: 1,
                        team: "Sentinels",
                        matches: 8,
                        wins: 7,
                        losses: 1,
                        kills: 142,
                        kdRatio: 1.42,
                        points: 21
                    },
                    {
                        id: 2,
                        rank: 2,
                        team: "Fnatic",
                        matches: 8,
                        wins: 6,
                        losses: 2,
                        kills: 128,
                        kdRatio: 1.31,
                        points: 18
                    },
                    {
                        id: 3,
                        rank: 3,
                        team: "Paper Rex",
                        matches: 8,
                        wins: 5,
                        losses: 3,
                        kills: 119,
                        kdRatio: 1.24,
                        points: 15
                    }
                ],

                prizeDistribution: [
                    {
                        position: 1,
                        team: "Sentinels",
                        prize: 500000
                    },
                    {
                        position: 2,
                        team: "Fnatic",
                        prize: 300000
                    },
                    {
                        position: 3,
                        team: "Paper Rex",
                        prize: 200000
                    }
                ],
                awards: [
                    {
                        id: 1,
                        title: "MVP",
                        player: "Jonathan"
                    },
                    {
                        id: 2,
                        title: "Top Fragger",
                        player: "TenZ"
                    },
                    {
                        id: 3,
                        title: "Best Clutch",
                        player: "Boaster"
                    }
                ],
                recentMatches: [
                    {
                        id: 1,
                        teamA: "Sentinels",
                        teamB: "Fnatic",
                        scoreA: 2,
                        scoreB: 1,
                        status: "Completed"
                    },
                    {
                        id: 2,
                        teamA: "Paper Rex",
                        teamB: "Global Esports",
                        scoreA: 1,
                        scoreB: 2,
                        status: "Completed"
                    },
                    {
                        id: 3,
                        teamA: "Sentinels",
                        teamB: "Paper Rex",
                        scoreA: 1,
                        scoreB: 1,
                        status: "Live"
                    }
                ],

                bracket: {
                    rounds: [
                        {
                            name: "Quarter Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Fnatic",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Paper Rex",
                                    team2: "Gen.G",
                                    winner: "Paper Rex"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "NRG",
                                    winner: "Team Liquid"
                                },
                                {
                                    team1: "DRX",
                                    team2: "T1",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Semi Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Paper Rex",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "DRX",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Grand Final",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "DRX",
                                    winner: "Sentinels"
                                }
                            ]
                        }
                    ]
                }


            },

            {
                id: 2,

                name: "VCT Masters Toronto",

                status: "Live",

                prizePool: 1000000,

                venue: "Toronto",

                teams: 16,

                currentStage: "Playoffs",

                mvp: "mortal",

                podium: [
                    "s8ul",
                    "sentinels",
                    "global esports"
                ],

                PointsTable: [
                    {
                        id: 1,
                        rank: 1,
                        team: "Sentinels",
                        matches: 8,
                        wins: 7,
                        losses: 1,
                        kills: 142,
                        kdRatio: 1.42,
                        points: 21
                    },
                    {
                        id: 2,
                        rank: 2,
                        team: "Fnatic",
                        matches: 8,
                        wins: 6,
                        losses: 2,
                        kills: 128,
                        kdRatio: 1.31,
                        points: 18
                    },
                    {
                        id: 3,
                        rank: 3,
                        team: "Paper Rex",
                        matches: 8,
                        wins: 5,
                        losses: 3,
                        kills: 119,
                        kdRatio: 1.24,
                        points: 15
                    }
                ],
                prizeDistribution: [
                    {
                        position: 1,
                        team: "Sentinels",
                        prize: 500000
                    },
                    {
                        position: 2,
                        team: "Fnatic",
                        prize: 300000
                    },
                    {
                        position: 3,
                        team: "Paper Rex",
                        prize: 200000
                    }
                ],
                awards: [
                    {
                        id: 1,
                        title: "MVP",
                        player: "Jonathan"
                    },
                    {
                        id: 2,
                        title: "Top Fragger",
                        player: "TenZ"
                    },
                    {
                        id: 3,
                        title: "Best Clutch",
                        player: "Boaster"
                    }
                ],

                recentMatches: [
                    {
                        id: 1,
                        teamA: "Sentinels",
                        teamB: "Fnatic",
                        scoreA: 2,
                        scoreB: 1,
                        status: "Completed"
                    },
                    {
                        id: 2,
                        teamA: "Paper Rex",
                        teamB: "Global Esports",
                        scoreA: 1,
                        scoreB: 2,
                        status: "Completed"
                    },
                    {
                        id: 3,
                        teamA: "Sentinels",
                        teamB: "Paper Rex",
                        scoreA: 1,
                        scoreB: 1,
                        status: "Live"
                    }
                ],
                bracket: {
                    rounds: [
                        {
                            name: "Quarter Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Fnatic",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Paper Rex",
                                    team2: "Gen.G",
                                    winner: "Paper Rex"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "NRG",
                                    winner: "Team Liquid"
                                },
                                {
                                    team1: "DRX",
                                    team2: "T1",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Semi Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Paper Rex",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "DRX",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Grand Final",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "DRX",
                                    winner: "Sentinels"
                                }
                            ]
                        }
                    ]
                }

            }
        ]
    },

    {
        game: "BGMI",

        tournaments: [
            {
                id: 3,

                name: "VCT Masters Toronto",

                status: "Live",

                prizePool: 1000000,

                venue: "Toronto",

                teams: 16,

                currentStage: "Playoffs",

                mvp: "scout",

                podium: [
                    "s8ul",
                    "sentinels",
                    "global esports"
                ],

                PointsTable: [
                    {
                        id: 1,
                        rank: 1,
                        team: "Sentinels",
                        matches: 8,
                        wins: 7,
                        losses: 1,
                        kills: 142,
                        kdRatio: 1.42,
                        points: 21
                    },
                    {
                        id: 2,
                        rank: 2,
                        team: "Fnatic",
                        matches: 8,
                        wins: 6,
                        losses: 2,
                        kills: 128,
                        kdRatio: 1.31,
                        points: 18
                    },
                    {
                        id: 3,
                        rank: 3,
                        team: "Paper Rex",
                        matches: 8,
                        wins: 5,
                        losses: 3,
                        kills: 119,
                        kdRatio: 1.24,
                        points: 15
                    }
                ],
                prizeDistribution: [
                    {
                        position: 1,
                        team: "Sentinels",
                        prize: 500000
                    },
                    {
                        position: 2,
                        team: "Fnatic",
                        prize: 300000
                    },
                    {
                        position: 3,
                        team: "Paper Rex",
                        prize: 200000
                    }
                ],
                awards: [
                    {
                        id: 1,
                        title: "MVP",
                        player: "Jonathan"
                    },
                    {
                        id: 2,
                        title: "Top Fragger",
                        player: "TenZ"
                    },
                    {
                        id: 3,
                        title: "Best Clutch",
                        player: "Boaster"
                    }
                ],
                recentMatches: [
                    {
                        id: 1,
                        teamA: "Sentinels",
                        teamB: "Fnatic",
                        scoreA: 2,
                        scoreB: 1,
                        status: "Completed"
                    },
                    {
                        id: 2,
                        teamA: "Paper Rex",
                        teamB: "Global Esports",
                        scoreA: 1,
                        scoreB: 2,
                        status: "Completed"
                    },
                    {
                        id: 3,
                        teamA: "Sentinels",
                        teamB: "Paper Rex",
                        scoreA: 1,
                        scoreB: 1,
                        status: "Live"
                    }
                ],
                bracket: {
                    rounds: [
                        {
                            name: "Quarter Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Fnatic",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Paper Rex",
                                    team2: "Gen.G",
                                    winner: "Paper Rex"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "NRG",
                                    winner: "Team Liquid"
                                },
                                {
                                    team1: "DRX",
                                    team2: "T1",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Semi Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Paper Rex",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "DRX",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Grand Final",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "DRX",
                                    winner: "Sentinels"
                                }
                            ]
                        }
                    ]
                }

            }
        ]
    },

    {
        game: "Dota 2",

        tournaments: [
            {
                id: 4,

                name: "VCT Masters Toronto",

                status: "Live",

                prizePool: 1000000,

                venue: "Toronto",

                teams: 16,

                currentStage: "Playoffs",

                mvp: "rega",

                podium: [
                    "s8ul",
                    "sentinels",
                    "global esports"
                ],
                PointsTable: [
                    {
                        id: 1,
                        rank: 1,
                        team: "Sentinels",
                        matches: 8,
                        wins: 7,
                        losses: 1,
                        kills: 142,
                        kdRatio: 1.42,
                        points: 21
                    },
                    {
                        id: 2,
                        rank: 2,
                        team: "Fnatic",
                        matches: 8,
                        wins: 6,
                        losses: 2,
                        kills: 128,
                        kdRatio: 1.31,
                        points: 18
                    },
                    {
                        id: 3,
                        rank: 3,
                        team: "Paper Rex",
                        matches: 8,
                        wins: 5,
                        losses: 3,
                        kills: 119,
                        kdRatio: 1.24,
                        points: 15
                    }
                ],
                prizeDistribution: [
                    {
                        position: 1,
                        team: "Sentinels",
                        prize: 500000
                    },
                    {
                        position: 2,
                        team: "Fnatic",
                        prize: 300000
                    },
                    {
                        position: 3,
                        team: "Paper Rex",
                        prize: 200000
                    }
                ],
                awards: [
                    {
                        id: 1,
                        title: "MVP",
                        player: "Jonathan"
                    },
                    {
                        id: 2,
                        title: "Top Fragger",
                        player: "TenZ"
                    },
                    {
                        id: 3,
                        title: "Best Clutch",
                        player: "Boaster"
                    }
                ],
                recentMatches: [
                    {
                        id: 1,
                        teamA: "Sentinels",
                        teamB: "Fnatic",
                        scoreA: 2,
                        scoreB: 1,
                        status: "Completed"
                    },
                    {
                        id: 2,
                        teamA: "Paper Rex",
                        teamB: "Global Esports",
                        scoreA: 1,
                        scoreB: 2,
                        status: "Completed"
                    },
                    {
                        id: 3,
                        teamA: "Sentinels",
                        teamB: "Paper Rex",
                        scoreA: 1,
                        scoreB: 1,
                        status: "Live"
                    }
                ],
                bracket: {
                    rounds: [
                        {
                            name: "Quarter Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Fnatic",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Paper Rex",
                                    team2: "Gen.G",
                                    winner: "Paper Rex"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "NRG",
                                    winner: "Team Liquid"
                                },
                                {
                                    team1: "DRX",
                                    team2: "T1",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Semi Finals",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "Paper Rex",
                                    winner: "Sentinels"
                                },
                                {
                                    team1: "Team Liquid",
                                    team2: "DRX",
                                    winner: "DRX"
                                }
                            ]
                        },
                        {
                            name: "Grand Final",
                            matches: [
                                {
                                    team1: "Sentinels",
                                    team2: "DRX",
                                    winner: "Sentinels"
                                }
                            ]
                        }
                    ]
                }

            }
        ]
    }

];

export default TournamentProvider;