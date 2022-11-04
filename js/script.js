const { createApp } = Vue;

createApp({
    data(){3
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            thisChat: 0,
            userMessage: "",
            data: new Date(),
            userSearch: "",
            visible: false,
            thisMessage :0,
            listWords : [
                "Ciao come stai?",
                "Non ti preoccupare , ci vediamo nel pomeriggio ",
                "Hai da fare adesso ? ",
                "Ti posso chiamare ? ",
                "Mi dispiace tantissimo , ma pomeriggio ho da fare!",
                "Tutto bene grazie , va alla grande!"
            ],
            randomNumber : "",
            messageState : ""
        }
    },
    methods:{
        showThisChat (chatClicked){
            this.thisChat = chatClicked;
        },
        setMessage (){
            setTimeout(() =>{
                this.randomNumber =  Math.floor(Math.random() * (5 - 0) + 0);
                fraseRandom = this.listWords[this.randomNumber];
                this.contacts[this.thisChat].messages.push(
                    {
                        date: "Oggi ,"+this.data.getHours()+":"+this.data.getMinutes(),
                        message: fraseRandom,
                        status: 'received'
                    }
                )
                this.messageState = "Sta scrivendo..."
            } ,2000)
            setTimeout(() =>{
                this.messageState = "Online"
            },4000)
            setTimeout(() =>{
                this.messageState =  "Ultimo accesso "+this.contacts[this.thisChat].messages.slice(-1).pop().date;
            },8000)
            
        },
        addMessage: function(){
            if(this.userMessage){
                this.contacts[this.thisChat].messages.push(
                    {
                        date: "Oggi ,"+this.data.getHours()+":"+this.data.getMinutes(),
                        message: this.userMessage,
                        status: 'sent'
                    }
                )
                this.setMessage();
                this.userMessage="";   
            }
        },
        visibleOptions: function(messageClicked){
            if(this.thisMessage === messageClicked){
                this.visible = !this.visible;
            }else{
                this.visible = true;
            }
            this.thisMessage = messageClicked;
        },
        deleteMessage: function(){
          this.contacts[this.thisChat].messages.splice(this.thisMessage , 1);
        },
        alertInfo: function(){
            alert("Messaggio :  "+this.contacts[this.thisChat].messages[this.thisMessage].message +
            " /  Ora dell'invio : " + this.contacts[this.thisChat].messages[this.thisMessage].date)
            console.log(this.randomNumber)
            ;
        }
    },
    created(){
        this.messageState =  "Ultimo accesso "+this.contacts[this.thisChat].messages.slice(-1).pop().date;
    }
}).mount("#app")