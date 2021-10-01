import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const ExpertApp = () => {
    const [categories, setCategories] = useState(['Rick and Morty']);
    // const handleAdd= ()=>{
    //     // setCategories(categories.concat(['Tester Channel']));
    //     // setCategories([...categories,'nuevo Elemento']);
    //     setCategories(categoriesLambda =>[ ...categoriesLambda,'Nuevo Elemento Lamnda']);
    //     console.log(categories)
    // }


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => {
                        // return <li key={category}>{category}</li>
                        return <GifGrid
                         key={category} 
                         category={category}/>
                    })
                }
            </ol>
        </>
    );
};


