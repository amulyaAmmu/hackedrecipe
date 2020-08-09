import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({items, isLoading, search}) => {

  const filteredRecipes = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <div className='cards'>
      {filteredRecipes.map(item => <RecipeCard key={item.id} item={item}></RecipeCard>)}
      {/* {items.map(item => <RecipeCard key={item.id} item={item} search={search}></RecipeCard>)} */}
    </div>
    </div>
  )
}

export default RecipeList
