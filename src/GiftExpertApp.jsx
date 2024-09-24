import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>

      <h1>GiftExpertApp</h1>


      <AddCategory
        // setCategories={setCategories} 
        onNewCategory={(value) => onAddCategory(value)}

      />

      <button
        onClick={onAddCategory}
      >Agregar</button>

      {categories.map(category => (
        <GiftGrid
          key={category}
          category={category}
        />
      )
      )}

      {/* Gif ListItem */}
    </>
  )
}
