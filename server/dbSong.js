// These are the equivalents of sql queries. They are using Knex as the query builder and select all or specific data, add data, update data, and delete data.
// THey use object destructuring which allows Knex to extract the information from the locals object.

// Lists all the songs. Basically a select all function.
function listAllSongs(req, res) {
    const { knex } = req.app.locals
    knex
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('song')
       
        .then(data => res.status(200).json(data))
        // To catch any errors that might arise
        .catch(error => res.status(500).json(error))
}

// A function that specifies a condition to retrieve a single song using its ID.
function listSingleSong(req, res) {
    // Destructuring 
    const { knex } = req.app.locals
    const { SongId } = req.params
    knex
        // DB Query
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('song')
        .where({
            SongId: `${SongId}`
        })
        
        // Response which is something known as promise based.
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Song with ID ${SongId} does not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Add a song to the DB
function postSong(req, res) {
    const { knex } = req.app.locals
    const payload = req.body
    // Parsing payload which is the parameters sent from the client as part of the POST request.
    const mandatoryColumns = ['Title' , 'Length', 'Author', 'Genre']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if all mandatory columns are filled before posting. If they arent it will return an error.
    if (mandatoryColumnsExists) {
        knex('song')
            .insert(payload)
            .then(response => {
                if (response) {
                    res.status(201).json('Song record created')
                }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// Updating a song by id
function updateSong(req, res) {
    const { knex } = req.app.locals
    const { SongId } = req.params
    const payload = req.body
    knex('song')
        .where('SongId', SongId)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                return res.status(404).json(`Song with id ${SongId} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Deleting a song by id
function deleteSong(req, res) {
    const { knex } = req.app.locals
    const { SongId } = req.params

    knex('song')
        .where('SongId', SongId)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Song with id ${SongId} is deleted.`)
            } else {
                res.status(404).json(`Song with id ${SongId} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

// Exports all the functions as a module object.
module.exports = {
    listAllSongs,
    listSingleSong,
    postSong,
    updateSong,
    deleteSong
}








// const patchById = async (req, res) =>{
    
//     const { knex } = req.app.locals;
//     const { id } = req.params;
//     let salesItemsId=-1;
//     let found =  true;
   
//     await knex // look for record in its exists -> continue
//         .select('*')
//         .from('PriceList')
//         .where({
//             PriceListId: id
//         })
//         .then(data => {
//             if (data.length === 0) { found=false; } // record not found  
//             else
//             {
//                 salesItemsId=data[0]['SalesItemId']; // if found gat salesitemsid for future queries
               
//             }
//         })
//         .catch(error => res.status(500).json(error))
        
//         if (found) // modify existing record
//         {
//             const payload = req.body.data // gathering json from request body
//             console.log(payload);
//             for (let key in payload) { //for each key in payload perform update to db
//                 let ele=payload[key];
//                 if (key.toLowerCase()=="SalesItemName".toLowerCase())
//                 {
//                     await knex('SalesItems').where({ salesItemID: salesItemsId }).update({ SalesItemName: ele })
//                 }
//                 if (key.toLowerCase()=="SalesItemUnits".toLowerCase())
//                 {
//                     await knex('SalesItems').where({ salesItemID: salesItemsId }).update({ SalesItemUnits: ele })
//                 }
//                 if (key.toLowerCase()=="price".toLowerCase())
//                 {
//                     await knex('PriceList').where({ PriceListId: id }).update({ Price: ele })
//                 }
//               }
//               return res.status(200).send("OK");
//         } else
//         {
//             return res.status(400).send(`Not found ${id}`);
//         }

//         //return res.status(400).send(`Item not found: ${id}`);
// }

// const deleteById = async (req, res) =>{
//     const { knex } = req.app.locals;
//     const { id } = req.params;
//     let salesItemsId=-1;

//     let found =  true;
    
//     await knex // look for record in its exists -> continue
//         .select('*')
//         .from('PriceList')
//         .where({
//             PriceListId: id
//         })
//         .then(data => {
//             if (data.length === 0) { found=false; } // record not found  
//             else
//             {
//                 salesItemsId=data[0]['SalesItemId']; // get id to delete corresponding record in salesitems table
//             }
//         })
//         .catch(error => res.status(500).json(error))
//     if (found) // modify existing record
//     {
//         await knex('SalesItems').where({ salesItemID: salesItemsId }).del();  
//         await knex('PriceList').where({ PriceListId: id }).del();
//         return res.status(200).send("OK");
//     } else
//     {
//         return res.status(400).send(`Not found ${id}`);
//     }
// }