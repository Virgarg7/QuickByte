/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react-refresh/only-export-components
import React, { useEffect, useRef, useState } from "react";
import "./AI_Chatbot.css";

const RecipeCard = ({ onSubmit }) => {
    const [ingredients, setIngredients] = useState("");
    const [mealType, setMealType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [complexity, setComplexity] = useState("");

    const handleSubmit = () => {
        const recipeData = {
            ingredients,
            mealType,
            cuisine,
            cookingTime,
            complexity,
        };
        onSubmit(recipeData);
    };

    return (
        <div className="chatbot-container__recipe-card border rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="title font-bold text-xl mb-4 text-gray-800">Recipe Generator</div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="ingredients"
                    >
                        Ingredients
                    </label>
                    <input
                        className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ingredients"
                        type="text"
                        placeholder="Enter ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="mealType"
                    >
                        Meal Type
                    </label>
                    <select
                        className="select-field block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="mealType"
                        value={mealType}
                        onChange={(e) => setMealType(e.target.value)}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cuisine"
                    >
                        Cuisine Preference
                    </label>
                    <input
                        className="input-field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="cuisine"
                        type="text"
                        placeholder="e.g., Italian, Mexican"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cookingTime"
                    >
                        Cooking Time
                    </label>
                    <select
                        className="select-field block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="cookingTime"
                        value={cookingTime}
                        onChange={(e) => setCookingTime(e.target.value)}
                    >
                        <option value="Less than 30 minutes">Less than 30 minutes</option>
                        <option value="30-60 minutes">30-60 minutes</option>
                        <option value="More than 1 hour">More than 1 hour</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="complexity"
                    >
                        Complexity
                    </label>
                    <select
                        className="select-field block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="complexity"
                        value={complexity}
                        onChange={(e) => setComplexity(e.target.value)}
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="px-6 py-4">
                    <button
                        className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Generate Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

function Ai_chatbot() {
    const [recipeData, setRecipeData] = useState(null);
    const [recipeText, setRecipeText] = useState("");

    let eventSourceRef = useRef(null);

    useEffect(() => {
        closeEventStream(); // Close any existing connection
    }, []);

    useEffect(() => {
        if (recipeData) {
            closeEventStream(); // Close any existing connection
            initializeEventStream(); // Open a new connection
        }
    }, [recipeData]);

    // Function to initialize the event stream
    const initializeEventStream = () => {
        const recipeInputs = { ...recipeData };

        // Construct query parameters
        const queryParams = new URLSearchParams(recipeInputs).toString();
        // Open an SSE connection with these query parameters
        const url = `http://localhost:5173/recipeStream?${queryParams}`;
        eventSourceRef.current = new EventSource(url);

        eventSourceRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);

            if (data.action === "close") {
                closeEventStream();
            } else if (data.action === "chunk") {
                setRecipeText((prev) => prev + data.chunk);
            }
        };

        eventSourceRef.current.onerror = () => {
            eventSourceRef.current.close();
        };
    };

    // Function to close the event stream
    const closeEventStream = () => {
        if (eventSourceRef.current) {
            eventSourceRef.current.close();
            eventSourceRef.current = null;
        }
    };

    async function onSubmit(data) {
        // update state
        setRecipeText('');
        setRecipeData(data);
    }

    return (
        <div className="chatbot-container" id="ai-chatbot">
            <div className="flex flex-row my-4 gap-2 justify-center">
                <RecipeCard onSubmit={onSubmit} />
                <div className="recipe-display">
                    {recipeText}
                </div>
            </div>
        </div>
    );
}

export { Ai_chatbot };
