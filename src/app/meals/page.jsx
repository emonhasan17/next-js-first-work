

const page = () => {

    const fetchMeals = async ()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json()
        // setMeals(data?.meals || [])
        return data?.meals
    }

   


    return (
        <div>
            
            <div className='grid grid-cols-4 gap-4'>
            
           {
            meals.map(m=>{
                return(
                    <div>
                        <p>{m.strMeal}</p>
                        <p>{m.strInstructions}</p>
                    </div>
                )
            })
           }
        </div>
        </div>
    );
};

export default page;