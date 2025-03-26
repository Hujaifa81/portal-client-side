import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactStarsRating from "react-awesome-stars-rating";
import Select from "react-select";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation } from "react-router-dom";
import useTitle from "../hooks/UseTitle";
import toast from "react-hot-toast";

const UpdateMovie = () => {
    const {user}=useContext(AuthContext)
    const {state}=useLocation()
    useTitle()
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
    const [rating, setRating] = useState(state.rating || 0);
    const [genres, setGenres] = useState(state.genres?.map(g => ({ value: g, label: g })));
    const [year, setYear] = useState({ value: state.year, label: state.year });
    const genresOptions = [
        { value: "Comedy", label: "Comedy" },
        { value: "Drama", label: "Drama" },
        { value: "Horror", label: "Horror" },
        { value: "Action", label: "Action" },
        { value: "Sci-Fi", label: "Sci-Fi" },
        { value: "Thriller", label: "Thriller" }
    ];

    const years = [
        { value: 2024, label: "2024" },
        { value: 2023, label: "2023" },
        { value: 2022, label: "2022" },
        { value: 2021, label: "2021" },
        { value: 2020, label: "2020" },
        { value: 2019, label: "2019" }
    ];



    // Handle genres selection manually
    const handleGenresChange = (selectedOptions) => {
        setGenres(selectedOptions);
        setValue("genres", selectedOptions);
        trigger("genres");
    };

    const handleYearChange = (selectedOption) => {
        setYear(selectedOption);
        setValue("year", selectedOption);
        trigger("year");
    };

    // Handle rating selection manually
    const handleRating = (newRating) => {
        setRating(newRating);
        setValue("rating", newRating);
        trigger("rating");
    };
    
    const onSubmit = async (data) => {
        const updatedMovie = {
            ...data,
            genres: genres.map(g => g.value),
            year: year.value,
            rating: rating,
            duration: parseFloat(data.duration),
            email: user.email,
        };
        
        
    
        const response = await fetch(`https://portal-backend-seven.vercel.app/update/${state._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedMovie),  // Send the updated movie object
        });
    
        const result = await response.json();
        toast.success("Movie updated successfully!");
    };
    
    
    return (
        <div>
            <div className="max-w-xl mx-auto p-5">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Update Movie</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Movie Poster */}
                    <div>
                        <label className="block font-medium dark:text-white">Movie Poster URL</label>
                        <input type="url" className="w-full border p-2 rounded dark:bg-gray-800" defaultValue={state.poster}
                            {...register("poster", {
                                required: "Poster URL is required",
                                pattern: { value: /^(http|https):\/\/[^ "\n]+$/, message: "Invalid URL" }
                            })} />
                        {errors.poster && <p className="text-red-500">{errors.poster.message}</p>}
                    </div>

                    {/* Movie Title */}
                    <div>
                        <label className="block font-medium dark:text-white">Movie Title</label>
                        <input type="text" className="w-full border p-2 rounded dark:bg-gray-800" defaultValue={state.title}
                            {...register("title", {
                                required: "Title is required",
                                minLength: { value: 2, message: "Title must be at least 2 characters" }
                            })} />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    {/* Genre Selection (Multi-Select) */}
                    <div>
                        <label className="block font-medium dark:text-white">Genre</label>
                        <Select
                            defaultValue={genres.map(g => ({ value: g, label: g }))} // Set default value
                            isMulti
                            options={genresOptions}
                            onChange={handleGenresChange}
                            placeholder="Select genres"
                            value={genres}
                            styles={{
                                control: (provided, state) => {
                                    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
                                    return {
                                        ...provided,
                                        backgroundColor: isDark ? "#1e293b" : "#ffffff", // Dark: Slate-800, Light: White
                                        color: isDark ? "#f8fafc" : "#000000", // Dark: Text color, Light: Default
                                        borderColor: state.isFocused ? (isDark ? "#94a3b8" : "black") : "black",
                                        boxShadow: state.isFocused ? `0 0 0 1px ${isDark ? "#94a3b8" : "black"}` : provided.boxShadow,
                                        "&:hover": {
                                            borderColor: isDark ? "#94a3b8" : "black",
                                        },
                                    };
                                },
                                menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                }),
                                option: (provided, state) => {
                                    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
                                    return {
                                        ...provided,
                                        backgroundColor: state.isSelected
                                            ? (isDark ? "#0f172a" : "black") // Dark: Slate-900, Light: Black
                                            : (isDark ? "#1e293b" : provided.backgroundColor), // Dark: Slate-800
                                        color: state.isSelected ? "white" : (isDark ? "#f8fafc" : provided.color),
                                        "&:hover": {
                                            backgroundColor: state.isSelected
                                                ? (isDark ? "#0f172a" : "black")
                                                : (isDark ? "#334155" : "#f0f0f0"), // Dark: Slate-700, Light: Gray
                                        },
                                    };
                                },
                            }}
                        />
                        <input type="hidden" defaultValue={genres.map(g => ({ value: g }))}  {...register("genres", {
                                required: "Genres is required",
                                
                            })}/>
                        {errors.genres && <p className="text-red-500">{errors.genres.message}</p>}
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block font-medium dark:text-white">Duration (minutes)</label>
                        <input type="number" className="w-full border p-2 rounded dark:bg-gray-800" defaultValue={state.duration}
                            {...register("duration", {
                                required: "Duration is required",
                                min: { value: 60, message: "Duration must be at least 60 minutes" }
                            })} />
                        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
                    </div>

                    {/* Release Year */}
                    <div>
                        <label className="block font-medium dark:text-white">Release Year</label>
                        <Select
                            defaultValue={years.find(y => y.value === year.value)} // Set default value
                            options={years}
                            onChange={handleYearChange}
                            placeholder="Select Year"
                            value={year}
                            styles={{
                                control: (provided, state) => {
                                    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
                                    return {
                                        ...provided,
                                        backgroundColor: isDark ? "#1e293b" : "white", // Dark: Slate-800, Light: White
                                        color: isDark ? "#f8fafc" : "#000000", // Dark: Light-Text, Light: Black
                                        borderColor: state.isFocused ? (isDark ? "#94a3b8" : "black") : "black",
                                        boxShadow: state.isFocused ? `0 0 0 1px ${isDark ? "#94a3b8" : "black"}` : provided.boxShadow,
                                        "&:hover": {
                                            borderColor: isDark ? "#94a3b8" : "black",
                                        },
                                    };
                                },
                                menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                    backgroundColor: document.documentElement.getAttribute("data-theme") === "dark" ? "#1e293b" : "#ffffff",
                                }),
                                option: (provided, state) => {
                                    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
                                    return {
                                        ...provided,
                                        backgroundColor: state.isSelected
                                            ? (isDark ? "#0f172a" : "black") // Dark: Slate-900, Light: Black
                                            : (isDark ? "#1e293b" : provided.backgroundColor), // Dark: Slate-800
                                        color: state.isSelected ? "white" : (isDark ? "#f8fafc" : provided.color),
                                        "&:hover": {
                                            backgroundColor: state.isSelected
                                                ? (isDark ? "#0f172a" : "black")
                                                : (isDark ? "#334155" : "#f0f0f0"), // Dark: Slate-700, Light: Gray
                                        },
                                    };
                                },
                            }}
                        />
                        <input type="hidden" value={year.value} {...register("year", {
                                required: "Year is required",
                                
                            })}/>
                        {errors.year && <p className="text-red-500">{errors.year.message}</p>}
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block font-medium dark:text-white">Rating</label>
                        <div className="flex items-center">
                            <ReactStarsRating
                                
                                value={rating}
                                onChange={handleRating}
                                isHalf={true}
                                size={30}
                                className="flex justify-between items-center gap-1"
                                color="gold"
                                activeColor="gold"
                            />
                        </div>
                        <input type="hidden" defaultValue={rating} {...register("rating", {
                                required: "rating is required",
                                
                            })}/>
                        {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
                    </div>

                    {/* Summary */}
                    <div>
                        <label className="block font-medium dark:text-white">Summary</label>
                        <textarea className="w-full border p-2 rounded dark:bg-gray-800" rows={3} defaultValue={state.summary}
                            {...register("summary", {
                                required: "Summary is required",
                                minLength: { value: 10, message: "Summary must be at least 10 characters" }
                            })}></textarea>
                        {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}
                    </div>

                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Update Movie</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;