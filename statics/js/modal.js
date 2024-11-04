const model = {
    app:{
        // Dash board 
        currentpage:'login',
    },

    input:{
        search: {
            text: "",
        },
        
        registration: {

            //  Registration form
            name: "",
            username: "",
            password: null,
            email: "",
        },

        login: {
            //  Login form
            username: "",
            password: "",
        },
        // activities:['chorei', "logg", 'moodle']

        loggPage: {
            //  Daglig logg
            search: null,
            textbox: null,
            //filter: null
        },

        choreiPage: {
            mood: "",
            collabration: "",
            chorei:"",
            code:"",
            date: new Date().toISOString().split('T')[0],

            userlog: "",
        }

    },

    data:{
        users: [
            {
                id: 1,
                teacher: 1001,
                isTeacher: false,
                assigned: [],
                username: "kompis",
                password: 1234,
                courses: [100,200,300],
                feedbacks: [
                    {teacher:1001, name:"Jhon Doe", comments:'Kjempe bra jobbet med emne 1, men ser at du må jobbe mer med MVC, kontakt meg ved behov for veiledning'}],
                log: [ // StudentlogView word 
                    {
                        date:'2020-12-12',
                        title:"UKE 1 - Emne 1 - Mandag", 
                        nklog:"Chorei - Nøkkelkompetanse", 
                        teamlog:"Gruppen har vært fantastisk idag 100% oppmøte også videre", 
                        moodlog:"sove dårlig i natt kake guri over hode", 
                        codelog:"lærte å kode i dag med javascript",},
                    {
                        date:'2020-12-12',
                        title:"UKE 1 - Emne 1 - Mandag", 
                        nklog:"kakeguri - Nøkkelkompetanse", 
                        teamlog:"Gruppen har vært fantastisk idag 100% oppmøte også videre", 
                        moodlog:"sove dårlig i natt kake guri over hode", 
                        codelog:"lærte å kode i dag med javascript",}
                    ]
            },
        ], //?  model.data.users[id].log[filterResult]

        courses: [
            //  Kurs beskrivelse
            {
                courseId: 100,
                name:"chorei",
                img:"statics/img/chorei.png",
                alt:"Chorei",
                description:"NøkkelKompetanse, skriv log, se gamle chorei og relaterte oppgaver",
                assignments: 100,
            },
            {
                courseId: 110,
                name:"Moodle",
                img:"statics/img/moodle.png",
                alt:"Moodle",
                description:"Relaterte oppgaver"

            },
            {
                courseId: 120,
                name:"journal",
                img:"statics/img/student-log.png",
                alt:"Student-journal",
                description:'Se hva du har lært, og jobbet med tidligere'

            },
            /*{
                courseId: 130,
                name:"Emne 1",
                img:"statics/img/subject-one.png",
                alt:"Emne 1",
                description:'Se hva du har lært, og jobbet med tidligere'

            },
            {
                courseId: 140,
                name:"Emne 2",
                img:"statics/img/subject-two.png",
                alt:"Emne 2",
                description:'Se hva du har lært, og jobbet med tidligere'

            },
            {
                courseId: 150,
                name:"Emne 3",
                img:"statics/img/subject-three.png",
                alt:"Emne 3",
                description:'Se hva du har lært, og jobbet med tidligere'

            }*/
            
        ],
        archive: [
            {
                id: 1,
                courseId: 100,
                name: "Trygghet",
                video: "https://www.youtube.com/asdkjasdlkasjdklasd",
                date: "14.10.2024"
                // new Date() -> model.data.choreiarkiv[today].date
            },
            {
                id: 2,
                courseId: 100,
                name: "Locus of control",
                video: "https://www.youtube.com/asdkjasdlkasjdklasd",
                date: "15.10.2024"
                // new Date() -> model.data.choreiarkiv[today].date
            },
            {
                id: 3,
                courseId: 100,
                name: "Styrker",
                video: "https://www.youtube.com/asdkjasdlkasjdklasd",
                date: "16.10.2024"
                // new Date() -> model.data.choreiarkiv[today].date
            },
        ],
        
        addChoreiArchive(name, video) {
            const newChorei= {
                id: this.archive.length + 1,
                name: name || null,
                video: video || null,
                date: new Date().toISOString().split('T')[0] // Automatically adds today's date
            };
            this.archive.push(newChorei);
            }
        },
    session: {
        id: null,
    },
}
