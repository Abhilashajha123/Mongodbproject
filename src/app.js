const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/abhilashadb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection successful")
    }).catch((err) => {
        console.log(err);
    });
    

    // schema


  
    const playlistSchema = new mongoose.Schema({
       
        name: {
            type: String,
            required:true
        },
        ctype: String,
        videos: Number,
        author: String,
        active: Boolean,
        date: {
            type: Date,
            default:Date.now
        }
    
    
    })




// model
const Playlist = new mongoose.model("playlist", playlistSchema);


// insert document(row) into collection(table)
const createDocument = async () => {

    try {
        
        const reactPlaylist = new Playlist({
    
            name:"Angular js", 
            ctype: "Back End",
            videos: 60,
            author: "Abhilasha kumari",
            active:true,
        })


        const JavaPlaylist = new Playlist({
    
            name:"Java", 
            ctype: "Back End",
            videos: 50,
            author: "Abhilasha kumari",
            active:true,
        })

        const result = await Playlist.insertMany([reactPlaylist,JavaPlaylist]);
        console.log(result);
    }
    
    catch (err)
    {
        console.log(err);
    }
   

}

const readDocument = async() => {
    
    const result = await Playlist.find({$and:[{ctype:"Back End"},{name:"Java"}]});
    console.log(result);
}



// createDocument();

readDocument();
// Read the data from database/////