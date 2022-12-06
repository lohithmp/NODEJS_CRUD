const chalk = require('chalk')
const { command, argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

const getNotes=require('./notes.js')

/*
    write the message and saved in text format or other format and add another message to the exists file.
    
fs.writeFileSync('note.txt','my skills are low than others')
fs.appendFileSync('note.txt',' so i should learn skills deeply')
const sum =getNotes(1 ,2)

const msg = getNotes()
console.log(msg)
*/
         
// console.log(validator.isLowercase("hi"))

/*
    Change the color of the message

    const greenmsg = chalk.green.bold.inverse('have a nice weekend')
    console.log(greenmsg)
    const command =process.argv[2]
    if (command ==='add') {
     console.log('added')
    } else if(command == 'rem') {
     console.log('removed')
    }
    console.log(process.argv)
*/

/*
change the version of node

    yargs.version('1.1.0')
    console.log(yargs.argv)
*/


//create command add
yargs.command({
    command:'add',
    describe:'adding to a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string' 
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
   
    handler:function(argv){
      notes.addNotes(argv.title,argv.body)
    }
})


//create the command remove
yargs.command({
    command:'remove',
    describe:'remove the note',
    builder:{
        title:{
            describe:'Norte title',
            demandOption:true,      
            type:'string'
        }
    },
    handler:function (argv) {
        notes.removeNote(argv.title)
    }
})

//create command read
yargs.command({
    command:'read',
    describe:'reading the note',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.readNote(argv.title)
    }
})


//create command list
yargs.command({
    command:'list',
    describe:'listing the note',
    handler() {
        notes.listNote()
    }
})


yargs.parse()