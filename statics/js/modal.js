const model = {
    app:{
        // Dash board 
        currentpage:'loggin',
    },

    input:{
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
                feedbacks: [{teacher:null, name:"", comments:'Kjempe bra jobbet med emne 1, men ser at du må jobbe mer med MVC, kontakt meg ved behov for veiledning'}],
                
                //  Daglig logview
                log: [{time:'2020-12-12', nklog:"", teamlog:"", moodlog:"", codelog:""}]
            },
        ], //?  model.data.users[id].log[filterResult]

        courses: [
            {
                courseId: 100,
                namecourse:"chorei",
                // hva er kurset, hva kan du gjøre på kurset
            },
            {
                courseId: 200,
                namecourse:"nøkkelkompetanse",
                // hva er kurset, hva kan du gjøre på kurset
            },
            {
                courseId: 300,
                namecourse:"chorei",
                // hva er kurset, hva kan du gjøre på kurset
            }
            
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
        }
       
    }
