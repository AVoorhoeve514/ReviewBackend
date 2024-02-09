// import data from './reviews.json' assert { type: 'json' };
let data = [
  {
    "id": 1,
    "creator_id": 1,
    "name": "vies eten geef je niet eens aan je hond",
    "description": "jakkie bah",
    "score": "4/10"
  },
  
  {
    "id": 2,
    "creator_id": 2,
    "name": "hallo",
    "description": "lekker hoor",
    "score": "10/10"
  },
  
  {
    "id": 3,
    "creator_id": 3,
    "name": "bah",
    "description": "iew",
    "score": "2/10"
  }


]

export async function getAllReviews(req, res) {
  try {
    //set header before response
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}
