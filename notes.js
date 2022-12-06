const fs = require('fs')
const chalk = require('chalk')
const getNotes = function() {
    return 'yes i got this'
}

const addNotes = function(title, body) {
    const notes = loadNotes() 
    const duplicateNotes = notes.filter( function() {
        return notes.title===title
    })
    if(duplicateNotes.length===0){
        
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("new note added")
    }else{
        console.log("note title taken")
    }
    }


//Remove note
const removeNote=function(title) {
    const notes= loadNotes()
    const notesToKeep= notes.filter(function(note){
       return note.title !== title
    })
    if(notes.length>notesToKeep.length){
        const redMsg= chalk.green.bold.inverse("Note removed")
        console.log(redMsg)
        saveNotes(notesToKeep)
    }
    else{
        const greenMsg= chalk.red.bold.inverse("no note found")
        console.log(greenMsg)
       
    }
  
}

//Read Note
const readNote= function(title){
    const notes= loadNotes()
    const note= notes.find(function(note) {return note.title === title})
    if(note){
    console.log(note.title+":"+note.body)
    }
    else{
        console.log("note not found")
    }
    
}

//list the notes
const listNote= function() {
    const notes= loadNotes()
    notes.forEach((note) => {console.log(note.title +":"+note.body)})
}
const saveNotes = function(notes) {
    const dataJSON= JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function() {
    try {
       const dataBuffer= fs.readFileSync("notes.json")
       const dataJSON= dataBuffer.toString()
       return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNotes:addNotes,
    removeNote:removeNote,
    readNote:readNote,
    listNote:listNote,
    getNotes:getNotes
}