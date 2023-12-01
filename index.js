import express from 'express'
import axios from 'axios'

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.get("/", async (req, res) => {
    try{
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        res.render("index.ejs", {
            pic: result.data.drinks[0].strDrinkThumb,
            drink: result.data.drinks[0].strDrink,
            instr: result.data.drinks[0].strInstructions,
            composition: [
                {
                    ing: result.data.drinks[0].strIngredient1,
                    mes: result.data.drinks[0].strMeasure1
                },
                {
                    ing: result.data.drinks[0].strIngredient2,
                    mes: result.data.drinks[0].strMeasure2
                },
                {
                    ing: result.data.drinks[0].strIngredient3,
                    mes: result.data.drinks[0].strMeasure3
                },
                {
                    ing: result.data.drinks[0].strIngredient4,
                    mes: result.data.drinks[0].strMeasure4
                },
                {
                    ing: result.data.drinks[0].strIngredient5,
                    mes: result.data.drinks[0].strMeasure5
                },
                {
                    ing: result.data.drinks[0].strIngredient6,
                    mes: result.data.drinks[0].strMeasure6
                },
                {
                    ing: result.data.drinks[0].strIngredient7,
                    mes: result.data.drinks[0].strMeasure7
                },
                {
                    ing: result.data.drinks[0].strIngredient8,
                    mes: result.data.drinks[0].strMeasure8
                },
                {
                    ing: result.data.drinks[0].strIngredient9,
                    mes: result.data.drinks[0].strMeasure9
                },
                {
                    ing: result.data.drinks[0].strIngredient10,
                    mes: result.data.drinks[0].strMeasure10
                },
                {
                    ing: result.data.drinks[0].strIngredient11,
                    mes: result.data.drinks[0].strMeasure11
                },
                {
                    ing: result.data.drinks[0].strIngredient12,
                    mes: result.data.drinks[0].strMeasure12
                },
                {
                    ing: result.data.drinks[0].strIngredient13,
                    mes: result.data.drinks[0].strMeasure13
                },
                {
                    ing: result.data.drinks[0].strIngredient14,
                    mes: result.data.drinks[0].strMeasure14
                },
                {
                    ing: result.data.drinks[0].strIngredient15,
                    mes: result.data.drinks[0].strMeasure15
                }
            ]
        })
    } catch (err) {
        console.log(err.response.data)
        res.status(500)
    }
    
})

app.post("/", (req, res)=> {
    res.redirect("/")
})


app.listen(process.env.PORT || 3033, ()=>{
    console.log("running...")
})