import cosineSimilarity from "cosine-similarity";
import { knowledge } from "./knowledge/impetusData.js";

/* simple embedding */

function embed(text){

const words = text
.toLowerCase()
.replace(/[^\w\s]/g,"")
.split(" ")

const vector = {}

words.forEach(w=>{
vector[w] = (vector[w] || 0) + 1
})

return vector

}

/* precompute embeddings */

const documents = knowledge.map(doc => ({

...doc,

vector: embed(doc.text)

}))

export function search(query){

const queryVector = embed(query)

const scored = documents.map(doc => ({

doc,

score: cosineSimilarity(
Object.values(queryVector),
Object.values(doc.vector)
)

}))

return scored
.sort((a,b)=>b.score-a.score)
.slice(0,5)
.map(r=>r.doc)

}