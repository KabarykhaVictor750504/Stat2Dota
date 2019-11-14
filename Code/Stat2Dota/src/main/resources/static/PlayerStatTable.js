new Vue({
    el: '#app',
    data: {
        gameModes:[
            {
                id:'0',
                name:'No Game Mode'
            },
            {
                id:'1',
                name:'All Pick'
            },
            {
                id:'2',
                name:'Captains Mode'
            },
            {
                id:'3',
                name:'Random Draft'
            },
            {
                id:'4',
                name:'Single Draft'
            },
            {
                id:'5',
                name:'All Random'
            },
            {
                id:'7',
                name:'Diretide'
            },
            {
                id:'8',
                name:'Reverse Captains Mode'
            },
            {
                id:'9',
                name:'Reverse Captains Mode'
            },
            {
                id:'10',
                name:'Tutorial'
            },
            {
                id:'11',
                name:'Mid Only'
            },
            {
                id:'12',
                name:'Least Played'
            },
            {
                id:'13',
                name:'New Player Pool'
            },
            {
                id:'14',
                name:'Compendium Matchmaking'
            },
            {
                id:'15',
                name:'Custom'
            },
            {
                id:'16',
                name:'Captains Draft'
            },
            {
                id:'17',
                name:'Balanced Draft'
            },
            {
                id:'18',
                name:'Ability Draft'
            },
            {
                id:'20',
                name:'All Random Deathmatch'
            },
            {
                id:'21',
                name:'Solo Mid 1v1'
            },
            {
                id:'22',
                name:'Ranked All Pick'
            },

        ],
        playersGraphs:[],
        items:[
            {
                id:'0',
                name:'null'
            },
            {
                id:'1',
                name:'blink'
            },
            {
                id:'2',
                name:'blades'
            },
            {
                id:'3',
                name:'broadsword'
            },
            {
                id:'4',
                name:'chainmail'
            },
            {
                id:'5',
                name:'claymore'
            },
            {
                id:'6',
                name:'helm'
            },
            {
                id:'7',
                name:'javelin'
            },
            {
                id:'8',
                name:'hammer'
            },
            {
                id:'9',
                name:'platemail'
            },
            {
                id:'10',
                name:'quarterstaff'
            },
            {
                id:'11',
                name:'quelling'
            },
            {
                id:'12',
                name:'rop'
            },
            {
                id:'237',
                name:'faerie'
            },
            {
                id:'265',
                name:'raindrops'
            },
            {
                id:'244',
                name:'wind'
            },
            {
                id:'182',
                name:'shield'
            },
            {
                id:'247',
                name:'moon'
            },
            {
                id:'13',
                name:'guntlets'
            },
            {
                id:'14',
                name:'slippers'
            },
            {
                id:'15',
                name:'mantle'
            },
            {
                id:'16',
                name:'branch'
            },
            {
                id:'17',
                name:'bos'
            },
            {
                id:'18',
                name:'boe'
            },
            {
                id:'19',
                name:'robe'
            },
            {
                id:'20',
                name:'citclet'
            },
            {
                id:'21',
                name:'ogre'
            },
            {
                id:'22',
                name:'blade'
            },
            {
                id:'23',
                name:'staff'
            },
            {
                id:'24',
                name:'blink'
            },
            {
                id:'25',
                name:'gloves'
            },
            {
                id:'26',
                name:'mask'
            },
            {
                id:'27',
                name:"ringofr"
            },
            {
                id:'28',
                name:"sage's"
            },
            {
                id:'29',
                name:'boots'
            },
            {
                id:'30',
                name:'gem'
            },
            {
                id:'31',
                name:'cloak'
            },
            {
                id:'32',
                name:'talisman'
            },
            {
                id:'33',
                name:'cheese'
            },
            {
                id:'34',
                name:'stick'
            },
            {
                id:'35',
                name:'recipe'
            },
            {
                id:'36',
                name:'mw'
            },
            {
                id:'37',
                name:'ghost'
            },
            {
                id:'38',
                name:'clarity'
            },
            {
                id:'216',
                name:'mango'
            },
            {
                id:'39',
                name:'salve'
            },
            {
                id:'40',
                name:'dust'
            },
            {
                id:'41',
                name:'bottle'
            },
            {
                id:'42',
                name:'observer'
            },
            {
                id:'43',
                name:'sentry'
            },
            {
                id:'44',
                name:'tango'
            },
            {
                id:'45',
                name:'courier'
            },
            {
                id:'46',
                name:'town'
            },
            {
                id:'47',
                name:'recipe'
            },
            {
                id:'48',
                name:'travel'
            },
            {
                id:'49',
                name:'recipe'
            },
            {
                id:'50',
                name:'phase'
            },
            {
                id:'51',
                name:'demon'
            },
            {
                id:'52',
                name:'eaglesong'
            },
            {
                id:'53',
                name:'reaver'
            },
            {
                id:'54',
                name:'sacred'
            },
            {
                id:'55',
                name:'hyperstone'
            },
            {
                id:'56',
                name:'ringofh'
            },
            {
                id:'57',
                name:'void'
            },
            {
                id:'58',
                name:'mystic'
            },
            {
                id:'59',
                name:'energybooster'
            },
            {
                id:'60',
                name:'pointbooster'
            },
            {
                id:'61',
                name:'vitalitybooster'
            },
            {
                id:'62',
                name:'recipe'
            },
            {
                id:'63',
                name:'pt'
            },
            {
                id:'64',
                name:'recipe'
            },
            {
                id:'65',
                name:'midas'
            },
            {
                id:'66',
                name:'recipe'
            },
            {
                id:'67',
                name:'oblivionstaff'
            },
            {
                id:'68',
                name:'recipe'
            },
            {
                id:'69',
                name:'perseverance'
            },
            {
                id:'70',
                name:'recipe_poor_mans_shield'
            },
            {
                id:'71',
                name:'poor_mans_shield'
            },
            {
                id:'72',
                name:'recipe'
            },
            {
                id:'73',
                name:'bracer'
            },
            {
                id:'74',
                name:'recipe'
            },
            {
                id:'75',
                name:'wb'
            },
            {
                id:'76',
                name:'recipe'
            },
            {
                id:'77',
                name:'nullt'
            },
            {
                id:'78',
                name:'recipe'
            },
            {
                id:'79',
                name:'mekansm'
            },
            {
                id:'80',
                name:'recipe'
            },
            {
                id:'81',
                name:'vladmir'
            },
            {
                id:'218',
                name:'wards'
            },
            {
                id:'84',
                name:'flying_courier'
            },
            {
                id:'85',
                name:'recipe'
            },
            {
                id:'86',
                name:'buckler'
            },
            {
                id:'87',
                name:'recipe'
            },
            {
                id:'88',
                name:'basilius'
            },
            {
                id:'89',
                name:'recipe'
            },
            {
                id:'90',
                name:'pipe'
            },
            {
                id:'91',
                name:'recipe'
            },
            {
                id:'92',
                name:'urn'
            },
            {
                id:'93',
                name:'recipe'
            },
            {
                id:'94',
                name:'headdress'
            }, {
                id:'95',
                name:'recipe'
            }, {
                id:'96',
                name:'scythe'
            },
            {
                id:'97',
                name:'recipe'
            },
            {
                id:'98',
                name:'orchid'
            },
            {
                id:'250',
                name:'bloodthorn'
            },
            {
                id:'252',
                name:'sabre'
            },
            {
                id:'263',
                name:'pike'
            }, {
                id:'99',
                name:'recipe'
            },
            {
                id:'100',
                name:'eul'
            },
            {
                id:'232',
                name:'lens'
            },
            {
                id:'233',
                name:'recipe'
            },
            {
                id:'101',
                name:'recipe'
            },
            {
                id:'102',
                name:'force'
            },
            {
                id:'103',
                name:'recipe'
            },
            {
                id:'197',
                name:'recipe'
            },
            {
                id:'198',
                name:'recipe'
            },
            {
                id:'199',
                name:'recipe'
            },
            {
                id:'200',
                name:'recipe'
            },
            {
                id:'104',
                name:'dagon'
            },
            {
                id:'264',
                name:'wards'
            },
            {
                id:'201',
                name:'dagon'
            },
            {
                id:'202',
                name:'dagon'
            },
            {
                id:'203',
                name:'dagon'
            },
            {
                id:'204',
                name:'dagon'
            },
            {
                id:'105',
                name:'recipe'
            },
            {
                id:'191',
                name:'recipe'
            },
            {
                id:'192',
                name:'recipe'
            },
            {
                id:'106',
                name:'necronomicon'
            },
            {
                id:'193',
                name:'necronomicon'
            },
            {
                id:'194',
                name:'necronomicon'
            },
            {
                id:'107',
                name:'recipe'
            },
            {
                id:'108',
                name:'aganim'
            },
            {
                id:'109',
                name:'recipe'
            },
            {
                id:'110',
                name:'refresher'
            },
            {
                id:'111',
                name:'recipe'
            },
            {
                id:'112',
                name:'cuirass'
            },
            {
                id:'113',
                name:'recipe'
            },
            {
                id:'114',
                name:'tarrasque'
            },
            {
                id:'115',
                name:'recipe'
            },
            {
                id:'116',
                name:'bkb'
            },
            {
                id:'117',
                name:'aegis'
            },
            {
                id:'118',
                name:'recipe'
            },
            {
                id:'119',
                name:'shiva'
            },
            {
                id:'120',
                name:'recipe'
            },
            {
                id:'121',
                name:'bloodstone'
            },{
                id:'122',
                name:'recipe'
            },
            {
                id:'123',
                name:"linken's"
            },
            {
                id:'124',
                name:'recipe'
            },
            {
                id:'125',
                name:'vanguard'
            },
            {
                id:'126',
                name:'recipe'
            },
            {
                id:'127',
                name:'bm'
            },
            {
                id:'128',
                name:'recipe'
            },
            {
                id:'129',
                name:'soulbooster'
            },
            {
                id:'130',
                name:'recipe'
            },
            {
                id:'131',
                name:'hood'
            },
            {
                id:'132',
                name:'recipe'
            },
            {
                id:'133',
                name:'rapier'
            },
            {
                id:'134',
                name:'recipe'
            },
            {
                id:'135',
                name:'mkb'
            },
            {
                id:'136',
                name:'recipe'
            },
            {
                id:'137',
                name:'radiance'
            },
            {
                id:'138',
                name:'recipe'
            },
            {
                id:'139',
                name:'butterfly'
            },
            {
                id:'140',
                name:'recipe'
            },
            {
                id:'141',
                name:'daedalus'
            },
            {
                id:'142',
                name:'recipe'
            },
            {
                id:'143',
                name:'basher'
            },
            {
                id:'144',
                name:'recipe'
            },
            {
                id:'145',
                name:'bf'
            },
            {
                id:'146',
                name:'recipe'
            },
            {
                id:'147',
                name:'manta'
            },
            {
                id:'148',
                name:'recipe'
            },
            {
                id:'149',
                name:'crystalys'
            },
            {
                id:'150',
                name:'recipe'
            },
            {
                id:'151',
                name:'armlet'
            },
            {
                id:'183',
                name:'recipe'
            },
            {
                id:'152',
                name:'sb'
            },
            {
                id:'153',
                name:'recipe'
            },
            {
                id:'154',
                name:'say'
            },
            {
                id:'155',
                name:'recipe'
            },
            {
                id:'156',
                name:'satanic'
            },
            {
                id:'157',
                name:'recipe'
            },
            {
                id:'158',
                name:'mjollnir'
            },
            {
                id:'159',
                name:'recipe'
            },
            {
                id:'160',
                name:'skadi'
            },
            {
                id:'161',
                name:'recipe'
            },
            {
                id:'162',
                name:'sange'
            },
            {
                id:'163',
                name:'recipe'
            },
            {
                id:'164',
                name:'dominator'
            },
            {
                id:'165',
                name:'recipe'
            },
            {
                id:'166',
                name:'maelstrom'
            },
            {
                id:'167',
                name:'recipe'
            },
            {
                id:'168',
                name:'desolator'
            },
            {
                id:'169',
                name:'recipe'
            },
            {
                id:'170',
                name:'yasha'
            },
            {
                id:'171',
                name:'recipe'
            },
            {
                id:'172',
                name:'mom'
            },
            {
                id:'173',
                name:'recipe'
            },
            {
                id:'195',
                name:'recipe'
            },
            {
                id:'174',
                name:'diffusal'
            },
            {
                id:'196',
                name:'diffusal'
            },
            {
                id:'175',
                name:'recipe'
            },
            {
                id:'176',
                name:'ethereal'
            },
            {
                id:'177',
                name:'recipe'
            },
            {
                id:'178',
                name:'soulRing'
            },
            {
                id:'179',
                name:'recipe'
            },
            {
                id:'180',
                name:'arcane'
            },
            {
                id:'181',
                name:'orb'
            },
            {
                id:'184',
                name:'recipe'
            },
            {
                id:'185',
                name:'drum'
            },
            {
                id:'186',
                name:'recipe'
            },
            {
                id:'187',
                name:'medallion'
            },
            {
                id:'188',
                name:'smoke'
            },
            {
                id:'189',
                name:'recipe'
            },
            {
                id:'190',
                name:'veil'
            },
            {
                id:'205',
                name:'recipe'
            },
            {
                id:'206',
                name:'atos'
            },
            {
                id:'207',
                name:'recipe'
            },
            {
                id:'208',
                name:'abyssal'
            },
            {
                id:'209',
                name:'recipe'
            },
            {
                id:'210',
                name:'halberd'
            },
            {
                id:'211',
                name:'recipe'
            },
            {
                id:'212',
                name:'dfs'
            },
            {
                id:'213',
                name:'recipe'
            },
            {
                id:'214',
                name:'tranquil'
            },
            {
                id:'225',
                name:'nullifier'
            },
            {
                id:'254',
                name:'glimmer'
            },
            {
                id:'226',
                name:'lotus'
            },
            {
                id:'242',
                name:'crimson'
            },
            {
                id:'236',
                name:'dragonlance'
            },
            {
                id:'249',
                name:'silver'
            },
            {
                id:'235',
                name:'octatine'
            },
            {
                id:'240',
                name:'blightStone'
            },
            {
                id:'229',
                name:'solar'
            },
            {
                id:'257',
                name:'tome'
            },
            {
                id:'231',
                name:'greaves'
            },
            {
                id:'215',
                name:'amulet'
            },
            {
                id:'256',
                name:'aeon'
            },
            {
                id:'259',
                name:'kaya'
            },
            {
                id:'223',
                name:'meteor'
            },
            {
                id:'267',
                name:'vesel'
            },
            {
                id:'277',
                name:'yak'
            },
            {
                id:'269',
                name:'holylocket'
            },
            {
                id:'261',
                name:'crown'
            },
            {
                id:'279',
                name:'crown'
            },
            {
                id:'273',
                name:'kas'
            },
            {
                id:'239',
                name:'recipe'
            },
            {
                id:'220',
                name:'recipe'
            }
        ],
        gold:[],
        exp:[],
        lists:[],
        plays:[
            {
                first:'',
                second:'',
                third:''
            },
            {
                first:'',
                second:'',
                third:''
            },
            {
                first:'',
                second:'',
                third:''
            },
            {
                first:'',
                second:'',
                third:''
            },
            {
                first:'',
                second:'',
                third:''
            },{
                first:'',
                second:'',
                third:''
            },{
                first:'',
                second:'',
                third:''
            },{
                first:'',
                second:'',
                third:''
            },{
                first:'',
                second:'',
                third:''
            },{
                first:'',
                second:'',
                third:''
            },{
                first:'',
                second:'',
                third:''
            }
        ],
        searchByNicknames:'',
        radiantPlayers:[],
        direPlayers:[],
        radiantWin:'',
        direScore:'',
        radiantScore:'',
        Duration:'',
        nickname: '',
        typeOfSearch: '',
        ID:'',
        JSONString: '',
        playerMatchStatistics:'',
        playerStatistics:'',
        matches:[],
        win:'',
        lose:'',
        winrate:'',
        flag:'1',
        heroes: [
            {
                name: "antimage",
                id: 1,
                localized_name: "Anti-Mage"
            },
            {
                name: "axe",
                id: 2,
                localized_name: "Axe"
            },
            {
                name: "bane",
                id: 3,
                localized_name: "Bane"
            },
            {
                name: "bloodseeker",
                id: 4,
                localized_name: "Bloodseeker"
            },
            {
                name: "crystal_maiden",
                id: 5,
                localized_name: "Crystal Maiden"
            },
            {
                name: "drow_ranger",
                id: 6,
                localized_name: "Drow Ranger"
            },
            {
                name: "earthshaker",
                id: 7,
                localized_name: "Earthshaker"
            },
            {
                name: "juggernaut",
                id: 8,
                localized_name: "Juggernaut"
            },
            {
                name: "mirana",
                id: 9,
                localized_name: "Mirana"
            },
            {
                name: "shadow_fiend",
                id: 11,
                localized_name: "Shadow Fiend"
            },
            {
                name: "morphling",
                id: 10,
                localized_name: "Morphling"
            },
            {
                name: "phantom_lancer",
                id: 12,
                localized_name: "Phantom Lancer"
            },
            {
                name: "puck",
                id: 13,
                localized_name: "Puck"
            },
            {
                name: "pudge",
                id: 14,
                localized_name: "Pudge"
            },
            {
                name: "razor",
                id: 15,
                localized_name: "Razor"
            },
            {
                name: "sand_king",
                id: 16,
                localized_name: "Sand King"
            },
            {
                name: "storm_spirit",
                id: 17,
                localized_name: "Storm Spirit"
            },
            {
                name: "sven",
                id: 18,
                localized_name: "Sven"
            },
            {
                name: "tiny",
                id: 19,
                localized_name: "Tiny"
            },
            {
                name: "vengeful_spirit",
                id: 20,
                localized_name: "Vengeful Spirit"
            },
            {
                name: "windranger",
                id: 21,
                localized_name: "Windranger"
            },
            {
                name: "zeus",
                id: 22,
                localized_name: "Zeus"
            },
            {
                name: "kunkka",
                id: 23,
                localized_name: "Kunkka"
            },
            {
                name: "lina",
                id: 25,
                localized_name: "Lina"
            },
            {
                name: "lich",
                id: 31,
                localized_name: "Lich"
            },
            {
                name: "lion",
                id: 26,
                localized_name: "Lion"
            },
            {
                name: "shadow_shaman",
                id: 27,
                localized_name: "Shadow Shaman"
            },
            {
                name: "slardar",
                id: 28,
                localized_name: "Slardar"
            },
            {
                name: "tidehunter",
                id: 29,
                localized_name: "Tidehunter"
            },
            {
                name: "witch_doctor",
                id: 30,
                localized_name: "Witch Doctor"
            },
            {
                name: "riki",
                id: 32,
                localized_name: "Riki"
            },
            {
                name: "enigma",
                id: 33,
                localized_name: "Enigma"
            },
            {
                name: "tinker",
                id: 34,
                localized_name: "Tinker"
            },
            {
                name: "sniper",
                id: 35,
                localized_name: "Sniper"
            },
            {
                name: "necrolyte",
                id: 36,
                localized_name: "Necrophos"
            },
            {
                name: "warlock",
                id: 37,
                localized_name: "Warlock"
            },
            {
                name: "beastmaster",
                id: 38,
                localized_name: "Beastmaster"
            },
            {
                name: "queenofpain",
                id: 39,
                localized_name: "Queen of Pain"
            },
            {
                name: "venomancer",
                id: 40,
                localized_name: "Venomancer"
            },
            {
                name: "faceless_void",
                id: 41,
                localized_name: "Faceless Void"
            },
            {
                name: "wraith_king",
                id: 42,
                localized_name: "Skeleton King"
            },
            {
                name: "death_prophet",
                id: 43,
                localized_name: "Death Prophet"
            },
            {
                name: "phantom_assassin",
                id: 44,
                localized_name: "Phantom Assassin"
            },
            {
                name: "pugna",
                id: 45,
                localized_name: "Pugna"
            },
            {
                name: "templar_assassin",
                id: 46,
                localized_name: "Templar Assassin"
            },
            {
                name: "viper",
                id: 47,
                localized_name: "Viper"
            },
            {
                name: "luna",
                id: 48,
                localized_name: "Luna"
            },
            {
                name: "dragon_knight",
                id: 49,
                localized_name: "Dragon Knight"
            },
            {
                name: "dazzle",
                id: 50,
                localized_name: "Dazzle"
            },
            {
                name: "clockwerk",
                id: 51,
                localized_name: "Clockwerk"
            },
            {
                name: "leshrac",
                id: 52,
                localized_name: "Leshrac"
            },
            {
                name: "furion",
                id: 53,
                localized_name: "Nature's Prophet"
            },
            {
                name: "lifestealer",
                id: 54,
                localized_name: "Lifestealer"
            },
            {
                name: "dark_seer",
                id: 55,
                localized_name: "Dark Seer"
            },
            {
                name: "clinkz",
                id: 56,
                localized_name: "Clinkz"
            },
            {
                name: "omniknight",
                id: 57,
                localized_name: "Omniknight"
            },
            {
                name: "enchantress",
                id: 58,
                localized_name: "Enchantress"
            },
            {
                name: "huskar",
                id: 59,
                localized_name: "Huskar"
            },
            {
                name: "night_stalker",
                id: 60,
                localized_name: "Night Stalker"
            },
            {
                name: "broodmother",
                id: 61,
                localized_name: "Broodmother"
            },
            {
                name: "bounty_hunter",
                id: 62,
                localized_name: "Bounty Hunter"
            },
            {
                name: "weaver",
                id: 63,
                localized_name: "Weaver"
            },
            {
                name: "jakiro",
                id: 64,
                localized_name: "Jakiro"
            },
            {
                name: "batrider",
                id: 65,
                localized_name: "Batrider"
            },
            {
                name: "chen",
                id: 66,
                localized_name: "Chen"
            },
            {
                name: "spectre",
                id: 67,
                localized_name: "Spectre"
            },
            {
                name: "doom",
                id: 69,
                localized_name: "Doom"
            },
            {
                name: "ancient",
                id: 68,
                localized_name: "Ancient Apparition"
            },
            {
                name: "ursa",
                id: 70,
                localized_name: "Ursa"
            },
            {
                name: "spirit_breaker",
                id: 71,
                localized_name: "Spirit Breaker"
            },
            {
                name: "gyrocopter",
                id: 72,
                localized_name: "Gyrocopter"
            },
            {
                name: "alchemist",
                id: 73,
                localized_name: "Alchemist"
            },
            {
                name: "invoker",
                id: 74,
                localized_name: "Invoker"
            },
            {
                name: "silencer",
                id: 75,
                localized_name: "Silencer"
            },
            {
                name: "outworld_devourer",
                id: 76,
                localized_name: "outworld_devourer"
            },
            {
                name: "lycan",
                id: 77,
                localized_name: "Lycanthrope"
            },
            {
                name: "brewmaster",
                id: 78,
                localized_name: "Brewmaster"
            },
            {
                name: "shadow_demon",
                id: 79,
                localized_name: "Shadow Demon"
            },
            {
                name: "lone_druid",
                id: 80,
                localized_name: "Lone Druid"
            },
            {
                name: "chaos_knight",
                id: 81,
                localized_name: "Chaos Knight"
            },
            {
                name: "meepo",
                id: 82,
                localized_name: "Meepo"
            },
            {
                name: "treant_protector",
                id: 83,
                localized_name: "Treant Protector"
            },
            {
                name: "ogre_magi",
                id: 84,
                localized_name: "Ogre Magi"
            },
            {
                name: "undying",
                id: 85,
                localized_name: "Undying"
            },
            {
                name: "rubick",
                id: 86,
                localized_name: "Rubick"
            },
            {
                name: "disruptor",
                id: 87,
                localized_name: "Disruptor"
            },
            {
                name: "nyx_assassin",
                id: 88,
                localized_name: "Nyx Assassin"
            },
            {
                name: "naga_siren",
                id: 89,
                localized_name: "Naga Siren"
            },
            {
                name: "keeper_of_the_light",
                id: 90,
                localized_name: "Keeper of the Light"
            },
            {
                name: "io",
                id: 91,
                localized_name: "IO"
            },
            {
                name: "visage",
                id: 92,
                localized_name: "Visage"
            },
            {
                name: "slark",
                id: 93,
                localized_name: "Slark"
            },
            {
                name: "medusa",
                id: 94,
                localized_name: "Medusa"
            },
            {
                name: "troll_warlord",
                id: 95,
                localized_name: "Troll Warlord"
            },
            {
                name: "centaur_warrunner",
                id: 96,
                localized_name: "Centaur Warrunner"
            },
            {
                name: "magnus",
                id: 97,
                localized_name: "Magnus"
            },
            {
                name: "timbersaw",
                id: 98,
                localized_name: "Timbersaw"
            },
            {
                name: "bristleback",
                id: 99,
                localized_name: "Bristleback"
            },
            {
                name: "tusk",
                id: 100,
                localized_name: "Tusk"
            },
            {
                name: "skywrath_mage",
                id: 101,
                localized_name: "Skywrath Mage"
            },
            {
                name: "abaddon",
                id: 102,
                localized_name: "Abaddon"
            },
            {
                name: "elder_titan",
                id: 103,
                localized_name: "Elder Titan"
            },
            {
                name: "legion_commander",
                id: 104,
                localized_name: "Legion Commander"
            },
            {
                name: "ember_spirit",
                id: 106,
                localized_name: "Ember Spirit"
            },
            {
                name: "earth_spirit",
                id: 107,
                localized_name: "Earth Spirit"
            },
            {
                name: "underlord",
                id: 108,
                localized_name: "Underlord"
            },
            {
                name: "terrorblade",
                id: 109,
                localized_name: "Terrorblade"
            },
            {
                name: "phoenix",
                id: 110,
                localized_name: "Phoenix"
            },
            {
                name: "techies",
                id: 105,
                localized_name: "Techies"
            },
            {
                name: "oracle",
                id: 111,
                localized_name: "Oracle"
            },
            {
                name: "winter_wyvern",
                id: 112,
                localized_name: "Winter Wyvern"
            },
            {
                name: "arc",
                id: 113,
                localized_name: "Arc Warden"
            },
            {
                name: "mk",
                id: 114,
                localized_name: "Arc Warden"
            },
            {
                name: "grimstroke",
                id: 121,
                localized_name: "Chaos Knight"
            },
            {
                name: "pangolier",
                id: 120,
                localized_name: "Chaos Knight"
            },
            {
                name: "dark_willow",
                id: 119,
                localized_name: "Chaos Knight"
            },
            {
                name: "mars",
                id: 129,
                localized_name: "Chaos Knight"
            }
        ]
    },
    created() {
        this.connect()
    },
    methods: {
        generateGraph: function(){
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: minutes,
                    datasets: [
                        {
                            data: gold,
                            label: "Gold",
                            borderColor: "#c8cd00",
                            fill: false
                        },
                        {
                            data: exp,
                            label: "Experience",
                            borderColor: "#0117a2",
                            fill: false
                        }
                    ]
                }
            });
        },
        getRandomArbitrary: function() {
            return this.playerStatistics.matchesPlayeds.length;
        },
        generateArray: function() {
            count = this.playerStatistics.matchesPlayeds.length;
            for(var i=0; i < count; i++) {
                this.matches[i] = this.playerStatistics.matchesPlayeds[i];
                for(var j=0;j<this.heroes.length;j++) {
                    if (this.matches[i].heroId === this.heroes[j].id) {
                        this.matches[i].heroId = 'images/'+this.heroes[j].name+'.jpg'
                    }
                }
                for(var j=0;j<this.gameModes.length;j++) {
                    if (this.matches[i].lobbyType.toString() === this.gameModes[j].id) {
                        this.matches[i].lobbyType = this.gameModes[j].name
                    }
                }
                if(this.matches[i].playerSlot < 90 && this.matches[i].radiantWin=== true){
                    this.matches[i].radiantWin = 'Win';
                }else if(this.matches[i].playerSlot>90 && this.matches[i].radiantWin===true)
                    this.matches[i].radiantWin = 'Lose';
                if(this.matches[i].playerSlot<90 && this.matches[i].radiantWin===false){
                    this.matches[i].radiantWin = 'Lose';
                }else if(this.matches[i].playerSlot>90 && this.matches[i].radiantWin===false)
                    this.matches[i].radiantWin = 'Win';
            }

        },
        listOfPlayers: function(){
            this.lists = this.searchByNicknames;
          var  count = this.lists.length/3;
            for(var j=0,i=0;j<count;j++){
               this.plays[j].first = this.lists[i];
                i++;
                this.plays[j].second = this.lists[i];
                i++;
                this.plays[j].third = this.lists[i];
                i++;
            }
        },
        generatePlayersTable: function(){
            for(let i=0,m=5;i<5;i++,m++) {
                this.radiantPlayers[i] = this.playerMatchStatistics[i];
                this.direPlayers[i] = this.playerMatchStatistics[m];
                for(var j=0;j<this.items.length;j++) {
                    for(var l=0;l<this.radiantPlayers[i].hero_inventory.length;l++) {
                        if (this.radiantPlayers[i].hero_inventory[l].toString() === this.items[j].id) {
                            this.radiantPlayers[i].hero_inventory[l] =  this.items[j].name;
                        }
                    }
                }
                for(var j=0;j<this.items.length;j++) {
                    for(var l=0;l<this.direPlayers[i].hero_inventory.length;l++) {
                        if (this.direPlayers[i].hero_inventory[l].toString() === this.items[j].id) {
                            this.direPlayers[i].hero_inventory[l] =this.items[j].name;
                        }
                    }
                }
                for (var j = 0; j < this.heroes.length; j++)
                    if (this.radiantPlayers[i].hero_id === this.heroes[j].id)
                        this.radiantPlayers[i].hero_id = 'images/' + this.heroes[j].name + '.jpg'
                for (var j = 0; j < this.heroes.length; j++)
                    if (this.direPlayers[i].hero_id === this.heroes[j].id)
                        this.direPlayers[i].hero_id = 'images/' + this.heroes[j].name + '.jpg'
            }
        },

        strip:function(number) {
             return number.toFixed();
         },
        graphStringHandler: function(param){
                return 'Graphs.html?cmd=' + 4 + '&inf=' + param
        },
        getData: function() {
            this.sendMessage(this.getQueryVariable('cmd'))
            this.sendMessage(this.getQueryVariable('inf'))
        },
        getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
            console.log('Query variable %s not found', variable);
        },
        generateGraphs:function(){
            var ctx = document.getElementById("myChart");
            var ctx1 = document.getElementById("myChart1");
            var ctx2 = document.getElementById("myChart2");
            var minutes = [];
            var heroes = [];
            for(var i=0;i<10;i++) {
                for(var k=0;k<this.heroes.length;k++)
                    if(this.playersGraphs[i].heroID === this.heroes[k].id)
                        this.playersGraphs[i].heroID = this.heroes[k].localized_name;
                heroes.push(this.playersGraphs[i].heroID);
            }
            for(var i=0;i<this.gold.length;i++)
                minutes.push(i);
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: minutes,
                    datasets: [
                        {
                            data: this.gold,
                            label: "Gold",
                            borderColor: "#c8cd00",
                            fill: false
                        },
                        {
                            data: this.exp,
                            label: "Experience",
                            borderColor: "#0117a2",
                            fill: false
                        }
                    ]
                }
            });
            var myChart1 = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: minutes,
                    datasets: [
                        {
                            data: this.playersGraphs[0].playersGold,
                            label: heroes[0],
                            borderColor: "#17cd00",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[1].playersGold,
                            label: heroes[1],
                            borderColor: "#0117a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[2].playersGold,
                            label: heroes[2],
                            borderColor: "#a22510",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[3].playersGold,
                            label: heroes[3],
                            borderColor: "#0009a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[4].playersGold,
                            label: heroes[4],
                            borderColor: "#9e00a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[5].playersGold,
                            label: heroes[5],
                            borderColor: "#5da288",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[6].playersGold,
                            label: heroes[6],
                            borderColor: "rgba(162,47,0,0.64)",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[7].playersGold,
                            label: heroes[7],
                            borderColor: "#9da0a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[8].playersGold,
                            label: heroes[8],
                            borderColor: "#a29116",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[9].playersGold,
                            label: heroes[9],
                            borderColor: "#5057a2",
                            fill: false
                        }
                    ]
                }
            });
            var myChart2 = new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: minutes,
                    datasets: [
                        {
                            data: this.playersGraphs[0].playersExp,
                            label: heroes[0],
                            borderColor: "#17cd00",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[1].playersExp,
                            label: heroes[1],
                            borderColor: "#0117a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[2].playersExp,
                            label: heroes[2],
                            borderColor: "#a22510",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[3].playersExp,
                            label: heroes[3],
                            borderColor: "#0009a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[4].playersExp,
                            label: heroes[4],
                            borderColor: "#9e00a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[5].playersExp,
                            label: heroes[5],
                            borderColor: "#5da288",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[6].playersExp,
                            label: heroes[6],
                            borderColor: "rgba(162,47,0,0.64)",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[7].playersGold,
                            label: heroes[7],
                            borderColor: "#9da0a2",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[8].playersExp,
                            label: heroes[8],
                            borderColor: "#a29116",
                            fill: false
                        },
                        {
                            data: this.playersGraphs[9].playersExp,
                            label: heroes[9],
                            borderColor: "#5057a2",
                            fill: false
                        }
                    ]
                }
            });
        },
        connect () {

            var socket = new SockJS('/ws');
            stompClient = Stomp.over(socket);

            stompClient.connect({}, this.onConnected);

        },
        onConnected() {
            stompClient.subscribe('/topic/public', this.onMessageReceived);
            stompClient.send("/app/chat.addUser",
                {},
                JSON.stringify({sender: '123', type: 'JOIN'})
            )
            this.getData()

        },

        sendMessage(msg) {
            stompClient.send('/topic/public', {}, msg);
        },
        onMessageReceived(payload) {
            this.typeOfSearch = this.getQueryVariable('cmd');
            this.ID = this.getQueryVariable('inf');
            var chatMessage = {
                sender: this.typeOfSearch,
                content: this.ID,
                type: 'LEAVE'
            };

            if (this.flag === '1') {
                stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
                if(chatMessage.sender==='1'){
                    this.searchByNicknames =  JSON.parse(JSON.parse(payload.body).content);
                    this.listOfPlayers();
                    this.flag='0';
                }
                if(chatMessage.sender==='2') {
                    this.playerStatistics = JSON.parse(JSON.parse(payload.body).content);
                    this.nickname = this.playerStatistics.nickName;
                    this.win = this.playerStatistics.win;
                    this.lose = this.playerStatistics.lose;
                    this.winrate = this.playerStatistics.winrate;
                    this.generateArray();
                    this.flag='0';
                }
                if(chatMessage.sender==='3'){
                    this.playerMatchStatistics = JSON.parse(JSON.parse(payload.body).content);
                    this.Duration = this.playerMatchStatistics[0].duration;
                    this.radiantScore = this.playerMatchStatistics[0].radiantScore;
                    this.direScore = this.playerMatchStatistics[0].direScore;
                    if(this.playerMatchStatistics[0].radiantWin===true){
                        this.radiantWin = 'Radiant Win'
                    }else this.radiantWin = 'Dire Win'
                    this.generatePlayersTable()
                    this.flag='0';
                }
                if(chatMessage.sender==='4'){
                    this.playerMatchStatistics = JSON.parse(JSON.parse(payload.body).content);
                    this.gold = this.playerMatchStatistics.netWorse;
                    this.exp = this.playerMatchStatistics.exp;
                    this.playersGraphs = this.playerMatchStatistics.playersDataForGraphs;
                    this.generateGraphs();
                    this.flag='0';
                }
            }
        }
    }
})