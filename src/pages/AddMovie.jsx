import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactStarsRating from "react-awesome-stars-rating";
import Select from "react-select";
import { AuthContext } from "../providers/AuthProvider";
import useTitle from "../hooks/UseTitle";

const AddMovie = () => {
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0);
    useTitle()
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
        setValue("genres", selectedOptions);
        trigger("genres");
    };

    const handleYearChange = (selectedOption) => {
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
        

        const movie = {
            ...data,
            genres: data.genres.map(g => g.value),
            year: data.year.value,
            rating: data.rating,
            duration: parseFloat(data.duration),
            email:user.email

        };

        const response = await fetch("https://portal-backend-seven.vercel.app/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
        });

        const result = await response.json();
       
        alert("Movie added successfully!");
    };
    return (
        <div>
            <div className="max-w-xl mx-auto p-5">
                <h2 className="text-2xl font-bold mb-4">Add Movie</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Movie Poster */}
                    <div>
                        <label className="block font-medium">Movie Poster URL</label>
                        <input type="url" className="w-full border p-2 rounded"
                            {...register("poster", {
                                required: "Poster URL is required",
                                pattern: { value: /^(http|https):\/\/[^ "\n]+$/, message: "Invalid URL" }
                            })} />
                        {errors.poster && <p className="text-red-500">{errors.poster.message}</p>}
                    </div>

                    {/* Movie Title */}
                    <div>
                        <label className="block font-medium">Movie Title</label>
                        <input type="text" className="w-full border p-2 rounded"
                            {...register("title", {
                                required: "Title is required",
                                minLength: { value: 2, message: "Title must be at least 2 characters" }
                            })} />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                    </div>

                    {/* Genre Selection (Multi-Select) */}
                    <div>
                        <label className="block font-medium">Genre</label>
                        <Select
                            isMulti
                            options={genresOptions}
                            onChange={handleGenresChange}
                            placeholder="Select genres"
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    borderColor: state.isFocused ? 'black' : "black",
                                    boxShadow: state.isFocused ? '0 0 0 1px black' : provided.boxShadow,
                                    '&:hover': {
                                        borderColor: state.isFocused ? 'black' : "black",
                                    },
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: state.isSelected ? 'black' : provided.backgroundColor,
                                    color: state.isSelected ? 'white' : provided.color,
                                    '&:hover': {
                                        backgroundColor: state.isSelected ? 'black' : '#f0f0f0',
                                    },
                                }),
                            }}
                        />
                        <input type="hidden" {...register("genres", {
                                required: "Genres is required",
                                
                            })}/>
                        {errors.genres && <p className="text-red-500">{errors.genres.message}</p>}
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block font-medium">Duration (minutes)</label>
                        <input type="number" className="w-full border p-2 rounded"
                            {...register("duration", {
                                required: "Duration is required",
                                min: { value: 60, message: "Duration must be at least 60 minutes" }
                            })} />
                        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
                    </div>

                    {/* Release Year */}
                    <div>
                        <label className="block font-medium">Release Year</label>
                        <Select
                            options={years}
                            onChange={handleYearChange}
                            placeholder="Select Year"
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    borderColor: state.isFocused ? 'black' : "black",
                                    boxShadow: state.isFocused ? '0 0 0 1px black' : provided.boxShadow,
                                    '&:hover': {
                                        borderColor: state.isFocused ? 'black' : "black",
                                    },
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                }),
                                option: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: state.isSelected ? 'black' : provided.backgroundColor,
                                    color: state.isSelected ? 'white' : provided.color,
                                    '&:hover': {
                                        backgroundColor: state.isSelected ? 'black' : '#f0f0f0',
                                    },
                                }),
                            }}
                        />
                        <input type="hidden" {...register("year", {
                                required: "Year is required",
                                
                            })}/>
                        {errors.year && <p className="text-red-500">{errors.year.message}</p>}
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block font-medium">Rating</label>
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
                        <input type="hidden" {...register("rating", {
                                required: "rating is required",
                                
                            })}/>
                        {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
                    </div>

                    {/* Summary */}
                    <div>
                        <label className="block font-medium">Summary</label>
                        <textarea className="w-full border p-2 rounded" rows={3}
                            {...register("summary", {
                                required: "Summary is required",
                                minLength: { value: 10, message: "Summary must be at least 10 characters" }
                            })}></textarea>
                        {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}
                    </div>

                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Add Movie</button>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;