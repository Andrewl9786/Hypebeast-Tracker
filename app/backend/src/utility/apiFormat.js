import OpenAI from "openai";
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.GPT_KEY
})

export async function formatData(data,date) {
    const action = 'Please format the below input into an output of object'
    + `with a key (in string) of date and a value (in string [YYYY-MM-DD] format) of ${date}`
    + 'with a key (in string) of fashionRelease and and value of an array of objects,'
    + 'each object has the key (in string) of retailerBrand and values being the retailer brand'
    + ', has another key (in string) of collection and value (in string) of the collection/capsule name,'
    + 'and a key (in string) of releaseDate and the value (in string) of when it is available :\n'

    const prompt = action + data

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: "gpt-3.5-turbo"
    })
    return chatCompletion.choices[0].message.content
}
